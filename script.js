const minusBtn = document.querySelector(".minusBtn")
const plusBtn = document.querySelector(".plusBtn")
const count = document.querySelector(".count")
const changeBy = document.querySelector(".changeBy")
const resetBtn = document.querySelector(".resetBtn")

minusBtn.addEventListener("click" , () => {
    const countNum = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countNum - changeByValue
})

plusBtn.addEventListener("click" , () => {
    const countNum = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countNum + changeByValue
})

resetBtn.addEventListener("click" , () => {
    count.innerText = 0
})