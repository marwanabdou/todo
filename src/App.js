import './App.css';
import AddTask from "./components/AddTask"
import ListTask from "./components/ListTask"



function App() {
  return (
    <div className="App">
      <h1 className="app-title">My Tasks</h1>
			<AddTask />
			<ListTask />
    </div>
  );
}

export default App;
