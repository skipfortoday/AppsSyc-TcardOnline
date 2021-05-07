import React, { Component } from "react";
import { connect } from "react-redux";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
import EvoPerincianComponent from "../components/TableComponents/EvoPerincianComponent";
import JumbotronComponent from "../components/JumbotronComponent";
import { deleteDataUser, getUsersList } from "../actions/userAction";
import EvoPerincianCloudComponent from "../components/TableComponents/EvoPerincianCloudComponent";

class EvoPerincianContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUser());
  }

  render() {
    
    return (
      <div>
        <JumbotronComponent/>
        <Row >
          <Col>    
              <EvoPerincianComponent/>
          </Col>
          <Col>
              <EvoPerincianCloudComponent/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(EvoPerincianContainer);