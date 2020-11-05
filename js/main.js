$(window).on('load', function() {

    $(".loading-overlay .loading-overlay-box").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})


// Scroll To Top Button 
var scrollButton = $(".scroll-top");
$(window).scroll(function() {
    ($(this).scrollTop() >= 500) ? scrollButton.show(600): scrollButton.hide(600);
});
// Click Button to scroll top 
scrollButton.click(function() {
    $("html,body").animate({ scrollTop: 0 }, 600);
});



var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();



$(document).ready(function() {

    //Main Slider Carousel
    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        rtl: true,
        margin: 20,
        navText: ["<span class='fas fa-chevron-right'></span>", "<span class='fas fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            }
        }
    });

    $('.cats-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 30,
        // stagePadding: 10,
        rtl: true,
        navText: ["<span class='fa fa-chevron-right'></span>", "<span class='fa fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                dots: true,
                nav: false,
                margin: 10,
                loop: true
            },
            500: {
                items: 2,
                dots: true,
                nav: false,
                margin: 10,
                loop: true
            },
            720: {
                items: 3,
                dots: true,
                nav: false,
                margin: 10,
                loop: true
            },
            992: {
                items: 4,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 5,
                nav: true,
                dots: false,
                loop: true
            },
            1510: {
                items: 6,
                nav: true,
                dots: false,
                loop: true
            }
        }
    });

    $('.tabs-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 30,
        rtl: true,
        navText: ["<span class='fa fa-chevron-right'></span>", "<span class='fa fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                dots: true,
                nav: false,
                margin: 10,
                loop: true
            },
            500: {
                items: 2,
                dots: true,
                nav: false,
                margin: 10,
                loop: true
            },
            720: {
                items: 3,
                dots: true,
                nav: false,
                margin: 10,
                loop: true
            },
            992: {
                items: 4,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 4,
                nav: true,
                dots: false,
                loop: true
            },
            1510: {
                items: 4,
                nav: true,
                dots: false,
                loop: true
            }
        }
    });
    $(".mo-tabs a").on("shown.bs.tab", function(e) {
        let $owl = $(".sub-slider .owl-carousel");
        $owl.trigger('refresh.owl.carousel');
    });

    $('.abayas-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 30,
        stagePadding: 10,
        rtl: true,
        navText: ["<span class='fa fa-chevron-right'></span>", "<span class='fa fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            500: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            720: {
                items: 3,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 4,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 5,
                nav: true,
                dots: false,
                loop: true
            },
            1510: {
                items: 6,
                nav: true,
                dots: false,
                loop: true
            }
        }
    });


    // Footer Section Start --------------------------------------------------------------------------------------------------------------------
    // To Toggle Between Footer Slide Menus
    if ($(window).width() <= 991) {
        $('.collapse[data-parent="#parent"]').on('show.bs.collapse', function() {
            $('.collapse[data-parent="#parent"]').not(this).collapse('hide');
        });
    } else {
        $(".slide-list").addClass("in")
    }
    //This is To Change between footer collapse link ----------------------------------------------------------------
    // First Collapse ---------------------------
    $(".first .footer-heading .footer-link").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("collapse")) {
            $(".first .footer-heading .footer-link").addClass("rotate")
            $(".second .footer-heading .footer-link").removeClass("rotate")
            $(".third .footer-heading .footer-link").removeClass("rotate")
            $(".last .footer-heading .footer-link").removeClass("rotate")
        }
    });
    $(".first .footer-heading .footer-link").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("in")) {
            $(".first .footer-heading .footer-link").removeClass("rotate")
        }
    });

    // Second Collapse ---------------------------
    $(".second .footer-heading .footer-link").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("collapse")) {
            $(".second .footer-heading .footer-link").addClass("rotate")
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".third .footer-heading .footer-link").removeClass("rotate")
            $(".last .footer-heading .footer-link").removeClass("rotate")
        }
    });
    $(".second .footer-heading .footer-link").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("in")) {
            $(".second .footer-heading .footer-link").removeClass("rotate")
        }
    });

    // Third Collapse ---------------------------
    $(".third .footer-heading .footer-link").click(function() {
        var x = $(".third .slide-list")
        if (x.hasClass("collapse")) {
            $(".third .footer-heading .footer-link").addClass("rotate")
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".second .footer-heading .footer-link").removeClass("rotate")
            $(".last .footer-heading .footer-link").removeClass("rotate")
        }
    });
    $(".third .footer-heading .footer-link").click(function() {
        var x = $(".third .slide-list")
        if (x.hasClass("in")) {
            $(".third .footer-heading .footer-link").removeClass("rotate")
        }
    });

    // Last Collapse ---------------------------
    $(".last .footer-heading .footer-link").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("collapse")) {
            $(".last .footer-heading .footer-link").addClass("rotate")
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".second .footer-heading .footer-link").removeClass("rotate")
            $(".third .footer-heading .footer-link").removeClass("rotate")
        }
    });
    $(".last .footer-heading .footer-link").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("in")) {
            $(".last .footer-heading .footer-link").removeClass("rotate")
        }
    });


    // This is To Open Quick View Box
    $(".sub-item .watch").click(function() {
        $("body").addClass("overflow");
        $(".overlay-box").slideDown(300);
    });

    $(".sub-item .watch").click(function() {
        $(".quick-view").fadeIn(300);
    });

    $(".close-quick-menu,.overlay-box").click(function() {
        $("body").removeClass("overflow");
        $(".overlay-box").slideUp(500);
    });

    $(".close-quick-menu,.overlay-box").click(function() {
        $(".quick-view").fadeOut(300);
    });


    // This is To Open search Box
    $(".search .search-icon").click(function() {
        $("body").addClass("overflow");
        $(".overlay-box2").slideDown(300);
    });

    $(".search .search-icon").click(function() {
        $(".close-search-btn").fadeIn(500)
        $(".rools .auto-search").fadeIn(300);
    });

    $(".close-search-btn,.overlay-box2").click(function() {
        $("body").removeClass("overflow");
        $(".overlay-box2").slideUp(500);
    });

    $(".close-search-btn,.overlay-box2").click(function() {
        $(".close-search-btn").fadeOut(300)
        $(".rools .auto-search").fadeOut(300);
    });

    //This is to Open Side Menu in Small Screens
    $(".menu .menu-icon").click(function() {
        $("body").addClass("overflow")
        $(".mo-nav").addClass("menu-open");
        $(".overlay-box3").fadeIn(500);
    });

    $(".close,.overlay-box3").click(function() {
        $("body").removeClass("overflow")
        $(".mo-nav").removeClass("menu-open");
        $(".overlay-box3").fadeOut(500);
    });

    $(".mo-nav .mega-box").click(function() {
        $(".mega-box .nav-link").toggleClass("rotate");
        $(".mo-nav .mega-menu").css("transition", "none");
        $(".mo-nav .mega-menu").slideToggle(300);
    });
});