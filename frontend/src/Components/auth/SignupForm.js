import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./SignupForm.css";


const SignupForm = ({
  username,
  password,
  handleChangeUsername,
  handleChangePassword,
  handleSubmit,
  validate,
}) => {
  return (
    <div className="Signup">
      <form onSubmit={handleSubmit}>
        <div>OTTE Register</div>
        <hr />
        <FormGroup controlId="username" bsSize="large">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            autoFocus
            value={username}
            onChange={handleChangeUsername}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={handleChangePassword}
            type="password"
          />
        </FormGroup>
        <Button class="button"
          block
          bsSize="large"
          disabled={!validate(username, password)}
          type="submit"
        >
          Signup
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
