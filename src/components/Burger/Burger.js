import React from 'react';
import classes from './Burger.css';
import Ingredient from './Ingredient/Ingredient';

export default (props) => {
	const ingredientMap = [];

	props.ingredients.forEach((ingredient) => {
		for(let i = 1; i <= ingredient.qty; i++) {
			ingredientMap.push(ingredient.name);
		}
	});

	const ingredients = ingredientMap.map((ingredient, index) => {
		return <Ingredient key={index} type={ingredient}/>
	});

	return (
		<div className={classes.Burger}>
			<Ingredient key={'top'} type="BreadTop"/>
			{ingredients}
			<Ingredient key={'bottom'} type="BreadBottom"/>
		</div>
	)
}