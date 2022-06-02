import React from 'react';
import './App.scss';

type State = {
  counter: number,
  increaseCounter: number,
};

class App extends React.Component<{}, State> {
  state = {
    counter: 0,
    increaseCounter: 0,
  };

  addOne = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  add100 = () => {
    this.setState(state => ({
      counter: state.counter + 100,
    }));
  };

  increase = () => {
    if (this.state.increaseCounter === 0 || this.state.increaseCounter % 5) {
      this.setState(state => ({
        counter: state.counter + 1,
        increaseCounter: state.increaseCounter + 1,
      }));
    } else {
      this.setState(state => ({
        counter: state.counter + 101,
        increaseCounter: state.increaseCounter + 1,
      }));
    }
  };

  render() {
    return (
      <div className="App">
        <div className="App__counter">
          <h1 className="App__title">
            Count:
            {this.state.counter}
          </h1>
          <button
            type="button"
            onClick={this.addOne}
            className="button is-large is-responsive is-rounded"
          >
            Add 1
          </button>
          <button
            type="button"
            onClick={this.add100}
            className="button is-large is-responsive is-rounded"
          >
            Add 100
          </button>
          <button
            type="button"
            onClick={this.increase}
            className="button is-large is-responsive is-rounded"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
