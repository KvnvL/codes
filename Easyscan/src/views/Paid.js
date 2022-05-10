function Paid() {
    return (
        <div className="paid">
            <h1>Uitchecken</h1>
            <p>Het betalen is gelukt! Scan onderstaande streepjescode om de winkel te kunnen verlaten. Lukt er iets niet? Onze medewerkers helpen u graag!</p>
            <div className="barcode">
                <h1>Streepjescode</h1>
                <img src="https://barcode.tec-it.com/barcode.ashx?data=+++++&code=Code128&multiplebarcodes=false&translate-esc=true&unit=Fit&dpi=96&imagetype=Gif&rotation=0&color=%23000000&bgcolor=%23ffffff&codepage=Default&qunit=Mm&quiet=0&hidehrt=False" alt="" />
                <img src="https://firebasestorage.googleapis.com/v0/b/budgetmart-f72ad.appspot.com/o/payed_icon.png?alt=media&token=5cd62e8d-6a1d-461c-81d3-8fbfebd0d13d" alt="" />
            </div>
        </div>
    )
}

export default Paid
