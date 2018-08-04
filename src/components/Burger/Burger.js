import React from 'react';
import classes from './Burger.css';
import Ingredient from './Ingredient/Ingredient';

export default (props) => {
	let ingredients = props.ingredients.map((ingredient) => {
		return [...Array(ingredient.qty)].map((_, index) => {
			return <Ingredient key={`${index}${ingredient.name}`} type={ingredient.name}/>
		})
	}).reduce((arr, el) => {
		return arr.concat(el);
	}, []);

	if(!ingredients.length) {
		ingredients = <p>Please add ingredients!</p>
	}

	return (
		<div className={classes.Burger}>
			<Ingredient key={'top'} type="BreadTop"/>
			{ingredients}
			<Ingredient key={'bottom'} type="BreadBottom"/>
		</div>
	)
}