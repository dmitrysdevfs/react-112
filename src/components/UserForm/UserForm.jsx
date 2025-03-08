import { useId } from 'react';
import css from './UserForm.module.css';

export default function UserForm({ onAdd }) {
  const fieldId = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.elements.username.value);
    // console.log(event.target.elements.role.value);

    onAdd({
      name: event.target.elements.username.value,
      role: event.target.elements.role.value,
    });

    event.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.group}>
        <label htmlFor={`${fieldId}-username`}>Username:</label>
        <input type="text" name="username" id={`${fieldId}-username`} />
      </div>

      <div className={css.group}>
        <label htmlFor={`${fieldId}-role`}>Role:</label>
        <select name="role" id={`${fieldId}-role`}>
          <option value="geust">Geust</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
