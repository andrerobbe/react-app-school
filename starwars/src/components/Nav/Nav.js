import * as React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => (
	<div className="navigation">
        <nav className="nav-main">
            <ul>
                <li className="home"><Link to="/">Home</Link></li>
                <li className="starships"><Link to="/starships">Starships</Link></li>
            </ul>
        </nav>
    </div>
);
export default Nav;