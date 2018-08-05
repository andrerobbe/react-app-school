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
		return this.state.starships.map((starship, i) => (<li key={i} className="list"><Starship name={starship.name} id={starship.id}/></li>));
	}

	addClassShow(){
		function pageRdy() {										//delayed see below
			let list = document.getElementsByClassName("list");
			console.log(list);

			if (list.length){
				let i = 0, howManyTimes = list.length;				//loop times = amount of ships
				function addClass() {								//Adds the className 'show' to list[i] item
					
					if(list[i]){
					//Check is item still exists, Prevents undefined (CRASH) if swapping to another page too quickly.
						list[i].classList.add("show");					
						i++;											
						if( i < howManyTimes ){							
							setTimeout( addClass, 35 );				//DELAY OF SHOWING NEXT LIST ITEM
						}
					}
				}
				addClass();
			}
		}
		setTimeout(function(){pageRdy();}, 10);						//delay to wait for all dom elements to be ready.(this function is called be4 the return in render is made)
	}


	render() {
		let txt = '';
		if(this.state.starships.length){
			txt = this.renderStarships();
			this.addClassShow();
		}
		else{
			txt = '<p>No Starships Available</p>';
		}

		return (
			<div className="starship">
				<h1>Starships</h1>
				<section className='container'>
					<ul id="shiplist">
						{txt}
					</ul>
				</section>
			</div>
		);
	}
};