$(document).ready(function () {
    // Fade out banner image after load
    const image = document.getElementById('bannerImage');
    setTimeout(() => {
        image.style.transition = "opacity 1s ease";
        image.style.opacity = 0;
        setTimeout(() => image.remove(), 1000);
    }, 500);


});


// reelsslider
$('.reelslider').owlCarousel({
    margin: 20,
    nav: true,
    dots: false,
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    navText: [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>'
    ],
    responsive: {
        0: { items: 2 },
        576: { items: 3 },
        768: { items: 4 },
        992: { items: 5 }
    }
});


// occasinoalSlider
$('.occasionSlider').owlCarousel({
    margin: 20,
    nav: true,
    dots: false,
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    navText: [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>'
    ],
    responsive: {
        0: { items: 2 },
        576: { items: 3 },
        768: { items: 4 },
        992: { items: 5 }
    }
});


// TestimonialSlider
$('.testimonialSlider').owlCarousel({
    margin: 20,
    nav: true,
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    navText: [
        '<i class="fa-solid fa-angle-left"></i>',
        '<i class="fa-solid fa-angle-right"></i>'
    ],
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
    }
});




