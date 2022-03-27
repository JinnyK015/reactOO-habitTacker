import React, { PureComponent } from 'react'

class Habit extends PureComponent {
  state ={
    edit: false
  }

  editInputRef = React.createRef()

  handleDelete =() => {
    this.props.onDelete(this.props.habit)
  }

  handleInc = () => {
    this.props.onIncrement(this.props.habit)
  }

  handleDec = () => {
    this.props.onDecrement(this.props.habit)
  }

  handleEdit =() => {
    this.setState({ edit: true })
  }

  onEditSubmit =(event) => {
    event.preventDefault()
    this.setState({ edit: false })
    const name = this.editInputRef.current.value
    const habit = { ...this.props.habit }
    name !== habit.name && name
      ? this.props.onEdit({ ...habit, name })
      : this.props.onEdit(habit)
  }

  render () {
    const { name, count } = this.props.habit
    return <li className='habit'>
      {this.state.edit
        ? <form className='habit-editform' onSubmit={this.onEditSubmit}>
          <input type="text" ref={this.editInputRef} />
        </form>
        : <>
          <span className="habit-name">{name}</span>
          <span className="habit-count">{count}</span>
          <button onClick={this.handleInc} className='habit-button habit-plus'><i className="fas fa-plus-square"></i></button>
          <button onClick={this.handleDec} className='habit-button habit-minus'><i className="fas fa-minus-square"></i></button>
          <button onClick={() => this.handleEdit()} className='habit-button habit-edit'><i className="fas fa-pen-square"></i></button>
        </>
      }
      {this.state.edit && <button onClick={this.onEditSubmit} className='habit-button habit-edit'>
        <i className="fas fa-check"></i></button>
      }
      <button onClick={this.handleDelete} className='habit-button habit-trash'><i className="fas fa-trash"></i></button>
    </li>
  }
}

export default Habit
