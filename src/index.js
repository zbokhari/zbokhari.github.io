import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from "./components/Footer"
import Contact from './components/Contact'
import Capabilities from './components/Capabilities'
import Team from './components/Team'
import PrivacyPolicy from './components/PrivacyPolicy'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
       <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/capabilities" component={Capabilities} />
        <Route path="/contact" component={Contact} />
        <Route path="/team" component={Team} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />


        
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
