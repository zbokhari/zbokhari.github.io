import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';


// import './App.css'
// import Navbar from "./Navbar"
import SocialFollow from "./SocialFollow"
// import logo from "./images/SSD-Logo.JPG"

class Capabilities extends React.Component {
    state = { advice: '' }

    componentDidMount() {    
        this.fetchAdvice()
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice} = response.data.slip ;
            this.setState({ advice: advice});
        })
        .catch((error) => {
            console.log(error); 
        });
    }

    render() {
        const { advice } = this.state ;
        return (
            <div className="container">
            <div className="app">
              {/* <header class="site-header">
              <h1>Silver Story Development LLC</h1>
            <img className="logo" src={logo} alt="" />
              </header> */}
            <div className="card">
              <h2>{advice}</h2>
              <button className="buton" onClick={this.fetchAdvice}>
                <span><h4>Unlock today's wisdom</h4></span>
              </button>
            </div>
          </div>
          <footer>
          <SocialFollow />
          </footer>
          </div>

        );
    }
}

export default Capabilities;