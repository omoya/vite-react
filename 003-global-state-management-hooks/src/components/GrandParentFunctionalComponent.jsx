import { useContext } from "react";
import { GlobalState } from "../context/globalStateProvider.jsx";
import ParentFunctionalComponent from "./ParentFunctionalComponent.jsx";

export default function GrandParentFunctionalComponent({ children }) {
  const [state, setState] = useContext(GlobalState);

  const handleWiseSentenceChange = (event) => {
    setState({ wiseSentence: event.target.value });
  };

  return (
    <>
      <p>My beloved grandson, I want to tell you </p>
      <input
        value={state.wiseSentence}
        onChange={handleWiseSentenceChange}
      ></input>
      <h1>THE FUTURE</h1>
      <ParentFunctionalComponent></ParentFunctionalComponent>
    </>
  );
}
