import React from "react";
import PropTypes from "prop-types";

import "./TopStrap.css";

const TopStrap = props => {
	const { strapcopy } = props;

	return (
		<div className="topstrap">
			<div className="topstrap_inner">
				<h2>
					{strapcopy}
				</h2>
			</div>
		</div>
	);
};

TopStrap.props = {
	strapcopy: PropTypes.string
};

export default TopStrap;
