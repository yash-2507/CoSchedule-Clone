import './App.css';
import SuiteNav from './components/suiteNav/SuiteNav';
import Takecontrol from './components/takecontrol/Takecontrol';
import CalenderTask from './components/calender/CalenderTask';
import Close from './components/closeTheOutput/Close';
function App() {
  return (
    <div className="App">
      <SuiteNav />
      <Takecontrol />
      <CalenderTask />
      <Close/>
    </div>
  );
}

export default App;
