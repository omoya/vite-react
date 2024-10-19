import { useState } from "react";

export default function UserFunctionalComponent() {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(25);

  return (
    <>
      <p>I am a function</p>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setAge(Math.floor(Math.random(1) * 100))}>
        Change Age
      </button>
    </>
  );
}
