import React, { Fragment, useCallback, useContext, useEffect, useState } from 'react';
import SingleProductPage from '../../components/singleproductpage';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/header/navbar';
import Footer from '../../components/footer';
import Section from '../../components/section';
import Topbar from '../../components/header/topbar';
import { CartContext } from '../../cartcontext';



const SinglePage = () => {

  const { addToCart } = useContext(CartContext)

  const { id } = useParams();
  const nav = useNavigate();
  const [product, setProduct] = useState({});


  const getProduct = useCallback(
    async (productId) => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const json = await response.json();
        setProduct(json);
        console.log(json);
      } catch (error) {
        console.error("Error fetching product:", error);
        nav("/");
      }
    },
    [nav]
  );


  useEffect(() => {
    getProduct(id)
      ;
  },
    [getProduct, id]);

  return (
    <Fragment>
      <Topbar type={"sky"} textcolor={"grey"} />
      <Navbar />
      <Section>
        <SingleProductPage
          item={product}
          img={product.image}
          title={product.title}
          id={product.id}
          quantity={product.quantity}
          addToCart={addToCart}
        />
      </Section>
      <Footer />
    </Fragment>
  );
}

export default SinglePage;