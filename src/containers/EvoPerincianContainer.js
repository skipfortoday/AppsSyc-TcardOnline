import React, { Component } from "react";
import { connect } from "react-redux";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import { getUsersList, deleteDataUser } from '../actions/userAction'
import EvoPerincianComponent from "../components/EvoPerincianComponent";
import ListEvoPerincianComponent from "../components/ListGroupComponents/ListEvoPerincianComponent";

class EvoPerincianContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUser());
  }

  render() {
    
    return (
      <div>
        <Container>
        <Row>
          <Col xs="3">
          <ListEvoPerincianComponent/>
          </Col>
          <Col xs="3">
          
          </Col>
          <Col xs="3">
          <ListEvoPerincianComponent/>
          </Col>
        </Row>
        <Row >
          <Col>
               
              <EvoPerincianComponent/>
          </Col>
          <Col>
         
              <EvoPerincianComponent/>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default connect()(EvoPerincianContainer);