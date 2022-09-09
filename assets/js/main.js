const menu = document.querySelector(".nav_menu")
const openMenu = document.querySelector(".menu_open")
const closeMenu = document.querySelector(".menu_close")

openMenu.addEventListener('click', ()=>{
    menu.classList.add('menu_collapse')
    closeMenu.classList.add('close')
})
closeMenu.addEventListener('click', ()=>{
    menu.classList.remove('menu_collapse')
    closeMenu.classList.remove('close')
})