import React, { Component } from 'react'
import TodoItems from './TodoItems'
import uuid from 'uuid/v4'
import './TodoList.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: { }
    }
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.toggleTaskState = this.toggleTaskState.bind(this)
  }

  componentWillMount() {
    const tasks = JSON.parse(localStorage.getItem(`tasks`))
    if (tasks) {
      this.setState({ tasks })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`tasks`, JSON.stringify(nextState.tasks))
  }

  addTask(event) {
    event.preventDefault()
    const text = this.taskInput.value.trim()
    if (text.length > 0) {
      const key = uuid()
      const task = {
        text,
        active: true
      }
      const tasks = { ...this.state.tasks, [key]: task }
      this.setState({ tasks })
    }
    this.taskInput.value = ''
    this.taskInput.focus()
  }

  deleteTask(key) {
    const tasks = { ...this.state.tasks }
    delete tasks[key]
    this.setState({ tasks })
  }

  toggleTaskState(key, task) {
    const updatedTask = { ...task, active: !task.active }
    const tasks = { ...this.state.tasks, [key]: updatedTask }
    this.setState({ tasks })
  }

  render() {
    return (
      <div className="todo-list-main">
        <div className="header">
          <form onSubmit={this.addTask}>
            <input 
              className="shadow"
              type="text" 
              placeholder="Enter Task"
              ref={ input => this.taskInput = input }
            />
            <button className="shadow" type="submit">Add</button>
          </form>
        </div>
        <TodoItems 
          tasks={this.state.tasks} 
          deleteTask={this.deleteTask}
          toggleTaskState={this.toggleTaskState}
        />
      </div>
    )
  }
}

export default TodoList