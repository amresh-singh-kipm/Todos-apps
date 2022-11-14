import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
class ErrorBoundary extends React.Component {
    constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }
  
  static getDerivedStateFromError(error) {
      // this.setState({errorMessage:error})
      return { hasError: true, errorMessage: JSON.stringify(error)}
    }
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }
    render() {
        
        if (this.state.hasError) {
            // console.log("error message is ", typeof())
      return <h1>{this.state.errorMessage}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
