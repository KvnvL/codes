import React, { Component } from "react";
import {
    collection,
    onSnapshot,
    doc,
    setDoc,
    increment,
    updateDoc,
    getDoc,
    orderBy,
    limit,
    deleteDoc
} from "firebase/firestore";
import { db } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-auth";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

import "../component style/barcodeScanner.css";

class BarcodeScanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            product: [],
            groceryList: [],
            open: false,
            productSearch: "",
            productSearchResult: [],
            togglePopup: false,
            user: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        // onSnapshot(collection(db, "Winkelwagen"), (snapshot) => {
        //     this.setState({ grocerys: snapshot.docs.map(doc => doc.data()) })
        // });
        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                console.log("darn");
            } else {
                this.state.user = user.uid;
                onSnapshot(
                    collection(db, "Users", this.state.user, "boodschappenLijst"),
                    (snapshot) => {
                        this.setState({
                            groceryList: snapshot.docs.map((doc) => doc.data()),
                        });
                        console.log(this.state.groceryList);
                    }
                );
            }
        });
    }

    _scan = () => {
        this.setState({ scanning: !this.state.scanning });
    };

    onDetected = async (result) => {
        let beep = new Audio("./beep.wav");
        beep.play();

        const response = await fetch(
            "https://world.openfoodfacts.org/api/v0/product/" + result + ".json"
        );
        const json = await response.json();
        this.setState({ togglePopup: true });
        setTimeout(() => {
            this.setState({ togglePopup: false });
        }, 8000);

        console.log(json);

        this.allergieCheck(json);
    };

    //Functie om makkelijker te debuggen. als je op de knop drukt wordt er een product gescanned zonder dat je een barcode hoeft te laten zien.
    quickScan = async (result) => {
        let beep = new Audio("./beep.wav");
        beep.play();

        const response = await fetch(
            "https://world.openfoodfacts.org/api/v0/product/" + result + ".json"
        );
        const json = await response.json();

        this.allergieCheck(json);
    };

    searchProduct = async (e) => {
        e.preventDefault();

        let json = null;
        try {
            let response = await fetch(
                "https://nl.openfoodfacts.org/categorie/" +
                this.state.productSearch +
                ".json"
            );
            json = await response.json();

            this.setState({ productSearchResult: [] });
            this.setState({
                productSearchResult: this.state.productSearchResult.concat([json]),
            });
            console.log(this.state.productSearchResult);

            try {
                response = await fetch(
                    "https://world.openfoodfacts.org/api/v0/product/" +
                    this.state.productSearchResult[0]._id +
                    ".json"
                );
                json = await response.json();

                this.allergieCheck(json);
            } catch (err) {
                console.log(err);
            }
        } catch (err) {
            console.log(err);
        }
    };

    allergieCheck = (json) => {
        if (json.product.hasOwnProperty("allergens")) {
            if (json.product.allergens === "en:nuts") {
                var r = window.confirm('Dit product bevat noten, ')
                if (r) {
                    this.setNewProduct(json)
                } else {
                    console.log("scan canceled")
                }
            } else {
                this.setNewProduct(json)
            }
        } else {
            this.setNewProduct(json)
        }
    }

    // Voegt een nieuw product toe aan de winkelwagen. Als deze als bestaat gaat de hoeveelheid van het product omhoog.
    setNewProduct = async (json) => {
        console.log(json)

        this.setState({ product: [] });
        this.setState({ product: this.state.product.concat([json]) });

        let newProduct = {
            productNaam: this.state.product[0].product.product_name,
            imgUrl: this.state.product[0].product.image_front_thumb_url,
            id: "TO-DO: id toevoegen",
        };
        const docRef = doc(
            db,
            "Users",
            this.state.user,
            "Winkelwagen",
            newProduct.productNaam
        );
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            await updateDoc(docRef, {
                hoeveelheid: increment(1),
                prijs: increment(1.19),
                timeStamp: Math.floor(Date.now() / 1000),
            });
        } else {
            await setDoc(docRef, {
                productNaam: newProduct.productNaam,
                imgUrl: newProduct.imgUrl,
                prijs: 1.19,
                hoeveelheid: 1,
                timeStamp: Math.floor(Date.now() / 1000),
            });
        }
    };

    async componentDidMount() {
        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                console.log("darn");
            } else {
                this.state.user = user.uid;
                onSnapshot(
                    collection(db, "Users", this.state.user, "Winkelwagen"),
                    orderBy("Timestamp", "desc"),
                    (snapshot) => {
                        this.setState({
                            groceryList: snapshot.docs.map((doc) => doc.data()),
                        });
                        console.log(this.state.groceryList);
                    }
                );
            }
        });
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ productSearch: e.target.value });
    }

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    addList = async (naam) => {
        await updateDoc(doc(db, "Users", this.state.user, "Winkelwagen", naam), {
            hoeveelheid: increment(1),
            prijs: increment(1.19),
        });
    }

    removeList = async (naam) => {
        await updateDoc(doc(db, "Users", this.state.user, "Winkelwagen", naam), {
            hoeveelheid: increment(-1),
            prijs: increment(-1.19),
        });
    }

    deleteItemList = async (naam) => {
        await deleteDoc(doc(db, "Users", this.state.user, "Winkelwagen", naam));
    }


    render() {

        return (
            <div>
                <div>
                    <BarcodeScannerComponent
                        onUpdate={(err, result) => {
                            if (result) this.onDetected(result.text);
                            else console.log(err);
                        }}
                    />
                    <button id="backup" onClick={() => this.quickScan("5449000000897")}>
                        quick scan
                    </button>
                </div>

                <div id="scanPopup" className={this.state.togglePopup ? "popup" : ""}>
                    {
                        this.state.groceryList.map(grocery => {
                            return (
                                <div key={grocery.id}>
                                    <div id="popupItem">
                                        <img src={grocery.imgUrl} alt="" />
                                        <h2>{grocery.productNaam}</h2>
                                        <div className="numberwrapper">
                                            <i className="fas fa-minus-circle" onClick={() => { if (grocery.hoeveelheid === 1) { if (window.confirm("sure?")) { this.deleteItemList(grocery.productNaam) } } else { this.removeList(grocery.productNaam) } }}></i>
                                            <h3>{grocery.hoeveelheid}</h3>
                                            <i className="fas fa-plus-circle" onClick={() => { this.addList(grocery.productNaam) }}></i>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <h2></h2>
                </div>
            </div>
        );
    }
}

export default BarcodeScanner;