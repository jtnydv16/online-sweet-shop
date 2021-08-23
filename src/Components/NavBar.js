import React from "react";
import '../Style/Nav.css' 
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import logo from '../resources/logo.png';

class NavBar extends React.Component {

  constructor(props)
  {
    super(props);

  }

  render() {
    return(
      <nav>
         <img src={logo} alt="logo" className="logo"/> 
          <ul className="nav-links">
            <Link to="/" className="navStyle">
              <li>Home</li>
            </Link>
            <Link to="/about" className="navStyle">
              <li> About Us</li>
            </Link>
            <Link to="/products" className="navStyle">
              <li>Our Products</li>
            </Link>
            <Link to="/event" className="navStyle">
              <li>Events</li>
            </Link>

          </ul>
      </nav>

    )
  }
}
  
export default NavBar;