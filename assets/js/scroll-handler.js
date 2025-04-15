let ticking = false;

$(window).on("scroll", function () {
    if (!ticking) {
        requestAnimationFrame(() => {
            handleHeroScroll(); // From hero-fade.js
            ticking = false;
        });
        ticking = true;
    }
});
