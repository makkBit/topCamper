import React, { Component } from 'react';
import './Board.css';
import Table from './Table';


class Board extends Component {

 

  render() {
    return (
      <div className="main">

        <h4> topCamper </h4>
        <Table />

      </div>
    );
  }

}

export default Board;

