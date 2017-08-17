import React, { Component } from 'react'
import './TodoItems.css'

class TodoItems extends Component {
  render() {
    const items = this.props.tasks.map(task => 
      <li key={task.key}>{task.text}</li>
    )
    return <ul className="todo-list-items">{items}</ul>
  }
}

export default TodoItems