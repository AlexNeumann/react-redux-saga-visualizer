import React, { Component } from 'react';
import {  } from 'react-bootstrap';

import styles from './styles.module.css';

class ColumnTitle extends Component {
	render() {
		const {
			title,
		} = this.props
		return (
			<div className={styles.title}>{title}</div>
		);
	}
}

export default ColumnTitle;
