import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Booking from './components/Booking';
import Tracking from './components/Tracking';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/booking" component={Booking} />
                  <Route path="/tracking" component={Tracking} />
              </Switch>
          </div>
      </Router>
  );
};

export default App;