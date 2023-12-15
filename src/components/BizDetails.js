import React, { Component } from "react";
import { Container, Divider, Switch } from "@mui/material";

class About extends Component {
  state = {
    checked: true,
    heading: "About This Listing",
  };

  toggleSwitch = () => {
    const newVal = !this.state.checked;
    if (newVal) {
      return this.setState({
        heading: "About This Listing",
        checked: newVal,
      });
    }
    return this.setState({
      heading: "About This Listing",
      checked: newVal,
    });
  };

  render() {
    return (
      <div className="text-gray">
        <Container maxWidth="sm">
          <h1 style={{ textAlign: "center" }}>{this.state.heading}</h1>
          <p>
            asdfasdfasdf
            <a
              style={{ color: "mediumblue" }}
              href="https://www.cars.com"
              target="_blank"
            ></a>
            asdfasdfasdf
          </p>
          <Divider />
          <p>asdfasdfasdf</p>
          <Switch
            checked={this.state.checked}
            color="primary"
            onChange={this.toggleSwitch}
          />
        </Container>
      </div>
    );
  }
}

export default About;
