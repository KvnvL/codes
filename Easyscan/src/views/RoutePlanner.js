import React, { Component } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-auth";
import '../component style/routePlanner.css'
import { db } from "../firebase-config"; import {
    onSnapshot,
    collection,
    orderBy,
    query,
    limit
} from '@firebase/firestore';
import routeImg from "../img/routeplanner.png"

class RoutePlanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groceryList: [],
            user: ''
        };
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
                        console.log(this.state.groceryList)
                    });
            }
        })
    };
    render() {

        return (
            <div>
                <img id="routeImg" src={routeImg} />
                <div>
                    {
                        this.state.groceryList.map(function (grocery, index) {
                            return (
                                <div key={index} className="routeItemWrapper" >
                                    <div className="grocery-item">
                                        <h2>{index + 1}</h2>
                                        <img src={grocery.imgUrl} alt="" />
                                        <h1>{grocery.productNaam}</h1>
                                        <h2>{grocery.hoeveelheid}</h2>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}	

export default RoutePlanner
