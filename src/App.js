import './App.css';
import { GreenButton } from './components'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Learning React {count} times.</h1>
      <GreenButton text="Next" onClick={() => setCount(count + 1)}/>
      <GreenButton text="Reset" onClick={() => setCount(0)}/>
 </div>
  );
}

export default App;
