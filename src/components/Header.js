import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => (
  <header className='App-header'>
    <ul className='container'>
      <li>
        <Link to='/'>My Blog</Link>
      </li>
    </ul>
  </header>
);

export default Header;
