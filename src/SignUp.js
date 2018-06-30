import React from 'react'
import { FormGroup, FormControl, ControlLabel, Form, Col } from 'react-bootstrap';
import './SignUp.css';

class SignUP extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log("_____");
    fetch('/subscribers', {
      method: 'POST',
      body: data,
    });
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 9 && length < 12) return 'success';
    else if (length > 1) return 'warning';
    else if (length > 0) return 'Phone number must include at least 10 digits';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="form-signin widths">
        <h1>Sign Up</h1>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
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

export default SignUP;
