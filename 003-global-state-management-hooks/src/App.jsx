import "./App.css";
import UserClassComponent from "./components/UserClassComponent.jsx";
import UserFunctionalComponent from "./components/UserFunctionalComponent.jsx";

function App() {
  return (
    <>
      <UserClassComponent
        initialName="John"
        initialAge={25}
      ></UserClassComponent>
      <UserFunctionalComponent
        initialName="John"
        initialAge={25}
      ></UserFunctionalComponent>
    </>
  );
}

export default App;
