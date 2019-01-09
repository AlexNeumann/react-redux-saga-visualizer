import React, { Component } from 'react';
import { connect } from 'react-redux';

import {} from './actions';

import PlaygroundPage from './PlaygroundPage';

class Playground extends Component {
	render() {
		return (
			<PlaygroundPage	/>
		);
	}
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Playground);
