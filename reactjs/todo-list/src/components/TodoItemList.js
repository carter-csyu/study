import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  static defaultProps = {
    todos: [],
    color: '#343a40',
    onToggle: () => console.warn('onToggle function is not defined'),
    onRemove: () => console.warn('onRemove function is not defined')
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(
      ({id, text, checked, color}) => (
        <TodoItem 
          key={id} 
          id={id}
          text={text}
          checked={checked}
          color={color}
          onToggle={onToggle}
          onRemove={onRemove} />
      )
    );

    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;