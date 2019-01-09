import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-bootstrap';

import { store } from './configureStore';
import './index.css';
import styles from './styles';

import App from './containers/AppContainer/App';
import MyNavbar from './components/navbar';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Provider store={store}>
		<Router basename={process.env.PUBLIC_URL}>
			<Grid fluid style={styles.outerContainer}>
				<MyNavbar />
				<Route path="/" exact component={App} />
			</Grid>

		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
