import "./App.css";
import Car from "./components/Car.jsx";
import UserClassComponent from "./components/UserClassComponent.jsx";
import UserFunctionalComponent from "./components/UserFunctionalComponent.jsx";

function App() {
  return (
    <>
      <Car></Car>
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
