import * as React from 'react';
import { Link } from 'react-router-dom';

const Starship = (props) => (
		<Link to={`/starships/detail/${props.id}`}>{props.name}</Link>
);

export default Starship;
