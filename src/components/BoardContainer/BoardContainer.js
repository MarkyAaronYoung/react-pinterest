import React from 'react';
import PropTypes from 'prop-types';

import setSingleBoard from '../SingleBoard/SingleBoard';

import Board from '../Board/Board';

import authData from '../../helpers/data/authData';

import boardsData from '../../helpers/data/boardsData';

class BoardContainer extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    boards: [],
  }

  componentDidMount() {
    boardsData.getBoardsByUid(authData.getUid())
      .then((boards) => this.setState({ boards }))
      .catch((err) => console.error('get boards brok!!', err));
  }

  render() {
    const { boards } = this.state;

    const boardCard = boards.map((board) => <Board key={board.id} board={board} setSingleBoard={setSingleBoard}/>);
    return (
      <div className="card-columns">
        {boardCard}
      </div>
    );
  }
}

export default BoardContainer;
