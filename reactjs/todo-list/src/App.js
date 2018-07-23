import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

class App extends Component {
  id = 3
  state = {
    input: '',
    todos: [
      { id: 0, text: 'Velopert', checked: false, color: '#343a40' },
      { id: 1, text: 'Todolist', checked: false, color: '#343a40' },
      { id: 2, text: 'homework', checked: false, color: '#343a40' }
    ],
    colors: ['#343a40', '#f03e3e', '#12b886', '#228ae6'],
    color: '#343a40'
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos, color } = this.state;

    if (input === null || input.trim() === "") return;

    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: color
      })
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const idx = todos.findIndex(todo => todo.id === id);
    const selected = todos[idx];

    const nextTodos = [...todos];

    nextTodos[idx] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter( todo => todo.id !== id )
    });
  }
  
  handleClick = (color) => {
    this.setState({
      color: color
    });
  }

  render() {
    const { todos, input, colors, color } = this.state;
    const { 
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleClick
    } = this;

    return (
      <TodoListTemplate 
        palette={
          <Palette
            color={color} 
            colors={colors} 
            onClick={handleClick} />
        }
        form={
        <Form 
          value={input}
          onChange={handleChange}
          onCreate={handleCreate}
          onKeyPress={handleKeyPress}
          color={color}
        />
      }>
        <TodoItemList 
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
