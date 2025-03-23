import { useEffect, useState } from 'react';
import css from './UserTodos.module.css';
import { fetchUserTodos } from '../../userSevice';
import { useParams } from 'react-router';

export default function UserTodos() {
  const { userId } = useParams();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const data = await fetchUserTodos(userId);
      setTodos(data);
    }

    getTodos();
  }, [userId]);

  return (
    <div className={css.container}>
      <h2 className={css.header}>User Todos</h2>
      <ul className={css.list}>
        {todos.length > 0 &&
          todos.map((todo) => (
            <li
              key={todo.is}
              className={todo.completed ? css.completed : css.pending}
            >
              {todo.todo}
            </li>
          ))}
      </ul>
    </div>
  );
}
