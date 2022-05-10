import React from 'react'
import ReceiptItem from '../components/ReceiptItem'
import "../component style/receiptItem.css"

const Receipts = () => {
    return (
        <div>
            <h1>Bonnetjes</h1>
            <div id="receiptWrapper">

            <ReceiptItem store="Budgetmart - Tilburg Centrum" date="29-11-2021" price="17.75" articles="11"></ReceiptItem>
            <ReceiptItem store="Budgetmart - Tilburg Stappegoor" date="25-11-2021" price="3.56" articles="2"></ReceiptItem>
            <ReceiptItem store="Budgetmart - Tilburg Centrum" date="22-11-2021" price="12.89" articles="8"/>
            <ReceiptItem store="Budgetmart - Berkel Enschot" date="21-11-2021" price="5.35" articles="4"/>
            <ReceiptItem store="Budgetmart - Tilburg Centrum" date="21-11-2021" price="20.66" articles="9"/>
            
            </div>
        </div>
    )
}

export default Receipts
