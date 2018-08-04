import * as React from 'react';
import { Link } from 'react-router-dom';

const Starship = (props) => (
	<section>
		<Link to={`/starships/detail/${props.id}`}>{props.name}</Link>
	</section>
);

export default Starship;
