import React from 'react';
import Template from '../../hoc/Template';
import classes from './Layout.css';

export default (props) => {
	return (
		<Template>
			<div>Toolbar, sidedrawer, backdrop</div>

			<main className={classes.Content}>
				{props.children}
			</main>
		</Template>
	)
}