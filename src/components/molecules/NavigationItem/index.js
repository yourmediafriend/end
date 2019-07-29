import React from "react";
import "./NavigatonItem.css";

import Dropdown from "../Dropdown";
import Link from "../../atoms/Link";

class NavigationItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            active: false
        };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick (e) {
        e.preventDefault();
        this.setState ({
            active: !(this.state.active)
        })
    }

	render() {
		const { data } = this.props;
		return (
			<React.Fragment>
				{data.include_in_menu === 1 &&
					<li className={`nav_item ${this.state.active && "nav_item--active"}`}>
						<div className="panel-heading" id={`${data.url_path}Heading`}>
							<Link
								urlPath={`/${data.url_path}`}
								linkText={data.custom_category_name || data.name}
								onClick={this.handleClick}
							/>
						</div>
						{data.children_data.length !==0 && (<Dropdown id={`${data.url_path}`} data={data.children_data} />)}
					</li>}
			</React.Fragment>
		);
	}
}

export default NavigationItem;
