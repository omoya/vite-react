import "./App.css";
import GlobalStateProvider from "./context/globalStateProvider.jsx";
import GrandParentFunctionalComponent from "./components/GrandParentFunctionalComponent.jsx";
import ChildFunctionalComponent from "./components/ChildFunctionalComponent.jsx";
function App() {
  return (
    <GlobalStateProvider>
      <h1>THE PAST</h1>
      <GrandParentFunctionalComponent></GrandParentFunctionalComponent>
    </GlobalStateProvider>
  );
}

export default App;
