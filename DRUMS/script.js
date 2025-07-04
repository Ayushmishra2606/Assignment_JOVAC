let drum = document.getElementById('bassDRUM')

drum.addEventListener('click',()=>{
    const sound = new Audio('bass-drum-808.wav')
    sound.play()
})
let snare = document.getElementById('snare')
snare.addEventListener('click',()=>{
    const sound = new Audio('snare-drum.mp3')
    sound.play()
})

let hiHat =document.getElementById('hiHat')
hiHat.addEventListener('click',()=>{
    const sound = new Audio('hi-hat.mp3')
    sound.play()
})

let tom = document.getElementById('tom')
tom.addEventListener('click',()=>{
    const sound = new Audio('tom.mp3')
    sound.play()
})
let dRoll = document.getElementById('drums')
dRoll.addEventListener('click',()=>{
    const sound = new Audio('drum-roll.mp3')
    sound.play()
})