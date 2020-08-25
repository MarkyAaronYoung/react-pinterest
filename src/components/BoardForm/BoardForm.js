import React from 'react';

import authData from '../../helpers/data/authData';

class BoardForm extends React.Component {
  state = {
    name: '',
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  saveBoardEvent = (e) => {
    e.preventDefault();
    const { name } = this.state;

    const newBoard = {
      name,
      userId: authData.getUid(),
    }
     console.warn('here is a new board', newBoard);
  }

  render() {
    return (
      <form className="col-6 offset-3">
        <div className="form-group">
          <label for="exampleInputEmail1">Board Name</label>
          <input
            type="text"
            className="form-control"
            id="boardName"
            placeholder="Enter Board Name"
            onChange={this.changeNameEvent}
            />
        </div>
          <button type="submit" className="btn btn-primary" onClick={this.saveBoardEvent}>Save Board</button>
      </form>
    );
  }
}

export default BoardForm;
