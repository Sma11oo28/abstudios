const header = $(".header");
let lastScrollTop = 0;
const delta = 10;
let isScrolling = false;

$(window).scroll(function () {
    if (!isScrolling) {
        requestAnimationFrame(() => {
            let scrollTop = $(this).scrollTop();

            // Always show the header at the very top
            if (scrollTop <= 0) {
                header.css("top", "0");
            } else if (Math.abs(scrollTop - lastScrollTop) > delta) {
                header.css("top", scrollTop > lastScrollTop ? "-100px" : "0");
                lastScrollTop = scrollTop;
            }

            isScrolling = false;
        });
        isScrolling = true;
    }
});
