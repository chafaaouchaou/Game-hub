import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="grid-container">
      <div className="nav">
        <NavBar />
      </div>
      <div className="sidebar">Sidebar</div>
      <div className="content">Main Content</div>
    </div>
  );
}

export default App;
