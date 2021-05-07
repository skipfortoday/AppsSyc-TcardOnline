import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { getUsersList, deleteDataUser } from '../actions/userAction'
import JumbotronComponent from "../components/JumbotronComponent";
import ListLastSycComponent from "../components/TableComponents/ListLastSycComponent";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUser());
  }

  render() {
    
    return (
      <div>
        <JumbotronComponent/>
        <ListLastSycComponent/>
      </div>
    );
  }
}

export default connect()(HomeContainer);
