import React, { Component } from 'react'
import Task from './Task'
import './TodoItems.css'

class TodoItems extends Component {
  render() {
    const items = Object.getOwnPropertyNames(this.props.tasks)
      .reverse()
      .map(key => {
        const task = this.props.tasks[key] 
        return (
          <li key={key}>
            <Task 
              task={task} 
              index={key} 
              deleteTask={this.props.deleteTask}
              toggleTaskState={this.props.toggleTaskState}
            />
          </li>
        )
      })
    return <ul className="todo-list-items">{items}</ul>
  }
}

export default TodoItems