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
		this.setState({
			...this.state,
			starship: {
				...this.state.starship,
				starship_class,
			}
		});
	}

	onSubmit(e) {
		e.preventDefault();
		starshipService.update(this.props.match.params.id, this.state.starship).then(() => this.props.history.push('/starships'));
	}

	removeStarship(name) {
		let confirmation = window.confirm("Are you sure you want to delete " + name + "?");
		if (confirmation) {
			starshipService.del(this.props.match.params.id).then(() => this.props.history.push('/starships'));
		}		
	}


	addClassShow(){
		function pageRdy() {										//delayed see below
			let list = document.getElementsByClassName("list");

			if (list.length){
				let i = 0, howManyTimes = list.length;				//loop times = amount of ships
				function addClass() {								//Adds the className 'show' to list[i] item
					
					if(list[i]){
					//Check is item still exists, Prevents undefined (CRASH) if swapping to another page too quickly.
						list[i].classList.add("show");					
						i++;											
						if( i < howManyTimes ){							
							setTimeout( addClass, 50 );				//DELAY OF SHOWING NEXT LIST ITEM
						}
					}
				}
				addClass();
			}
		}
		setTimeout(function(){pageRdy();}, 10);						//delay to wait for all dom elements to be ready (this function is called be4 the return in render is made)
	}


	render() {
		this.addClassShow();
		return (
			<div className="starship">
				<h1>{this.state.starship.name}</h1>
				<section className='container'>
					<form action="" id="shiplist" onSubmit={(e) => this.onSubmit(e)}>
						<div className="list">
							<label htmlFor="starship-name">Name</label>
							<input required type="text" name="starship-name" id="starship-name" value={this.state.starship.name} onChange={(e) => this.updateName(e.target.value)} />
						</div>
						<div className="list">
							<label htmlFor="starship-name">Model</label>
							<input required type="text" name="starship-model" id="starship-model" value={this.state.starship.model} onChange={(e) => this.updateModel(e.target.value)} />
						</div>
						<div className="list">
							<label htmlFor="starship-passengers">Passengers</label>
							<input required type="text" name="starship-passengers" id="starship-passengers" value={this.state.starship.passengers} onChange={(e) => this.updatePassengers(e.target.value)} />
						</div>
						<div className="list">
							<label htmlFor="starship-consumables">Consumables</label>
							<input required type="text" name="starship-consumables" id="starship-consumables" value={this.state.starship.consumables} onChange={(e) => this.updateConsumables(e.target.value)} />
						</div>
						<div className="list">
							<label htmlFor="starship-cost">Cost</label>
							<input required type="text" name="starship-cost" id="starship-cost" value={this.state.starship.cost_in_credits} onChange={(e) => this.updateCost(e.target.value)} />
						</div>

						<div className="list">
							<label htmlFor="class">Class</label>
							<select name="class" onChange={(e) => this.updateClass(e.target.value)} className="options">
								<option className="options" value='' selected disabled hidden>{this.state.starship.starship_class}</option>
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

						<div className="controls list">
							<button type="submit" className="btn save">Save</button>
							<a className="btn delete" onClick={() => this.removeStarship(this.state.starship.name)}>Delete</a>
						</div>
					</form>
				</section>
			</div>
		);
	};
}