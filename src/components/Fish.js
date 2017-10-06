import React from 'react';

class Fish extends React.Component {
  render() {
    return (
      <div className="fish">
        <div className="fish-image"></div>
        <h3 className="title">Type O' Fish</h3>
        <p className="description">Some text about the fish here.</p>
        <div className="order">
          <button className="add-to-order">Add To Order</button>
        </div>
      </div>
    )
  }
}

export default Fish;