import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.css';
import logo from '../../logo.svg';

const Header = (props) => (
    <header className="header">
      <Link to='/spacex/'>
        <img
            src={logo}
            alt="Logo Space X"
            className="logo"
        />
      </Link>
      <nav className="main-nav nav">
        <ul className="list">
          {props.rockets.map((item, index) => (
            <li key={index} className="item">
              <Link
                to={`/spacex/rocket/${item.replace(' ', '_')}`}
                onClick={() =>{
                  props.changeRocket(item);
                }} 
                className="item-link">
                  {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="secondary-nav">
        <ul className="list">
          <li className="item">
            <NavLink exact to="/spacex/" 
              className="item-link"
              activeClassName="active">Home</NavLink>
          </li>
          <li className="item">
            <NavLink to="/spacex/calendar" 
              className="item-link"
              activeClassName="active">Calendar</NavLink>
          </li>
        </ul>
      </nav>
    </header>
);

export default Header;