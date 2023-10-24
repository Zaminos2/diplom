import { BASE_URL } from "../utils";

function ProductCard({img,price,productTitle}) {
  return (
    <div className="productKard">
      <img src={BASE_URL + img} alt="productImg" className="productImg" />
      <div className="priceContainer">
        <p className="discountPrice">{price}$</p>
      </div>
      <p className="productTitle">{productTitle}</p>
    </div>
  );
}

export default ProductCard;
