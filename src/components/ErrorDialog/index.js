import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';

import styles from './styles.module.css';

class ErrorDialog extends Component {
	render() {
		return (
			<Alert bsStyle="danger" className={styles.alertCustom} onDis>
				<h4>Server request failed!</h4>
				<p>
					This simulates a failed server request. You want to
					inform the user that their request was unsuccessful. A failed
					saga request sets our "requestFailed" to true. The next time
					render() is called, we display the error message. Once dismissed,
					we fire a new <strong>action</strong> to set it back to false.
				</p>
				<Button bsStyle="danger" onClick={this.props.onDismiss}>Dismiss</Button>
			</Alert>
		);
	}
}

export default ErrorDialog;
