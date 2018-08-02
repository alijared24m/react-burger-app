import React, { Component } from 'react';
import classes from './Ingredient.css';
import PropTypes from 'prop-types';

class Ingredient extends Component {
	render() {
		return this.props.type !== 'BreadTop' ? <div className={classes[this.props.type]}></div> : (
			<div className={classes.BreadTop}>
				<div className={classes.Seeds1}></div>
				<div className={classes.Seeds2}></div>
			</div>
		);
	}
}

Ingredient.propTypes = {
	type: PropTypes.oneOf(Object.keys(classes).filter((key) => {
		return key !== 'Seeds1' && key !== 'Seeds2'
	}))
};

export default Ingredient;