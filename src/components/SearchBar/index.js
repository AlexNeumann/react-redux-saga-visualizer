import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';

import styles from './styles.module.css';

class Searchbar extends Component {
	handleChange = (e) => {
		console.log('New input:', e.target.value);
		// this.setState({ searchValue: e.target.value });
		// this.props.dispatchSearchText(e.target.value);
	}

	render() {
		const {
			value,
			placeholder,
		} = this.props
		return (
			<div>
				<Form>
					<FormGroup className={styles.FormGroupNoMargin}>
						<InputGroup>
							<FormControl
								type="text"
								value={value}
								placeholder={placeholder}
								onChange={this.handleChange}
								className={styles.inputSearchBar}
							/>
							<InputGroup.Button>
								<Button className={styles.inputSearchButton}>Search</Button>
							</InputGroup.Button>
						</InputGroup>
					</FormGroup>
				</Form>
			</div>

		);
	}
}

export default Searchbar;
