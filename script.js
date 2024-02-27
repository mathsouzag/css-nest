let menu = document.querySelector('#icone-menu');
let barra = document.querySelector('.barra')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    barra.classList.toggle('aberto');
}