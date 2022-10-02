const billInput = document.getElementById('billInput')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const people = document.getElementById('people')
const tipInput = document.getElementById('tipInput')
const total = document.getElementById('total')
const splitTotal = document.getElementById('splitTotal')
let splitAmount = 1;

billInput.addEventListener('input', function() {
    main()
})

tipInput.addEventListener('input', function() {
    main()
})

minus.addEventListener('click', function() {

    if (splitAmount <= 1) {
        return
    } else {
        splitAmount -= 1
        people.innerText = splitAmount
    }
    main()
})

plus.addEventListener('click', function() {
    splitAmount += 1
    people.innerText = splitAmount
    main()
})


function main() {
    let tip = tipInput.value / 100
    let tipAmount = Number(billInput.value) * Number(tip)
    total.innerHTML = `$${Number(tipAmount) + Number(billInput.value)}`
    
    let final = Number(tipAmount) + Number(billInput.value)
    let splitAmountTotal = final / Number(splitAmount)
    splitTotal.innerHTML = `$${splitAmountTotal.toFixed(2)}`

    if (splitAmountTotal > 100) {
        splitTotal.style.fontSize = '40px'
        splitTotal.style.color = 'green'
    }

    if (splitAmountTotal > 1000) {
        splitTotal.style.fontSize = '35px'
        splitTotal.style.color = 'red'
    }

    if (final > 100) {
        total.style.fontSize = '40px'
        total.style.color = 'green'
    }

    if (final> 1000) {
        total.style.fontSize = '35px'
        total.style.color = 'red'
    }

}