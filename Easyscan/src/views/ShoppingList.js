import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import {
    onSnapshot,
    doc,
    setDoc,
    increment,
    updateDoc,
    getDoc,
    collection,
    deleteDoc
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-auth";
import { db } from "../firebase-config";
import "../component style/shoppingList.css";

class Boodschappenlijst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            product: [],
            groceryList: [],
            productSearch: '',
            productSearchResult: [],
            user: ''
        };
        this.handleChange = this.handleChange.bind(this);
    };

    async componentDidMount() {
        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                console.log("darn")
            } else {
                this.state.user = user.uid;
                onSnapshot(
                    collection(db, "Users", this.state.user, "boodschappenLijst"), (snapshot) => {
                        this.setState({ groceryList: snapshot.docs.map(doc => doc.data()) })
                        //console.log(this.state.groceryList)
                    });
            }
        })
    }

    searchProduct = async (e) => {
        e.preventDefault();

        let json = null
        try {
            let response = await fetch('https://world.openfoodfacts.org/cgi/search.pl?search_terms=' + this.state.productSearch + '&json=1')
            json = await response.json();

            this.setState({ productSearchResult: [] })
            this.setState({ productSearchResult: this.state.productSearchResult.concat([json]) })
            console.log(this.state.productSearchResult)

            // try {
            //     response = await fetch('https://world.openfoodfacts.org/api/v0/product/' + this.state.productSearchResult[0]._id + '.json')
            //     json = await response.json();

            this.setNewProduct(json)
            // } catch (err) {
            //     console.log(err);
            // }
        } catch (err) {
            console.log(err);
        }
    }


    setNewProduct = async (json) => {
        this.setState({ product: [] })
        this.setState({ product: this.state.product.concat([json]) })

        // console.log(this.state.product[0].products[0])

        let newProduct = { productNaam: this.state.product[0].products[0].product_name, imgUrl: this.state.product[0].products[0].image_front_thumb_url, id: 'TO-DO: id toevoegen' }

        const docRef = doc(db, "Users", this.state.user, "boodschappenLijst", newProduct.productNaam);
        const docSnap = await getDoc(docRef);
        // console.log(docSnap)

        if (docSnap.exists()) {
            await updateDoc(doc(db, "Users", this.state.user, "boodschappenLijst", newProduct.productNaam), {
                hoeveelheid: increment(1),
                prijs: increment(1.19),
                timeStamp: Math.floor(Date.now() / 1000)
            });
        } else {
            await setDoc(doc(db, "Users", this.state.user, "boodschappenLijst", newProduct.productNaam), {
                productNaam: newProduct.productNaam,
                imgUrl: newProduct.imgUrl,
                prijs: 1.19,
                hoeveelheid: 1,
                timeStamp: Math.floor(Date.now() / 1000)
            });
        }
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ productSearch: e.target.value });
    }

    addList = async (naam) => {
        await updateDoc(doc(db, "Users", this.state.user, "boodschappenLijst", naam), {
            hoeveelheid: increment(1),
            prijs: increment(1.19),
        });
    }

    removeList = async (naam) => {
        await updateDoc(doc(db, "Users", this.state.user, "boodschappenLijst", naam), {
            hoeveelheid: increment(-1),
            prijs: increment(-1.19),
        });
    }

    deleteItemList = async (naam) => {
        await deleteDoc(doc(db, "Users", this.state.user, "boodschappenLijst", naam));
    }

    render() {
        return (
            <div className="winkelwagen">
                <h1>Boodschappenlijst</h1>
                <form onSubmit={this.searchProduct}>
                    <div>
                        <FaSearch id="searchIcon" />
                        <input id="searchbar" type='text' value={this.state.productSearch} onChange={this.handleChange} placeholder="Zoek een product" />
                    </div>
                </form>
                <div className="recipeWrapper">
                    {
                    this.state.groceryList.map(grocery => {
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
                            <i className="fas fa-minus-circle" onClick={() => {if(grocery.hoeveelheid === 1){if(window.confirm("sure?")){this.deleteItemList(grocery.productNaam)}}else{this.removeList(grocery.productNaam)}}}></i>
                            <h3>{grocery.hoeveelheid}</h3>
                            <i className="fas fa-plus-circle" onClick={() => {this.addList(grocery.productNaam)}}></i>
                            </div>
                        </div>
                        )
                    })
                    }
                </div>
            </div>
        );
    }
}

export default Boodschappenlijst
