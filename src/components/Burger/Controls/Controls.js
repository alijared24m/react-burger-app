import React from 'react';
import classes from './Controls.css';
import Control from './Control/Control';

export default (props) => {
	const controls = props.ingredients.map((ingredient) => {
		return <Control key={ingredient.name} ingredient={ingredient}/>
	});

	return (
		<div className={classes.Controls}>
			{controls}
		</div>
	)
}