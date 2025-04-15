const heroSection = $(".hero");

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
