const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const menu = document.getElementById('mobileMenu');
let menuIsOpen = false;

function toggleMenu() {
    if(menuIsOpen) {
        btnClose.classList.add('d-none');
        btnOpen.classList.remove('d-none');
        menu.classList.add('d-none')
    } else {
        btnOpen.classList.add('d-none');
        btnClose.classList.remove('d-none'); 
        menu.classList.remove('d-none')
    }
    menuIsOpen = !menuIsOpen
}

btnOpen.addEventListener('click', () => {
    toggleMenu()
})

btnClose.addEventListener('click', () => {
    toggleMenu()
})