import React from "react";
import PropTypes from "prop-types";

const Link = props => {
	const { urlPath, linkText, onClick } = props;

	return (
		<a href={`/${urlPath}`} onClick={onClick} >
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
