import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import img from "../../assets/images/chair1.png";
import img2 from "../../assets/images/subchair1.png";
import img21 from "../../assets/images/subchair2.png";
import img22 from "../../assets/images/subchair3.png";
import img3 from "../../assets/images/cart6.png";
import img31 from "../../assets/images/cart4.png";
import img32 from "../../assets/images/cart7.png";
import img33 from "../../assets/images/cart5.png";
import img4 from "../../assets/images/avatar1.png";
import img41 from "../../assets/images/avatar2.png";
import img42 from "../../assets/images/avatar3.png";
import img43 from "../../assets/images/avatar4.png";
import img44 from "../../assets/images/avatar5.png";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../button";
import Wishlist from "../../icons/wishlist";
import { Link } from "react-router-dom";
import StarIcon from "../../icons/staricon";

const UserData = [
  {
    imgUrl: img4,
    name: "Sofia Harvetz",
    description:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
  },
  {
    imgUrl: img41,
    name: "Sofia Harvetz",
    description:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
  },
  {
    imgUrl: img42,
    name: "Sofia Harvetz",
    description:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
  },
  {
    imgUrl: img43,
    name: "Sofia Harvetz",
    description:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
  },
  {
    imgUrl: img44,
    name: "Sofia Harvetz",
    description:
      "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
  },
];

const SingleProductPage = ({ img, title, id, item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const quantityChange = (type) => {
    if (type === "min" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "plus") {
      setQuantity(quantity + 1);
    }
  }

  const handleAddToCart = () => {
    addToCart(item, quantity)
  }
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <div className={styles.product_slider}>
            <div className={styles.product_big_img}>
              <div className={styles.img}>
                <img src={img} alt="single product img" />
              </div>
              <div className={styles.product_info}>
                <h5 className={styles.product_new}>NEW</h5>
                <span>-50%</span>
              </div>
            </div>
            <div className={styles.product_small_img}>
              <img src={img} alt="single product img" />
              <img src={img} alt="single product img" />
              <img src={img} alt="single product img" />
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className={styles.product_details}>
            <div className={styles.review}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <span>11 Reviews</span>
            </div>
            <h2 className={styles.title}>{title}</h2>
            <p>
              Buy one or buy a few and make every space where you sit more
              convenient. Light and easy to move around with removable tray top,
              handy for serving snacks.
            </p>
            <div className={styles.price}>
              $199.00
              <del>$400.00</del>
            </div>
            <div className={styles.expires_datdline}>
              <div className={styles.expires_date_text}>Offer expires in:</div>
              <div className={styles.expires_date}>
                <div className={styles.expires_date_time}>
                  <div className={styles.title}>02</div>
                  <span>Days</span>
                </div>
                <div className={styles.expires_date_time}>
                  <div className={styles.title}>12</div>
                  <span>Hours</span>
                </div>
                <div className={styles.expires_date_time}>
                  <div className={styles.title}>45</div>
                  <span>Minutes</span>
                </div>
                <div className={styles.expires_date_time}>
                  <div className={styles.title}>05</div>
                  <span>Seconds</span>
                </div>
              </div>
            </div>
            <div className={styles.other_info}>
              <div className={styles.measurements}>
                Measurements
                <span>17 1/2x20 5/8 "</span>
              </div>
              <div className={styles.choose_color}>
                <div className={styles.color_title}>Choose Color</div>
              </div>
              <div className={styles.color_name}>Black</div>
              <div className={styles.color_img}>
                <img src={img} alt="product color" />
                <img src={img} alt="product color" />
                <img src={img} alt="product color" />
                <img src={img} alt="product color" />
              </div>
            </div>
            <div className={styles.wish_cart_btn}>
              <div className={styles.wish_qua}>
                <div className={styles.product_quotient}>
                  <button onClick={() => quantityChange('min')}>-</button>
                  <input type="number" value={quantity} />
                  <button onClick={() => quantityChange('plus')}>+</button>
                </div>
                <div className={styles.buttons}>
                  <Button
                    type={"text2"}
                    text={"Wishlist"}
                    customClass={styles.wishlist_btn}
                  />
                  <div className={styles.wishlist_icon}>
                    <Wishlist />
                  </div>
                </div>
              </div>
              <div className={styles.add_cart_button}>
                <Button
                  text={"Add to Cart"}
                  type={"outline"}
                  btnwidth={"large"}
                  customClass={styles.cart_btn}
                  onClick={handleAddToCart}
                />
              </div>
            </div>
            <div className={styles.sku_category}>
              <div className={styles.sku}>
                SKU <span>1117</span>
              </div>
              <div className={styles.category}>
                CATEGORY <span>Living Room, Bedroom</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <div className={styles.product_features}>
          <div className={styles.product_features}>
            <div className={styles.pf_option}>
              <Link className={styles.additional_info}>Additional Info</Link>
              <Link className={styles.additional_info}>Questions</Link>
              <Link className={styles.additional_info}>Reviews</Link>
            </div>
          </div>
          <div className={styles.customer_reviews}>
            <div className={styles.cr_title}>Customer Reviews</div>
            <div className={styles.review}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <span>11 Reviews</span>
            </div>
            <div className={styles.tray_table}>Tray Table</div>
            <div className={styles.review_btn}>
              <Button
                type={"fillround"}
                size={"medium"}
                text={"Write Review"}
                customClass={styles.btn}
              />
            </div>
            <div className={styles.review_details}>
              <div className={styles.review_details_inner}>
                <div className={styles.review_count}>
                  <span>11 Reviews</span>
                  <select>
                    <option value={"newest01"}>Newest01</option>
                    <option value={"newest01"}>Newest02</option>
                    <option value={"newest01"}>Newest03</option>
                  </select>
                </div>
                {UserData.map((value, index) => (
                  <div className={styles.user_info} key={index}>
                    <div className={styles.user_img}>
                      <img src={value.imgUrl} alt="user-img" />
                    </div>
                    <div className={styles.user_data}>
                      <div className={styles.user_name}>{value.name}</div>
                      <div className={styles.review}>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>
                      <p className={styles.description}>{value.description}</p>
                      <div className={styles.like_reply_btn}>
                        <button>Like</button>
                        <button>Reply</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.load_more_btn}>
              <Button type={"fillround"} text={"Load more"} size={"medium"} />
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default SingleProductPage;
