const hamBurgerButton = document.getElementById('hamburger')
const navlist = document.getElementById('nav-list')

function togglebutton(){
    navlist.classList.toggle('show')
    
}

hamBurgerButton.addEventListener('click', togglebutton)