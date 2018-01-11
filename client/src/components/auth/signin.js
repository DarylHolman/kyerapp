import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({email, password }){
    console.log(email, password);
    // Need to do something to log user in
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          <strong>OOPS!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render(){
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <div className="login">
      <title>KYER Sign In</title>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <h3>Start Making a Difference in Your Education Today!</h3>
          <fieldset className="form-group">
            <label></label>
            <input {...email} className="form-control" placeholder="Email" />
          </fieldset>
          <fieldset className="form-group">
            <label></label>
            <input {...password} type="password" className="form-control" placeholder="Password"/>
          </fieldset>
          { this.renderAlert()}
        <button action="submit" className="btn btn-primary">SIGN IN</button>
        <h4>OR</h4>
        <button className="btn btn-primary">  REGISTER  </button><br/>
        <a href="#" className="fa fa-facebook"/><a href="#" className="fa fa-facebook"/><a href="#" className="fa fa-facebook"/><a href="#" className="fa fa-facebook"/>
        <h4>Already have an account? <a href="">Log In.</a></h4>
      </form>
    </div>
    );
  }
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email' , 'password']
}, mapStateToProps, actions)(Signin);
