import React from 'react'
import { Link } from "react-router-dom";
import ProductSaleCard from "../components/ProductSaleCard";
import calvePindakaas from "../img/calvePindakaas.png";
import buismanCappuccino from "../img/buismanCappuccino.png";
import voorraadGoed from "../img/voorraadGoed.png";
import voorraadMedium from "../img/voorraadMedium.png";
import voorraadSlecht from "../img/voorraadSlecht.png";
import Allioli from "../img/vegaAllioli.png"
import nakd from "../img/nakd.png"
import benAndJerry from "../img/BenAndJerry.png"
import neleman from "../img/neleman.png"
import hak from "../img/hakbonen.png"
import spek from "../img/spek.png"
var productText ="Krachtige koffie met een extra lekkere dikke laag melkschuim. Volgens de Italianen drink je alleen 's ochtends cappuccino, maar van ons mag je elk moment bijzonder maken met deze heerlijke drank. De voortreffelijke combinatie van krachtige koffie en een romige melksmaak, bekroon het met een vleugje cacao.";
var productTextCalve = "Ontdek de heerlijke smaak van Calve pindakaas, de enige echte pindakaas, al sinds 1948. En dat proef je meteen!"
var productTextAllioli = "Lekker als dip bij stokbrood. Verrassend lekker als saus bij het avondeten, probeer eens bij aardappelen met een stuk vlees of vis"
var productTextNakd ="Deze onweerstaanbare en natuurlijke fruitreep van Nakd is gemaakt van dadels, cashewnoten, rozijnen, amandelen en bosbessen. Het is een verantwoord én super yummy tussendoortje voor iedereen"
var productTextBenAndJerry ="Ben & Jerry's Non-Dairy Cookies on Cookie Dough. Zuivelvrij karamelijs met een koekjes swirl en koekjesdeeg met chocolate chips chunks en cacaofantasie. Vegan gecertificeerd."
var productTextNeleman = "De wijnen van de Nederlander Derrick Neleman worden altijd gemaakt van biologisch verbouwde druiven. Het motto van Neleman luidt dan ook: goede wijn wordt gemaakt in de wijngaard. In het geval van deze robuuste rode wijn wordt hij gemaakt van de nationale trots van Spanje: tempranillo. Deze druif kan uitstekend rijpen op eikenhouten vaten."
var productTextHak = "100% natuurlijke ingredienten. Lekker bij vis."
var productTextSpek = "Gerookte en gezouten varkensspekblokjes, heerlijk door de pasta, stoofpotten of over de salade. Gezouten en gerookt, dat proef je terug in de karakteristieke smaak!"

const SalePage = () => {
    return (
        <div>
            <h1>Aanbiedingen</h1>
            <div id="salepageWrapper">
            <Link className="SalePageItem"
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
              suikers: "5,5",
              zout: "0,36",
            },
          }}
        >
          <ProductSaleCard
            offer="2 voor €4,48"
            image={calvePindakaas}
            name="Calvé pindakaas"
          />
        </Link>

        <Link className="SalePageItem"
          to={{
            pathname: "/buismansCappuccino",
            state: {
              name: "Buisman cappuccino",
              prijs: "€ 2,59",
              image: buismanCappuccino,
              weight: "300g",
              producttext: productTextCalve,
              voorraad1: voorraadGoed,
              voorraad2: voorraadMedium,
              voorraad3: voorraadSlecht,
              rij: "3",
              hoogte: "5",
              kolom: "12",
              energie: "664",
              vetten: "58",
              koolhydraten: "11",
              eiwitten: "21",
              suikers: "6,4",
              zout: "0,55",
            },
          }}
        >
          <ProductSaleCard
            offer="2 voor € 4,48"
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
              weight: "300g",
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

        <Link className="SalePageItem"
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

        <Link className="SalePageItem"
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

        <Link className="SalePageItem"
          to={{
            pathname: "/neleman",
            state: {
              name: "Neleman - Tempranillo",
              prijs: "€ 2,59",
              image: neleman,
              weight: "750ml",
              producttext: productTextNeleman,
              voorraad1: voorraadGoed,
              voorraad2: voorraadGoed,
              voorraad3: voorraadGoed,
              rij: "2",
              hoogte: "4",
              kolom: "5",
              energie: "-",
              vetten: "-",
              koolhydraten: "-",
              eiwitten: "-",
              suikers: "-",
              zout: "-",
            },
          }}
        >
          <ProductSaleCard
            offer="2e voor 50%"
            image={neleman}
            name="Neleman - Tempranillo"
          />
        </Link>
        <Link className="SalePageItem"
          to={{
            pathname: "/hakbonen",
            state: {
              name: "Hak Gesneden Bonen",
              prijs: "€ 1,44",
              image: hak,
              weight: "340g",
              producttext: productTextHak,
              voorraad1: voorraadMedium,
              voorraad2: voorraadGoed,
              voorraad3: voorraadSlecht,
              rij: "1",
              hoogte: "2",
              kolom: "3",
              energie: "25",
              vetten: "0,4",
              koolhydraten: "2,2",
              eiwitten: "1,8",
              suikers: "1,2",
              zout: "0,34",
            },
          }}
        >
          <ProductSaleCard
            offer="4 voor €3,00"
            image={hak}
            name="Hak Gesneden Bonen"
          />
        </Link>
        <Link className="SalePageItem"
          to={{
            pathname: "/spekblokjes",
            state: {
              name: "Jumbo Gerookte Spekblokjes",
              prijs: "€ 3,75",
              image:  spek,
              weight: "250g",
              producttext: productTextSpek,
              voorraad1: voorraadMedium,
              voorraad2: voorraadMedium,
              voorraad3: voorraadMedium,
              rij: "6",
              hoogte: "2",
              kolom: "12",
              energie: "282",
              vetten: "24",
              koolhydraten: "0,5",
              eiwitten: "16",
              suikers: "0,5",
              zout: "3",
            },
          }}
        >
          <ProductSaleCard
            offer="2e voor 50%"
            image={spek}
            name="Jumbo Gerookte Spekblokjes"
          />
        </Link>
        </div>
        </div>
    )
}

export default SalePage
