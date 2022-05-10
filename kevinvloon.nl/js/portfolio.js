let hamburger = document.getElementById("hamburger");
let checkbox = document.getElementById("checkbox");
let backBlur = document.getElementById('back-blur');

//Nav menu openen en hamburger veranderen in kruisje
let menuOpen = false;
burgerWrapper.addEventListener("click", function(){
    if(!menuOpen){
        hamburger.classList.add('open');
        menuOpen = true;
        menu.style.transform = "translateX(50vw)";
        backBlur.classList.add('blur');
    }
    else{
        hamburger.classList.remove('open');
        menuOpen = false;
        menu.style.transform = "translateX(100vw)";
        backBlur.classList.remove('blur');
    }
})

// Declareren variabelen
let images = document.getElementsByClassName('showcase-image');
let overlayClicked = document.querySelector('.image-click');
let clickedImg = document.querySelector('.clicked-img');
let clickWrapper = document.querySelector('.click-wrapper');

let aperture = document.querySelector('.aperture');
let shutterspeed = document.querySelector('.shutterspeed');
let iso = document.querySelector('.iso');
let focalLenght = document.querySelector('.focal-length');
let exif = document.querySelectorAll('.exif');
let imgExif = document.querySelector('.img-exif');
let alternative;

//Checken op welke image is geklikt
for (i = 0; i < images.length; i++){
    // console.log(images[i])
    images[i].addEventListener('click', function(){
        overlayClicked.style.opacity = "0";

        //Chech of geklikte afbeelding verticaal of horizontaal is ivm grootte
        if(this.width < this.height){
            clickWrapper.classList.add('vertical');
        }

        //Geef source van geklikte img door aan de placeholder op fullscreen
        clickedImg.src = this.src;

        //Verzamelen van alle exif data en weergeven onder foto
        EXIF.getData(this, function(){
            var allMetaData = EXIF.getAllTags(this);
            console.log(allMetaData) 
            //Kijken of alle te weergeven data aanwezig is
            if(allMetaData.FNumber == undefined || allMetaData.ExposureTime.numerator == undefined || allMetaData.ExposureTime.denominator == undefined || allMetaData.ISOSpeedRatings == undefined || allMetaData.FocalLength.numerator == undefined){
                //Is het niet aanwezig dan andere tekst weergeven
                for(i = 0; i<exif.length; i++){
                    exif[i].style.display = 'none';
                }
                alternative = document.createElement('p');
                alternative.innerHTML = "Geen Exif's gevonden!";
                imgExif.appendChild(alternative);
            }else{
                //Is de juiste data aanwezig dan weergeven
                aperture.innerHTML = allMetaData.FNumber;
                shutterspeed.innerHTML = allMetaData.ExposureTime.numerator + "/" + allMetaData.ExposureTime.denominator;
                iso.innerHTML = allMetaData.ISOSpeedRatings;
                focalLenght.innerHTML = allMetaData.FocalLength.numerator;
            }
            
        })
        //Overlay weergeven
        overlayClicked.style.display = "flex";
        setTimeout(function() {
            overlayClicked.style.opacity = "1";
        }, 50)
        //Overlay weghalen op schermklik
        overlayClicked.addEventListener('click', function(){
            overlayClicked.style.opacity = "0";
            
            setTimeout(function() {
                overlayClicked.style.display = "none";
                for(i = 0; i<exif.length; i++){
                    exif[i].style.display = 'flex';
                }
                clickWrapper.classList.remove('vertical');   
            }, 500)
            if(alternative){
                alternative.remove();
            }         
        })
    })
};