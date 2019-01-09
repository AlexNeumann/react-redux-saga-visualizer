import React, { Component } from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';

import styles from './styles.module.css';

import ColumnTitle from '../../components/ColumnTitle';

import FruitMart from '../FruitMart';

class PlaygroundPage extends Component {
	render() {
		return (
			<div>
				<ColumnTitle title="UI" />
				<Tabs className={styles.tabsCustom} defaultActiveKey={1} id="uncontrolled-tab-example">
					<Tab className={styles.tabCustom} eventKey={1} title="Fruit Mart">
						<FruitMart />
					</Tab>
					<Tab className={styles.tabCustom} eventKey={2} title="Example 2">
						{'Tab 2 content'}
					</Tab>
					<Tab className={styles.tabCustom} eventKey={3} title="Example 3">
						{'Tab 3 content'}
					</Tab>
				</Tabs>
			</div>
		);
	}
}

export default PlaygroundPage;
