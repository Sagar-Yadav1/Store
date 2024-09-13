import React, { Fragment, useContext } from 'react';
import styles from './style.module.css';
import CartDetails from '../../components/cartdetails';
import Navbar from '../../components/header/navbar';
import Correct from '../../icons/correct';
import Section from '../../components/section';
import { Col, Container, Row } from 'react-bootstrap';
import Button from '../../components/button';
import OrderSummary from '../../components/ordersummary';
import { AddressContext } from '../../cartcontext/addressProvider';

const Checkout = () => {
  const { address, setAddress } = useContext(AddressContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  return (
    <Fragment>
      <Navbar />
      <Section>
        <Container>
          <Row>
            <Section>
              <CartDetails
                head={"Check Out"}
                span1={<Correct />}
                tag1={"Shopping cart"}
                span2={"2"}
                tag2={"Checkout details"}
                span3={"3"}
                tag3={"Order complete"}
              />
            </Section>
            <Col lg={7}>
              <div className={`${styles.contact_info} mb-4`}>
                <div className={styles.title}>Contact Information</div>
                <div className={`${styles.user_name} pt-3`}>
                  <div className="w-100">
                    <label htmlFor="f_name">FIRST NAME</label>
                    <br />
                    <input
                      name="firstName"
                      value={address.firstName || ""}
                      type="text"
                      id="f_name"
                      placeholder="First name"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="w-100">
                    <label htmlFor="l_name">LAST NAME</label>
                    <br />
                    <input
                      name="lastName"
                      value={address.lastName || ""}
                      type="text"
                      id="l_name"
                      placeholder="Last name"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="w-100 pt-3">
                  <label htmlFor="p_number">PHONE NUMBER</label>
                  <br />
                  <input
                    name="phoneNumber"
                    value={address.phoneNumber || ""}
                    type="text"
                    id="p_number"
                    placeholder="Phone number"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="w-100 pt-3">
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <br />
                  <input
                    name="email"
                    value={address.email || ""}
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className={`${styles.shipping_address} mb-4`}>
                <div className={styles.title}>Shipping Information</div>
                <div className="w-100 pt-3">
                  <label htmlFor="streetAddress">STREET ADDRESS *</label>
                  <br />
                  <input
                    name="streetAddress"
                    value={address.streetAddress || ""}
                    type="text"
                    id="streetAddress"
                    placeholder="Street Address"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="w-100 pt-3">
                  <label htmlFor="country">COUNTRY *</label>
                  <br />
                  <select
                    id="country"
                    name="country"
                    value={address.country || ""}
                    onChange={handleInputChange}
                  >
                    <option value="">Country</option>
                    <option value="India">India</option>
                    <option value="Gova">Gova</option>
                  </select>
                </div>

                <div className="w-100 pt-3">
                  <label htmlFor="city">TOWN / CITY *</label>
                  <br />
                  <input
                    name="city"
                    value={address.city || ""}
                    type="text"
                    id="city"
                    placeholder="Town / City"
                    onChange={handleInputChange}
                  />
                </div>

                <div className={`${styles.state_zip} pt-3`}>
                  <div className="w-100">
                    <label htmlFor="state">STATE</label>
                    <br />
                    <input
                      name="state"
                      value={address.state || ""}
                      type="text"
                      id="state"
                      placeholder="State"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="w-100">
                    <label htmlFor="zipCode">ZIP CODE</label>
                    <br />
                    <input
                      name="zipCode"
                      value={address.zipCode || ""}
                      type="text"
                      id="zipCode"
                      placeholder="Zip Code"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className={styles.b_address}>
                  <input
                    type="checkbox"
                    id="b_address"
                    name="differentBillingAddress"
                    value={address.differentBillingAddress || false}
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        differentBillingAddress: e.target.checked,
                      })
                    }
                  />
                  <label htmlFor="b_address">
                    Use a different billing address (optional)
                  </label>
                </div>
              </div>

              <div className={`${styles.payment_method} mb-4`}>
                <div className={styles.title}>Payment method</div>
                <div className="pt-3">
                  <div className={`${styles.pay_method}`}>
                    <input
                      type="radio"
                      id="credit"
                      name="paymentMethod"
                      value="credit"
                      checked={address.paymentMethod === "credit"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="credit">Pay by Credit Card</label>
                  </div>
                </div>

                <div className={`${styles.pay_pal} pt-3 pb-4`}>
                  <div className={`${styles.pay_method}`}>
                    <input
                      type="radio"
                      id="paypal"
                      name="paymentMethod"
                      value="paypal"
                      checked={address.paymentMethod === "paypal"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="paypal">Paypal</label>
                  </div>
                </div>

                <div className="w-100 pt-3">
                  <label htmlFor="cardNumber">CARD NUMBER</label>
                  <br />
                  <input
                    name="cardNumber"
                    value={address.cardNumber || ""}
                    type="text"
                    id="cardNumber"
                    placeholder="1234 1234 1234"
                    onChange={handleInputChange}
                  />
                </div>

                <div className={`${styles.state_zip} pt-3`}>
                  <div className="w-100">
                    <label htmlFor="expiryDate">EXPIRATION DATE</label>
                    <br />
                    <input
                      name="expiryDate"
                      value={address.expiryDate || ""}
                      type="text"
                      id="expiryDate"
                      placeholder="MM/YY"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="w-100">
                    <label htmlFor="cvc">CVC</label>
                    <br />
                    <input
                      name="cvc"
                      value={address.cvc || ""}
                      type="text"
                      id="cvc"
                      placeholder="CVC code"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.btn}>
                <Button
                  type={"fill"}
                  text={"Place Order"}
                  size={"medium"}
                  customCss={styles.order_btn}
                  display={"block"}
                  align={"center"}
                />
              </div>
            </Col>
            <Col lg={5}>
              <OrderSummary />
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
};

export default Checkout;
