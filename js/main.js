$(window).on("load", function () {



    /* Landing animations */

    if($("body").hasClass("landing")){

        var landingTween = new TimelineLite(),
            $title = $(".landing__title"),
            $boxContent = $(".landing__box-content"),
            $top = $(".landing__border-top"),
            $right = $(".landing__border-right"),
            $bottom = $(".landing__border-bottom"),
            $left = $(".landing__border-left");

        landingTween
            .add("border", 1.9)
            .fromTo($title, 0.7, {y: -100, opacity: 0, ease: Expo.easeOut}, {y: 0, opacity: 1, ease: Expo.easeOut}, 0.5)
            .fromTo($boxContent, 0.7, {opacity: 0}, {opacity: 1})
            .to($left, 0.3, {y:170}, "border")
            .to($bottom, 0.3, {x:300}, "border+=0.6")
            .to($right, 0.3, {y:-170}, "border")
            .to($top, 0.3, {x:-300}, "border+=0.6");

        $(".landing__box").hover(
            function () {
                var boxEnter = new TimelineLite(),
                    $topHover = $(this).find(".landing__border-top"),
                    $rightHover = $(this).find(".landing__border-right"),
                    $bottomHover = $(this).find(".landing__border-bottom"),
                    $leftHover = $(this).find(".landing__border-left"),
                    $lineHover = $(this).find("line");

                boxEnter
                    .to($leftHover, 0.3, {y:340}, 0)
                    .to($bottomHover, 0.3, {x:600}, 0)
                    .to($rightHover, 0.3, {y:-340}, 0)
                    .to($topHover, 0.3, {x:-600}, 0)
                    .to($lineHover, 0.3, {strokeWidth: 10}, 0);
        },
            function () {
                var boxLeave = new TimelineLite(),
                    $topHover = $(this).find(".landing__border-top"),
                    $rightHover = $(this).find(".landing__border-right"),
                    $bottomHover = $(this).find(".landing__border-bottom"),
                    $leftHover = $(this).find(".landing__border-left"),
                    $lineHover = $(this).find("line");

                boxLeave
                    .to($leftHover, 0.3, {y:170}, 0)
                    .to($bottomHover, 0.3, {x:300}, 0)
                    .to($rightHover, 0.3, {y:-170}, 0)
                    .to($topHover, 0.3, {x:-300}, 0)
                    .to($lineHover, 0.3, {strokeWidth: 4}, 0);
            }
        );
    }






    /* Individual site animations */

    if($("body").hasClass("individual")){


        /* Leading-section animations */

        var leadingTween = new TimelineLite(),
            $leadingTitle = $(".leading-section__title"),
            $leadingSubtitleTop = $(".leading-section__subtitle--top"),
            $leadingSubtitleBottom = $(".leading-section__subtitle--bottom"),
            $leadingLineTop = $(".leading-section__line--top"),
            $leadingLineBottom = $(".leading-section__line--bottom"),
            titleHeight = $(".leading-section__title").outerHeight(true);

        leadingTween
            .fromTo($leadingSubtitleTop, 0.7, {y: -100, opacity: 0, ease: Expo.easeOut},
                {y: 0, opacity: 1, ease: Expo.easeOut}, 0)
            .fromTo($leadingLineTop, 0.5, {scaleX: 0, opacity: 1, ease: Back.easeOut},
                {scaleX: 1, opacity: 1, ease: Back.easeOut})
            .fromTo($leadingLineBottom, 0.7, {y: - titleHeight, opacity: 0}, {y: 0, opacity: 1})
            .fromTo($leadingTitle, 0.5, {opacity: 0}, {opacity: 1}, "-=0.4")
            .fromTo($leadingSubtitleBottom, 0.4, {y: 50, opacity: 0}, {y: 0, opacity: 1});


    }

    $("body").removeClass("preload"); //Reveals the page

});
