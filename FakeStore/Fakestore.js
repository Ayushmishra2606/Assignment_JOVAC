let count = 1;
console.log(count)


async function bodyCREATION(api) {
    let resp = await fetch(api)
    let data = resp.json()

    data.then(wd => {
        wd.products.forEach(item => {
            const card = document.createElement('div')
            card.classList.add("card")

            const img = document.createElement('img')
            img.src = `${item.image}`;
            card.appendChild(img);

            const p = document.createElement('p')
            p.innerText = item.title;
            card.appendChild(p)

            const prDIV = document.createElement('div')
            prDIV.id = "price";
            let DiscP = item.price - (item.price * (item.discount / 100));

            let inDISP = !isNaN(DiscP) ? ` Now At &#8377;${DiscP.toFixed(0)} &nbsp;&nbsp;${item.discount}% Off` : `Price: &#8377;${item.price} No Discount`

            prDIV.innerHTML = `<span class="OldP">Price: &#8377; ${item.price}</span><span class="newP">${inDISP}</span>`

            card.appendChild(prDIV);



            const mainCont = document.getElementById('products')
            mainCont.appendChild(card)

        });
        console.log(wd.products)

    })
}


function StoreData() {
    let api = `https://fakestoreapi.in/api/products?page=${count}`
    bodyCREATION(api)
}
StoreData()

let loadMore = document.getElementById('loadMore')

loadMore.addEventListener('click', () => {
    count++;
    document.getElementById('products').innerHTML = " "
    StoreData()
})

let pre = document.getElementById('previous')


pre.addEventListener('click', () => {
    if (count < 2) {
        StoreData()
    } else {
        count--;
        document.getElementById('products').innerHTML = " "
        StoreData()
    }
})

let scCAT = document.getElementById('category')

scCAT.addEventListener('change', (e) => {
    let val = e.target.value.toLowerCase()
    document.getElementById('products').innerHTML = " "

    if (val == 'all') {
        StoreData()
    }
    else {

        let api = `https://fakestoreapi.in/api/products/category?type=${val}&sort=desc`

        bodyCREATION(api)
    }
})

let input = document.getElementById('inpFeild')
let scB = document.getElementById('search')

input.addEventListener('input', () => {
    if (input.value.trim().length >= 3) {
        scB.disabled = false;
    } else {
        scB.disabled = true;
    }
});


scB.addEventListener('click', () => {
    let val = input.value.toLowerCase().trim()

    let api = `https://fakestoreapi.in/api/products?page=1&limit=150`

     document.getElementById('products').innerHTML = "";

    let isfound = false;

    fetch(api)
        .then(data => data.json())
        .then(wd => {
            wd.products.forEach(item => {
                if (item.title.toLowerCase().includes(val)) {

                    isfound = true;
                    const card = document.createElement('div')
                    card.classList.add("card")

                    const img = document.createElement('img')
                    img.src = `${item.image}`;
                    card.appendChild(img);

                    const p = document.createElement('p')
                    p.innerText = item.title;
                    card.appendChild(p)

                    const prDIV = document.createElement('div')
                    prDIV.id = "price";
                    let DiscP = item.price - (item.price * (item.discount / 100));

                    let inDISP = !isNaN(DiscP) ? `Now At &#8377;${DiscP.toFixed(0)}&nbsp;&nbsp; ${item.discount}% Off` : ` Price: &#8377;${item.price} No Discount`

                    prDIV.innerHTML = `<span class="OldP">Price: &#8377; ${item.price}</span><span class="newP">${inDISP}</span>`

                    card.appendChild(prDIV);

                    const mainCont = document.getElementById('products')
                    mainCont.appendChild(card)
                } else {
                    return null;
                }

            });
            console.log(wd.products);
            return isfound;
        })
        .then(function (Status) {
            if (!Status) {
                document.getElementById('products').innerHTML = '<h1>No Item Found Of Such Name</h1><br><button id="retBUT">Return to first page</button>';

                let retBUTTON = document.getElementById('retBUT');
                retBUTTON.addEventListener('click', function () {
                    document.getElementById('products').innerHTML = " ";
                    StoreData();
                });
            }
        })
})

