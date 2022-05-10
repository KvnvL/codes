let indicatorTouch = false;

//Checken of scherm waarop website staat touchscreen (telefoon) heeft of niet (pc)
var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));

//Serviceworker activeren voor website om PWA downloaden mogelijk te maken
if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js');
}

//Functies die de code moet uitvoeren onscroll obv touchscreen of niet
window.onscroll = function() {
    if(indicatorTouch == true){
        overlays();
        navIndicator();
    }else{
        navIndicator();
    }
}

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

let showcaseItems = document.getElementsByClassName('showcase-item');
let itemOverlays = document.getElementsByClassName('clicked-overlay');

for (i = 0; i < showcaseItems.length; i++){
    //Standaard waardes voor overlays
    showcaseItems[i].style.filter = "grayscale(100%)";
    itemOverlays[i].style.opacity = "0";
    showcaseItems[i].classList.add(i);

    if(isTouch == false){
        itemOverlays[i].style.display = "none";
        //Verander style op hover over item
        showcaseItems[i].addEventListener('mouseover', function(){
            let indicator;
            //Check of die dezelfde classname heeft als het nummer in de var
            for(j = 0; j< showcaseItems.length; j++){
                if(this.classList.contains(j)){
                    indicator = j;
                }
            }
            this.style.filter = "grayscale(0%)";
            itemOverlays[indicator].style.display = "block";
            setTimeout(function() {
                itemOverlays[indicator].style.opacity = "1";
            }, 0)
        })
        //Annuleer alle style aanpassingen die hierboven zijn gemaakt zodra gebruiker niet hovert
        showcaseItems[i].addEventListener('mouseleave', function(){
            let indicator;
            //Check of die dezelfde classname heeft als het nummer in de var
            for(j = 0; j< showcaseItems.length; j++){
                if(this.classList.contains(j)){
                    indicator = j;
                }
            }
            this.style.filter = "grayscale(100%)";     
            itemOverlays[indicator].style.opacity = "0";
            setTimeout(function() {
                itemOverlays[indicator].style.display = "none";
            }, 500)
        })
    }else{
        indicatorTouch = true;
        function overlays(){
            //variabelen declareren voor onderkant scherm
            let windowHeight = window.innerHeight - 150;
            for(var j = 0; j < showcaseItems.length; j++){
                //Verkrijg de afstanden van de randen van object tot boven- en linkerkant van het scherm
                var bounding = showcaseItems[j].getBoundingClientRect();
                //check of object binnen raster bevind (100px vanaf top en 150px vanaf bottom)
                if(bounding.top >= 100 && bounding.bottom <= windowHeight){
                    //Als het object er binnen valt dan verwijderen grayscale filter en overlay in beeld brengen
                    var indicator = j;
                    showcaseItems[j].style.filter = "grayscale(0%)";
                    itemOverlays[indicator].style.opacity = '1'; 
                }else{
                    //Valt het object er niet binnen dan grayscale filter aan een overlay uit
                    showcaseItems[j].style.filter = "grayscale(100%)";
                    itemOverlays[j].style.opacity = "0";
                }
            }
        }
    }
}

//Scroll terug naar boven op home pagina
let logoMain = document.getElementById('logoMain');
if(logoMain){
    logoMain.addEventListener('click', function(){
        window.scrollTo(0,0)
    })
}    

//jQuery voor schoonhouden van de website link (ipv kevinvloon.nl/#one -> kevinvloon.nl/)
//Tevens ook jQuery voor het scrollen naar webgedeelte
$('a[href*=#]:not([href=#])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
    || location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //Checken ofdat target geen #one (bovenste pagina gedeelte)
    if (target.length && target.selector != "#one") { 
        $('html,body').scrollTop(target.offset().top - 80);
    }
    //Checken ofdat target wel #one is (bovenste pagina gedeelte)
    else if(target.selector == "#one"){
        $('html,body').scrollTop(target.offset().top - 10);
    }
    //Sluiten nav menu touchscreen (telefoon)
    closeMenu();
    return false;
}
});

//functie voor sluiten hamburgermenu
function closeMenu(){
    hamburger.classList.remove('open');
    menuOpen = false;
    menu.style.transform = "translateX(100vw)";
    backBlur.classList.remove('blur');
} 

let indicators = document.querySelectorAll('.indicator')
let menuItemOne = document.querySelectorAll('.one');
let menuItemTwo = document.querySelectorAll('.two');
let menuItemThree = document.querySelectorAll('.three');
let menuItemfour = document.querySelectorAll('.four');

//Standaard home actief want is eerste wat je ziet op website
for(var j = 0; j < menuItemOne.length; j++){
    menuItemOne[j].classList.add('active');
}

//Functie voor detecteren welke pagina in beeld is active class toekennen aan dat topic in nav
function navIndicator(){
    var halfScreen = window.innerHeight * .5;
    for(let i = 0; i < indicators.length; i++){
        var indicatorBounding = indicators[i].getBoundingClientRect();
        //Check of 1 van de indicatoren voorbij heelft schermhoogte is
        if(indicatorBounding.top <= halfScreen){
            //Check welke dat is en obv active class toekennen aan dat topic in beide nav (web en telefoon)
            if( i == 0){
                for(var j = 0; j < menuItemOne.length; j++){
                    menuItemOne[j].classList.add('active');
                    menuItemTwo[j].classList.remove('active');
                    menuItemThree[j].classList.remove('active');
                    menuItemfour[j].classList.remove('active');
                }
            }
            else if( i == 1){
                for(var j = 0; j < menuItemTwo.length; j++){
                    menuItemOne[j].classList.remove('active');
                    menuItemTwo[j].classList.add('active');
                    menuItemThree[j].classList.remove('active');
                    menuItemfour[j].classList.remove('active');
                }
            }
            else if( i == 2){
                for(var j = 0; j < menuItemThree.length; j++){
                    menuItemOne[j].classList.remove('active');
                    menuItemTwo[j].classList.remove('active');
                    menuItemThree[j].classList.add('active');
                    menuItemfour[j].classList.remove('active');

                }
            }  
            else if( i == 3){
                for(var j = 0; j < menuItemfour.length; j++){
                    menuItemOne[j].classList.remove('active');
                    menuItemTwo[j].classList.remove('active');
                    menuItemThree[j].classList.remove('active');
                    menuItemfour[j].classList.add('active');
                }
            }   
        }
    }
}