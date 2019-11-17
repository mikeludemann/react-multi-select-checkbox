import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Checkbox from './components/multi-checkbox';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [
				{id: 1, value: "Milkshake", isChecked: false},
				{id: 2, value: "Meat balls", isChecked: false},
				{id: 3, value: "Rice", isChecked: false},
				{id: 4, value: "Ice", isChecked: false}
			]
		}
	}

	handleAllChecked = (event) => {
		let items = this.state.items;

		items.forEach(item => item.isChecked = event.target.checked) ;

		this.setState({items: items});
	}

	handleCheckElement = (event) => {
		let items = this.state.items;

		items.forEach(item => {
			if (item.value === event.target.value){

				item.isChecked = event.target.checked;

			}

		})

		this.setState({items: items});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<section className="content">
					<div>
						<input type="checkbox" onChange={this.handleAllChecked} value="checkedall" /> (Not) All
						{
							this.state.items.map((item, index) => {
								return (<Checkbox key={index} handleCheckElement={this.handleCheckElement} {...item} />)
							})
						}
					</div>
				</section>
				<footer className="App-footer">
					(c) Copyright - Mike Ludemann
				</footer>
			</div>
		);
		}
}

export default App;
