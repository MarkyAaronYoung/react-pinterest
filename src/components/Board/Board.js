import React from 'react';
import PropTypes from 'prop-types';

import boardShape from '../../helpers/propz/boardShape';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
    setSingleBoard: PropTypes.func.isRequired,
  }

  singleBoardEvent = (e) => {
    e.preventDefault();
    const { board, setSingleBoard } = this.props;
    setSingleBoard(board.id);
  }

  render() {
    const { board } = this.props;
    return (
      <div className="card w-75">
        <div className="card-body">
          <h5 className="card-title">{board.name}</h5>
          <button className="btn btn-secondary" onClick={this.setSingleBoard}>View Board Details</button>
        </div>
      </div>
    );
  }
}

export default Board;
