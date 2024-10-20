import { Component } from "react";
import "./UserClassComponent.css";

export default class UserClassComponent extends Component {
  state = {
    name: this.props.initialName,
    age: this.props.initialAge,
  };

  async componentDidMount() {
    const user = await fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ name: data.results[0].name.first });
      });
  }

  render() {
    return (
      <div className="wrapper">
        <p className="descriptor">I am a Class</p>
        <h1 className="userName">{this.state.name}</h1>
        <h2 className="userAge">{this.state.age}</h2>
        <button
          className="button"
          onClick={() =>
            this.setState({ age: Math.floor(Math.random(1) * 100) })
          }
        >
          Change Age
        </button>
      </div>
    );
  }
}
