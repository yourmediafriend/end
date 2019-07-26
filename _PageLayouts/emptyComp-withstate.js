import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({

});

class EmptyComp extends React.Component {
	state = {};

	render() {
	    const {classes} = this.props
		return (
			<div>
				Empty Compo
			</div>
		);
	}
}

EmptyComp.props = {
	bgSrc: PropTypes.string
};

export default withStyles(styles)(EmptyComp);
