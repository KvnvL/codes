import React from 'react'


const ReceiptItem = ({store,date,price,articles}) => {
    return (
        <div className="receiptItem">
        <div>
            <h2>{store}</h2>
            <p>{date}</p>
            <p>€{price}</p>
            <p>Artikelen: {articles}</p>
            </div>
            <i className="fas fa-arrow-alt-circle-right"></i>
        </div>
    )
}

export default ReceiptItem
