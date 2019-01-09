import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { } from 'react-router-dom';

import styles from './styles.module.css';

class MyNavbar extends Component {
	render() {
		return (
			<Navbar collapseOnSelect className={styles.navbarCustom}>
				<Navbar.Header className={styles.header}>
					<Navbar.Brand>
						<a href="/">React Redux Saga Visualizer</a>
					</Navbar.Brand>
				</Navbar.Header>
				{/* <Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} href="#">
							<Link to="/Docket">Docket</Link>
						</NavItem>
						<NavItem eventKey={2} href="#">
							<Link to="/Marketplace">Block</Link>
						</NavItem>
						<NavItem eventKey={2} href="#">
							<Link to="/Marketplace">My groups</Link>
						</NavItem>
					</Nav>
				</Navbar.Collapse> */}
			</Navbar>
		);
	}
}

export default MyNavbar;
