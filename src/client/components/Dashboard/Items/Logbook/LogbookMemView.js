import React, { Component } from 'react';
import LogData from './LogData';
import moment from 'moment';

const today = moment().format("MM-DD-YYYY");

class LogbookMemView extends Component {
  constructor(props) {
    super(props);
    console.log('INSIDE LOGBOOKENERGY', props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = {
      date_performed: today,
      mood: this.refs.mood.value,
      energy: this.refs.energy.value,
      motivation: this.refs.motivation.value
    };
    this.props.addMem(formData);
    console.log('added data');
  }

  render() {
    return (
      <div className="log-activity">
        <p>Logging {LogData[3].name}</p>
        <p>Date: {today}</p>
        <table>
          <tr>{LogData[3].chart.map(heading => <th>{heading}</th>)}</tr>
          <tr>{LogData[3].chart.map(heading => <td><input ref={heading} type="text" /></td>)}
          <td><button type="submit" onClick={this.handleSubmit.bind(this)}>ADD</button></td></tr>
        </table>
      </div>
    );
  }
}

export default LogbookMemView;
