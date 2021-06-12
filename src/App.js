import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

//this is entry point for react application
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Python django" />
      <Todo title="Payeer api learn" />
  
      <Todo title="Learn coinbase api for python programming" />
    </div>
  );
}

export default App;
