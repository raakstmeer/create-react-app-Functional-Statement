import React from 'react';

export default class ClassTodo extends React.Component {
  state = { todo: '', warning: '' };

  handleTodo = (e) => {
    const updatedTodo = e.target.value;
    const updatedWarning = updatedTodo.includes('.js')
      ? 'Before learn it you need know about javascript. Do you have it ?'
      : null;

    this.setState({
      todo: updatedTodo,
      warning: updatedWarning,
    });
  };

  render() {
    const { todo, warning } = this.state;
    return (
      <div>
        <h3>Todo by Class Component</h3>
        <p>{todo}</p>
        <p>
          <input type="text" value={todo} onChange={this.handleTodo} />
        </p>
        <p>{warning || 'Good Choose'}</p>
      </div>
    );
  }
}
