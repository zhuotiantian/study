import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  handleClick = () => {
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>添加</button>
      </div>
    );
  }
}
export default App;
