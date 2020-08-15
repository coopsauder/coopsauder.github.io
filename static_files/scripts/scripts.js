// javascript for disappearing and reappearing navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
}

$(document).ready(function() {
    $('.email').on('click', function() {
        $('.email').popover('toggle')
    })
    $('.team-email').on('click', function() {
        $('.team-email').popover('toggle')
    })

    ScrollReveal().reveal('.home', { duration: 3000 })
    ScrollReveal().reveal('.about-scene', { duration: 3000 })
    ScrollReveal().reveal('.about', { duration: 5000 })
    ScrollReveal().reveal('.initiatives', { duration: 3000})
    ScrollReveal().reveal('.events', { duration: 3000, interval: 250 })
    ScrollReveal().reveal('.team', { duration: 2000, interval: 150 })
    ScrollReveal().reveal('.contact', { duration: 3000 })
})
    


