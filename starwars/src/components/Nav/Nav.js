import * as React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => (
	<div className="navigation">
        <nav className="nav-main">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/starships">Starships</Link></li>
                <li><Link to="/starships/add">Add a ship</Link></li>
            </ul>
        </nav>
    </div>
);
export default Nav;