

const mobileMenu = document.querySelector('.mobile-menu')
const menuLinks = document.querySelectorAll('.mobile-menu a')
const menuBtn = document.querySelector('.menu-btn')
const productsContainer = document.querySelector('.more-products')
const yearContainer = document.getElementById('year')

const currentYear = new Date().getFullYear()

yearContainer.textContent = currentYear

const productsBtn = document.querySelector('.products > button')

function toggleMenu(e) {
    e.stopPropagation();
    const isHidden = mobileMenu.classList.contains('hidden')
    if (isHidden) {
        mobileMenu.classList.remove('hidden')
        menuBtn.innerHTML = `<img src="./icons/close.svg">`

    } else {
        mobileMenu.classList.add('hidden')
        menuBtn.innerHTML = `<img src="./icons/menu.svg">`
    }
}

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        mobileMenu.classList.add('hidden')
    })
})

window.addEventListener('click', (e) => {
    if (!e.target.matches('div.mobile-menu, header')) {
        mobileMenu.classList.add('hidden')
        menuBtn.innerHTML = `<img src="./icons/menu.svg">`
    }
})

function toggleProducts() {
    const isHidden = productsContainer.classList.contains('hide-products')
    if (isHidden) {
        productsContainer.classList.remove('hide-products')
        productsBtn.textContent = `Show less`
    } else {
        productsContainer.classList.add('hide-products')
        productsBtn.textContent = `Show more`
    }
}