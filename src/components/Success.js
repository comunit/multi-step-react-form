import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  render() {
    const {
      values: { firstname, lastname, email, occupation, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>
            Thank You {firstname} {lastname} For Your Submission
          </h1>
          <p>We'll Get Back To You Soon</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Success;
