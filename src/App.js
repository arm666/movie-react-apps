import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Combine from "./components/Combine";
import EachMovie from "./components/moviebar/EachMovie";
import SearchedMovie from "./components/search/SearchedMovie";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Combine}></Route>
          <Route exact path="/movie-react-app" component={Combine}></Route>
          <Route exact path="/movie-react-app/" component={Combine}></Route>
          <Route
            path="/movie-react-app/movie/:id"
            component={EachMovie}
          ></Route>
          <Route
            path="/movie-react-app/search/:query"
            component={SearchedMovie}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
