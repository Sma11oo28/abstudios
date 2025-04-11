$(document).ready(function () {
    const header = $(".header");
    const heroSection = $(".hero");
    const menuToggle = $(".menu-toggle");
    const nav = $(".nav");


    // Hide/show header on scroll
    let lastScrollTop = 0;
    let delta = 10;
    let isScrolling = false;

    $(window).scroll(function () {
        if (!isScrolling) {
            requestAnimationFrame(() => {
                let scrollTop = $(this).scrollTop();
                if (Math.abs(scrollTop - lastScrollTop) > delta) {
                    header.css("top", scrollTop > lastScrollTop ? "-100px" : "0");
                    lastScrollTop = scrollTop;
                }
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    // Hero section fade-out on scroll
    function handleHeroScroll() {
        let scrollPosition = $(window).scrollTop();
        let heroHeight = heroSection.outerHeight();
        let fadeOutStart = heroHeight * 0.25;
        let fadeOutEnd = heroHeight * 0.4;

        let opacity = 1 - (scrollPosition - fadeOutStart) / (fadeOutEnd - fadeOutStart);
        opacity = Math.max(0, Math.min(1, opacity));

        heroSection.css({
            opacity: opacity,
            transform: `translateY(${-(1 - opacity) * 50}px)`,
            pointerEvents: opacity === 0 ? "none" : "auto"
        });
    }

        // Toggle mobile menu (Slide in/out from the right)
        menuToggle.click(function (event) {
            event.stopPropagation();
            nav.toggleClass("open");
            $("body").toggleClass("no-scroll");
            $(this).find("i").toggleClass("fa-bars fa-times");
        });
    
        // Close menu when clicking outside (only for mobile)
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

    // Optimize scroll event handling
    let ticking = false;
    $(window).on("scroll", function () {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleHeroScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
});
