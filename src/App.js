import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Pages/login/Login";
import Detail from './Pages/Detail/Detail';
import Personal from './Pages/Personal/Personal';
import MetaAssessment from "./Pages/MetaAsessment/MetaAssessment";
import About from "./Pages/About/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Switch>
            <Route path="/login"><Login/></Route>
            <Route path="/detail"><Detail/></Route>
            <Route path="/personal"><Personal/></Route>
            <Route path="/MetaAssessment"><MetaAssessment/></Route>
            <Route path="/About"><About/></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
