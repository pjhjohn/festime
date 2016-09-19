import React from 'react';
import './CountDown.scss';

const festival = 'October 22 2016 00:00:00 GMT+0900';

export default class CountDown extends React.Component {
  constructor() {
    super();

    let remain = this.getTimeRemaining(festival);
    this.state = {
      days: remain.days,
      hours: remain.hours,
      minutes: remain.minutes,
      seconds: remain.seconds
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    let remain = this.getTimeRemaining(festival);
    this.setState({
      days: remain.days,
      hours: remain.hours,
      minutes: remain.minutes,
      seconds: remain.seconds
    });
  }

  getTimeRemaining(endtime){
    let total = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor( (total/1000) % 60 );
    let minutes = Math.floor( (total/1000/60) % 60 );
    let hours = Math.floor( (total/(1000*60*60)) % 24 );
    let days = Math.floor( total/(1000*60*60*24) );
    return {
      'total' : total,
      'days' : days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.days}일 {this.state.hours}시간 {this.state.minutes}분 {this.state.seconds}초</h1>
      </div>
    );
  }
}
