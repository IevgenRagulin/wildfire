import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl } from 'react';

class SignUp extends Component {
  render() {
    return (
        <div> 
            <form>
            <FormGroup>
                <InputGroup>
                    <InputGroup.Addon>#</InputGroup.Addon>
                    <FormControl type="text" />
                </InputGroup>
            </FormGroup>
            </form>
        </div>
    );
  }
}

export default SignUp;