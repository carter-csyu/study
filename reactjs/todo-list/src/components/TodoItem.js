import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  static defaultProps = {
    text: "",
    checked: true,
    id: -1
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }
  
  render() {
    const { text, checked, id, onToggle, onRemove, color } = this.props;

    return (
      <div className="todo-item" onClick={ () => onToggle(id) }>
        <div className="remove" onClick={ (e) => {
          e.stopPropagation();
          onRemove(id);
        }}>&times;</div>
        <div className={`todo-text ${checked && 'checked'}`} style={{color}}>
          <div style={{color: color}}>{text}</div>
        </div>
        {
          checked && (<div className="check-mark">✓</div>)
        }
      </div>
    );
  }
}

export default TodoItem;