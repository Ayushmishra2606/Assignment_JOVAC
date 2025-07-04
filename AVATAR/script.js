let myCrb = document.getElementById("crB")
let tarTodel = null;

function removeAV() {
    if (tarTodel) {
        tarTodel.remove();
        tarTodel = null;
    }

    return null
}

function randCol() {
    let r = Math.ceil(0 + Math.random() * 255)
    let g = Math.ceil(0 + Math.random() * 255)
    let b = Math.ceil(0 + Math.random() * 255)

    return `rgb(${r}, ${g}, ${b})`

}

myCrb.addEventListener("click", function (e) {
    let name_box = document.getElementById("nameBox")
    name_box.style.display = "flex";
})

function avatarNAME() {
    const inp = document.getElementById('name')
    const val = inp.value;
    const req = val.toUpperCase();
    const trm = req.trim()
    const myval = trm === ""?"UD":trm[0] ;
    return myval;
}

let okBut = document.getElementById("done")

okBut.addEventListener("click", function (e) {
    let name_box = document.getElementById("nameBox")
    name_box.style.display = "none";

    const cir = document.createElement('div')
    cir.classList.add('cir');
    cir.style.backgroundColor = randCol();
    cir.style.color = randCol()
    
    const img = document.createElement('img');
    img.src = 'cross.png';

    img.addEventListener("click", () => {
        tarTodel=cir;
        let c_box = document.getElementById("crossbox")
        c_box.style.display = "flex";
    })

    cir.appendChild(img);

    cir.append(avatarNAME())

    const app = document.getElementById('avatar');
    app.appendChild(cir);

})
let cancBut = document.getElementById('cancel')

cancBut.addEventListener("click", () => {
    let name_box = document.getElementById("nameBox")
    name_box.style.display = "none";
})

let DelAv = document.getElementById('yes')
DelAv.addEventListener("click", () => {
    let c_box = document.getElementById("crossbox")
    c_box.style.display = "none";
    removeAV()
})
let noDEL = document.getElementById("no")
noDEL.addEventListener("click", () => {
    let c_box = document.getElementById("crossbox")
    c_box.style.display = "none";
})