import { useEffect } from 'react';
import css from './Sidebar.module.css';

export default function Sidebar({ onClose }) {
  useEffect(() => {
    const handleKeypress = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeypress);

    return () => {
      document.removeEventListener('keydown', handleKeypress);
    };
  }, [onClose]);

  return (
    <div className={css.wrapper}>
      <button className={css.closeButton} onClick={onClose}>
        Close
      </button>
      <p className={css.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        voluptatum culpa modi? Quaerat repellat sit error officia dolore?
        Suscipit nisi aliquam voluptates accusamus repellat illo expedita
        necessitatibus laudantium animi quo?
      </p>
    </div>
  );
}
