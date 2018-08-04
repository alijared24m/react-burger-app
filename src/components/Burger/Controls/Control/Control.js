import React from 'react';
import classes from './Control.css';
import MatButton from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#28a745',
			dark: '#218838'
		},
		secondary: {
			main: '#dc3545',
			dark: '#c82333'
		}
	},
});

export default (props) => {
	const ingredient = props.ingredient;

	return (
		<div className={classes.Control}>
			<MuiThemeProvider theme={theme}>
				<MatButton variant="fab" color="secondary" aria-label="Add">
					<RemoveIcon/>
				</MatButton>
				<Typography variant="title">
					{ingredient.label}
				</Typography>
				<MatButton variant="fab" color="primary" aria-label="Add">
					<AddIcon/>
				</MatButton>
			</MuiThemeProvider>
		</div>
	)
}