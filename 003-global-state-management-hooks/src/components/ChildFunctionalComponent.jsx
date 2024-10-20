import { useContext } from "react";
import { GlobalState } from "../context/globalStateProvider.jsx";

export default function ChildFunctionalComponent({ children }) {
  const [state] = useContext(GlobalState);
  return (
    <>
      <p>I still remember when grandpa said {state.wiseSentence}</p>
    </>
  );
}
