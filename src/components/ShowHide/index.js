import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstname: false, lastname: false}

  onClickFirst = () => {
    this.setState(prevState => ({firstname: !prevState.firstname}))
  }

  onClickLast = () => {
    this.setState(prevState => ({lastname: !prevState.lastname}))
  }

  render() {
    const {firstname, lastname} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="button-container1">
            <button
              className="button1"
              type="button"
              onClick={this.onClickFirst}
            >
              Show/Hide Firstname
            </button>
            {firstname && <p className="name">Joe</p>}
          </div>
          <div className="button-container2">
            <button
              className="button1"
              type="button"
              onClick={this.onClickLast}
            >
              Show/Hide Lastname
            </button>
            {lastname && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
