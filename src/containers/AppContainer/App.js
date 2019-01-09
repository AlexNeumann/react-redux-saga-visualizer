import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import Playground from '../Playground';
import History from '../History';
import Store from '../Store';

import styles from './styles.module.css';

class App extends Component {
	render() {
		console.log('Logging App props', this.props.app);
		return (
			<Grid fluid>
				<Row>
					<Col
						xs={4}
						md={4}
						lg={3}
						className={[
							styles.colCustom,
							styles.colDivider,
							styles.colHistory,
							styles.colOverflow,
						]}
					>
						<History />
					</Col>
					<Col
						xs={4}
						md={4}
						lg={6}
						className={[
							styles.colCustom,
							styles.colDivider,
							styles.colPlayground,
						]}
					>
						<Playground />
					</Col>
					<Col
						xs={4}
						md={4}
						lg={3}
						className={[
							styles.colCustom,
							styles.colStore,
						]}
					>
						<Store />
					</Col>
				</Row>
			</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	app: state.AppContainerReducer.app,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
