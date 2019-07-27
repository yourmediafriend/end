import React from "react";
import Nav from "../../content/testData";
import { filter } from "lodash";
import "./Navigaton.css";

import Dropdown from "../../molecules/Dropdown";

class Navigation extends React.Component {
	render() {
		return (
			<nav>
				<ul className="nav">
					{Nav.navCatagories.map((e, i) => {
						return (
							<li className={"nav_item"} key={i}>
								{e.include_in_menu === 1
									? <React.Fragment>
											<div className="panel-heading" id={`${e.url_path}Heading`}>
												<a href={`/${e.url_path}`}>
													<span>
														{e.custom_category_name || e.name}
													</span>
												</a>
											</div>
											{e.children_data.length
												? <Dropdown id={`${e.url_path}`} data={e.children_data} />
												: null}
										</React.Fragment>
									: null}
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}

export default Navigation;
