$(window).on("load", function () {
    $("body").removeClass("preload");


    /* WOW library init*/
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated' // animation css class (default is animated)
        }
    );

    wow.init();

    $(".landing__border").find("line").addClass("animated");
});
