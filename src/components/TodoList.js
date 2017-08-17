import React, { Component } from 'react'
import TodoItems from './TodoItems'
import './TodoList.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
    this.addTask = this.addTask.bind(this)
  }

  addTask(event) {
    event.preventDefault()
    const task = {
      key: Date.now(),
      text:this.taskInput.value.trim()
    }
    const tasks = [...this.state.tasks, task]
    this.setState({ tasks })
  }

  render() {
    return (
      <div className="todo-list-main">
        <div className="header">
          <form onSubmit={this.addTask}>
            <input 
              type="text" 
              placeholder="Enter Task"
              ref={ input => this.taskInput = input }
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default TodoList