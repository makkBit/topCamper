import React, { Component } from 'react';

export default class TableRow extends Component {


	render() {
		return (
			<tr>
				<td>{this.props.rank}</td>
				<td>
					<img className="img-circle" src={this.props.img} alt="userImg"/> 
					{this.props.name}
				</td>
				<td>{this.props.recentPoints}</td>
				<td>{this.props.totalPoints}</td>
			</tr>
		);
	}

}