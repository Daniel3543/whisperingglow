import "./Sets.css";
import React, { Component } from 'react';
import img_1 from '../images/sets/setsOne.png';
import img_2 from '../images/sets/setsTwo.png';
import img_3 from '../images/sets/setsThree.png';

export default class Sets extends Component {
  render() {
    return (
      <div className='sets x'>
          <div className="box fcs">
            <h3>Sets</h3>
            <div className="all sb">
              <div className="detal fcs">
                <img src={img_1} alt="" />
                <p>Lorem Ipsum</p>
                <p>$35</p>
              </div>
              <div className="detal fcs">
                <img src={img_2} alt="" />
                <p>Lorem Ipsum</p>
                <p>$35</p>
              </div>
              <div className="detal fcs">
                <img src={img_3} alt="" />
                <p>Lorem Ipsum</p>
                <p>$35</p>
              </div>
            </div>
            <div className="line">
              <div className="main"></div>
            </div>
          </div>
      </div>
    )
  }
}
