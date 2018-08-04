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
					<form action="" onSubmit={(e) => this.onSubmit(e)}>
						<div>
							<label htmlFor="starship-name">Name</label>
							<input required type="text" name="starship-name" id="starship-name" value={this.state.starship.name} onChange={(e) => this.updateName(e.target.value)} />
						</div>
						<div>
							<label htmlFor="starship-name">Model</label>
							<input required type="text" name="starship-model" id="starship-model" value={this.state.starship.model} onChange={(e) => this.updateModel(e.target.value)} />
						</div>
						<div>
							<label htmlFor="starship-passengers">Passengers</label>
							<input required type="text" name="starship-passengers" id="starship-passengers" value={this.state.starship.passengers} onChange={(e) => this.updatePassengers(e.target.value)} />
						</div>
						<div>
							<label htmlFor="starship-consumables">Consumables</label>
							<input required type="text" name="starship-consumables" id="starship-consumables" value={this.state.starship.consumables} onChange={(e) => this.updateConsumables(e.target.value)} />
						</div>
						<div>
							<label htmlFor="starship-cost">Cost</label>
							<input required type="text" name="starship-cost" id="starship-cost" value={this.state.starship.cost_in_credits} onChange={(e) => this.updateCost(e.target.value)} />
						</div>

						<div>
							<label htmlFor="class">Class</label>
							<select required name="class" onChange={(e) => this.updateClass(e.target.value)} className="options">
								<option className="options" value='Star dreadnought'>Star dreadnought</option>
								<option className="options" value='Landing craft'>Landing craft</option>
								<option className="options" value='Deep Space Mobile Battlestation'>Deep Space Mobile Battlestation</option>
								<option className="options" value='Light freighter'>Light freighter</option>
								<option className="options" value='Assault starfighter'>Assault starfighter</option>
								<option className="options" value='Starfighter'>Starfighter</option>
								<option className="options" value='Patrol craft'>Patrol craft</option>
								<option className="options" value='Armed government transport'>Armed government transport</option>
								<option className="options" value='Escort ship'>Escort ship</option>
							</select>
						</div>
						<button type="submit">Save</button>
					</form>
				</section>
			</div>
		);
	};
}