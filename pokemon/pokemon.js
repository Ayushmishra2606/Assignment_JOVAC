let offset = 0

async function apiDATA(offset) {

    let api = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`

    let res = await fetch(api)
    let myDATA = await res.json()
    let resl = myDATA.results

    resl.forEach(pokemon => {
        cardWork(pokemon.url)
    })

}
apiDATA(offset)

async function cardWork(api) {
    let res = await fetch(api)
    let myDATA = await res.json()

    const myCONT = document.getElementById('cards')

    let src = myDATA.sprites.other.dream_world.front_default

    let name = myDATA.name.toUpperCase()


    let type = myDATA.types.map((el) => {
        return el.type.name
    })

    let stats = myDATA.stats.map((el) => {
        return { ...el, ["Stat"]: el.stat.name }
    })
    myCONT.innerHTML = myCONT.innerHTML + `<div class="card"><div class="picDIV" id="picDIV"><img src ="${src}"><p>${name}</p></div><div class="detail" id="detail"><nav> Height:${myDATA.height}&nbsp;&nbsp;Weight:${myDATA.weight}</nav><nav class="type">Type: ${type.join(' , ')}</nav><nav>Base Experience: ${myDATA.base_experience}</nav>
        <nav>STATS:<br>${stats.map((el) => " " + el.Stat + " - " + el.base_stat + " ")}</nav></div></div>`;
}

let bLOAD = document.getElementById('loadmore')

let preB = document.getElementById('previous')

bLOAD.addEventListener('click', () => {
    offset = offset + 20;
    document.getElementById('cards').innerHTML = ""
    apiDATA(offset);
    preB.disabled = false;
})

preB.addEventListener('click', () => {
    bLOAD.disabled = false;
    offset -= 20;
    document.getElementById('cards').innerHTML = ""
    apiDATA(offset)
    if (offset === 0) {
        preB.disabled = true;
    }
})

let input = document.getElementById('search')

async function forSEARCH(name) {

    let api = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=100000`
    let res = await fetch(api)
    let myDATA = await res.json()
    let resl = myDATA.results


    let isfound = false;

    for (const ele of resl) {
        if (ele.name == name) {
            cardWork(ele.url)
            isfound = true;
        }
    }


    if (!isfound) {
        document.getElementById('cards').innerHTML = `<p>NOT FOUND !!!<p><button id="return">RETURN TO FIRST PAGE</button>`
    }

    let retun = document.getElementById('return')

    retun.addEventListener('click', () => {
        document.getElementById('cards').innerHTML = ""
        offset = 0
        apiDATA(offset)
    })

}

input.addEventListener('input', () => {
    document.getElementById('cards').innerHTML = ""

    let name = input.value.trim().toLowerCase()

    if (input.value.trim().length === 0) {
        document.getElementById('cards').innerHTML = "";
        offset = 0;
        apiDATA(offset);
        bLOAD.disabled = false
        offset = 20;
        preB.disabled = true
    } else {
        forSEARCH(name)
        bLOAD.disabled = true
        offset = 20;
        preB.disabled = false
    }


})

async function select(val) {
    let api = `https://pokeapi.co/api/v2/type/${val}`

    let res = await fetch(api)
    let myDATA = await res.json()
    let resl = myDATA.pokemon

    for (const ele of resl) {
        cardWork(ele.pokemon.url);

    }
}

let scCAT = document.getElementById('type')

scCAT.addEventListener('change', (e) => {
    let val = e.target.value
    document.getElementById('cards').innerHTML = " "

    if (val == 'all') {
        offset = 0
        apiDATA(offset)
    }
    else {
        select(val)
        bLOAD.disabled = true
        offset = offset + 20;
        preB.disabled = false
    }

})



