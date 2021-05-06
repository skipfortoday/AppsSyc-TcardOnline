import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersList, deleteDataUser } from '../actions/userAction'
import EvoPerincianComponent from "../components/EvoPerincianComponent";

class EvoPerincianContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUser());
  }

  render() {
    
    return (
      <div>
        <EvoPerincianComponent/>
      </div>
    );
  }
}

export default connect()(EvoPerincianContainer);