import * as React from 'react';
import * as starshipService from '../../services/starships.services';


export default class StarshipDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			starship: {
				name: '',
				model: '',
				starship_class: [],
				passengers: '',
				consumables: '',
				cost_in_credits: '',
			}
		};
	}

	componentWillMount() {
		starshipService.get(this.props.match.params.id).then(response => this.setState({ starship: response.message }));
	}

	updateName(name) {
		this.setState({
			...this.state,
			starship: {
				...this.state.starship,
				name,
			}
		});
	}

	updateModel(model) {
		this.setState({
			...this.state,
			starship: {
				...this.state.starship,
				model,
			}
		});
	}

	updatePassengers(passengers) {
		this.setState({
			...this.state,
			starship: {
				...this.state.starship,
				passengers,
			}
		});
	}

	updateConsumables(consumables) {
		this.setState({
			...this.state,
			starship: {
				...this.state.starship,
				consumables,
			}
		});
	}

	updateCost(cost_in_credits) {
		this.setState({
			...this.state,
			starship: {
				...this.state.starship,
				cost_in_credits,
			}
		});
	}

	updateClass(starship_class) {
		let starship_classes = [...this.state.starship.starship_classes]; // copy
            
		if(starship_classes.includes(starship_class)) {
			starship_classes = starship_classes.filter(c => c !== starship_class); // remove class
		} else {
			starship_classes.push(starship_class); // add class
		}

		this.setState({
			...this.state,
			starship: {
				...this.state.starship,
				starship_classes,
			}
		});
	}

	onSubmit(e) {
		e.preventDefault();
		starshipService.update(this.props.match.params.id, this.state.starship).then(() => this.props.history.push('/starships'));
	}

	removeStarship() {
		starshipService.del(this.props.match.params.id).then(() => this.props.history.push('/starships'));
	}

	render() {
		return (
			<div className="starship">
				<h1>{this.state.starship.name}</h1>
				<section className='container'>
					<ul className="starships">
						<li>Model: {this.state.starship.model}</li>
						<li>Class: {this.state.starship.starship_class[0]}</li>
						<li>Passengers: {this.state.starship.passengers}</li>
						<li>Consumables: {this.state.starship.consumables}</li>
						<li>Cost: {this.state.starship.cost_in_credits}</li>
						<li>Model: {this.state.starship.model}</li>
					</ul>
				</section>
			</div>
		);
	};
}