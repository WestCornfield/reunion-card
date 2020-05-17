import React from 'react';
import OrderOfReunionSide from './OrderOfReunionSide.js'
import ServiceSheetSide from './ServiceSheetSide.js'

class ReunionCard extends React.Component {

  constructor() {
    super();
    this.state = {
      showOrder: true,
      flipButtonClassName: 'flip_button'
    }
    this.flipCard = this.flipCard.bind(this);

    this.hideFlip = this.hideFlip.bind(this);
    this.showFlip = this.showFlip.bind(this);
  }

  hideFlip() {
    this.setState(state => ({
      flipButtonClassName: 'hidden'
    }))
  }

  showFlip() {
    this.setState(state => ({
      flipButtonClassName: 'flip_button'
    }))
  }

  flipCard() {
    this.setState(state => ({
      showOrder: !this.state.showOrder
    }));
  }

  render() {
    return  (
      <div className="card-viewer">
        <div className="card">
          { this.state.showOrder ? <OrderOfReunionSide hideFlip = {() => this.hideFlip()} showFlip = {() => this.showFlip()} />
           : <ServiceSheetSide hideFlip = {() => this.hideFlip()} showFlip = {() => this.showFlip()} /> }
          <button onClick={this.flipCard} className={this.state.flipButtonClassName}>Flip Card</button>
          </div>
      </div>
    );
  }
}

export default ReunionCard;
