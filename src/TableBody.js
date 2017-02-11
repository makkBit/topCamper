import React, {Component} from 'react';
import TableRow from './TableRow';



class TableBody extends Component {

	

	render() {

		if(this.props.data !== null){
			const rows = this.props.data.map( (elem, i) =>  
				<TableRow key={i+1} rank={i+1} img={elem.img} name={elem.username} 
				recentPoints={elem.recent} totalPoints={elem.alltime} />
			);
			return (
				<tbody className="table-hover">
					{rows}
				</tbody>
			);
		}
		return null;
		
	}
}



export default TableBody;

