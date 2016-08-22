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

$urlBase = "http://nepozitek.cz/";
$urlDavid = "http://david.nepozitek.cz/";
$urlOndra = "http://ondra.nepozitek.cz/";

$text = array(
    "david" => array(
        "leading_top" => "Greetings! My name is",
        "leading_name" => "David Nepožitek",
        "leading_bottom" => "My passion is to create modern websites",

        "about_text" => "Smth to fill this place.",

        "social_email" => "david@nepozitek.cz",
        "social_linkedin" => "smth",
    ),
    "ondra" => array(
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