import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notesSlise';

export default function NoteForm() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNote(event.target.elements.text.value));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" />
      <button type="submit">Add note</button>
    </form>
  );
}
