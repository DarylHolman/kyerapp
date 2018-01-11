import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div className="ui-base">
      	<div className="nav">
        	<Header/>
        </div>
        {this.props.children}
      </div>
    );
  }
}
