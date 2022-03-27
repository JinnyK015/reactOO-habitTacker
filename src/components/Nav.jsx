import React, { PureComponent } from 'react'

class Nav extends PureComponent {
  render () {
    return (
      <div className='navbar'>
        <span className="habit_title"> Habit tracker </span>
        <span className='total_habits'>{this.props.totalCount}</span>
      </div>

    )
  }
}
export default Nav
