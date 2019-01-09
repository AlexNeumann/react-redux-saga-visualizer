import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionClearLog } from './actions';

import HistoryPage from './HistoryPage';

class History extends Component {
	render() {
		return (
			<HistoryPage
				history={this.props.history}
				dispatchClearLog={this.props.dispatchClearLog}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	history: state.HistoryReducer.history,
});

const mapDispatchToProps = (dispatch) => ({
	dispatchClearLog: () => dispatch(actionClearLog()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(History);
