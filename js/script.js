let mouse = document.querySelector('.mouse')
let triangle = document.querySelector('triangle')
let kvadrat = document.querySelector('kvadrat')
let d21 = document.querySelector('d21')
window.onmousemove = (event) => {
    let x = event.clientX
    let y = event.clientY
    mouse.style.top = `${y}px`
    mouse.style.left = `${x}px`
}

let item = document.querySelector('.item')
let item_one = document.querySelector('.one')
let item_two = document.querySelector('.two')

item.onmousemove = () => {
    mouse.classList.remove('d21')
    mouse.classList.remove('mouse')
    mouse.classList.remove('kvadrat')
    mouse.classList.add('triangle')
}

item_one.onmousemove = () => {
    mouse.classList.remove('mouse')
    mouse.classList.remove('triangle')
    mouse.classList.remove('kvadrat')
    mouse.classList.add('d21')
}

item_two.onmousemove = () => {
    mouse.classList.remove('d21')
    mouse.classList.remove('mouse')
    mouse.classList.remove('triangle')
    mouse.classList.add('kvadrat')
}