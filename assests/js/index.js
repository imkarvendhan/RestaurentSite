let toggle = document.querySelector('.toggle');
let menuList = document.querySelector('.menu-list');

toggle.addEventListener('click', () => {
    menuList.classList.toggle('menu-list-toggle')
    console.log(menuList.classList.length);
    if (menuList.classList.length == 2) {
        toggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    }
    if (menuList.classList.length == 1) {
        toggle.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }  

});
