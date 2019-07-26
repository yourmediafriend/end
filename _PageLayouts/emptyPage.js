import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import { withStyles } from "@material-ui/core/styles";
import { StaticQuery, graphql } from "gatsby";
import withRoot from "~/withRoot";
import { connect } from "react-redux";
import { setMenuColorState } from "~/modules/app";

// Layout
import Page from "~/components/Layout/Page";

// Components
import Container from "~/components/Material/Container";

// @material-ui/core components

const styles = theme => {
	return {
        pagewrap: {
			background: "#ffffff",
			padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px`,
			[theme.breakpoints.up("md")]: {
				background: "#e0e0e0",
				minHeight: `calc(100vh - ${theme.footerHeight}px)`,
				paddingBottom: theme.spacing.unit * 4,
				paddingTop: theme.spacing.unit * 4 + theme.menuHeightMobile,
			}
		},
    }
};
class PageComp extends React.Component {
	componentWillMount = () => {
		const { dispatch } = this.props;
		let headerColorState = "white";
		dispatch(setMenuColorState(headerColorState));
	};

	render() {
		const { classes, data } = this.props;
		const { siteTitle, siteStrap } = data.site.siteMetadata;
		let pageTitle = "Page Comp" + " - " + siteTitle;

		return (
			<Page {...this.props} title={pageTitle} menuTransparent={true}>
                <div className={classes.pagewrap}>
                    <Container>
						Page Comp
                    </Container>
                </div>
			</Page>
		);
	}
}

PageComp.propTypes = {
	classes: PropTypes.object.isRequired
};

const PageQuery = props =>
	<StaticQuery
		query={graphql`
			query {
				site {
					siteMetadata {
						siteTitle
						siteStrap
					}
				}
			}
		`}
		render={data => <PageComp {...props} data={data} />}
	/>;

export default withRoot(
	withStyles(styles)(connect(state => ({}), null)(PageQuery))
);