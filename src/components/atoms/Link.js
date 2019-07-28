import React from "react";
import PropTypes from "prop-types";

const Link = props => {
	const { urlPath, linkText } = props;

	return (
		<a href={`/${urlPath}`}>
			<span>
				{linkText}
			</span>
		</a>
	);
};

Link.props = {
	urlPath: PropTypes.string,
	linkText: PropTypes.string,
};

export default Link;
