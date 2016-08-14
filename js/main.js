$(window).on("load", function () {


    /* WOW library init*/
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated' // animation css class (default is animated)
        }
    );
    
        wow.init();

    $("body").removeClass("preload");
});
