<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><?php echo $text[$personal]["title"]; ?></title>
    <meta name="description" content="<?php echo $text[$personal]["description"]; ?>">
    <meta name="author" content="David Nepožitek">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no,maximum-scale=1,height=device-height">

    <meta property="og:title" content="<?php echo $text[$personal]["title"]; ?>" />
    <meta property="og:description" content="<?php echo $text[$personal]["description"]; ?>" />
    <meta property="og:image" content="<?php echo $urlBase; ?>/img/<?php echo $personal; ?>_op.jpg" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content=" <?php echo $personal == "ondra" ? $urlOndra : $urlDavid; ?>" />

    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="<?php echo $urlBase; ?>/img/fav_<?php echo $personal; ?>/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php echo $urlBase; ?>/img/fav_<?php echo $personal; ?>/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo $urlBase; ?>/img/fav_<?php echo $personal; ?>/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php echo $urlBase; ?>/img/fav_<?php echo $personal; ?>/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="<?php echo $urlBase; ?>/img/fav_<?php echo $personal; ?>/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="<?php echo $urlBase; ?>/img/fav_<?php echo $personal; ?>/apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="<?php echo $urlBase; ?>/img/fav_<?php echo $personal; ?>/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="<?php echo $urlBase; ?>/img/fav_<?php echo $personal; ?>/favicon-16x16.png" sizes="16x16" />
    <meta name="application-name" content="<?php echo $text[$personal]["title"]; ?>"/>
    <meta name="msapplication-TileColor" content="#<?php echo $text[$personal]["fav_color"]; ?>" />
    <meta name="msapplication-TileImage" content="<?php echo $urlBase; ?>/img/fav_<?php echo $personal; ?>/mstile-144x144.png" />

    <link rel="stylesheet" href="<?php echo $urlBase; ?>/css/normalize.min.css">
    <link rel="stylesheet" href="<?php echo $urlBase; ?>/css/styles.min.css">

    <script src="<?php echo $urlBase; ?>/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>

    <link href="https://fonts.googleapis.com/css?family=Merriweather:400i|Montserrat:700&subset=latin-ext" rel="stylesheet">
    <link href="http://allfont.net/allfont.css?fonts=montserrat-light" rel="stylesheet" type="text/css" />
</head>
<body class="individual individual--<?php echo $personal; ?> preload">

<svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" class="loader">
    <circle cx="22" cy="22" r="4">
    </circle>
    <circle cx="22" cy="22" r="4">
    </circle>
</svg>

<!--[if lt IE 8]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please
    <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->


<nav class="main-navigation">
    <div class="js-nav-switch main-navigation__switch">
        <svg class="main-navigation__switch-svg">
            <rect x="0" y="0" height="4" width="25"
                  class="main-navigation__switch-line main-navigation__switch-line--top"></rect>
            <rect x="0" y="9" height="4" width="25"
                  class="main-navigation__switch-line main-navigation__switch-line--middle"></rect>
            <rect x="0" y="18" height="4" width="25"
                  class="main-navigation__switch-line main-navigation__switch-line--bottom"></rect>
        </svg>
    </div>

    <div class="main-navigation__container">
        <ul class="main-navigation__list">
            <li class="main-navigation__item"><a href="#leading-section">Home</a></li>
            <li class="main-navigation__item"><a href="#about">About</a></li>
            <li class="main-navigation__item"><a href="#contact">Contact</a></li>
        </ul>
        <div class="main-navigation__bottom">
            <a href="<?php echo $text[$personal]["social_linkedin"]; ?>" class="main-navigation__bottom-linkedin" target="_blank">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 579.4 144" style="enable-background:new 0 0 579.4 144;" xml:space="preserve">
                <g>
                    <g>
                        <g>
                            <polygon points="0,21.3 22.2,21.3 22.2,102.2 63.3,102.2 63.3,122.7 0,122.7 			"/>
                            <g>
                                <path d="M73.2,54h21.4v68.7H73.2V54z M83.8,19.8c6.8,0,12.4,5.5,12.4,12.4c0,6.8-5.5,12.4-12.4,12.4c-6.8,0-12.4-5.5-12.4-12.4
                                    C71.4,25.3,77,19.8,83.8,19.8"/>
                            </g>
                            <polygon points="183.8,21.3 205.1,21.3 205.1,81.9 229.3,53.9 255.4,53.9 227.4,85.7 254.9,122.7 228,122.7 205.4,88.7
                                205.1,88.7 205.1,122.7 183.8,122.7 			"/>
                            <path d="M106.3,54h20.5v9.4h0.3c2.8-5.4,9.8-11.1,20.2-11.1c21.6,0,25.6,14.2,25.6,32.7v37.7h-21.4V89.3c0-8-0.1-18.2-11.1-18.2
                                c-11.1,0-12.8,8.7-12.8,17.6v34h-21.4V54z"/>
                            <path d="M300.4,80.3c0.1-7.1-5.4-13.1-13.1-13.1c-9.4,0-14.5,6.4-15.1,13.1H300.4z M318.5,110.8c-6.8,8.7-18.1,13.7-29.2,13.7
                                c-21.3,0-38.4-14.2-38.4-36.3c0-22.1,17.1-36.3,38.4-36.3c19.9,0,32.5,14.2,32.5,36.3v6.7h-49.5c1.7,8.1,7.8,13.4,16.1,13.4
                                c7,0,11.7-3.6,15.2-8.4L318.5,110.8z"/>
                            <path d="M366.2,70.6c-10.7,0-17.1,7.1-17.1,17.5c0,10.4,6.4,17.5,17.1,17.5c10.7,0,17.1-7.1,17.1-17.5
                                C383.3,77.7,376.9,70.6,366.2,70.6 M402.9,122.7h-19.6v-9.1H383c-3.3,5-11.5,10.8-21.2,10.8c-20.5,0-34-14.8-34-35.7
                                c0-19.2,12-36.9,31.6-36.9c8.8,0,17.1,2.4,21.9,9.1h0.3V21.3h21.4V122.7z"/>
                        </g>
                        <path class="linkedin-rectangle" d="M557.6,0H434.9c-5.9,0-10.6,4.6-10.6,10.4v123.2c0,5.7,4.8,10.4,10.6,10.4h122.7c5.9,0,10.7-4.7,10.7-10.4V10.4
                            C568.3,4.6,563.5,0,557.6,0z M467,122.7h-21.4V54H467V122.7z M456.3,44.6c-6.8,0-12.4-5.6-12.4-12.4c0-6.8,5.5-12.4,12.4-12.4
                            c6.8,0,12.4,5.5,12.4,12.4C468.7,39,463.1,44.6,456.3,44.6z M547,122.7h-21.3V89.3c0-8-0.1-18.2-11.1-18.2
                            c-11.1,0-12.8,8.7-12.8,17.6v34h-21.3V54h20.5v9.4h0.3c2.8-5.4,9.8-11.1,20.2-11.1C543,52.3,547,66.5,547,85V122.7z"/>
                    </g>
                    <g>
                        <path d="M576.2,120c0.7-0.1,1-0.5,1-1.1c0-0.8-0.5-1.1-1.4-1.1h-1.5v4h0.6V120h0.7l0,0l1.1,1.7h0.6L576.2,120L576.2,120z
                             M575.5,119.6h-0.7v-1.4h0.9c0.4,0,0.9,0.1,0.9,0.6C576.7,119.5,576.2,119.6,575.5,119.6z"/>
                        <path d="M575.6,116c-2.1,0-3.8,1.7-3.8,3.8c0,2.1,1.7,3.8,3.8,3.8c2.1,0,3.8-1.7,3.8-3.8C579.4,117.6,577.8,116,575.6,116z
                             M575.6,123.1c-1.8,0-3.3-1.4-3.3-3.3c0-1.9,1.4-3.3,3.3-3.3c1.8,0,3.3,1.4,3.3,3.3C578.9,121.7,577.4,123.1,575.6,123.1z"/>
                    </g>
                </g>
                </svg>
            </a>
            <a href="mailto:<?php echo $text[$personal]["social_email"]; ?>" class="main-navigation__bottom-mail"><?php echo $text[$personal]["social_email"]; ?></a>
        </div>
    </div>
</nav>

<div class="js-nav-switch main-navigation__overlay"></div>


<main class="individual__main">

    <section class="leading-section leading-section--<?php echo $personal; ?>" id="leading-section">

        <div class="leading-section__content-wrap">
            <div class="leading-section__content">

                <p class="leading-section__subtitle leading-section__subtitle--top"><?php echo $text[$personal]["leading_top"]; ?></p>
                <div class="leading-section__title-wrap">
                    <div class="leading-section__line leading-section__line--top"></div>
                    <h1 class="leading-section__title"><?php echo $text[$personal]["leading_name"]; ?></h1>
                    <div class="leading-section__line leading-section__line--bottom"></div>
                </div>
                <p class="leading-section__subtitle leading-section__subtitle--bottom"><?php echo $text[$personal]["leading_bottom"]; ?></p>

            </div>
        </div>

        <a href="#about" class="scroll-icon">
            <div class="scroll-icon__wheel"></div>
        </a>

    </section>

    <section class="about" id="about">
        <h1 class="about__heading">
            About me
        </h1>

        <div class="about__text-wrap">
            <div class="about__line about__line--top"></div>
            <div class="about__text">
                <?php echo $text[$personal]["about_text"]; ?>
            </div>
            <div class="about__line about__line--bottom"></div>
        </div>

    </section>

    <section class="contact" id="contact">
        <div class="contact__container">

            <div class="contact__content">
                <h2 class="contact__heading">Drop me a line!</h2>
                <a href="mailto:<?php echo $text[$personal]["social_email"]; ?>" class="contact__mail">
                    <?php echo $text[$personal]["social_email"]; ?>
                    <div class="contact__mail-border"></div>
                    <div class="contact__mail-fill"></div>
                </a>
            </div>

        </div>

        <div class="brother">
            <a href="<?php echo $personal == "david" ? $urlOndra : $urlDavid; ?>" class="brother__text">
                Not satisfied? Check my brother!
            </a>
        </div>

    </section>
</main>


<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="<?php echo $urlBase; ?>/js/vendor/jquery-1.11.2.min.js"><\/script>')</script>

<script src="<?php echo $urlBase; ?>/js/vendor.min.js"></script>

<script src="<?php echo $urlBase; ?>/js/scripts.min.js"></script>

<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-37480854-1', 'auto');
    ga('send', 'pageview');

</script>
</body>
</html>
