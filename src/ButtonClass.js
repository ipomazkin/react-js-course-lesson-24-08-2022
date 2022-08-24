import React, { Component } from "react";

export class Button extends Component {
  render() {
    const { children, ...rest } = this.props;

    return (
      <>
        <button {...rest}>{children}</button>
      </>
    );
  }
}
