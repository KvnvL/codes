import Carousel from "react-multi-carousel";

import React from "react";

import "react-multi-carousel/lib/styles.css";

import "../component style/carouselAanbiedingen.css";

import { Link } from "react-router-dom";
import ProductSaleCard from "./ProductSaleCard";
import calvePindakaas from "../img/calvePindakaas.png";
import buismanCappuccino from "../img/buismanCappuccino.png";
import voorraadGoed from "../img/voorraadGoed.png";
import voorraadMedium from "../img/voorraadMedium.png";
import voorraadSlecht from "../img/voorraadSlecht.png";
import Allioli from "../img/vegaAllioli.png"
import nakd from "../img/nakd.png"
import benAndJerry from "../img/BenAndJerry.png"
var productText ="Krachtige koffie met een extra lekkere dikke laag melkschuim. Volgens de Italianen drink je alleen 's ochtends cappuccino, maar van ons mag je elk moment bijzonder maken met deze heerlijke drank. De voortreffelijke combinatie van krachtige koffie en een romige melksmaak, bekroon het met een vleugje cacao.";
var productTextAllioli = "Lekker als dip bij stokbrood. Verrassend lekker als saus bij het avondeten, probeer eens bij aardappelen met een stuk vlees of vis"
var productTextNakd ="Deze onweerstaanbare en natuurlijke fruitreep van Nakd is gemaakt van dadels, cashewnoten, rozijnen, amandelen en bosbessen. Het is een verantwoord én super yummy tussendoortje voor iedereen"
var productTextBenAndJerry ="Ben & Jerry's Non-Dairy Cookies on Cookie Dough. Zuivelvrij karamelijs met een koekjes swirl en koekjesdeeg met chocolate chips chunks en cacaofantasie. Vegan gecertificeerd."


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

class CarouselAanbiedingen extends React.Component {
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
            pathname: "/calvePindakaas",
            state: {
              name: "Calvé pindakaas",
              prijs: "€ 2,59",
              image: calvePindakaas,
              weight: "300g",
              producttext: productText,
              voorraad1: voorraadMedium,
              voorraad2: voorraadGoed,
              voorraad3: voorraadSlecht,
              rij: "3",
              hoogte: "5",
              kolom: "12",
              energie: "415",
              vetten: "15",
              koolhydraten: "61",
              eiwitten: "22",
              suikers: "5.5",
              zout: "0.36",
            },
          }}
        >
          <ProductSaleCard
            offer="2 voor €4,48"
            image={calvePindakaas}
            name="Calvé pindakaas"
          />
        </Link>

        <Link
          to={{
            pathname: "/buismansCappuccino",
            state: {
              name: "Buisman cappuccino",
              prijs: "€ 2,59",
              image: buismanCappuccino,
              weight: "300g",
              producttext: productText,
              voorraad1: voorraadMedium,
              voorraad2: voorraadGoed,
              voorraad3: voorraadSlecht,
              rij: "3",
              hoogte: "5",
              kolom: "12",
              energie: "415",
              vetten: "15",
              koolhydraten: "61",
              eiwitten: "22",
              suikers: "5.5",
              zout: "0.36",
            },
          }}
        >
          <ProductSaleCard
            offer="2 voor €4,48"
            image={buismanCappuccino}
            name="Buisman cappuccino"
          />
        </Link>

        <Link className="SalePageItem"
          to={{
            pathname: "/choviallioli",
            state: {
              name: "Chovi Allioli Vegan 150ml",
              prijs: "€ 0,99",
              image: Allioli,
              weight: "150ml",
              producttext: productTextAllioli,
              voorraad1: voorraadGoed,
              voorraad2: voorraadGoed,
              voorraad3: voorraadGoed,
              rij: "6",
              hoogte: "5",
              kolom: "4",
              energie: "614",
              vetten: "65",
              koolhydraten: "5,8",
              eiwitten: "0,3",
              suikers: "3,7",
              zout: "1,3",
            },
          }}
        >
          <ProductSaleCard
            offer="1 vor €0,99"
            image={Allioli}
            name="Chovi Allioli Vegan 150ml"
          />
        </Link>

        <Link
          to={{
            pathname: "/nakdfruitreep",
            state: {
              name: "Nākd Fruitreep",
              prijs: "€ 2,90",
              image: nakd,
              weight: "140g",
              producttext: productTextNakd,
              voorraad1: voorraadMedium,
              voorraad2: voorraadGoed,
              voorraad3: voorraadGoed,
              rij: "6",
              hoogte: "3",
              kolom: "25",
              energie: "371",
              vetten: "13",
              koolhydraten: "54,3",
              eiwitten: "7,1",
              suikers: "52",
              zout: "<0,1",
            },
          }}
        >
          <ProductSaleCard
            offer="2e voor 50%"
            image={nakd}
            name="Nākd Fruitreep"
          />
        </Link>

        <Link
          to={{
            pathname: "/benandjerryijs",
            state: {
              name: "Ben & Jerry's IJs Non Dairy",
              prijs: "€ 2,59",
              image: benAndJerry,
              weight: "465ml",
              producttext: productTextBenAndJerry,
              voorraad1: voorraadMedium,
              voorraad2: voorraadGoed,
              voorraad3: voorraadSlecht,
              rij: "9",
              hoogte: "2",
              kolom: "30",
              energie: "264",
              vetten: "14",
              koolhydraten: "33",
              eiwitten: "1,9",
              suikers: "23",
              zout: "0,14",
            },
          }}
        >
          <ProductSaleCard
            offer="20% korting"
            image={benAndJerry}
            name="Ben & Jerry's IJs Non Dairy"
          />
        </Link>
      </Carousel>
    );
  }
}

export default CarouselAanbiedingen;
