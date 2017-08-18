import React, { Component } from 'react'
import './Task.css'

class Task extends Component {
  constructor(props) {
    super(props)
    this.toggleTaskState = this.toggleTaskState.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  toggleTaskState(event) {
    event.preventDefault()
    this.props.toggleTaskState(this.props.index, this.props.task)
  }

  deleteTask() {
    this.props.deleteTask(this.props.index)    
  }

  render() {
    const task = this.props.task
    const classes = ['task', task.active ? 'task-active' : 'task-inactive']
    return (
      <span className={classes.join(' ')}>
        <a 
          href="#"
          onClick={this.toggleTaskState}>
          {task.text}
        </a>
        <button className="fa fa-trash" ariaHidden="true" onClick={this.deleteTask}>
        </button>
      </span>
    )
  }
}

export default Task