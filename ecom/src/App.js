import "./App.css";
import Nav from "./components/nav";
import Particles from "react-tsparticles";

function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App">
      <Nav />
      <div className="body-section">
        
      </div>
    </div>
  );
}
export default App;
