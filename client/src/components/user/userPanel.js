// my school

// rights library

// account info

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';

class UserPanel extends Component {
  render() {
    return (
      <div>
        {/*User School Panel*/}
        <div className="jumbotron">
          <h6>My School</h6>
          <h2 className="lead">View Info On Your School</h2>
          <hr className="my-4" />
          <h2 className="suppText">Create, View, and +1 Violations at your school</h2>
          <p className="lead">
            <a
              className="btn btn-primary button btn-md"
              // href="/adminpanel/pendingviolations"
              role="button"
            >
              My School
            </a>
          </p>
        </div>
        {/* Rights Library */}
        <div className="jumbotron">
          <h6>Rights Library</h6>
          <h2 className="lead">KYER Rights Library</h2>
          <hr className="my-4" />
          <h2>Get to know your rights</h2>
          <p className="lead">
            <a
              className="btn btn-primary button btn-md"
              // href="/adminpanel/majorviolations"
              role="button"
            >
              Rights Library
            </a>
          </p>
        </div>
        {/* User Profile */}
        <div className="jumbotron">
          <h6>My Profile</h6>
          <h2 className="lead">User Profile</h2>
          <hr className="my-4" />
          <h2>Take action and Approve or Deny new users</h2>
          <h2 className="lead">
            <a
              className="btn btn-primary button btn-md"
              href="/adminpanel/pendingusers"
              role="button"
            >
              Pending Users
            </a>
          </h2>
        </div>
      </div>
    );
  }
}

export default UserPanel;
