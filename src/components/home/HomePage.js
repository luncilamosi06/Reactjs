import React, { Component } from 'react';
import './HomePage.css';
import Card from './../card/Card';
import star from './../images/star.svg';
import wars from './../images/wars.svg';

class HomePage extends Component {
  render() {
    return (
      <div className='content'>
        <div className='logo'>
          <img src={star} alt="star-logo" />
          <span className='interview-text'>The Interview</span>
          <img src={wars} alt="wars-logo" />
        </div>
        <Card />
      </div>
    );
  }
}

export default HomePage;
