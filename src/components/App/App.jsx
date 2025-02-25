import { useState } from 'react';
import Counter from '../Counter/Counter';
import css from './App.module.css';
import CountDisplay from '../CountDisplay/CountDisplay';

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>State in React</h1>

      <CountDisplay count={clicks} />

      <Counter text="A" onClick={handleClick} />
      <Counter text="B" onClick={handleClick} />
      <Counter text="C" onClick={handleClick} />
    </div>
  );
}
