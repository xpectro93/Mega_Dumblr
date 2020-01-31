import React from 'react';
import './CSS/Navbar.css';
import { NavLink } from 'react-router-dom';

export const Navbar =(props)=>(
  <nav>
    <span id='nav-left'>
      <li>D</li>
      <input placeholder="Search"></input>
      </span>
    <span id='nav-right'>
      <li>Home</li>
      <li>Explore</li>
      <li>THIS IS 4</li>
      <li><NavLink to='/test'>Test</NavLink></li>
    </span>
  </nav>
)
