import { useLocation } from "react-router";

const ProductPagina = () => {
  const location = useLocation();
  const {
    name,
    prijs,
    image,
    weight,
    producttext,
    voorraad1,
    voorraad2,
    voorraad3,
    rij,
    hoogte,
    kolom,
    energie,
    vetten,
    koolhydraten,
    suikers,
    eiwitten,
    zout,
  } = location.state;

  return (
    <div>
      <h1 id="ProductPageTitle">Product informatie</h1>
      <h2 id="ProductPageName">{name}</h2>
      <div id="ProductPageImageWrapper">
        <img id="ProductPageImage" src={image} alt="" />
        <h3 id="ProductPageImageCal">{weight}</h3>
      </div>
      <h1 id="ProductPagePrice">{prijs}</h1>
      <p id="producttext">{producttext}</p>
      <div id="voorraad">
        <h2>Voorraad</h2>
        <table>
          <thead>
            <tr>
              <th>Filiaal</th>
              <th>Voorraad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tilburg</td>
              <td>
                <img src={voorraad1} alt="" />
              </td>
            </tr>
            <tr>
              <td>Eindhoven</td>
              <td>
                <img src={voorraad2} alt="" />
              </td>
            </tr>
            <tr>
              <td>Haaren</td>
              <td>
                <img src={voorraad3} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="ingredienten">
        <h2>Ingrediënten</h2>
        <ul>
          <li>zout</li>
          <li>Plantaardige olie </li>
          <li>Zout</li>
          <li>Palmolie op duurzame wijze geteeld.</li>
        </ul>
      </div>
      <div id="voedingswaren">
        <h2>Voedingswaren</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Per 100g</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Energie</td>
              <td>{energie} kcal</td>
            </tr>
            <tr>
              <td>Vetten</td>
              <td>{vetten}g</td>
            </tr>
            <tr>
              <td>Koolhydraten</td>
              <td>{koolhydraten}g</td>
            </tr>
            <tr>
              <td>Suikers</td>
              <td>{suikers}g</td>
            </tr>
            <tr>
              <td>Eiwitten</td>
              <td>{eiwitten}g</td>
            </tr>
            <tr>
              <td>Zout</td>
              <td>{zout}g</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="productLocatie">
        <h2>Product locatie</h2>
        <table>
          <thead>
            <tr>
              <th>Rij</th>
              <th>vak hoogte</th>
              <th>Vak kolom</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{rij}</td>
              <td>{hoogte}</td>
              <td>{kolom}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="routeButtonWrapper">
        <div id="routeButton">
          Route &nbsp;<i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductPagina;
