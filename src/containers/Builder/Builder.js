import React, { Component } from 'react';
import Template from '../../hoc/Template';
import Burger from '../../components/Burger/Burger';

export default class Builder extends Component {
	state = {
		ingredients: [
			{
				name: 'Cheese',
				qty: 1
			},
			{
				name: 'Meat',
				qty: 2
			}
		]
	};

	render() {
		return (
			<Template>
				<Burger ingredients={this.state.ingredients}/>
				<div>Controls</div>
			</Template>
		)
	}
}