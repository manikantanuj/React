import styles from "./App.module.css";
import './components/Display.jsx'
import Display from "./components/Display.jsx";
import Buttons from "./components/Buttons.jsx"

function App() {
  return (
    <div className={styles.calculator}>
      <Display/>
      <Buttons/>
    </div>
  );
}

export default App;
