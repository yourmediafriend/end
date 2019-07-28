import React from "react";
import { flow, filter } from "lodash/fp";
import "./Dropdown.css";

import Link from "../../atoms/Link";

class Dropdown extends React.Component {
	render() {
		const { data, id } = this.props;

		let colClass = "";

		const colOne = flow(
			filter(
				e =>
					!e.is_column_header &&
					e.include_in_menu &&
					!e.include_in_menu_column2 &&
					!e.include_in_menu_column3
			),
			function(e) {
				if (e.length) {
					colClass = "columns-1";
				}
				return e;
			}
		)(data);

		const colOneHeader = flow(
			filter(
				e =>
					e.is_column_header &&
					e.include_in_menu &&
					!e.include_in_menu_column2 &&
					!e.include_in_menu_column3
			)
		)(data);

		const colTwo = flow(
			filter(e => !e.is_column_header && e.include_in_menu_column2),
			function(e) {
				if (e.length) {
					colClass = "columns-2";
				}
				return e;
			}
		)(data);

		const colTwoHeader = flow(
			filter(e => e.is_column_header && e.include_in_menu_column2),
		)(data);

		const colThree = flow(
			filter(e => !e.is_column_header && e.include_in_menu_column3),
			function(e) {
				if (e.length) {
					colClass = "columns-3";
				}
				return e;
			}
		)(data);

		const colThreeHeader = flow(
			filter(e => e.is_column_header && e.include_in_menu_column3),
		)(data);

		const colMenu = [{menuHeader: colOneHeader, menuList: colOne } , {menuHeader: colTwoHeader, menuList: colTwo } , {menuHeader: colThreeHeader, menuList: colThree } ];      

		return (
			<div className={`nav_dropdrown ${colClass}`} id={id}>
				<div className={"nav_dropdrown_inner"}>
					<div className={"nav_dropdrown_content"}>
						{colMenu.map((e, i) => {
							if (e.menuList.length) {
								return (
									<div key={i}>
										{e.menuHeader[0] ? <h3 className="colHeader">{e.menuHeader[0].custom_category_name || e.menuHeader[0].name}</h3> : null}
										<ul>
											{e.menuList.map((e, i) => {
												return (
													<li key={i}>
														<Link url_path={`/${e.url_path}`} linkText= {e.custom_category_name || e.name} />
													</li>
												);
											})}
										</ul>
									</div>
								);
							}
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Dropdown;
