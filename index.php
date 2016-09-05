<?php

if (isset($_GET["personal"])) {
    if ($_GET["personal"] == "david") {
        $personal = "david";
    } else {
        $personal = "ondra";
    }
} else {
    $personal = false;
}

$urlBase = "http://nepozitek.cz";
$urlDavid = "http://david.nepozitek.cz";
$urlOndra = "http://ondra.nepozitek.cz";

$text = array(
    "david" => array(
        "title" => "David Nepožitek - web developer",
        "description" => "David Nepožitek - web developer creating modern websites",
        "fav_color" => "2f51cd",
        
        "leading_top" => "Greetings! My name is",
        "leading_name" => "David Nepožitek",
        "leading_bottom" => "My passion is to create modern websites",

        "about_text" => "<p>Hey! My name is David Nepožitek, I'm web developer currently studying at Gymnasium Karviná in Czech Republic. I'm engaged in the field of creating websites since 2012, when I succeeded in Junior Internet competition. Since then I design websites, so I can use Adobe CC at high level and have a keen eye for detail during the development. Later, I started to transform sites into a functional form. I can deal with HTML, LESS CSS, Bootstrap, jQuery and basic GSAP animations. Recently I also peeked into the secrets of back-end, so I'm learning to work with PHP, MySQL and Nette framework.</p>
         <p>I consider myself frank, reliable and hard-working team player. I read articles about new trends and listen to advice of more experienced ones. I love working on complex challenges and I'm always keen on to expand my knowledge.</p>",

        "social_email" => "david@nepozitek.cz",
        "social_linkedin" => "https://www.linkedin.com/in/david-nepozitek",
    ),
    "ondra" => array(
        "title" => "Ondra Nepožitek - web developer",
        "description" => "Ondra Nepožitek - web developer creating modern websites",
        "fav_color" => "fd772e",

        "leading_top" => "Greetings! My name is",
        "leading_name" => "Ondra Nepožitek",
        "leading_bottom" => "My passion is to create modern websites",

        "about_text" => "Smth to fill this place.",

        "social_email" => "ondra@nepozitek.cz",
        "social_linkedin" => "smth",
    )
);

if ($personal) {
    include_once "pages/personal.php";
} else {
    include_once "pages/landing.php";
}