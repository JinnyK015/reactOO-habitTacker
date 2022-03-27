import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'

import Habits from './components/Habits'
import Nav from './components/Nav'

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Coding', count: 0 },
      { id: 2, name: 'Job searching', count: 0 }
    ]
  }

  onDelete = habit => {
    const habits = [...this.state.habits].filter(item => habit.id !== item.id)
    this.setState({ habits })
  }

  onIncrement = habit => {
    const habits = this.state.habits.map(item =>
      item.id === habit.id
        ? { ...habit, count: habit.count + 1 }
        : item
    )
    this.setState({ habits })
  }

  onDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1
        return { ...habit, count: count < 0 ? 0 : count }
      }
      return item
    })
    this.setState({ habits })
  }

  onAdd = value => {
    const name = value[0].toUpperCase() + value.slice(1)
    const habits = [...this.state.habits, { id: this.state.habits.length + 1, name, count: 0 }]
    this.setState({ habits })
  }

  // onAllDelete = () => {
  //   const habits = []
  //   this.setState({ habits })
  // }

  onAllReset = () => {
    const habits = this.state.habits.map(habit =>
      habit.count !== 0
        ? { ...habit, count: 0 }
        : habit
    )
    this.setState({ habits })
  }

  onEdit = value => {
    const name = value.name[0].toUpperCase() + value.name.slice(1)
    const habit = { ...value, name }
    const demyHabits = [...this.state.habits]
    const habits = demyHabits.map(item =>
      item.id === habit.id
        ? habit
        : item
    )
    this.setState({ habits })
  }

  render () {
    return (
      <section className='habitTracker'>
        <Nav totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <Routes>
          <Route path='/' element={
            <Habits
              habits={this.state.habits}
              onIncrement={this.onIncrement}
              onDecrement={this.onDecrement}
              onDelete={this.onDelete}
              onEdit={this.onEdit}
              onAdd ={this.onAdd}
              onAllReset ={this.onAllReset}
            />} />
        </Routes>
      </section>
    )
  }
}

export default App
