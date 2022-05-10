import Carousel from "react-multi-carousel";

import React from "react";

import "react-multi-carousel/lib/styles.css";

import { Link } from "react-router-dom";

import RecipeCard from "./RecipeCard";
import sushiWrap from "../img/sushiWrap.png"
import vegaBurger from "../img/vegaburger.png";

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

const lasagneIngredienten = [
  "300g volkoren penne",
  "300g gesneden boerenkool",
  "100g ongebrande amandelen",
  "500g cherry tomaten",
  "4 el extra vierge olijfolie",
  "1/2 citroen",
  "2 tenen knoflook",
  "100g geraspte kaas 30+",
];

const vegaBurgerIngredienten = [
  "2 middelgrote uien",
  "1 teen knoflook",
  "150 g bleekselderij",
  "100 g wortel",
  "2 el milde olijfolie",
  "500 g half om half gehakt",
  "70 g tomatenpuree",
  "1½ courgette",
  "150 g Parmigiano Reggiano",
  "60 g tarwebloem",
  "1 pak lasagnebladen",
  "1 pak besciamella saus mix",
];

const lasagneBereiding =[
"Kook de penne volgens de aanwijzingen op de verpakking beetgaar. Kook de helft van de boerenkool de laatste 5 min. mee. Giet af en bewaar 200 ml van het kookvocht (per 4 personen). Verhit ondertussen een koekenpan zonder olie of boter en rooster de amandelen in 3 min. goudbruin. Laat afkoelen op een bord.",
"Halveer de cherrytomaten. Verhit ⅛ van de olie in een koekenpan en bak de tomaatjes 5 min. op middelhoog vuur. Boen de citroen schoon, rasp de gele schil met een fijne rasp. Pers het sap uit de vrucht. Doe het citroenrasp en -sap, de knoflook, kaas, ⅔ van de geroosterde amandelen en de rest van de ongekookte boerenkool in een hoge beker. Voeg het kookvocht en de rest van de olie toe en pureer met de staafmixer tot pesto. Breng op smaak met peper.",
"Hak de rest van de amandelen grof. Meng de pasta met de gekookte boerenkool en de pesto en schep de cherrytomaten erdoor. Breng op smaak met peper en eventueel zout. Bestrooi met de rest van de amandelen.",
]

const vegaBurgerBereiding = [
  "Snipper de ui en snijd de knoflook fijn. Snijd de bleekselderij en wortel in blokjes van een ½ cm. Verhit de olie in een hapjespan en fruit de ui, knoflook, groente en spekreepjes 5 min. op laag vuur. Voeg het gehakt toe en bak op middelhoog vuur in 5 min. rul. Voeg de tomatenpuree toe en bak 2 min. mee. Voeg 200 ml melk toe (per 4 personen) en laat al roerend op hoog vuur bijna helemaal inkoken, dit duurt ca. 5 min.",
  "Voeg de passata toe en breng aan de kook. Zet het vuur laag en laat met de deksel half op de pan 45 min. zachtjes koken.",
  "Maak ondertussen de bechamelsaus. Smelt daarvoor op laag vuur de boter in een steelpan met dikke bodem. Meng de bloem erdoor en laat op laag vuur 3 min. gaar worden. Voeg al roerend met een garde de rest van de melk in delen toe. Voeg pas de volgende scheut toe als de vorige helemaal is opgenomen. Breng aan de kook. Laat de saus op laag vuur 2-3 min. zachtjes koken. Breng op smaak met peper en eventueel zout.",
  "Verwarm de oven voor op 180 °C. Rasp de Parmezaanse kaas. Maak laagjes in de ovenschaal van achtereenvolgens tomatensaus, lasagnebladen, tomatensaus, bechamelsaus en geraspte kaas. Herhaal 3 keer en eindig met een laagje bechamelsaus en wat geraspte kaas. Bak de lasagne ca. 40 min. in het midden van de oven."
]

class CarouselFavorietenRecepten extends React.Component {
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

        <Link
      to={{
        pathname: "/volkorenpasta",
        state: {
          banner:  vegaBurger ,
          name: "Volkorenpasta met  boerenkoolpesto",
          persons: "2",
          cal: "690 Kcal",
          time: "25 min",
          category: "pasta gerecht",
          preparation: lasagneBereiding,
          ingredients: lasagneIngredienten,
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


        {/* lege divs voor opvulling zodat het goed uitziet */}
        <div></div>
        <div></div>
        <div></div>
      </Carousel>
    );
  }
}

export default CarouselFavorietenRecepten;
