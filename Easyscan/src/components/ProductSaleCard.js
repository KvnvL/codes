const ProductSaleCard = ({ image, offer, name }) => {
  return (
    <div className="producSaleCardWrapper">
      <div className="productSaleCard">
        <img src={image} alt=""></img>

        <div className="productSaleCardSticker">
          <div className="productSaleCardStickerCircle">
            <div className="productSaleCardStickerOffer">
              <h4>{offer}</h4>
            </div>
          </div>
        </div>

        <div className="productSaleCardOverlay"></div>
      </div>

      <div className="productSaleCardName">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default ProductSaleCard;
