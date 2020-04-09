import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Sidebar from "./components/Sidebar";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="w-100">
          <div className="row p-0 m-0">
            <div className="col-2 m-0 p-0">
              <Sidebar />
            </div>
            <div className="col-10 p-0 m-0">
              <Switch>
                <Route exact path="/" component={Search} />
                <Route path="/saved" component={Saved} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
