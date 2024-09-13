import './App.css';
import { Fragment } from 'react';
import SideCartBar from './components/sideCartBar';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/home';
import Cart from './pages/cart';
import Shop from './pages/shop';
import Checkout from './pages/checkout';
import Product from './pages/product';
import SinglePage from './pages/singlepage';
import SignUp from './components/signup';
import SignIn from './components/signin';
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/product' element={<Product />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='singlepage/:id' element={<SinglePage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
