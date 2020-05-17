import React from 'react';
import '../css/serviceSheet.css';
import YourSpiritualLife from '../images/YourSpiritualLife.png';
import YourAction from '../images/YourAction.png';
import YourStudy from '../images/YourStudy.png';
import ServiceSheetHeader from '../images/ServiceSheetHeader.png';
import CardFlap from './CardFlap.js';

class ServiceSheetSide extends React.Component {
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
      return <CardFlap img={this.state.img} alt={this.state.alt} zoomOut={this.zoomOut} />
    }

    return (
      <div className="active-card-flap">
        <div className="service-sheet-container">
          <div onClick={() => this.zoomIn(ServiceSheetHeader)} className="header">
            <img src={ServiceSheetHeader} alt="Service Sheet Header" />
          </div>
          <div onClick={() => this.zoomIn(YourSpiritualLife)} className="left-tab">
            <img src={YourSpiritualLife} alt="Your Spiritual Life" />
          </div>
          <div onClick={() => this.zoomIn(YourStudy)} className="center-tab">
            <img src={YourStudy} alt="Your Study" />
          </div>
          <div onClick={() => this.zoomIn(YourAction)} className="right-tab">
            <img src={YourAction} alt="Your Action" />
          </div>
        </div>
      </div>
    )
  }
}

export default ServiceSheetSide;
