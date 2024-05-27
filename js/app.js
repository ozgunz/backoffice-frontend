import '../scss/app.scss'
import './icons'

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const dropdownHeads = sidebar.querySelectorAll('.dropdown-head')
    const mobileNavBtn = document.getElementById('mobile-nav-btn');

    const mobileNavCloseBtn = document.getElementById('mobile-nav-close-btn');

    mobileNavBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
    })

    mobileNavCloseBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
    })

    dropdownHeads.forEach((a) => {

        a.addEventListener('click', (e) => {
            if(e.target.nodeName === 'A'){
                dropdownHeads.forEach((drops) => {
                    drops.parentElement.classList.remove('active');
                })
                const element = e.target.parentElement;
                element.classList.toggle('active');
            }

        })

    })

});