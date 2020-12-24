import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./views/Home";
import Search from "./views/Search";
import Saved from "./views/Saved";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/saved">
            <Saved />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
