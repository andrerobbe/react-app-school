import * as React from 'react';
import Starship from './Starship';
import * as starshipService from '../../services/starships.services';


export default class StarshipOverview extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			starships: []
		};
	}

	// React lifecycle event
	// https://reactjs.org/docs/react-component.html#the-component-lifecycle
	componentWillMount() {
		starshipService.getAll().then(response => this.setState({ starships: response.message }));
	}
	renderStarships() {
		return this.state.starships.map((starship, i) => (<li key={i}><Starship name={starship.name} id={starship.id} /></li>));
	}
	render() {
		return (
			<div className="starship">
				<h1>Starships</h1>
				<section className='container'>
					<ul className="starships">
						{this.state.starships.length ? this.renderStarships() : (<p>No Starhips Available</p>)}
					</ul>
				</section>
			</div>
		);
	}
};