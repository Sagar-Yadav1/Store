import React, { Fragment } from 'react';
import styles from './style.module.css';
import Topbar from '../../components/header/topbar';
import Navbar from '../../components/header/navbar';
import Newsletter from '../../components/newsLetter';
import Footer1 from '../../components/footer1';
import SingleProductPage from '../../components/singleproductpage';
import Section from '../../components/section';

const Product = () => {
  return (
    <Fragment>
      <Topbar type={"sky"} textcolor={"grey"} />
      <Navbar />
      <Section>
        <SingleProductPage />
      </Section>
      <Newsletter />
      <Footer1 />
    </Fragment>
  );
}

export default Product;