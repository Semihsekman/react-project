import { Fragment } from "react";
import React from 'react';
import { Outlet, Link } from "react-router-dom";

import logo from '../../assets/sekman.png';

import './navigation.styles.scss';


const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <img src={logo} alt="Logo" width={100} height={100} />
                </Link>
                <h1>Sekman Elektronik</h1>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Sepet
                    </Link>
                    <Link className="g1" to="/sign-in">
                        Giriş Yap
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;