import React from "react";
import data from "./Info";
import Homepage from "./pages/Homepage";
import Movie from "./pages/Movie";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route path="/movie/:id" component={Movie}></Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
