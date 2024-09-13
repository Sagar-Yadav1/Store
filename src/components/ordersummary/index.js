import React ,{useContext} from 'react';
import styles from './style.module.css';
import Button from '../button';
import TopIcon from '../../icons/topicon';
import CartItem from '../sideCartBar/cartItem';
import { CartContext } from '../../cartcontext';

const OrderSummary = () => {
  const { cart, removeFromCart, clearCart, updateQuantity  } = useContext(CartContext); 
  
  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  return (
    <div className={styles.cartSummary}>
      <h3>Order summary</h3>

      <div className={styles.shippingOptions}>
        {cart.map((value, index) => (
        <CartItem
        key={index}
        id={value.id}
        name={value.title}
        quantity={value.quantity}
        price={value.price}
        color={value.color}
        imgUrl={value.image}  
        handleQuantityChange={handleQuantityChange}
        removeFromCart={removeFromCart}
        />
        ))}
      </div>
      <div className={styles.summary}>
        <div className={styles.summary_input}>
            <input type="text" placeholder="input"/>
            <Button type={"fill"} text={"Apply"} size={"medium"}  />
        </div>
        <div className={`${styles.subtotal} ${styles.jankate} `}>
          <span><TopIcon/> JankateMW</span>
          <span className={styles.jankate_2}>-$25.00 [Remove] </span>
        </div>
        <hr /> 
        <div className={styles.subtotal}>
          <span>Shipping</span>
          <span><b>Free</b></span>
        </div> 
      <hr /> 
        <div className={styles.subtotal}>
          <span>Subtotal</span>
          <span><b>$ 13.00</b></span>
        </div>
        <hr /> 
        <div className={styles.total}>
          <span>Total</span>
          <span>$ 479.00 </span>
        </div>  
        </div>
    </div>
  );
};

export default OrderSummary;
