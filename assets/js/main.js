$(document).ready(function () {
    var header = $(".header");
    var heroSection = $(".hero");
    var menuToggle = $(".menu-toggle");
    var nav = $(".nav");

    var lastScrollTop = 0;
    var delta = 10;
    var isScrolling = false;

    $(window).scroll(function () {
        if (!isScrolling) {
            requestAnimationFrame(function () {
                var scrollTop = $(window).scrollTop();
                if (Math.abs(scrollTop - lastScrollTop) > delta) {
                    header.css("top", scrollTop > lastScrollTop ? "-100px" : "0");
                    lastScrollTop = scrollTop;
                }
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    function handleHeroScroll() {
        var scrollPosition = $(window).scrollTop();
        var heroHeight = heroSection.outerHeight();
        var fadeOutStart = heroHeight * 0.25;
        var fadeOutEnd = heroHeight * 0.4;

        var opacity = 1 - (scrollPosition - fadeOutStart) / (fadeOutEnd - fadeOutStart);
        opacity = Math.max(0, Math.min(1, opacity));

        heroSection.css({
            opacity: opacity,
            transform: "translateY(" + (-(1 - opacity) * 50) + "px)",
            pointerEvents: opacity === 0 ? "none" : "auto"
        });
    }

    menuToggle.click(function (event) {
        event.stopPropagation();
        nav.toggleClass("open");
        $("body").toggleClass("no-scroll");
        $(this).find("i").toggleClass("fa-bars fa-times");
    });

    $(document).click(function (event) {
        if ($(window).width() <= 850) {
            if (!$(event.target).closest(".menu-toggle, .nav").length) {
                if (nav.hasClass("open")) {
                    nav.removeClass("open");
                    $("body").removeClass("no-scroll");
                    menuToggle.find("i").removeClass("fa-times").addClass("fa-bars");
                }
            }
        }
    });

    var ticking = false;
    $(window).on("scroll", function () {
        if (!ticking) {
            requestAnimationFrame(function () {
                handleHeroScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
});
