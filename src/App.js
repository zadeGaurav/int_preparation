import './App.css';
import { Counter } from './components/Counter';
import EventBubbling from './components/EventHandling.js/EventBubbling';
import EventCapturing from './components/EventHandling.js/EventCapturing';
import EventDelegation from './components/EventHandling.js/EventDelegation';
import Todo from './components/Todo';
import Toggle from './components/Toggle';

function App() {
  return (
    <div>
      {/* <Counter/> */}
      {/* <Toggle/> */}
      <Todo/>
      {/* <EventBubbling/> */}
      {/* <EventCapturing/> */}
      {/* <EventDelegation/> */}
    </div>
  );
}

export default App;
