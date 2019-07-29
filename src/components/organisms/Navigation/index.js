import React from "react";
import Nav from "../../../content/testData";
import "./Navigaton.css";

import NavigationItem from "../../molecules/NavigationItem";


class Navigation extends React.Component {

	constructor(props) {
		super(props);
		this.state={};
		this.handleClick = this.handleClick.bind(this);			
	}

	handleClick () {


	}


	render() {
		return (
			<nav>
				<ul className="nav">
					{Nav.navCatagories.map((e, i) => {
						return <NavigationItem key={i} data={e}/>
					})}
				</ul>
			</nav>
		);
	}
}

export default Navigation;
