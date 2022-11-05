import React from 'react';

export default class ClassLifeCycleEvent extends React.Component {
  state = {
    count: 0,
    date: new Date(),
  };

  componentDidMount() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;
    this.interval = setInterval(this.tick, 1000);
  }

  componentDidUpdate() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    console.log('Clock Ticking');
    this.setState({
      date: new Date(),
    });
  };

  addClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  render() {
    const { date } = this.state;
    return (
      <div>
        <h3>{date.toLocaleTimeString()}</h3>
        <button type="button" onClick={this.addClick}>
          Add 1
        </button>
      </div>
    );
  }
}
