import React, { Fragment, useContext } from 'react';
import styles from './style.module.css';
import Navbar from '../../components/header/navbar';
import Section from '../../components/section';
import { Col, Container, Row } from 'react-bootstrap';
import CartProduct from '../../components/cartproducts';
import Summary from '../../components/summary';
import CartDetails from '../../components/cartdetails';
import { CartContext } from '../../cartcontext';
import Footer1 from '../../components/footer1';
import Coupon from '../../icons/coupon';

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity)
  };

  return (
    <Fragment>
      <Navbar />
      <Section>
        <Container>
          <Row>
            <CartDetails head={"Cart"} span1={"1"} tag1={"Shopping cart"} span2={"2"} tag2={"Checkout details"} span3={"3"} tag3={"Order complete"} />
          </Row>
          <Row>
            <Col lg={7}>
              <div className={styles.cart_heading}>
                <span className={styles.product}>Product</span>
                <div className={styles.ch_sub}>
                  <span className={styles.quantity}>Quantity</span>
                  <span className={styles.price}>Price</span>
                  <span className={styles.subtotle}>Subtotal</span>
                </div>
              </div>
              <div className={styles.cart_items}>
                {cart.map((cart, i) => (
                  <CartProduct key={i}
                    image={cart.image}
                    id={cart.id}
                    title={cart.title}
                    color={cart.color}
                    NavItem={cart.Navitem}
                    price={cart.price}
                    subtotle={cart.subtotle}
                    quantity={cart.quantity}
                    removeFromCart={removeFromCart}
                    handleQuantityChange={handleQuantityChange}
                  />
                ))}
              </div>
            </Col>
            <Col lg={5}>
              <Summary />
            </Col>
          </Row>
          <div className={styles.coupon}>
            <h6>Have a coupon?</h6>
            <span>Add your code for an instant cart discount</span>
          </div>
          <div className={styles.coupon_code}>
            <div className={styles.coupon_icon}>
              <Coupon />
            </div>
            <input type="text" placeholder="Coupon Code" />
            <button>Apply</button>
          </div>
        </Container>
      </Section>
      <Footer1 />
    </Fragment>
  );
}

export default Cart;