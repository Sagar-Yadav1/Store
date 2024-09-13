import React, { Fragment, useEffect, useState } from 'react';
import styles from './style.module.css';
import Header from '../../components/header';
import Topbar from '../../components/header/topbar';
import Navbar from '../../components/header/navbar';
import Footer1 from '../../components/footer1';
import Newsletter from '../../components/newsLetter';
import { Col, Container, Row } from 'react-bootstrap';
import Section from '../../components/section';
import ProductCard from '../../components/singleproduct';
import BreadCrumb from '../../components/breadcrumb';
import Label from '../../components/labels';
import Button from '../../components/button';

const Shop = () => {

    const breadcrumbitems= [
        {label: "Home", href: "/"},
        {label: "Shop", href: "/shop"},
    ]

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=12')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching products:', error));
    }, []);

  return (
    <Fragment>
        <Topbar type={"sky"} textcolor={"grey"}/>
        <Navbar/>
        <BreadCrumb items={breadcrumbitems}/>
        <Label/>
        <Section pt={50} pb={50}>
            <Container>
            <Row>
                {products.map((product) => (
                  <Col lg={3} key={product.id}>
                    <ProductCard id={product.id}
                      image={product.image}
                      name={product.title}
                      price={product.price}
                      isNew={product.rating.rate > 4}
                      discount={product.rating.count > 100 ? 50 : null}
                      productItem={product}
                    />
                  </Col>
                ))}
            </Row>
            <Row>
                <Col lg={12}>
                    <div className={`text-center ${styles.shopbtn}`}>
                        <Button text={"Show more"} type={"outlineround"} customCss={styles.shop_btn}/> 
                    </div>
                </Col>
            </Row>
            </Container>
        </Section>
        <Newsletter/>
        <Footer1/>
    </Fragment>    
  );
}

export default Shop;