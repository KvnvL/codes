import Carousel from "react-multi-carousel";

import React from "react";

import "react-multi-carousel/lib/styles.css";

import { Link } from "react-router-dom";

import RecipeCard from "./RecipeCard";
import vegaBurger from "../img/vegaburger.png";
import veganLasagna from "../img/veganLasagna.png";
import sushiWrap from "../img/sushiWrap.png";

const vegaBurgerIngredienten = [
  "2 middelgrote uien",
  "1 teen knoflook",
  "1 vega burger",
  "2 el milde olijfolie",
  "70 g tomatenpuree",
  "1½ courgette",
  "150 g Parmigiano Reggiano",
  "60 g tarwebloem",
];

const vegaBurgerBereiding = [
  "Snipper de ui en snijd de knoflook fijn. Snijd de bleekselderij en wortel in blokjes van een ½ cm. Verhit de olie in een hapjespan en fruit de ui, knoflook, groente en spekreepjes 5 min. op laag vuur. Voeg het gehakt toe en bak op middelhoog vuur in 5 min. rul. Voeg de tomatenpuree toe en bak 2 min. mee. Voeg 200 ml melk toe (per 4 personen) en laat al roerend op hoog vuur bijna helemaal inkoken, dit duurt ca. 5 min.",
  "Voeg de passata toe en breng aan de kook. Zet het vuur laag en laat met de deksel half op de pan 45 min. zachtjes koken.",
  "Maak ondertussen de bechamelsaus. Smelt daarvoor op laag vuur de boter in een steelpan met dikke bodem. Meng de bloem erdoor en laat op laag vuur 3 min. gaar worden. Voeg al roerend met een garde de rest van de melk in delen toe. Voeg pas de volgende scheut toe als de vorige helemaal is opgenomen. Breng aan de kook. Laat de saus op laag vuur 2-3 min. zachtjes koken. Breng op smaak met peper en eventueel zout.",
  "Verwarm de oven voor op 180 °C. Rasp de Parmezaanse kaas. Maak laagjes in de ovenschaal van achtereenvolgens tomatensaus, lasagnebladen, tomatensaus, bechamelsaus en geraspte kaas. Herhaal 3 keer en eindig met een laagje bechamelsaus en wat geraspte kaas. Bak de lasagne ca. 40 min. in het midden van de oven."
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },

  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },

  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

class CarouselReceptenVega extends React.Component {
  state = { additionalTransfrom: 0 };

  render() {
    return (
      <Carousel
        ssr={false}
        partialVisbile={false}
        responsive={responsive}
        arrows={false}
        className="carousel"
      >
        <Link
          to={{
            pathname: "/volkorenpasta",
            state: {
              banner: vegaBurger,
              name: "Vega burger met bieten",
              persons: "2",
              cal: "285 Kcal",
              time: "30 min",
              category: "Vega",
              preparation: vegaBurgerBereiding,
              ingredients: vegaBurgerIngredienten,
            },
          }}
        >
          <RecipeCard
            image={vegaBurger}
            name="Vega burger met bieten"
            cal="285 Kcal"
            time="30 min"
          />
        </Link>

        <Link
          to={{
            pathname: "/volkorenpasta",
            state: {
              banner: veganLasagna,
              name: "Vegetarische lasagna met spinazie",
              persons: "2",
              cal: "685 Kcal",
              time: "50 min",
              category: "Oven schotel",
              preparation: vegaBurgerBereiding,
              ingredients: vegaBurgerIngredienten,
            },
          }}
        >
          <RecipeCard
            image={veganLasagna}
            name="Vegetarische lasagna met spinazie"
            cal="685 Kcal"
            time="50 min"
          />
        </Link>


        <Link
          to={{
            pathname: "/volkorenpasta",
            state: {
              banner: sushiWrap,
              name: "Sushi wrap met rode kool",
              persons: "2",
              cal: "680 Kcal",
              time: "50 min",
              category: "Oven schotel",
              preparation: vegaBurgerBereiding,
              ingredients: vegaBurgerIngredienten,
            },
          }}
        >
          <RecipeCard
            image={sushiWrap}
            name="Sushi wrap met rode kool"
            cal="113 Kcal"
            time="25 min"
          />
        </Link>

        {/* lege divs voor opvulling zodat het goed uitziet */}
        <div></div>
        <div></div>
        <div></div>
      </Carousel>
    );
  }
}

export default CarouselReceptenVega;
