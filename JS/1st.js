// let minusEl = document.getElementById("minus-el") 
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)
let count=0
function increment() {
    count+=1
    countEl.textContent= count
    console.log(count)
}

// function decrement() {
//     let countminus = count-1
//     minusEl.innerText -= countminus
//     console.log(countminus)
// }
function save(){
    let countStr= count + " - "
    saveEl.textContent += countStr
    countEl.textContent= 0
     count = 0
    console.log(count)
}

