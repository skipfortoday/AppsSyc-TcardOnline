import React, { Component } from "react";
import { connect } from "react-redux";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
import EvoPerincianComponent from "../components/TableComponents/EvoPerincianComponent";
import JumbotronComponent from "../components/JumbotronComponent";
import EvoPerincianCloudComponent from "../components/TableComponents/EvoPerincianCloudComponent";
import { getLTcardEvoPerincian, getTcardEvoPerincian } from "../actions/tcardAction";

class EvoPerincianContainer extends Component {
  componentDidMount() {
    // this.props.dispatch(getLTcardEvoPerincian());
    // this.props.dispatch(getTcardEvoPerincian());
    setInterval(() => {
      this.props.dispatch(getLTcardEvoPerincian());
    }, 3000);
    setInterval(() => {
      this.props.dispatch(getTcardEvoPerincian());
    }, 3000);
  }


  render() {
    
    return (
      <div>
        <JumbotronComponent/>
        <Row >
          <Col md={6}>    
              <EvoPerincianComponent/>
          </Col>
          <Col md={6}>
              <EvoPerincianCloudComponent/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(EvoPerincianContainer);