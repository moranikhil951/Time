// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimeRunning: false, timeElapsedInseconds: 0}

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInseconds: prevState.timeElapsedInseconds + 1,
    }))
  }

  componentWillUnmount = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  startButton = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimeRunning: true})
  }

  stopButton = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  resetButton = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, timeElapsedInseconds: 0})
  }

  renderSeconds = () => {
    const {timeElapsedInseconds} = this.state
    const seconds = Math.floor(timeElapsedInseconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInseconds} = this.state
    const minutes = Math.floor(timeElapsedInseconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="timeContainer">
        <div className="inner-con">
          <div className="inner-inner-container">
            <h1 className="heading">stopwatch</h1>
            <div className="mini-container">
              <div className="timeAndImage">
                <img
                  alt="stopwatch"
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                />
                <p>Timer</p>
              </div>
              <h1 className="timechanging">{time}</h1>
              <div>
                <button
                  type="button"
                  onClick={this.startButton}
                  disabled={isTimeRunning}
                  className="greenButton"
                >
                  Start
                </button>
                <button
                  type="button"
                  onClick={this.stopButton}
                  className="stopButton"
                >
                  Stop
                </button>
                <button
                  type="button"
                  onClick={this.resetButton}
                  className="yellowButton"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
