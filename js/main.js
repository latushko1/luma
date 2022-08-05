const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('.modal');

menuBtn.addEventListener('click', () =>{
    menu.classList.toggle('active')
})