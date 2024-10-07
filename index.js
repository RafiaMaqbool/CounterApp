let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    reset()
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function reset() {
    count = 0
    countEl.textContent = 0
}

function clearEntries(){
    saveEl.textContent = "Previous entries: "
}