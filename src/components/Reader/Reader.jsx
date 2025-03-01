import { useState } from 'react';
import css from './Reader.module.css';

export default function Reader({ items }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  const currentArticle = items[selectedIdx];
  const isFirstEl = selectedIdx === 0;
  const isLastEl = selectedIdx === items.length - 1;

  return (
    <div className={css.container}>
      <header className={css.header}>
        <div className={css.controls}>
          <button
            className={css.button}
            onClick={handlePrev}
            disabled={isFirstEl}
          >
            Rrev
          </button>
          <button
            className={css.button}
            onClick={handleNext}
            disabled={isLastEl}
          >
            Next
          </button>
        </div>
        <p className={css.progress}>
          {selectedIdx + 1}/{items.length}
        </p>
      </header>
      <article className={css.article}>
        <h2 className={css.title}>{currentArticle.topic}</h2>
        <p className={css.text}>{currentArticle.text}</p>
      </article>
    </div>
  );
}
