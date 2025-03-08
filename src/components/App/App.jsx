// import Counter from '../Counter/Counter';
// import Reader from '../Reader/Reader';
// import ClickTracker from '../ClickTracker';
// import Sidebar from '../Sidebar/Sidebar';
// import { useState } from 'react';
// import Timer from '../Timer';
import ThemeSwitcher from '../ThemeSwitcher';
import css from './App.module.css';
// import articles from '../../articles.json';

export default function App() {
  // const [isTimerMounted, setIsTimerMounted] = useState(false);

  // const toogleTimer = () => setIsTimerMounted(!isTimerMounted);

  // const [isOpen, setIsOpen] = useState(false);

  // const openSidebar = () => setIsOpen(true);

  // const closeSidebar = () => setIsOpen(false);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Effects in React</h1>

      <ThemeSwitcher />
      {/* 
      <button onClick={toogleTimer}>{isTimerMounted ? 'Hide' : 'Show'}</button>
      {isTimerMounted && <Timer />} */}

      {/* <button onClick={openSidebar}>Open</button>
      {isOpen && <Sidebar onClose={closeSidebar} />} */}

      {/* <ClickTracker /> */}

      {/* <Reader items={articles} /> */}
    </div>
  );
}
