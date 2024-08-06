
import React, { Component } from "react";
import { FaPlay, FaStop, FaFlag, FaPause } from "react-icons/fa";
import styled from "styled-components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: "00",
      minute: "00",
      second: "00",
      milliSecond: "00",
      isRunning: false,
      intervalBox: [],
    };
    this.playTimeInterval = null;
    this.milliTime = 0;
    this.secondTime = 0;
    this.minuteTime = 0;
  }

  playInterval = () => {
    this.playTimeInterval = setInterval(() => {
      this.milliTime++;
      this.milliTime %= 100;
      this.setState({
        milliSecond: this.milliTime < 10 ? `0${this.milliTime}` : `${this.milliTime}`,
      });
      if (this.milliTime === 0) {
        this.secondTime++;
        this.secondTime %= 60;
        this.setState({
          second: this.secondTime < 10 ? `0${this.secondTime}` : `${this.secondTime}`,
        });
        if (this.secondTime === 0) {
          this.minuteTime++;
          this.minuteTime %= 60;
          this.setState({
            minute: this.minuteTime < 10 ? `0${this.minuteTime}` : `${this.minuteTime}`,
          });
        }
      }
    }, 10);
  };

  playTime = () => {
    if (!this.state.isRunning) {
      this.playInterval();
      this.setState({ isRunning: true });
    } else {
      this.pauseTime();
    }
  };

  pauseTime = () => {
    this.setState({ isRunning: false });
    clearInterval(this.playTimeInterval);
  };

  stopTime = () => {
    this.pauseTime();
    this.milliTime = 0;
    this.secondTime = 0;
    this.minuteTime = 0;
    this.setState({
      milliSecond: "00",
      second: "00",
      minute: "00",
      hour: "00",
      intervalBox: [],
    });
  };

  flag = () => {
    this.setState((prevState) => ({
      intervalBox: [...prevState.intervalBox, `00:${prevState.minute}:${prevState.second}:${prevState.milliSecond}`],
    }));
  };

  render() {
    const { hour, minute, second, milliSecond, isRunning, intervalBox } = this.state;

    return (
      <Stopwatch>
        <h1>stopwatch</h1>
        <div className="btns">
          {!isRunning ? (
            <FaPlay onClick={this.playTime} />
          ) : (
            <FaPause onClick={this.playTime} />
          )}
          <FaFlag onClick={this.flag} />
          <FaStop onClick={this.stopTime} />
        </div>
        <Watch>
          <div className="time">
            <div className="hour">
              <h2>{hour}</h2>
              <h5>hours</h5>
            </div>
            <div className="minute">
              <h2>{minute}</h2>
              <h5>minutes</h5>
            </div>
            <div className="second">
              <h2>{second}</h2>
              <h5>seconds</h5>
            </div>
            <div className="millisecond">
              <h4>{milliSecond}</h4>
            </div>
          </div>
          <div className="interval">
            {intervalBox.map((item, index) => (
              <p key={index}>{index + 1}. {item}</p>
            ))}
          </div>
        </Watch>
      </Stopwatch>
    );
  }
}

export default App;

const Stopwatch = styled.div`
  .interval{
    overflow-y: scroll;
    height: 120px;
  }
  background-color: white;
  color: #49243e;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
  display: flex;
  flex-direction: column;
  min-width: 50vw;
  text-align: center;
  border-radius: 10px;
  box-shadow: 3px 4px 3px white;
  h1 {
    letter-spacing: 5px;
    text-transform: uppercase;
  }
  .btns {
    margin: 25px 0;
    cursor: pointer;
    font-size: 30px;
    display: flex;
    justify-content: center;
    gap: 25px;
  }
`;

const Watch = styled.div`
  display: flex;
  justify-content: space-between;
  .time {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    text-align: center;
  }
  .time > div {
    position: relative;
  }
  .time h2::after {
    content: ":";
    position: absolute;
    right: -10px;
  }
  .time div:last-child h2::after {
    content: "";
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 25px;
  }
`;
