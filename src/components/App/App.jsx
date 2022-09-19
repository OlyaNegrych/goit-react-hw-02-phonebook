import React, { Component } from 'react';
import { nanoid } from 'nanoid'
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

class App extends Component {
  static propTypes = {
    //
  };

  state = {
    contacts: [],
    name: '',
  };

  // handleFeedbackIncrement = e => {
  //   const currentBtn = e.currentTarget.dataset.action;
  //   this.setState(prevState => ({
  //     [currentBtn]: prevState[currentBtn] + 1,
  //   }));
  // };

  // countTotalFeedback = () => {
  //   return Object.values(this.state).reduce((totalFeedback, feedbackItems) => {
  //     return totalFeedback + feedbackItems;
  //   }, 0);
  // };

  // countPositiveFeedbackPercentage = () => {
  //   const { good } = this.state;
  //   const totalFeedback = this.countTotalFeedback();
  //   return ((good / totalFeedback) * 100).toFixed(0);
  // };

  render() {
    return (
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    );
  }
}

export default App;