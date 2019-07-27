import React from "react";
import Nav from "../../content/testData";
import { filter } from "lodash";
import "./Navigaton.css";


class EmptyComp extends React.Component {


	filterCol(e) {


		// let collAll = e.children_data.map((e, i) => {
		// 	if (e.include_in_menu) {
		// 		return e;
		// 	}
		// });







		// if (collAll) {

		// 	let collTwo = collAll.map((e, i) => {
		// 		if (e.include_in_menu_column2) {
		// 			return e;
		// 		}
		// 	});
	
			
		// 	let collThree = collAll.map((e, i) => {
		// 		if (e.include_in_menu_column3) {
		// 			return e;
		// 		}
		// 	});

		// 	console.log('collTwo', collTwo);
		// 	console.log('collThree', collThree);

		// }




	}

	render() {
		return (
			<nav>
				<ul className="nav">
					{Nav.navCatagories.map((e, i) => {

						// Dropdown Structure
						const colAll = filter(e.children_data, e => e.include_in_menu);
						const colTwo = filter(e.children_data, e => e.include_in_menu_column2 );
						const colThree = filter(e.children_data, e => e.include_in_menu_column3 );


						return (
							<li className={"nav_item"} key={i}>
								{e.include_in_menu === 1
									? <div className="panel-heading">
											<a href={`/${e.url_path}`}>
												<span>
													{e.name}
												</span>
											</a>
										</div>
									: null}
								<div className={"nav_dropdrown"}>
									<div className={"nav_dropdrown_inner"}>
										<div className={"nav_dropdrown_content"}>
											<ul className="sub_category_list">
												{/* 
													if has  then more than 1 column
													include_in_menu
													include_in_menu_column2  
													include_in_menu_column3
												*/}

												{e.children_data.map((e, i) => {
													return (
														<li key={i}>
															{e.include_in_menu === 1
																? <a href={`/${e.url_path}`}>
																		<span>
																			{e.custom_category_name
																				? e.custom_category_name
																				: e.name}
																		</span>
																	</a>
																: null}
														</li>
													);
												})}
											</ul>
										</div>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}

export default EmptyComp;
