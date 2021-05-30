import React from 'react';
import './css/Navbar.css';
import TurnersLogo from '../img/turnerslogodesk.png';
import {Route} from "react-router-dom";
import ImageDetect from './ImageDetect';
import Search from './Search';

const Navbar = () => {
    return (
        <div>
            <div className="content-max-width loginaccount-outercontainer">
                <nav className="header-top-menu">
                    <a href="/" className="active" >Cars</a>
                    <a href="/">Trucks &amp; Machinery</a>
                    <a href="/">Damaged &amp; End of Life</a>
                    <a href="/">Boats &amp; Marine</a>
                    <a href="/">Motorcycles &amp; Scooters</a>
                    <a href="/">General Goods</a>
                    <a href="/">Buses, Caravans &amp; Motorhomes</a>
                </nav>

                <a href="/Cars/" className="logo desktop">
                    <img src={TurnersLogo} alt="Turners Logo for Desktop and Tablet" />
                    <span className="fallback-logo"></span>
                </a>

                <div className="large-screen-header-content">
                    <a href="/" className="button red-outline-button header-chinese-link">中文</a>
                    <a href="/" className="header-contact-link">Find Us</a>
                    <a href="tel:0800 887 637" className="header-phone-number">0800 887 637</a>
                    <div className="header-account-links">
                        <div className="account-panel-trigger-container">
                            <a href="/Login?ReturnUrl=/" className="account-panel-trigger">Login </a>
                            <span className="or"> or </span>
                            <a href="/Login/Registration/"> Register</a>
                        </div>
                    </div>
                </div>
            </div>
            
        {/* Bar Nav starts Here */}
        <nav className="large-screen-main-menu">
             <div className="content-max-width"> 
                <ul className="left-menu">
                    <li><a href="/imagedetect" className="find-link">Image Detector</a></li>
                    <li><a href="/search" className="find-link">Search</a></li>
                </ul>
            </div>
        </nav>
        {/* Bar Nav ends here */}

            <Route exact path="/imagedetect" component={ImageDetect} />
            <Route exact path="/search" component={Search} />
        </div>

    )
}

export default Navbar
