// Jquery.
$(document).ready(function (){
    // call nav class from html.
    $nav = $('.nav');
    // toggleCollapse as variable to call toggle-collapse from html.
    $toggleCollapse = $('.toggle-collapse');

    // toggle menu event for responsive.
    $toggleCollapse.click(function (){
        $nav.toggleClass('collapse');
    })
    // owl-carousel.
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout: 3000,
        dots: false, // (.) change to arrow.
        nav: true,
        // call from HTML div owl-navigation class.
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    });
})