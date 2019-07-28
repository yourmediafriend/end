import React from "react";
import Nav from "../../../content/testData";
import "./Navigaton.css";

import Dropdown from "../../molecules/Dropdown";
import Link from "../../atoms/Link";

class Navigation extends React.Component {
	render() {
		return (
			<nav>
				<ul className="nav">
					{Nav.navCatagories.map((e, i) => {
						return (
							<React.Fragment>
								{e.include_in_menu === 1
									? <li className={"nav_item"} key={i}>
											<div
												className="panel-heading"
												id={`${e.url_path}Heading`}
											>
												<Link url_path={`/${e.url_path}`} linkText= {e.custom_category_name || e.name} />
											</div>
											{e.children_data.length
												? <Dropdown
														id={`${e.url_path}`}
														data={e.children_data}
													/>
												: null}
										</li>
									: null}
							</React.Fragment>
						);
					})}
				</ul>
			</nav>
		);
	}
}

export default Navigation;
