import { ContainerProduct } from "./styles";

const CartProduct = ({ cartProduct, cartProducts, setCartProducts }) => {
  const removeItem = (toRemove) => {
    const newCart = cartProducts.filter((item) => item !== toRemove);
    setCartProducts(newCart);
  };

  return (
    <ContainerProduct>
      <div className="cart-img">
        <img src={cartProduct.img} alt=""></img>
      </div>
      <div className="cart-info">
        <h3>{cartProduct.name}</h3>
        <span>{cartProduct.category}</span>
      </div>
      <div className="cart-button">
        <button onClick={() => removeItem(cartProduct)}>Remover</button>
        <p>{cartProduct.quantity}</p>
      </div>
    </ContainerProduct>
  );
};

export default CartProduct;
