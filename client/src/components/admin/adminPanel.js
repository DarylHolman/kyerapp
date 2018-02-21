import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';

class AdminPanel extends Component {
  render() {
    return (
      <div>
        {/*Pending Violations Panel*/}
        <div className="jumbotron">
          <h6>Pending Violations</h6>
          <h2 className="lead">New School Violations Show here first.</h2>
          <hr className="my-4" />
          <h2>Take action and Approve or Deny new violations</h2>
          <p className="lead">
            <a
              className="btn btn-primary button btn-md"
              href="/adminpanel/pendingviolations"
              role="button"
            >
              Pending Violations
            </a>
          </p>
        </div>
        {/* Major Violations Panel */}
        <div className="jumbotron">
          <h6>Major Violations</h6>
          <h2 className="lead">Major Violations that require urgent attention</h2>
          <hr className="my-4" />
          <h2>Take action for Major Violations</h2>
          <p className="lead">
            <a
              className="btn btn-primary button btn-md"
              href="/adminpanel/majorviolations"
              role="button"
            >
              Major Violations
            </a>
          </p>
        </div>
        {/* Pending Users */}
        <div className="jumbotron">
          <h6>Pending Users</h6>
          <h2 className="lead">New Users Show here first.</h2>
          <hr className="my-4" />
          <h2>Take action and Approve or Deny new users</h2>
          <p className="lead">
            <a
              className="btn btn-primary button btn-md"
              href="/adminpanel/pendingusers"
              role="button"
            >
              Pending Users
            </a>
          </p>
        </div>
        {/* Bill of Rights */}
        <div className="jumbotron">
          <h6>Bill of Rights</h6>
          <h2 className="lead">Educational Bill of Rights information inside.</h2>
          <hr className="my-4" />
          <h2>Add new rights and update or delete existing rights</h2>
          <p className="lead">
            <a
              className="btn btn-primary button btn-md"
              href="/adminpanel/adminrights"
              role="button"
            >
              Bill of Rights
            </a>
          </p>
        </div>
        {/* Schools */}
        <div className="jumbotron">
          <h6>Schools</h6>
          <h2 className="lead">Edit school information inside.</h2>
          <hr className="my-4" />
          <h2>Add new schools and update or delete existing schools</h2>
          <p className="lead">
            <a
              className="btn btn-primary button btn-md"
              href="/adminpanel/adminschools"
              role="button"
            >
              Schools
            </a>
          </p>
        </div>
        {/* Create Admin */}
        <div className="jumbotron">
          <h6>New Admin</h6>
          <h2 className="lead">Create a new admin user.</h2>
          <hr className="my-4" />
          <h2>Creates new admin and sends invite email</h2>
          <p className="lead">
            <a
              className="btn btn-primary button btn-md"
              href="/adminpanel/newadmin"
              role="button"
            >
              New Admin
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
