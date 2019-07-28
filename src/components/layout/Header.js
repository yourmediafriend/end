import React from "react";
import PropTypes from "prop-types";

import Navigation from "../organisms/Navigation";
import TopStrap from "../molecules/TopStrap";

const Header = props => {

	const {} = props;

	return (
		<header>
			<TopStrap strapcopy={'FREE UK DELIVERY ON ALL ORDERS OVER £150 | FREE UK RETURNS'}/>
			<Navigation />
		</header>
	);
};

Header.props = {
	strapcopy: PropTypes.string
};

export default Header;
