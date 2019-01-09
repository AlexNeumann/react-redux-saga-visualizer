import React, { Component } from 'react';
import { connect } from 'react-redux';

import {} from './actions';

import StorePage from './StorePage';

class Store extends Component {
	render() {
		return (
			<StorePage
				Fruits={this.props.Fruits}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	Fruits: state.FruitMartReducer,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Store);
