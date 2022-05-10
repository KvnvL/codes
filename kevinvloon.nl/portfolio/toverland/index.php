<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kevin van Loon | Fotografie</title>
    <link rel="stylesheet" href="../../styles.css">
    <link rel="shortcut icon" href="../../img/icons/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="../../img/icons/apple-touch-icon.png">
    <link rel="manifest" href="../../manifest.json">

</head>

<body>
    <header>
        <div class="header-left">
            <a href="../../index.php"><img src="../../img/logo-h_2.png" alt=""></a>
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
            <ul>
                <li><a href="../../index.php">Home</a></li>
                <li><a href="../../index.php" class="active">Portfolio</a></li>
                <li><a href="../../index.php">Over Mij</a></li>
                <li><a href="../../index.php">Contact</a></li>
            </ul>
        </div>
    </header>
    <div id="menu" class="menu">
        <ul>
            <li><a href="../../index.php">Home</a></li>
            <li><a href="../../index.php" class="active">Portfolio</a></li>
            <li><a href="../../index.php">Over Mij</a></li>
            <li><a href="../../index.php">Contact</a></li>
        </ul>
        <div class="icons">
            <a href="https://twitter.com/kevinvloonnl" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.facebook.com/kevinvloon.nl" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/kevinvloon.nl/" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
    </div>
    <div class="back-blur" id="back-blur"></div>
    <div class="hero">
        <div class="heroImg heroToverland"></div>  
    </div>
    <div class="hero-overlay">
        <div class="hero-titles">
            <h1>
                Toverland.
            </h1>
            <h2>pretparken.</h2>
        </div>
        
    </div>
    <div class="content">
        <div class="image-grid">
        <?php
                $dirname = "img/";
                $images = glob($dirname."*.jpg");
                
                foreach($images as $image) {
                    echo '<img src="'.$image.'" class="showcase-image" />';
                }
            ?>
        </div>
        <div class="image-click">
            <div class="click-blur"></div>
            <div class="click-wrapper">
                <img src="" alt="" class="clicked-img">
                <div class="img-exif">
                    <div class="exif"><span>f/</span><p class="aperture"></p></div>
                    <div class="exif"><p class="shutterspeed"></p><span>sec.</span></div>
                    <div class="exif"><span>ISO-</span><p class="iso"></p></div>
                    <div class="exif"><p class="focal-length"></p><span>mm</span></div>
                </div>
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

    <script src="https://cdn.jsdelivr.net/npm/exif-js"></script>
    <script src="https://kit.fontawesome.com/c7f4f10174.js" crossorigin="anonymous"></script>
    <script src="../../js/portfolio.js"></script>
</body>

</html>