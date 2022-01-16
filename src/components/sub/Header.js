import React from 'react';
import NavList from './NavList';
import '../../styles/header.module.css';

function Header({testData}) {
    return (
        <header id="header-area">
            <div className="container navbar">
                <div className="navbar-inner jumbotron">
                    <NavList navs = {testData} />
                </div>
            </div>
        </header>
    )
}

export default Header