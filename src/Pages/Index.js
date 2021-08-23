import React,{Component} from 'react';
import NavBar from '../Components/NavBar';
import Product from './Product';
import Event from './Event';
import About from './About';
import Home from './Home';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

class Index extends Component {
  constructor() {
      super();
  }
  
  render() {
      return (
          <Router>
            <div>
                <NavBar/>
                <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/products" component={Product}/>
                <Route path="/event" component={Event}/>
                </Switch>
            </div>
          </Router>
      )    
  }
}

export default Index;