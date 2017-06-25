var button = document.querySelector('#Button');
var menu = document.querySelector('#Menu');

button.addEventListener("touchstart", toggleMenu);

function toggleMenu(){
    menu.classList.toggle('active');
    button.classList.toggle('icon-close');   
}