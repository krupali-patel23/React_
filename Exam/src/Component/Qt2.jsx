import React from "react";
class Qt2 extends React.Component {
    constructor() {
      super();
      this.state = {
        data: 0,
      };
    }
    increment() {
      this.setState({ data: this.state.data + 2 });
    }
    render() {
      return (
        <div className="App">
          <h1>{this.state.data}</h1>
          <button onClick={() => this.increment()}>Increment</button>
        </div>
      );
    }
  }
  
  export default Qt2;