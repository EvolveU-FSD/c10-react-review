import Button from "./components/shared/button";
import TodoPage from "./pages/todo-page";
import Routing from "./routing";

function App() {
  return (
    <>
      <Routing />
      <Button>Click me</Button>
      <Button variant="outline">Click me too</Button>
    </>
  );
}

export default App;
