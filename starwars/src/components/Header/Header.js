import * as React from 'react';
import { Link } from 'react-router-dom';

import logo from './../../img/logo.png';

const Header = (props) => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="nav-main">
            <ul>
                <li className="home"><Link to="/">Home</Link></li>
                <li className="starships"><Link to="/starships">Starships</Link></li>
            </ul>
        </nav>
    </header>
);
export default Header;