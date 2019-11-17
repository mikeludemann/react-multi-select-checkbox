import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {

	render(){
		return (
			<div>
				<input key={this.props.id} onChange={this.props.handleCheckElement} type="checkbox" checked={this.props.isChecked} value={this.props.value} /> {this.props.value}
			</div>
		)
	}

}

export default Checkbox;
