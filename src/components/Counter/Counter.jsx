export default function Counter({ text = 'Click me:', onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
