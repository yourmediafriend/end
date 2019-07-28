import React from "react";
import PropTypes from "prop-types";

const Link = props => {
	const { url_path, linkText } = props;

	return (
		<a href={`/${url_path}`}>
			<span>
				{linkText}
			</span>
		</a>
	);
};

Link.props = {};

export default Link;
