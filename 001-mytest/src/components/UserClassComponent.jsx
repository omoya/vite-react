import { Component } from "react";

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
      <>
        <p>I am a Class</p>
        <h1>{this.state.name}</h1>
        <h2>{this.state.age}</h2>
        <button
          onClick={() =>
            this.setState({ age: Math.floor(Math.random(1) * 100) })
          }
        >
          Change Age
        </button>
      </>
    );
  }
}
