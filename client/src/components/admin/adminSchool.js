import React, { Component } from 'react';

class AdminSchool extends Component {
  render() {
    return (
      <div>
        <div className="card-header" />
        <div className="card-body">
          <h2 className="card-title">School Name</h2>
          <h2 className="card-text">School Details</h2>
          <button className="btn btn-primaryd btn-sm">Edit</button>
          <button className="btn btn-danger btn-sm">Delete</button>
        </div>
      </div>
    );
  }
}

export default AdminSchool;
