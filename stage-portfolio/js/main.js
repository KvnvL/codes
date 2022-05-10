window.onscroll = function(){
  navIndicator();
  scrollFunction();
  if(indicatorTouch == true){  
    overlay();
  }
}

let indicatorTouch = false;
var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));

particlesJS.load('particles-js', './particles.json', function() {
    console.log('callback - particles.js config loaded');
});

let hamburger = document.getElementById("hamburger");
let checkbox = document.getElementById("checkbox");
let backBlur = document.getElementById('back-blur');

//Nav menu openen en hamburger veranderen in kruisje
let menuOpen = false;
burgerWrapper.addEventListener("click", function(){
    if(!menuOpen){
        hamburger.classList.add('open');
        menuOpen = true;
        menu.style.transform = "translateX(0vw)";
    }
    else{
        hamburger.classList.remove('open');
        menuOpen = false;
        menu.style.transform = "translateX(100vw)";
    }
})

function scrollFunction() {
  if (document.body.scrollTop > (window.innerHeight * .3) || document.documentElement.scrollTop > (window.innerHeight * .3)) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-5rem";
  }
}

let indicators = document.querySelectorAll('.indicator')
let menuItemOne = document.querySelectorAll('.one');
let menuItemTwo = document.querySelectorAll('.two');
let menuItemThree = document.querySelectorAll('.three');
// let menuItemfour = document.querySelectorAll('.four');

//Standaard home actief want is eerste wat je ziet op website
for(var j = 0; j < menuItemOne.length; j++){
    menuItemOne[j].classList.add('active');
}

//Scroll terug naar boven op home pagina
let logoMain = document.getElementById('logo');
if(logoMain){
    logoMain.addEventListener('click', function(){
        window.scrollTo(0,0)
    })
} 

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
                    // menuItemfour[j].classList.remove('active');
                }
            }
            else if( i == 1){
                for(var j = 0; j < menuItemTwo.length; j++){
                    menuItemOne[j].classList.remove('active');
                    menuItemTwo[j].classList.add('active');
                    menuItemThree[j].classList.remove('active');
                    // menuItemfour[j].classList.remove('active');
                }
            }
            else if( i == 2){
                for(var j = 0; j < menuItemThree.length; j++){
                    menuItemOne[j].classList.remove('active');
                    menuItemTwo[j].classList.remove('active');
                    menuItemThree[j].classList.add('active');
                    // menuItemfour[j].classList.remove('active');

                }
            }  
            // else if( i == 3){
            //     for(var j = 0; j < menuItemfour.length; j++){
            //         menuItemOne[j].classList.remove('active');
            //         menuItemTwo[j].classList.remove('active');
            //         menuItemThree[j].classList.remove('active');
            //         menuItemfour[j].classList.add('active');
            //     }
            // }   
        }
    }
}

$('.nav').click(function() {
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
} 

let projects = document.getElementsByClassName('project')
let overlays = document.getElementsByClassName('project-overlay');

for (i = 0; i < projects.length; i++){
    projects[i].classList.add(i);

    if(isTouch == false){
        overlays[i].classList.add('hover');
    }else{
        overlays[i].style.opacity = "0";
        indicatorTouch = true;

        function overlay(){
            let windowHeight = window.innerHeight - 350;
            for(j = 0; j < projects.length; j++){
                var bounding = projects[j].getBoundingClientRect();
                if(bounding.top >= 100 && bounding.bottom <= windowHeight){
                    overlays[j].style.opacity = "1";
                }else{
                    overlays[j].style.opacity = "0";
                }
            }
        }
    }
}