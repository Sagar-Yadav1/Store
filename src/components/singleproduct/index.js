import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import Button from "../button";
import Wishlist from "../../icons/wishlist";
import { CartContext } from "../../cartcontext";

const ProductCard = ({ productItem, image, name, price, discount, isNew, id, Rating }) => {
  const [goToCart, setGoToCart] = useState();
  const { cart, addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  useEffect(() => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === id)
    if (existingItemIndex !== -1) {
      setGoToCart(true);
    } else {
      setGoToCart(false);
    }
  }, [cart]);

  return (
    <div className={styles.productCard}>
      {isNew && <span className={styles.newBadge}>NEW</span>}
      {discount && <span className={styles.discountBadge}>-{discount}%</span>}
      <span className={styles.pc_heartIcon}>
        <Wishlist />
      </span>
      <div className={styles.product_img}>
        <Link to={`/singlepage/${id}`}>
          <img src={image} alt={name} className={styles.productImage} />
        </Link>
      </div>
      <div className={styles.productDetails}>
        <div className={styles.productRating}>
          {Array.from({ length: Rating }).map((_, i) =>
            <span key={i}>★</span>
          )}
        </div>
        <h4 className={styles.productName}>
          <Link to={`/singlepage/${id}`}>{name}</Link>
        </h4>
        <p className={styles.productPrice}>${price}</p>
        <span className={styles.product_btn}>
          {!goToCart ? (
            <Button
              text={"Add to cart"}
              type={"outline"}
              btnwidth={"width"}
              onClick={() => handleAddToCart(productItem)} />
          ) : (
            <Button
              text={"Go to cart"}
              type={"outline"}
              btnwidth={"width"} />
          )}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
