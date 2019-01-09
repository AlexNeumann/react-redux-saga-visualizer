import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import classnames from 'classnames';
import styles from './styles.module.css';

import ColumnTitle from '../../components/ColumnTitle';

class HistoryPage extends Component {
	onPressClear = () => {
		this.props.dispatchClearLog();
	}

	render() {
		const entryLength = this.props.history.length;
		return (
			<div className={styles.box}>
				<ColumnTitle title="History" />
				<div className={styles.resetHistory}>
					<a onClick={this.onPressClear}>Clear History Log</a>
				</div>
				<div className={styles.colOverflow}>
					{this.props.history.map((item, i) => {
						const isLast = i + 1 === entryLength;
						const entryClasses = classnames(styles.actionEntry, { [styles.entryHL]: isLast });
						if (item.type === 'action') {
							return (
								<div className={entryClasses}>
									<div>
										{`(${i + 1}) dispatch action - `}
										<span className={styles.actionName}>{item.name}</span>
									</div>
									<div className={styles.actionDetailBox}>
										<div>
											{'	key: '}
											<span className={styles.actionDetail}>{item.key}</span>
											{'value: '}
											<span className={styles.actionDetail}>{item.value}</span>
										</div>
										{item.sagaListener && <div>{'=> triggers Saga'}</div>}
									</div>
								</div>
							)
						}
						return (
							<div className={entryClasses}>
								<div>
									{`(${i + 1}) Saga listened: action - `}
									<span className={styles.actionSaga}>{item.name}</span>
								</div>
								<div className={styles.actionDetailBox}>
									<div>
										{`	${item.message}`}
									</div>
									{item.sagaListener && <div>{'=> triggers Saga'}</div>}
								</div>
							</div>
						);
					})}
				</div>
			</div>

		);
	}
}

export default HistoryPage;
