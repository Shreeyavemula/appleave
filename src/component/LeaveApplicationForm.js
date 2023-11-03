import React, { Component } from 'react';

class LeaveApplicationForm extends Component {
  state = {
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and API calls here
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="leaveType">Leave Type</label>
          <input
            type="text"
            className="form-control"
            id="leaveType"
            name="leaveType"
            value={this.state.leaveType}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            name="startDate"
            value={this.state.startDate}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            name="endDate"
            value={this.state.endDate}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason</label>
          <textarea
            className="form-control"
            id="reason"
            name="reason"
            value={this.state.reason}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default LeaveApplicationForm;
