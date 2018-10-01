import React from 'react';
import Button from '@material-ui/core/Button';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: props.minutes
    };
    this.secondsRemaining = 0;
    this.intervalHandle = null;
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    const { minutes } = this.props;
    this.startCountDown(minutes);
  }

  componentWillReceiveProps(props) {
    if (props.minutes !== this.props.minutes) {
      clearInterval(this.intervalHandle);
      this.startCountDown(props.minutes);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }

  tick() {
    const min = Math.floor(this.secondsRemaining / 60);
    const sec = this.secondsRemaining - min * 60;

    this.setState({
      minutes: min,
      seconds: sec
    });

    if (min === 0 && sec === 0) {
      clearInterval(this.intervalHandle);
      this.props.pauseAll();
      this.props.onEnableTimer(0);
    }

    this.secondsRemaining -= 1;
  }

  startCountDown(minutes) {
    this.intervalHandle = setInterval(this.tick, 1000);
    this.secondsRemaining = minutes * 60;
  }

  render() {
    const { minutes, seconds } = this.state;
    const { onToggleTimerDialog } = this.props;
    const openTimerDialog = () => {
      onToggleTimerDialog(true);
    };

    let minText = minutes;
    let secText = seconds;
    if (minutes < 10) {
      minText = `0${minutes}`;
    }
    if (seconds < 10) {
      secText = `0${seconds}`;
    }
    return (
      <Button onClick={openTimerDialog}>
        <h6 className="timer-text">
          {minText}
:
          {secText}
        </h6>
      </Button>
    );
  }
}

export default Timer;
