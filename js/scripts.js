$(document).ready(function () {
    $(window).scroll(function () {
        // console.log($(this).scrollTop())
        if ($(this).scrollTop() < 100) {
            $(".floating-button-top").removeClass("d-none");
        } else {
            $(".floating-button-top").addClass("d-none");
        }

        if ($(window).scrollTop() + $(window).height() > $(document).height() - 1500) {
            $(".floating-button-bottom").removeClass("d-none");
        } else {
            $(".floating-button-bottom").addClass("d-none");
        }
    });

    $(".navbar-toggler, .nav-link").click(function () {
        $("#bars-icon, #times-icon").toggleClass("d-none");
    });

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"]), .floating-button').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    750,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    $(".floating-button-bottom").click(function () {
        $(window).scrollTop(0);
    });
});