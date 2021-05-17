import React, { Component } from "react";
import { connect } from "react-redux";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
import EvoPerincianComponent from "../components/TableComponents/EvoPerincianComponent";
import JumbotronComponent from "../components/JumbotronComponent";
import EvoPerincianCloudComponent from "../components/TableComponents/EvoPerincianCloudComponent";
import { getLTcardEvoPerincian, getTcardEvoPerincian } from "../actions/tcardAction";
import firebase from '../firebase';

class EvoPerincianContainer extends Component {

  componentDidMount() {


    // setInterval(() => {
    //   this.props.dispatch(getLTcardEvoPerincian());
    // }, 3000);
    // 
    // this.props.dispatch(getTcardEvoPerincian());
    // setInterval(() => {
    //   
    // }, 3000);
    firebase.database().ref('/evoperincian')
      .on('value', snapshot => {
        const data = snapshot.val();
        console.log(data)
        this.props.dispatch(getTcardEvoPerincian());
        this.props.dispatch(getLTcardEvoPerincian());
      });  


  }

  // componentDidUpdate(){
  //   this.props.dispatch(getLTcardEvoPerincian());
  //   this.props.dispatch(getTcardEvoPerincian());
  // }




  // componentDidUpdate(){
  //   this.props.dispatch(getTcardEvoPerincian());
  //   this.props.dispatch(getLTcardEvoPerincian());
  // }

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