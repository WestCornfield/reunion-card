import React from 'react';
import '../css/orderOfReunion.css';
import OrderOfReunionLeft from '../images/OrderOfReunionLeft.png';
import OrderOfReunionCenter from '../images/OrderOfReunionCenter.png';
import OrderOfReunionRight from '../images/OrderOfReunionRight.png';
import CardFlap from './CardFlap.js';

class OrderOfReunionSide extends React.Component {
  constructor() {
    super();
    this.state = {
      img : ''
    }

    this.zoomOut = this.zoomOut.bind(this);
  }

  zoomIn(img) {
    this.props.hideFlip();
    this.setState(state => ({
      img: img
    }));
  }

  zoomOut(img) {
    this.props.showFlip();
    this.setState(state => ({
      img: ''
    }));
  }

  render() {
    if (this.state.img !== '') {
      return <CardFlap img={this.state.img} zoomOut={this.zoomOut} />
    }

    return (
      <div className="active-card-flap">
        <div className="order-of-reunion-container">
          <div onClick={() => this.zoomIn(OrderOfReunionLeft)}  className="left-tab">
            <img src={OrderOfReunionLeft} alt="Order Of Reunion Left" />
          </div>
          <div onClick={() => this.zoomIn(OrderOfReunionCenter)} className="center-tab">
            <img src={OrderOfReunionCenter} alt="Order Of Reunion Center" />
          </div>
          <div onClick={() => this.zoomIn(OrderOfReunionRight)} className="right-tab">
            <img src={OrderOfReunionRight} alt="Order Of Reunion Right" />
          </div>
        </div>
      </div>
    );
  }
}

export default OrderOfReunionSide;
