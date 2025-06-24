function removingfromli(node) {
    const li = document.querySelector(".list")
    const toREM = li.querySelector(`li:nth-child(${node})`)
    toREM.remove()
}
removingfromli(2)

function updateALL() {
    let features = document.querySelectorAll("#features p")
    features.forEach(e => {
        let inner = e.innerText;
        e.innerText = "prefix using updateALL , " + inner;
    })
}
updateALL()

async function leaderB() {
    let participant = ["Grace", "Arpit", "Lokendra", "Satyam"]
    let board = document.getElementById("leaderboard")

    for (let i = 0; i < participant.length; i++) {
        let ele = board.innerHTML + "<br>";
        board.innerHTML = `${ele} ${i + 1}. ${participant[i]}`
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

}
leaderB()

function addItems(item) {
    let list = document.querySelector(".addItems")
    list.innerHTML = list.innerHTML + `<li>${item}</li>`
}
addItems("item A")
addItems("item B")
addItems("item C")

async function Replacep() {
    let ele = document.getElementById("old-paragraph")
    return await new Promise((res, rej) => {
        setTimeout(() => {
            res(ele.innerText = "i changed it using dom")
        }, 5000);
    })
}
Replacep()