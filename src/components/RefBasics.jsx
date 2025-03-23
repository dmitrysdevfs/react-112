// import { useEffect } from 'react';
import { useRef } from 'react';

export default function RefBasics() {
  const inputRef = useRef();
  console.log('1st: ', inputRef);

  // useEffect(() => {
  //   console.log('2nd: ', inputRef);
  // }, []);

  const setFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={setFocus}>Set focus to input</button>
    </div>
  );
}
