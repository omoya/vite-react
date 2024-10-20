import { useEffect, useState } from "react";

export default function UserFunctionalComponent({
  children,
  initialName,
  initialAge,
}) {
  const [name, setName] = useState(initialName);
  const [age, setAge] = useState(initialAge);

  useEffect(() => {
    async function fetchData() {
      const user = await fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => {
          setName(data.results[0].name.first);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <p className="descriptor">I am a function</p>
      <h1 className="userName">{name}</h1>
      <h2 className="userAge">{age}</h2>
      <button
        className="button"
        onClick={() => setAge(Math.floor(Math.random(1) * 100))}
      >
        Change Age
      </button>
    </div>
  );
}
