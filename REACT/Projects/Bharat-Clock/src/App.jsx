import HeaderComponent from "./components/headerComponent";
import AboutComponent from "./components/AboutComponent";
import CurrentTimestamp from "./components/CurrentTimestamp";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div class="clock-container">
      <HeaderComponent />
      <AboutComponent />
      <CurrentTimestamp />
    </div>
  );
}

export default App;
