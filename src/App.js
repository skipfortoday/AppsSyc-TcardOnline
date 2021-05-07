import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import EvoPerincianContainer from "./containers/EvoPerincianContainer";

export default class App extends Component {
  render() {
    return (
      <div> 
        <BrowserRouter>
        <NavbarComponent />
          <Route path="/" exact component={HomeContainer} />
          <Route path="/create" exact component={CreateUserContainer} />
          <Route path="/detail/:id" exact component={DetailUserContainer} />
          <Route path="/edit/:id" exact component={EditUserContainer} />
          <Route path="/evoperincian" exact component={EvoPerincianContainer} />
        </BrowserRouter>
      </div>
    );
  }
}
