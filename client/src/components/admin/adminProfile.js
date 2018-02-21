import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class AdminProfile extends Component {
  render() {
    return (
      <div className="card" /*style="width: 18rem;"*/>
        <div className="card-body">
          <h1 className="card-title">Admin Name </h1>
          {/* <h6 className="card-subtitle mb-2">User School:</h6> */}
          <h2 className="card-text">Admin Email: </h2>
          <h2> <a href="#" className="card-link"></a></h2>
            Edit Profile
          
        </div>
      </div>
    );
  }
}

export default AdminProfile;
