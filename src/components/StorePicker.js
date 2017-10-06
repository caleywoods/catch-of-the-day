import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  goToStore(e) {
    e.preventDefault();
    const storeName = `store/${this.storeInput.value}`;

    // window.location = storeName;
    this.context.router.transitionTo(storeName);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }}/>
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

/*
Expose the router to this component so we can call transitionTo on the
goToStore()
*/
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;