import React, { Component } from 'react';
import { Row, Form, FormGroup, ControlLabel, FormControl, Button, Checkbox } from 'react-bootstrap';
import Loader from 'react-loader-spinner';

import styles from './styles.module.css';

import ErrorDialog from '../../components/ErrorDialog';
import FruitTile from '../../components/FruitTile';

class FruitMartPage extends Component {
	onChangeFilter = (filterName, value) => {
		console.log(filterName, value);
		this.props.dispatchChangeFilter(filterName, value);
	}

	onStartSearch = () => {
		console.log('Searching fruits...');
		this.props.dispatchSendSearchFruits(this.props.searchFilter)
	}

	onDismissError = () => {
		this.props.dispatchDismissError();
	}

	render() {
		console.log('item check', this.props.items);
		const {
			type,
			color,
			searchString,
			forceFail,
		} = this.props.searchFilter;
		const {
			isSending,
			isFirstSearch,
			requestFailed,
		} = this.props.eventHandling;
		return (
			<div className={styles.tabBox}>
				{/* <Form inline>
					<FormGroup className={styles.formGrp} controlId="type">
						<ControlLabel>Search</ControlLabel>{' '}
						<FormControl
							type="text"
							placeholder="Name..."
							className={styles.inputText}
							value={searchString}
							onChange={(e) => this.onChangeFilter('searchString', e.target.value)}
						/>
					</FormGroup>
				</Form> */}
				<Form inline>
					<FormGroup className={styles.formGrp} controlId="type">
						<ControlLabel>Search</ControlLabel>{' '}
						<FormControl
							type="text"
							placeholder="Name..."
							className={styles.inputText}
							value={searchString}
							onChange={(e) => this.onChangeFilter('searchString', e.target.value)}
						/>
					</FormGroup>
					<FormGroup className={styles.formGrp} controlId="type">
						<ControlLabel>Type</ControlLabel>{' '}
						<FormControl
							componentClass="select"
							placeholder="Select..."
							value={type}
							className={styles.inputSelect}
							onChange={(e) => this.onChangeFilter('type', e.target.value)}
						>
							<option value="both">Both</option>
							<option value="fruit">Fruit only</option>
							<option value="vegetable">Vegetable only</option>
						</FormControl>
					</FormGroup>{' '}
					<FormGroup className={styles.formGrp} controlId="color">
						<ControlLabel>Color</ControlLabel>{' '}
						<FormControl
							componentClass="select"
							placeholder="Select..."
							value={color}
							className={styles.inputSelect}
							onChange={(e) => this.onChangeFilter('color', e.target.value)}
						>
							<option value="any">Any</option>
							<option value="red">Red</option>
							<option value="yellow">Yellow/Orange</option>
							<option value="white">White/Tan/Brown</option>
							<option value="green">Green</option>
							<option value="blue">Blue/Purple</option>
						</FormControl>
					</FormGroup>{' '}
					<FormGroup>
						<Checkbox
							inline
							defaultChecked={forceFail}
							onChange={(e) => this.onChangeFilter('forceFail', e.target.checked)}
						>
							{'Simulate Failed Request'}
						</Checkbox>
					</FormGroup>{' '}
					<FormGroup className={styles.formGrp} controlId="submitBtn">
						<Button className={styles.btnSearch} onClick={this.onStartSearch}>Search!</Button>
					</FormGroup>
				</Form>

				<Row className={styles.rowResults}>
					{requestFailed && <ErrorDialog onDismiss={this.onDismissError} />}
					{isSending && (
						<div className={styles.spinner}>
							<Loader
								type="Watch"
								color="#535784"
								height="100"
								width="100"
							/>
							<div>Artifically slowed down...</div>
						</div>
					)}

					{isFirstSearch && (
						<div className={styles.spinner}>Click search to get started!</div>
					)}

					{(!isFirstSearch && !isSending && this.props.items.length === 0) ?
						<div className={styles.spinner}>Your search yielded no results :(</div>
						:
						(
							this.props.items.map((item, i) => (
								<FruitTile
									key={i}
									name={item.name}
									color={item.color}
									type={item.type}
								/>
							))
						)
					}
				</Row>
			</div>

		);
	}
}

export default FruitMartPage;
