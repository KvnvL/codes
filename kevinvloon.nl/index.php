<?php
ob_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kevin van Loon | Fotografie</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="apple-touch-icon" href="img/icons/apple-touch-icon.png">
    <link rel="shortcut icon" href="img/icons/favicon.ico" type="image/x-icon">
    <link rel="manifest" href="manifest.json">
</head>

<body>
    <header>
        <div class="header-left">
            <img src="img/logo-h_2.png" alt="" id="logoMain">
        </div>
        <div class="header-right">
            <div class="burger">
                <input type="checkbox" name="checkbox" id="checkbox">
                <label for="checkbox" id="burgerWrapper">
                    <div class="hamburger" id="hamburger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </label>
            </div>
            <div class="container">
                <ul>
                    <li><a class="one" href="#one">Home</a></li>
                    <li><a class="two" href="#two">Portfolio</a></li>
                    <li><a class="three" href="#three">Over Mij</a></li>
                    <li><a class="four" href="#four">Contact</a></li>
                </ul>
            </div>
        </div>
    </header>
    <div id="menu" class="menu">
        <div class="container">
            <ul>
                <li><a class="one" href="#one">Home</a></li>
                <li><a class="two" href="#two">Portfolio</a></li>
                <li><a class="three" href="#three">Over Mij</a></li>
                <li><a class="four" href="#four">Contact</a></li>
            </ul>
        </div>
        <div class="icons">
            <a href="https://twitter.com/kevinvloonnl" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.facebook.com/kevinvloon.nl" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/kevinvloon.nl/" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
    </div>
    <div class="back-blur" id="back-blur"></div>
    <div class="hero pageItem">
        <div class="heroImg heroHome"></div>
    </div>
    <div class="hero-overlay" id="one">
    <div class="indicator"></div>
        <h1>
            Kevin van Loon
        </h1>
    </div>
    <div class="content">
        <div class="indicator"></div>
        <div class="showcase-home pageItem" id="two">
            <div class="titles">
                <h2 id="mainTitle">Portfolio.</h2>
            </div>
            <div class="showcase-items">
                <div class="showcase-item">
                    <img src="img/covers/IMG_7670.jpg" alt="">
                    <a href="portfolio/mazda-mx5">
                        <div class="clicked-overlay">
                            <div class="item-titles">
                                <h2>Mazda Miata MX-5</h2>
                                <h3>Automotive</h3>
                            </div>
                            <div class="overlay-bottom">
                                <button>Meer</button>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="showcase-item">
                    <img src="img/covers/IMG_4716-1.jpg" alt="">
                    <a href="portfolio/suzuki-swift/">
                        <div class="clicked-overlay">
                            <div class="item-titles">
                                <h2>Suzuki Swift</h2>
                                <h3>Automotive</h3>
                            </div>
                            <div class="overlay-bottom">
                                <button>Meer</button>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="showcase-item">
                    <img src="img/covers/IMG_5952.jpg" alt="">
                    <a href="portfolio/mazda-3-mps/">
                        <div class="clicked-overlay">
                            <div class="item-titles">
                                <h2>Mazda 3 MPS</h2>
                                <h3>Automotive</h3>
                            </div>
                            <div class="overlay-bottom">
                                <button>Meer</button>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="showcase-item">
                    <img src="img/covers/IMG_6893.jpg" alt="">
                    <a href="portfolio/proudwheels-drive">
                        <div class="clicked-overlay">
                            <div class="item-titles">
                                <h2>Proudwheels Drive</h2>
                                <h3>Automotive</h3>
                            </div>
                            <div class="overlay-bottom">
                                <button>Meer</button>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="showcase-item">
                    <img src="img/covers/IMG_0498.jpg" alt="">
                    <a href="portfolio/efteling/">
                        <div class="clicked-overlay">
                            <div class="item-titles">
                                <h2>Efteling</h2>
                                <h3>Pretparken</h3>
                            </div>
                            <div class="overlay-bottom">
                                <button>Meer</button>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="showcase-item">
                    <img src="img/covers/IMG_0147-1.jpg" alt="">
                    <a href="portfolio/beekse-bergen/">
                        <div class="clicked-overlay">
                            <div class="item-titles">
                                <h2>Beekse Bergen</h2>
                                <h3>Natuur</h3>
                            </div>
                            <div class="overlay-bottom">
                                <button>Meer</button>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="showcase-item">
                    <img src="img/covers/IMG_9975.jpg" alt="">
                    <a href="portfolio/zooparc-overloon/">
                        <div class="clicked-overlay">
                            <div class="item-titles">
                                <h2>Zooparc Overloon</h2>
                                <h3>Natuur</h3>
                            </div>
                            <div class="overlay-bottom">
                                <button>Meer</button>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="showcase-item">
                    <img src="img/covers/IMG_6879-1.jpg" alt="">
                    <a href="portfolio/kersenbloesem/">
                        <div class="clicked-overlay">
                            <div class="item-titles">
                                <h2>Kersenbloesem</h2>
                                <h3>Natuur</h3>
                            </div>
                            <div class="overlay-bottom">
                                <button>Meer</button>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="indicator"></div>
        <div class="overmij-home pageItem" id="three">
            <div class="titles">
                <h2 id="mainTitle">Over mij.</h2>
            </div>
            <div class="overmij-wrapper">
                <div class="overmij-text">
                    <p>Hallo. Ik ben Kevin, 18 jaar en kom uit het mooie Noord-Brabant. Al bijna 5 jaar ben ik bezig met
                        fotografie. Het is allemaal begonnen toen ik van mijn opa zijn oude camera had gekregen en ik
                        die af en toe mee nam naar de Efteling. Sinds dien ga ik eigenlijk niet meer zonder camera
                        ergens naar toe.
                    </p>
                    <p>Fotografie is voor mij een creatieve manier om mijn kijk op de wereld aan anderen te laten zien.
                        Als ik bezig ben met fotografie ga ik er altijd voor om de foto zo mooi, maar ook zo scherp
                        mogelijk te krijgen.
                    </p>
                </div>
                <img src="img/IMG_4195-1.jpg" alt="">
            </div>
        </div>
        <div class="indicator"></div>
        <div id="four" class="contact pageItem">
            <div class="titles">
                <h2 id="mainTitle">Contact.</h2>
            </div>
            <div class="contact-wrapper">
                <div class="contact-text">
                    <p>Via bijgevoegd contact formulier kunt u uw berichten direct naar mij toe sturen. U kunt mij ook
                        direct bereiken door middel van mijn <a href="mailto:kevin@kevinvloon.nl">mail</a>.</p>
                    <p>Tevens ben ik ook altijd te bereiken via mijn social media kanalen.
                    </p>
                    <div class="icons">
                        <a href="https://twitter.com/kevinvloonnl" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/kevinvloon.nl" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/kevinvloon.nl/" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <form action='
                    <?php
                        $name = $email = $message = $honeypot = "";

                        $name = $_POST["realname"];
                        $email = $_POST["email"];
                        $message = $_POST["message"];
                        $honeypot = $_POST["website"];

                        $toEmail = "contact@kevinvloon.nl";
                        $subject = "Contact kevinvloon.nl";
                        $mailHeader = "From: $email ";
                        $content="From: $name \n Message: $message";

                        if(!empty($name) &&!empty($email) && !empty($message)){
                            if(empty($honeypot)){
                                mail($toEmail, $subject, $message, $mailHeader);
                                header('Location: https://kevinvloon.nl/bedankt');
                            }
                        }

                ?>' method="post">
                    <input type="text" name="website" id="website" class="hide-robot">
                    <div class="form-wrapper">
                        <h3>Naam:*</h3>
                        <input type="text" name="realname" id="realname" required />
                    </div>
                    <div class="form-wrapper">
                        <h3>E-mail:*</h3>
                        <input type="text" name="email" id="email" required/>
                    </div>
                    <div class="form-wrapper">
                        <h3>Bericht:*</h3>
                        <textarea type="text" name="message" id="message" cols="40" rows="10" required></textarea>
                    </div>
                    <input type="submit" value="Verzenden" />
                </form>
            </div>
        </div>
    </div>
    <footer>
        <div class="footer-left">
            <h3>Copyright © Kevin van Loon</h3>
        </div>
        <div class="footer-right">
            <div class="icons">
                <a href="https://twitter.com/kevinvloonnl" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://www.facebook.com/kevinvloon.nl" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/kevinvloon.nl/" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </footer>

    <script src="https://kit.fontawesome.com/c7f4f10174.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://code.jquery.com/jquery-2.0.2.min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>