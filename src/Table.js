import React, {Component} from 'react';
import TableBody from './TableBody';
import $ from 'jquery';

class Table extends Component{

	constructor(props) {
	    super(props);
	    this.state = {data: null};
	    this.recentData = null;
	    this.alltimeData = null;
	}

	componentDidMount() {
	  const recentURL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
	  const alltimeURL = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
	  var self = this;

	  $.getJSON(recentURL, function(json) {
	    self.recentData = json;
	    self.setState({data: self.recentData});
	    $('#recent').addClass('active');
	  });

	  $.getJSON(alltimeURL, function(json){
	  	self.alltimeData = json;
	  });
	}

	handleRecentClick(e){
		this.setState({data: this.recentData});

		$('#alltime').removeClass('active');
		$(e.target).addClass('active');
	}

	handleAlltimeClick(e){
		this.setState({data: this.alltimeData});

		$('#recent').removeClass('active');
		$(e.target).addClass('active');
	}

	render(){
		return(
			<table>
				<thead>
					<tr>
						<th> # </th>
						<th> Camper Name </th>
						<th onClick={this.handleRecentClick.bind(this)} id="recent"> Recent Points </th>
						<th onClick={this.handleAlltimeClick.bind(this)} id="alltime"> Alltime Points </th>
					</tr>
				</thead>

				<TableBody data={this.state.data}/>
			</table>
		);
	}
	

}


export default Table;