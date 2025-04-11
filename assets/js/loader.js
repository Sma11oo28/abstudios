$(window).on("load", function () {
    $(".preloader").addClass("complete");

    // Remove from DOM after transition
    setTimeout(() => {
        $(".preloader").remove();
    }, 1000);
});
