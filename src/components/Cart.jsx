import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const { products, totalQuantity, totalAmount } = useSelector((state) => state.cart);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <div>
        {products.map((product) => (
          <div className="cart-item" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div className="cart-item-details">
              <h3 className="cart-item-title">{product.title}</h3>
              <p className="cart-item-description">{product.description}</p>
              <p className="cart-item-price">${product.price}</p>
              <div className="cart-item-quantity">
                <button onClick={() => dispatch(removeFromCart(product.id))}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => dispatch(addToCart(product))}>+</button>
              </div>
              <p className="cart-item-total-price">Total Price: ${product.totalPrice.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <span>Total Quantity: {totalQuantity}</span>
        <span>Total Amount: ${totalAmount.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Cart;
