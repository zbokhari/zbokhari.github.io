import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import splashQuote from "./images/splash-page-quote.png"


import './App.css'
// import Navbar from "./Navbar"
import SocialFollow from "./components/SocialFollow"

class App extends React.Component {
  state = { advice: '' }

  componentDidMount() {
    this.fetchAdvice()
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { advice } = this.state;
    return (
      <div className="container">
        <div className="cards">

          <div className="card">
            <h6>Client-Side | Server-Side | Middleware | Full Stack Solutions</h6>

            <h3>Mission</h3>
            <h6>With minds from the worlds of business, medicine, energy, software, hardware, and angel investing, our team of more than 20 coders empowers our clients, partners, and customers with an innovative approach to design and development bolstered by a combined expertise in a variety of fields</h6>
            <br />
            <br />
            <br />
            <img src={splashQuote} className="splashImage" alt="" />

          </div>
        </div>
      </div>

    );
  }
}

export default App
