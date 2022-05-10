import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { getAuth } from "firebase/auth";
import { collection, onSnapshot, doc, increment, updateDoc, deleteDoc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { auth } from "../firebase-auth";
import { onAuthStateChanged } from "firebase/auth";


function ShoppingCart() {
  const [recipe, setRecipe] = useState([]);
  const [shoppingList, setShoppingList] = useState([])

  let priceTotal = 0;
  let prodTotal = 0;

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const data = collection(db, "Users", user.uid, "Winkelwagen")
      const unsub = onSnapshot(data, (querySnapshot) => {
        let recipeArray = [];
        querySnapshot.forEach((doc) => {
          recipeArray.push({ ...doc.data(), id: doc.id });
        });
        setRecipe(recipeArray.sort((a, b) => a.newName > b.newName));
      });
      onSnapshot(
        collection(db, "Users", user.uid, "boodschappenLijst"), (snapshot) => {
            setShoppingList(snapshot.docs.map(doc => doc.data()))
        }
      );
      console.table(shoppingList)

      return () => unsub();
    }
  }, []);

  //Aantal verhogen winkelwagen item
  async function add(naam) {
    await updateDoc(doc(db, "Users", user.uid, "Winkelwagen", naam), {
      hoeveelheid: increment(1),
      prijs: increment(1.19),
    });
  }

  //Wijzigen aantal winkelwagen item (-)
  async function remove(naam) {
    await updateDoc(doc(db, "Users", user.uid, "Winkelwagen", naam), {
      hoeveelheid: increment(-1),
      prijs: increment(-1.19),
    });
  }

  //Verwijderen winkelwagen item
  async function deleteItem(naam) {
    await deleteDoc(doc(db, "Users", user.uid, "Winkelwagen", naam));
  }

  //Aantal verhogen boodschappenlijst item
  async function addList(naam) {
    await updateDoc(doc(db, "Users", user.uid, "boodschappenLijst", naam), {
      hoeveelheid: increment(1),
      prijs: increment(1.19),
    });
  }

  //wijzigen boodschappenlijst aantal (-)
  async function removeList(naam) {
    await updateDoc(doc(db, "Users", user.uid, "boodschappenLijst", naam), {
      hoeveelheid: increment(-1),
      prijs: increment(-1.19),
    });
  }

  //Verwijderen boodschappenlijst item
  async function deleteItemList(naam) {
    await deleteDoc(doc(db, "Users", user.uid, "boodschappenLijst", naam));
  }

  //Verzend winkelwagen data naar betaalscherm
  const sendCartData = () => {
    setDoc(doc(db, "Users", user.uid, "Winkelwagen-Data", "data"), {
      totaalprijs: priceTotal,
      totaalproducten: prodTotal,
    });
  }

  recipe.map((item) => {
    priceTotal = priceTotal + item.prijs;
    prodTotal = prodTotal + item.hoeveelheid;
  })

  const priceTotalString = '' + priceTotal
  console.log(priceTotalString.length)

  return (
    <div className="winkelwagen-pagina">
      <div className="recipeWrapper">
          <h1>Jouw Winkelwagen</h1>
          <div className="recipeWrapper">
            {
              recipe.map(grocery => {
                return (
                <div className="shoppingcart-item" key={grocery.id}>
                    <div className="shoppingcart-item-left">
                      <div className="img-wrapper">
                        <img className="shoppingcart-img" src={grocery.imgUrl} alt="" />
                      </div>
                        <div className="cart-vertical-wrapper">
                            <h3 className="shoppingcart-name">{grocery.productNaam}</h3>
                            <p className="shoppingcart-price">€1.19</p>
                        </div>
                    </div>
                    <p className="shoppingcart-price total-price">€{grocery.prijs}</p>
                    <div className="shoppingcart-amount">
                    <i className="fas fa-minus-circle" onClick={() => {if(grocery.hoeveelheid === 1){if(window.confirm("sure?")){deleteItem(grocery.productNaam)}}else{remove(grocery.productNaam)}}}></i>
                    <h3>{grocery.hoeveelheid}</h3>
                    <i className="fas fa-plus-circle" onClick={() => {add(grocery.productNaam)}}></i>
                    </div>
                </div>
                )
              })
            }
          </div>
          <div className="winkelwagen boodschappenlijst">
          <h1>Boodschappenlijst</h1>
          <div className="recipeWrapper">
            {
              shoppingList.map(grocery => {
                return (
                <div className="shoppingcart-item" key={grocery.id}>
                    <div className="shoppingcart-item-left">
                      <div className="img-wrapper">
                        <img className="shoppingcart-img" src={grocery.imgUrl} alt="" />
                      </div>
                        <div className="cart-vertical-wrapper">
                            <h3 className="shoppingcart-name">{grocery.productNaam}</h3>
                            <p className="shoppingcart-price">€1.19</p>
                        </div>
                    </div>
                    <p className="shoppingcart-price total-price">€{grocery.prijs}</p>
                    <div className="shoppingcart-amount">
                    <i className="fas fa-minus-circle" onClick={() => {if(grocery.hoeveelheid === 1){if(window.confirm("sure?")){deleteItemList(grocery.productNaam)}}else{removeList(grocery.productNaam)}}}></i>
                    <h3>{grocery.hoeveelheid}</h3>
                    <i className="fas fa-plus-circle" onClick={() => {addList(grocery.productNaam)}}></i>
                    </div>
                </div>
                )
              })
            }
          </div>
      </div>
          <div className="bottom-screen-cart">
            <div className="cart-card-top">
              <div className="card-top-left">
                <h3>Totaal: </h3>
                <h3 className="shoppingcart-total-price">€{priceTotalString.substring(0,4)}</h3>
              </div>
              <div className="card-top-right">
                <h3>Producten: </h3>
                <h3>{prodTotal}</h3>
              </div>
            </div>
            <div className="cart-card-bottom">
              <Link to="/betalen"><button onClick={sendCartData}><i className="fas fa-credit-card"></i> Betalen</button></Link>
            </div>
          </div>  
      </div>
    </div>
  );
}

export default ShoppingCart;
