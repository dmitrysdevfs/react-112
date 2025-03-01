// import { useState } from 'react';
// import Counter from '../Counter/Counter';
import Reader from '../Reader/Reader';
import css from './App.module.css';
import articles from '../../articles.json';
// import CountDisplay from '../CountDisplay/CountDisplay';
import Accordion from '../Accordion/Accordion';

const accordionItems = [
  {
    title: 'How does an accordion work?',
    content:
      'An accordion allows users to expand and collapse sections of content, typically showing only one open section at a time.',
  },
  {
    title: 'What are the benefits of using an accordion?',
    content:
      'Accordions help organize content efficiently, reduce scrolling, and improve user experience by displaying only relevant information.',
  },
  {
    title: "Can an accordion be styled to match a website's design?",
    content:
      'Yes, accordions can be fully customized with CSS or component libraries to fit the look and feel of any website.',
  },
  {
    title: 'How to create an accordion in React?',
    content:
      'In React, you can create an accordion using state to track the open section and conditionally render content.',
  },
  {
    title: 'Are there any ready-made libraries for accordions?',
    content:
      'Yes, libraries like Material-UI, Bootstrap, and React-Accordion provide pre-built accordion components for easy implementation.',
  },
];

export default function App() {
  // const [clicks, setClicks] = useState(0);

  // const handleClick = () => {
  //   setClicks(clicks + 1);
  // };

  return (
    <div className={css.container}>
      <h1 className={css.title}>State in React</h1>

      <Reader items={articles} />

      <Accordion items={accordionItems} />

      {/* <CountDisplay count={clicks} />

      <Counter text="A" onClick={handleClick} />
      <Counter text="B" onClick={handleClick} />
      <Counter text="C" onClick={handleClick} /> */}
    </div>
  );
}
