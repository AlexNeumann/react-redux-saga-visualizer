import React, { Component } from 'react';
import { } from 'react-bootstrap';

import styles from './styles.module.css';

class FruitTile extends Component {
	constructor(props) {
		super(props);
		this.colorCoordinator = {
			red: '#ff7272',
			blue: '#729dff',
			white: '#f5deb3',
			green: '#89daa2',
			yellow: '#e8de63',
		};
	}

	render() {
		const {
			name,
			color,
			type,
		} = this.props;
		const bgColor = this.colorCoordinator[color];
		return (
			// <Col xs={6} sm={4} md={4} lg={2} className={styles.tile}>
			<div className={styles.tile}>
				<div className={styles.tileContent} style={{ backgroundColor: bgColor }}>
					<div>
						{type === 'Vegetable' ?
							(
								<img
									className={styles.tileImage}
									src="https://img.icons8.com/ios/50/000000/carrot.png"
									alt="Vegetable"
								/>
							) :	(
								<img
									className={styles.tileImage}
									src="https://img.icons8.com/ios/50/000000/strawberry.png"
									alt="Vegetable"
								/>
							)
						}
					</div>
					<div className={styles.name}>{name}</div>
				</div>
			</div>
			// </Col>
		);
	}
}

export default FruitTile;
