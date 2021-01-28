import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Navigation from './components/navigation';
import HexFileComponent from "./components/hexFiles";
import FaqComponent from "./components/faq";
import QmkKeymapsComponent from "./components/qmkKeymaps";
import WiringTutorialComponent from "./components/wiring";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/hex" exact component={HexFileComponent}/>
        <Route path="/qmk" exact component={QmkKeymapsComponent}/>
        <Route path="/wiring" exact component={WiringTutorialComponent}/>
        <Route path="/faq" exact component={FaqComponent}/>
      </Switch>
    </Router>
  );
}

export default App;
