import React from "react";

import Navigation from "../organisms/Navigation";
import TopStrap from "../molecules/TopStrap";

const Header = props => {
	return (
		<header>
			<TopStrap strapcopy={'FREE UK DELIVERY ON ALL ORDERS OVER £150 | FREE UK RETURNS'}/>
			<Navigation />
		</header>
	);
};

export default Header;
