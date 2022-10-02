const hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f']

function gen() {
    let colour = ''
    for (let i = 0; i < 6; i++) {
        add = hex[Math.floor(Math.random() * hex.length)]

        colour = colour + add
    }
    document.getElementById('main').style.backgroundColor = `#${colour}`
    console.log(colour)
    document.getElementById('body').style.backgroundColor = `#${colour.split('').reverse().join('')}`
    document.getElementById('state').style.backgroundColor = `#${colour.split('').reverse().join('')}`
    document.getElementById('colour').innerText = `#${colour}`
} 