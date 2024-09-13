import React, { Fragment, useCallback, useEffect, useState } from 'react';
import styles from './style.module.css';
import Header from '../../components/header';
import HeroSection from '../../components/herosection';
import Brands from '../../components/brands';
import Cards from '../../components/cards';
import Shipping from '../../icons/shipping';
import Money from '../../icons/money';
import Lock from '../../icons/lock';
import Call from '../../icons/call';
import { Col, Container, Row } from 'react-bootstrap';
import Content from '../../components/content';
import NewsImg from '../../components/newsimg';
import Section from '../../components/section';
import Banner from '../../components/banner';
import BannerImg from '../../assets/images/banner.png';
import Button from '../../components/button';
import Arrow from '../../icons/arrow';
import ProductCard from '../../components/singleproduct';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Articles from '../../components/articles';
import articleimg1 from '../../assets/images/article1.png';
import articleimg2 from '../../assets/images/article2.png';
import articleimg3 from '../../assets/images/article3.png';
import CollectionImg from '../../components/collectionimg';
import Slide1 from '../../assets/images/slide4.png';
import Slide2 from '../../assets/images/slide3.png';
import Slide3 from '../../assets/images/slide2.png';
import Slide4 from '../../assets/images/slide1.png';
import Slide5 from '../../assets/images/slide5.png';
import Slide6 from '../../assets/images/slide6.png';
import Slide7 from '../../assets/images/slide7.png';
import Slide8 from '../../assets/images/slide8.png';
import Footer from '../../components/footer';
import Outfit from '../../components/outfit';
import Outfit1 from '../../assets/images/outfit1.png';
import Outfit2 from '../../assets/images/outfit2.png';
import Outfit3 from '../../assets/images/outfit3.png';
import Outfit4 from '../../assets/images/outfit4.png';
import Category from '../../components/category';
import Topbar from '../../components/header/topbar';
import Navbar from '../../components/header/navbar';

const Home = () => {

  const [categories, setCategories] = useState([]);
  const [categoriesLimit, setCategoriesLimit] = useState(6);

  const getCategories = useCallback((limit) => {
    fetch(`https://api.escuelajs.co/api/v1/categories?limit=${limit}`)
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
      })
      .catch((error) => console.error("Error fetching categories:", error)); // Handle errors
  }, []);

  useEffect(() => {
    getCategories(categoriesLimit);
  }, [getCategories, categoriesLimit]);

  const outfitData = [
    {
      id: 1,
      Img: Outfit1,
      text: 'November Outfits',
    },
    {
      id: 2,
      Img: Outfit2,
      text: 'Cashmere Set',
    },
    {
      id: 3,
      Img: Outfit3,
      text: 'The New Nordic',
    },
    {
      id: 4,
      Img: Outfit4,
      text: 'The Leather',
    },
  ]

  const productsData = [
    {
      id: 1,
      image: Slide1,
      title: 'Freestyle Crew Racer leather jacket',
      price: '595.00',
      rating: { count: 150, rate: 4.5 },
    },
    {
      id: 2,
      image: Slide2,
      title: '1996 Retro Nuptse Cashmere Jacket in Gray',
      price: '149.99',
      rating: { count: 95, rate: 4.2 },
    },
    {
      id: 3,
      image: Slide3,
      title: 'Chilliwack black Bomber HUMANATURE',
      price: '1195.99',
      rating: { count: 210, rate: 4.8 },
    },
    {
      id: 4,
      image: Slide4,
      title: '96 Nuptse Dip Dye bomber Jacket',
      price: '400.99',
      rating: { count: 210, rate: 4.8 },
    },
    {
      id: 5,
      image: Slide5,
      title: 'Oversized real leather harrington jacket in black',
      price: '249.99',
      rating: { count: 210, rate: 4.8 },
    },
    {
      id: 6,
      image: Slide6,
      title: "Men's Diamond Quilted Bomber Hoody",
      price: '199.95',
      rating: { count: 210, rate: 4.8 },
    },
    {
      id: 7,
      image: Slide7,
      title: 'Paradigm Chilliwack coat Black Label',
      price: '1495.00',
      rating: { count: 210, rate: 4.8 },
    },
    {
      id: 8,
      image: Slide8,
      title: "Men's Torrentshell 3L Rain Jacket in Brown",
      price: '149.00',
      rating: { count: 210, rate: 4.8 },
    },
  ];

  const Cardsdata = [
    {
      icon: <Shipping />,
      title: 'Free Shipping',
      description: 'Order above $200',
    },
    {
      icon: <Money />,
      title: 'Money-back',
      description: '30 days guarantee',
    },
    {
      icon: <Lock />,
      title: 'Secure Payments',
      description: 'Secured by Stripe',
    },
    {
      icon: <Call />,
      title: '24/7 Support',
      description: 'Phone and Email support',
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const articleData = [
    {
      id: 1,
      articlesimg: articleimg1,
      title: '2023 Holiday Gift Guide',
      button: (
        <Button
          text={'Read More'}
          type={'textblack'}
          icon={<Arrow />}
        />
      ),
    },
    {
      id: 2,
      articlesimg: articleimg2,
      title: '2023 Holiday Gift Guide',
      button: (
        <Button
          text={'Read More'}
          type={'textblack'}
          icon={<Arrow />}
        />
      ),
    },
    {
      id: 3,
      articlesimg: articleimg3,
      title: '2023 Holiday Gift Guide',
      button: (
        <Button
          text={'Read More'}
          type={'textblack'}
          icon={<Arrow />}
        />
      ),
    },
  ];

  return (
    <Fragment>
      <Topbar type={"blue"} textcolor={"white"} />
      <Navbar />
      <HeroSection />
      <Brands />
      <Section pt={50} pb={50}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.product_heading}>
                <p>Just In</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false
                }}
                onInit={(swiper) => {
                  swiper.el.addEventListener("mouseenter", () => {
                    swiper.autoplay.stop();
                  });
                  swiper.el.addEventListener("mouseleave", () => {
                    swiper.autoplay.start();
                  });
                }}
                slidesPerView={4}
                breakpoints={
                  {
                    320: {
                      slidesPerView: 1,
                    },
                    480: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                  }
                }
                loop={true}
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductCard id={product.id}
                      image={product.image}
                      name={product.title}
                      price={product.price}
                      Rating={product.rating.rate}
                      isNew={product.rating.rate > 4}
                      discount={product.rating.count > 100 ? 50 : null}
                      productItem={product}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <div className={styles.category_head}>
              <h4>Shop by Categories</h4>
            </div>
          </Row>
          <Row>
            {categories.map((category) => (
              <Col lg={2} sm={6} key={category.id}>
                <Category id={category.id}
                  Name={category.name}
                  Img={category.image}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            {outfitData.map((outfit) => (
              <Col lg={6} key={outfit.id}>
                <Outfit
                  Img={outfit.Img}
                  text={outfit.text}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Section>
      <Section pt={50} pb={50}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.seller_heading}>
                <p>Best Seller</p>
              </div>
            </Col>
          </Row>
          <Row>
            {productsData.map((product) => (
              <Col lg={3} sm={6} key={product.id}>
                <ProductCard
                  image={product.image}
                  name={product.title}
                  price={product.price}
                  isNew={product.rating.rate > 4}
                  discount={product.rating.count > 100 ? 50 : null}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Section>
      <Banner
        bannerimg={BannerImg}
        tag="SALE UP TO 35% OFF"
        title="HUNDREDS of New lower prices!"
        description="Hurry up!!! Winter is coming!"
        button={<Button text="Shop Now" type="textblack" icon={<Arrow />} />}
      />

      <Section>
        <Content
          tag="PROMOTION"
          title="Winter Collections"
          desciption="Introducing the new winter jackets."
        />
        <CollectionImg />
      </Section>
      <Section pt={50} pb={50}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.article_heading}>
                <h4>Latest Articles</h4>
                <Button
                  text={"View More"}
                  type={"textblack"}
                  icon={<Arrow />}
                />
              </div>
            </Col>
          </Row>
          <Row>
            {articleData.map((article) => (
              <Col lg={4} sm={12} key={article.id}>
                <Articles
                  articlesimg={article.articlesimg}
                  title={article.title}
                  button={article.button}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Section>
      <Section>
        <Content
          tag1="newsfeed"
          title="Instagram"
          desciption="Follow us on social media for more discount & promotions"
          mention="@3legant_official"
        />
        <NewsImg />
      </Section>

      <Container>
        <Row>
          {Cardsdata.map((card, index) => (
            <Col lg={3} sm={6} xs={6} key={index}>
              <Cards
                Icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </Fragment >
  );
};

export default Home;