import React, { Fragment } from 'react';
import styles from './style.module.css';
import Topbar from './topbar';
import Navbar from './navbar';

const Header = () =>{
    return(
        <Fragment>
            <Topbar bgcolor={"blue"}/>
            <Navbar/>
        </Fragment>
    );
}

export default Header;