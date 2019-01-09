import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import styles from './styles.module.css';
import ColumnTitle from '../../components/ColumnTitle';

class StorePage extends Component {
	render() {
		// only display up to 2 items
		const numOfItems = this.props.Fruits.items.length;
		const copyOfItems = this.props.Fruits.items.slice();
		const copyOfStore = JSON.parse(JSON.stringify(this.props.Fruits));
		if (numOfItems > 2) {
			// keep only first two entries for display
			copyOfStore.items.splice(2);

			// now add a dummy one to let user know
			copyOfStore.items.push({
				otherResults: 'hidden',
			});
		}
		return (
			<div>
				<ColumnTitle title="Redux Store" />

				<pre className={styles.prettyJson}>
					<code>
						{JSON.stringify(copyOfStore, undefined, 4)}
					</code>
				</pre>
			</div>
		);
	}
}

export default StorePage;
