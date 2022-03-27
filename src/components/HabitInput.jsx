import React, { PureComponent } from 'react'

class HabitInput extends PureComponent {
    inputRef = React.createRef()

  onSubmit =(event) => {
    event.preventDefault()
    const name = this.inputRef.current.value
    name && this.props.onAdd(name)
    this.inputRef.current.value = ''
  }

  render () {
    return (

      <form className="habit_add" onSubmit={this.onSubmit}>
        <input type="text" className="habbit_input" ref={this.inputRef} placeholder="please enter your habit :)"/>
        <button className='habbit_add_btn'>Add</button>
      </form>

    )
  }
}

export default HabitInput
