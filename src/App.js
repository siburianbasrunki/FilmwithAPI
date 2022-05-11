import "./App.css";
import NavigationBar from "./components/navigationsBar";
import Intro from "./components/intro";
import Trending from "./components/trending";
import Superhero from "./components/superhero";
import "./style/landingpages.css";
function App() {
  return (
    <div>
      <div className="myBG ">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;
