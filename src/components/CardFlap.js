import React from 'react';
import '../css/cardViewer.css';

class CardFlap extends React.Component {
  click = () => {
    this.props.zoomOut();
  }

  render() {
    return (<div className="card-flap">
      <img src={this.props.img} alt={this.props.alt} />
      <br></br>
      <button onClick={this.click}>Back</button>
    </div>);
  }
}

export default CardFlap;
