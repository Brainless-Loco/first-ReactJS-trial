import React from 'react';
import logo from  "../../images/logo.png";
import './Header.css';
import '../Common css/bootstrap.min.css'

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar py-3 navbar-expand-lg navbar-dark bg-dark">
                <a href="/"><img src={logo} className="img-fluid" alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto font-weight-bold">
                        <li className="nav-item active ">
                            <a className="nav-link" href="/shop" rel="noreferrer">Shop </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/review">Order Review</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/manage">Manage Inventory</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;