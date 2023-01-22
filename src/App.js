import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Pages/login/Login";
import Detail from './Pages/Detail/Detail';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Switch>
            <Route path="/login"><Login/></Route>
            <Route path="/detail"><Detail/></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
