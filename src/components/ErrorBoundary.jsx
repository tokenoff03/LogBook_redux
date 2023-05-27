import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error: error });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>Oops! Something went wrong. Error: {this.state.error.message}</div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
