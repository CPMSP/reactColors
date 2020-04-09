import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
	main: {
		backgroundColor: "purple",
		border: "3px solid teal",
		"& h1": {
			color: "white",
		},
	},
	secondary: {
		backgroundColor: "crimson",
	},
};

function MiniPalette(props) {
	const { classes } = props;
	return (
		<div>
			<h1>Mini Palette</h1>
			<section className={classes.secondary}>Some text</section>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
