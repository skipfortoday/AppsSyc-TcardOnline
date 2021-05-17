import React, { Component } from "react";
import { connect } from "react-redux";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
import EvoPerincianComponent from "../components/TableComponents/EvoPerincianComponent";
import JumbotronComponent from "../components/JumbotronComponent";
import EvoPerincianCloudComponent from "../components/TableComponents/EvoPerincianCloudComponent";
import {
  getLTcardEvoPerincian,
  getTcardEvoPerincian,
} from "../actions/tcardAction";
import firebase from "../firebase";

class EvoPerincianContainer extends Component {
  componentDidMount() {
    firebase
      .database()
      .ref("/evoperincian")
      .on("value", (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        this.props.dispatch(getTcardEvoPerincian());
        this.props.dispatch(getLTcardEvoPerincian());
      });
  }

  render() {
    return (
      <div>
        <JumbotronComponent />
        <Row>
          <Col md={6}>
            <EvoPerincianComponent />
          </Col>
          <Col md={6}>
            <EvoPerincianCloudComponent />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(EvoPerincianContainer);
