import React, { Component } from 'react'
import Habit from './Habit'
import HabitInput from './HabitInput'

class Habits extends Component {
  handleAllReset = event => {
    event.preventDefault()
    this.props.onAllReset()
  }

  render () {
    return (
      <div className="habits">
        <HabitInput onAdd={this.props.onAdd}/>
        <ul>
          {
            this.props.habits.map(habit => (
              <Habit habit={habit}
                key={habit.id}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                onEdit={this.props.onEdit}
                onDelete={this.props.onDelete}/>
            ))
          }

        </ul>
        <button className='habit-reset' onClick={this.handleAllReset}>ResetAllCount</button>
      </div>
    )
  }
}
export default Habits
