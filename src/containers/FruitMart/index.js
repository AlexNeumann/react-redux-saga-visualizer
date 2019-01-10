import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	actionChangeFilter,
	actionSendSearchFruits,
	actionDismissError,
} from './actions';

import FruitMartPage from './FruitMartPage';

class FruitMart extends Component {
	render() {
		return (
			<FruitMartPage
				dispatchChangeFilter={this.props.dispatchChangeFilter}
				dispatchSendSearchFruits={this.props.dispatchSendSearchFruits}
				dispatchDismissError={this.props.dispatchDismissError}
				searchFilter={this.props.searchFilter}
				eventHandling={this.props.eventHandling}
				items={this.props.items}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	searchFilter: state.FruitMartReducer.searchFilter,
	eventHandling: state.FruitMartReducer.eventHandling,
	items: state.FruitMartReducer.items,
});

const mapDispatchToProps = (dispatch) => ({
	dispatchChangeFilter: (filterName, value) => dispatch(actionChangeFilter(filterName, value)),
	dispatchSendSearchFruits: (searchParams) => dispatch(actionSendSearchFruits(searchParams)),
	dispatchDismissError: () => dispatch(actionDismissError()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(FruitMart);
