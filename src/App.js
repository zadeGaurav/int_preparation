import { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import EventBubbling from './components/EventHandling.js/EventBubbling';
import EventCapturing from './components/EventHandling.js/EventCapturing';
import EventDelegation from './components/EventHandling.js/EventDelegation';
import Todo from './components/Todo';
import Toggle from './components/Toggle';
import { UseEffectExample } from './components/UseEffectEx';

function App() {
  const [name, setName] = useState('Prop as dependency')
  return (
    <div>
      {/* <Counter/> */}
      {/* <Toggle/> */}
      {/* <Todo/> */}
      {/* <EventBubbling/> */}
      {/* <EventCapturing/> */}
      {/* <EventDelegation/> */}
      <UseEffectExample name={name} />
    </div>
  );
}

export default App;
