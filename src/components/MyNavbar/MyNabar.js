import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class MyNavbar extends React.Component {
  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="MyNavbar">
        <button className="btn btn-light" onClick={this.logoutClickEvent}>Log out</button>
      </div>
    );
  }
}

export default MyNavbar;
