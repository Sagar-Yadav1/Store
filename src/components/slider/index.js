// import React from 'react';
// import styles from './style.module.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Container, Row } from 'react-bootstrap';
// import Img1 from '../../assets/images/slide1.png';
// import Img2 from '../../assets/images/slide2.png';
// import Img3 from '../../assets/images/slide3.png';
// import Img4 from '../../assets/images/slide4.png';
// import 'swiper/swiper-bundle.css';
// import Section from '../section';
// import ProductCard from '../singleproduct';

// const Slider = () => {
//     const products = [
//         { id: 1, name: "96 Nuptse Dip Dye Korea Puffers Jacket", price: "$400.00", image: Img1 },
//         { id: 2, name: "Paradigm Chilliwack Black Label Jacket", price: "$349.99", image: Img2 },
//         { id: 3, name: "1996 Retro Nuptse Jacket in Black", price: "$149.99", image: Img3 },
//         { id: 4, name: "Paul Quilted Nylon Puffer Bomber Jacket", price: "$300.00", image: Img4 },
//         { id: 5, name: "Paul Quilted Nylon Puffer Bomber Jacket", price: "$300.00", image: Img1 },
//         { id: 6, name: "Paul Quilted Nylon Puffer Bomber Jacket", price: "$300.00", image: Img2 },
//     ];

//     return (
//         <Section>
//             <Container>
//                 <Row>
//                     <div className={styles.sslider}>
//                         <h2>Just In</h2>
//                         <Swiper
//                             spaceBetween={24}
//                             slidesPerView={4}
//                             loop={true}
//                             breakpoints={{
//                                 640: { slidesPerView: 1, spaceBetween: 10 },
//                                 768: { slidesPerView: 2, spaceBetween: 20 },
//                                 1024: { slidesPerView: 4, spaceBetween: 30 },
//                             }}
//                         >
//                             {products.map((product, i) => (
//                                 <SwiperSlide key={i}>
//                                     <ProductCard productItem={product.productItem} image={product.image} name={product.title} price={product.price} id={product.id} Rating={product.Rating} />
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>
//                 </Row>
//             </Container>
//         </Section>
//     );
// };

// export default Slider;

// // productItem, image, name, price, discount, isNew, id, Rating 