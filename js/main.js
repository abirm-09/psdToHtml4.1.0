const preloaderDesing = document.getElementById("preloaderBody");


function preloaderF() {
    preloaderDesing.style.display = "none"
};
let options = {
    strings: ['Full stack Web Developer.', 'Mern stack Developer.', 'WordPress theme developer.', 'Social worker.'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
};

let typed = new Typed('.typed', options);

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbarByMe').addClass("sticky");
        } else {
            $('.navbarByMe').removeClass("sticky");
        }
    });
});