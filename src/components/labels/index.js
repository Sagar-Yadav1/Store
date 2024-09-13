import React, { Fragment } from "react";
import styles from "./style.module.css";
import Section from "../section";
import { Container, Row, Col } from "react-bootstrap";
import Sort1 from "../../icons/sort1";
import Sort2 from "../../icons/sort2";
import Sort3 from "../../icons/sort3";
import Sort4 from "../../icons/sort4";

const Label = () => {
  return (
    <Fragment>
      <Section>
        <Container>
          <Row>
            <Col lg={3}>
              <div className={styles.l_from}>
                <form action="/action_page.php">
                  <label for="cars">CATEGORIES</label>
                  <br />
                  <select id="cars" name="cars">
                    <option value="LivingRoom">Living Room</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Sports">Sports</option>
                    <option value="Clothing">Clothing</option>
                  </select>
                </form>
              </div>
            </Col>
            <Col lg={6}>
              <div className={styles.l_from2}>
                <form action="/action_page.php">
                  <label for="cars">PRICE</label>
                  <br />
                  <select id="cars" name="cars">
                    <option value="AllPrice">All Price</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Sports">Sports</option>
                    <option value="Clothing">Clothing</option>
                  </select>
                </form>
              </div>
            </Col>
            <Col lg={3}>
              <div className={styles.l_sort}>
                <div className={styles.ls_from3}>
                  <form action="/action_page.php">
                    <br />
                    <select id="cars" name="cars">
                      <option value="Sortby">Sort by</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Sports">Sports</option>
                      <option value="Clothing">Clothing</option>
                    </select>
                  </form>
                </div>
                <div className={styles.ls_icon}>
                  <Sort1 />
                  <Sort2/>
                  <Sort3 />
                  <Sort4 />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
};

export default Label;