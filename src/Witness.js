import React from 'react'
import { FormGroup, FormControl, ControlLabel, Form, Col } from 'react-bootstrap';
import './SignUp.css';

class Witness extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log("_____");
    fetch('https://desolate-anchorage-86223.herokuapp.com/witness/', {
      method: 'POST',
      body:
      {
          "location": "2 MetroTech Center, Brooklyn, NY 11201", 
          "description": "An I.C.E. agent has been spotted"
      },
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="form-signin widths">
        <h1>Witness</h1>
        <FormGroup
          controlId="formBasicText"
          bsSize="large"
        >
          <ControlLabel></ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Please enter your phone number"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup>
          <Col >
            <button className="btn btn-lg btn-primary btn-block" type="submit">Create Account</button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Witness;
