import React from "react";
import Nav from "../../content/testData";
import "./Navigaton.css";

class EmptyComp extends React.Component {
	render() {
		return (
			<nav>
				<ul class="nav">
					{Nav.navCatagories.map((e, i) => {
						return (
							<li className={'nav_item'}>
								{e.name}
								<ul className={'nav_item_dropdrown'}>
									{e.children_data.map((e, i) => {
										return (
											<li>
												{e.name}
											</li>
										);
									})}
								</ul>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}

export default EmptyComp;
