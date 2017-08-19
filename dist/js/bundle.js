window.addEventListener('load', function () {
    var button = document.querySelector('#Button'),
        menu = document.querySelector('#Menu'),
        small = window.matchMedia('(max-width: 500px)'),
        medium = window.matchMedia('(max-width: 800px)'),
        medium = window.matchMedia('(max-width: 1024px)');

    function deviceWidthChange(size){
        if(size.matches){
            console.log("Mostrar");
            button.addEventListener("touchstart", toggleMenu);
        } else if(!size.matches) {
            console.log("Ocultar");
            button.removeEventListener("touchstart", toggleMenu);
        }
    }

    function toggleMenu() {
        menu.classList.toggle('active');
        button.classList.toggle('icon-close');
    }

    small.addListener(deviceWidthChange(small));

    var lazy = new Blazy({
        selector: 'img'
    });

}); 