import "./App.css";
import Experience from "./components/Experience";
import Graduation from "./components/Graduation";
import Header from "./components/Header";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrap">
          <Header />
          <Experience />
          <Skill />
          <Graduation />
        </div>
      </div>
    </div>
  );
}

export default App;
