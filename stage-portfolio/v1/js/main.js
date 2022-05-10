window.onscroll = function(){
    navIndicator();
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

//Scroll terug naar boven op home pagina
let logoMain = document.getElementById('logo');
if(logoMain){
    logoMain.addEventListener('click', function(){
        window.scrollTo(0,0)
    })
}    

//Animeren van tekst
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var textPortfolio = document.getElementById('portfolio-text')
textPortfolio.style.opacity = '0';

setTimeout(function(){
    setTimeout(function(){
        textPortfolio.style.opacity = '1';
    },100)
    anime.timeline({loop: false})
    .add({
        targets: '.ml6 .letter',
        translateY: ["1.8em", 0],
        translateZ: 0,
        duration: 2000,
        delay: (el, i) => 50 * i
    });
},1000)

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
            $('html,body').scrollTop(target.offset().top);
        }
        //Sluiten nav menu touchscreen (telefoon)
        closeMenu();
        return false;
    }
});

let indicators = document.querySelectorAll('.indicator')
let menuItemOne = document.querySelectorAll('.one');
let menuItemTwo = document.querySelectorAll('.two');
let menuItemThree = document.querySelectorAll('.three');
let menuItemfour = document.querySelectorAll('.four');

//Standaard home actief want is eerste wat je ziet op website
for(var j = 0; j < menuItemOne.length; j++){
    menuItemOne[j].classList.add('active');
}2

//Functie voor detecteren welke pagina in beeld is active class toekennen aan dat topic in nav
function navIndicator(){
    var halfScreen = window.innerHeight * .6;
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