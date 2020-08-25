import React from 'react';
import PropTypes from 'prop-types';

import setSingleBoard from '../SingleBoard/SingleBoard';

import Board from '../Board/Board';
import BoardForm from '../BoardForm/BoardForm';

import authData from '../../helpers/data/authData';

import boardsData from '../../helpers/data/boardsData';

// create board
// boardForm component
// show boardform on a click
//  need a button
// on submit of form: save to firebase, make sure board shows up

class BoardContainer extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    boards: [],
    formOpen: false,
  }

  componentDidMount() {
    boardsData.getBoardsByUid(authData.getUid())
      .then((boards) => this.setState({ boards }))
      .catch((err) => console.error('get boards brok!!', err));
  }

  render() {
    const { boards, formOpen } = this.state;

    const boardCard = boards.map((board) => <Board key={board.id} board={board} setSingleBoard={setSingleBoard}/>);
    return (
      <div>
        <button className="btn btn-warning" onClick={() => { this.setState({ formOpen: !formOpen }); }}></button>
    { formOpen ? <BoardForm /> : '' }
         <div className="card-columns">
        {boardCard}
      </div>
      </div>
    );
  }
}

export default BoardContainer;
