$(window).on("load", function () {


    var scrollController = new ScrollMagic.Controller();




    /* Landing animations */

    if($("body").hasClass("landing")){

        var landingTween = new TimelineLite(),
            $box = $(".landing__box"),
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
            .to($top, 0.3, {x:-300}, "border+=0.6")
            .to($box, 0, {className: "+=landing__box--hoverable"});

        $(".landing__box").hover(
            function () {

                if(!$(this).hasClass("landing__box--hoverable")){
                    return false;
                }

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
                
                if(!$(this).hasClass("landing__box--hoverable")){
                    return false;
                }

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
        
        
        /* Navigation */

        var $mainNav = $(".main-navigation"),
            $navOverlay = $(".main-navigation__overlay"),
             navWidth = $mainNav.width();

        var $navTop = $(".main-navigation__switch-line--top"),
            $navMiddle = $(".main-navigation__switch-line--middle"),
            $navBottom = $(".main-navigation__switch-line--bottom"),
            $navSwitch = $(".main-navigation__switch");



        var navScene = new ScrollMagic.Scene({
            triggerElement: "#about",
            offset: -40
        })
            .setClassToggle(".main-navigation__switch", "main-navigation__switch--dark")
            .triggerHook(0)
            .addTo(scrollController);


        
        /* Switch hover */

            $(".main-navigation__switch").hover(
                function () {

                    if(!$mainNav.hasClass("main-navigation--open")){
                        TweenLite.to([$navTop, $navBottom], 0.3, {x: 0});
                    }

                },
                function () {

                    if(!$mainNav.hasClass("main-navigation--open")){
                        TweenLite.to($navTop, 0.3, {x: -10});
                        TweenLite.to($navBottom, 0.3, {x: -5});
                    }

                });
        



        /* Hides navigation */

        function hideNav() {
            TweenLite.to($mainNav, 0.5, {x: navWidth});
            $mainNav.removeClass("main-navigation--open");

            var hideOverlay = new TimelineLite(),
                switchMorph = new TimelineLite(),
                $navSvg = $(".main-navigation__switch svg");

            hideOverlay
                .to($navOverlay, 0.3, {opacity: 0})
                .to($navOverlay, 0, {css: {display: "none"}});

            switchMorph
                .fromTo($navMiddle, 0.3, {scaleX: 0}, {scaleX: 1, transformOrigin: "50% 50%"}, 0)
                .fromTo($navTop, 0.3, {x: 0, rotation: 45, scaleX: 1.4142, y: -4,transformOrigin: "0 100%"},
                    {rotation: 0, transformOrigin: "0 100%", y: 0, scaleX: 1, x: -10}, 0)
                .fromTo($navBottom, 0.3, {x: 0, rotation: -45, scaleX: 1.4142,y: 4,transformOrigin: "0 0%"},
                    {rotation: 0, transformOrigin: "0 0%", y: 0, scaleX: 1, x: -5}, 0)
                .to($navSvg, 0, {css: {overflow: "hidden"}}, 0.1);
        }


        /* Shows navigation */

        function showNav() {
            TweenLite.to($mainNav, 0.5, {x: 0});
            $mainNav.addClass("main-navigation--open");

            var showOverlay = new TimelineLite(),
                switchMorph = new TimelineLite(),
                $navSvg = $(".main-navigation__switch svg");


            showOverlay
                .to($navOverlay, 0, {css: {display: "block"}, opacity: 0})
                .fromTo($navOverlay, 0.3, {opacity: 0}, {opacity: 1});


            switchMorph
                .to($navSvg, 0, {css: {overflow: "visible"}})
                .fromTo($navMiddle, 0.3, {scaleX: 1, transformOrigin: "50% 50%"},{scaleX: 0}, 0)
                .fromTo($navTop, 0.3, {rotation: 0, transformOrigin: "0 100%", y: 0, scaleX: 1},
                    {x: 0, rotation: 45, scaleX: 1.4142, y: -4,transformOrigin: "0 100%"}, 0)
                .fromTo($navBottom, 0.3, {rotation: 0, transformOrigin: "0 0%", y: 0, scaleX: 1},
                    {x: 0, rotation: -45, scaleX: 1.4142,y: 4,transformOrigin: "0 0%"}, 0);
        }


        /* Navigation switch */

        $(".js-nav-switch").click(function () {

            if($mainNav.hasClass("main-navigation--open")){
                hideNav();
            }
            else{
                showNav();
            }

        });


        var $navItem = $(".main-navigation__item a");

        $navItem.click(function () {
            hideNav();
        });
        
        
        
        
        

        /* Leading-section animations */

        var leadingTween = new TimelineLite(),
            $leadingTitle = $(".leading-section__title"),
            $leadingSubtitleTop = $(".leading-section__subtitle--top"),
            $leadingSubtitleBottom = $(".leading-section__subtitle--bottom"),
            $leadingLineTop = $(".leading-section__line--top"),
            $leadingLineBottom = $(".leading-section__line--bottom"),
            $scrollIcon = $(".scroll-icon"),
            $scrollWheel = $(".scroll-icon__wheel"),
            leadingTitleHeight = $(".leading-section__title").outerHeight(true);



        function scrolling() {
            TweenLite.fromTo($scrollWheel, 1.3, {opacity: 1, y: 0, scaleY: 1}, {opacity: 0, y: 20, scaleY: 1.5 , onComplete: scrolling});
        }

        leadingTween
            .fromTo($leadingSubtitleTop, 0.7, {y: -100, opacity: 0, ease: Expo.easeOut},
                {y: 0, opacity: 1, ease: Expo.easeOut}, 0)
            .fromTo($leadingLineTop, 0.5, {scaleX: 0, opacity: 1, ease: Back.easeOut},
                {scaleX: 1, opacity: 1, ease: Back.easeOut})
            .fromTo($leadingLineBottom, 0.7, {y: - leadingTitleHeight, opacity: 0}, {y: 0, opacity: 1})
            .fromTo($leadingTitle, 0.5, {opacity: 0}, {opacity: 1}, "-=0.4")
            .fromTo($leadingSubtitleBottom, 0.4, {y: 50, opacity: 0}, {y: 0, opacity: 1})
            .fromTo([$scrollIcon, $scrollWheel], 0.3, {opacity: 0}, {opacity: 1})
            .fromTo($scrollWheel, 1.3, {opacity: 1, y: 0}, {opacity: 0, y: 20, scaleY: 1.5, onComplete: scrolling})
            .fromTo($mainNav, 0.5, {x: navWidth + 80}, {x: navWidth}, 0.5)
            .to($navTop, 0.5, {x: -10}, 0.5)
            .to($navBottom, 0.5, {x: -5}, 0.5);




        /* About section animations */

        var $aboutLineTop = $(".about__line--top"),
            $aboutLineBottom = $(".about__line--bottom"),
            $aboutHeading = $(".about__heading"),
            $aboutText = $(".about__text"),
            aboutTextHeight = $aboutText.outerHeight();
            aboutTween = new TimelineLite()
                .fromTo($aboutHeading, 0.5, {y: -50, opacity: 0, ease: Expo.easeOut},
                    {y: 0, opacity: 1, ease: Expo.easeOut})
                .fromTo($aboutLineTop, 0.5, {scaleX: 0, opacity: 1, ease: Back.easeOut},
                    {scaleX: 1, opacity: 1, ease: Back.easeOut})
                .fromTo($aboutLineBottom, 0.7, {y: - aboutTextHeight, opacity: 0}, {y: 0, opacity: 1})
                .fromTo($aboutText, 0.5, {opacity: 0}, {opacity: 1}, "-=0.4");



        var aboutScene = new ScrollMagic.Scene({
            triggerElement: "#about"
        })
            .setTween(aboutTween)
            .triggerHook(0.7)
            .addTo(scrollController)
            .reverse(false);




        /* Contact section animations */

        var $contactHeading = $(".contact__heading"),
            $contactMail = $(".contact__mail"),
            $contactContainer = $(".contact__container"),
            $brotherContainer = $(".brother"),
            $brotherText = $(".brother__text"),
            contactTween = new TimelineLite()
                .fromTo($contactContainer, 0.7, {scaleY: 0, transformOrigin: "50% 0"},
                    {scaleY: 1, transformOrigin: "50% 0", ease: Power3.easeIn}, 0.5)
                .fromTo($brotherContainer, 0.5, {scaleY: 0, transformOrigin: "50% 0"},
                    {scaleY: 1, transformOrigin: "50% 0", ease: Power3.easeIn})
                .fromTo($contactHeading, 0.5, {y: -30, opacity: 0}, {y: 0, opacity: 1}, "+=0.6")
                .fromTo($contactMail, 0.5, {opacity: 0}, {opacity: 1, className: "+=contact__mail--hoverable"})
                .fromTo($brotherText, 0.3, {opacity: 0, y: 0}, { opacity: 1, y: 0});

        var contactScene = new ScrollMagic.Scene({
            triggerElement: "#contact",
            offset: 100
        })
            .setTween(contactTween)
            .triggerHook(1)
            .addTo(scrollController)
            .reverse(false);

    }


    $("body").removeClass("preload"); //Reveals the page

});


$(window).on('beforeunload load', function() {
    $(window).scrollTop(0);
});



/* Smooth scrolling */

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
