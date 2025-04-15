const menuToggle = $(".menu-toggle");
const nav = $(".nav");

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
