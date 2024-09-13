import React, { useState } from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../logo";
import MenuItem from "../menuItem";
import SearchIcon from "../../icons/searchicon";
import Profile from "../../icons/profile";
import ThreeLine from "../../icons/threeline";
import CartIcon from "../../icons/cart";
import CartButton from "../cartButton";
import SideCartBar from "../sideCartBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const MenuItems = [
    {
      id: 1,
      title: "Home",
      path: "/home",
    },
    {
      id: 2,
      title: "Shop",
      path: "/shop",
      children: [
        { id: 1, title: "Shop 1", path: "/shop1" },
        { id: 2, title: "Shop 2", path: "/shop2" },
      ],
    },
    {
      id: 3,
      title: "Product",
      path: "/product",
      children: [
        { id: 1, title: "Cart", path: "/cart" },
        { id: 1, title: "Checkout", path: "/checkout" },
      ],
    },
    {
      id: 4,
      title: "Contact",
      path: "/contact",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const [cartBar, setCartBar] = useState(false);

  const handleCartBarOpen = () => {
    setCartBar(true);
    document.body.style.overflow = "hidden";
  };

  const handleCartBarClose = () => {
    setCartBar(false);
    document.body.style.overflow = "";
  };

  return (
    <div className={styles.header_navbar}>
      <Container>
        <Row className="align-items-center">
          <Col lg={12}>
            <div className={styles.hn_wrap}>
              <Logo />
              <div
                className={`${styles.menubar} ${menuOpen ? styles.menuOpen : ""
                  }`}
              >
                <div className={styles.clsMenu} onClick={handleMenuToggle}>
                  close
                </div>
                {MenuItems.map((item, index) => (
                  <MenuItem key={index} item={item} />
                ))}
              </div>
              <div
                className={`${styles.social_icons} "d-flex justify-content-center"`}
              >
                <button className={styles.search}>
                  <SearchIcon />
                </button>
                <Link to={"/signup"} className={styles.profile}>
                  <Profile />
                </Link>
                <button className={styles.humburger} onClick={handleMenuToggle}>
                  <ThreeLine />
                </button>
                <CartButton onClick={handleCartBarOpen} onClose={handleCartBarClose} />
                {cartBar ? (
                  <SideCartBar CartBar={cartBar} onClose={handleCartBarClose} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;