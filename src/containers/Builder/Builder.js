import React, { Component } from 'react';
import Template from '../../hoc/Template';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';

export default class Builder extends Component {
	state = {
		ingredients: [
			{
				label: 'Cheese',
				name: 'Cheese',
				qty: 2
			},
			{
				label: 'Meat',
				name: 'Meat',
				qty: 1
			}
		]
	};

	render() {
		return (
			<Template>
				<Burger ingredients={this.state.ingredients}/>
				<Controls ingredients={this.state.ingredients}/>
			</Template>
		)
	}
}