import { useEffect } from 'react';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import Loader from '../Loader/Loader';

import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../redux/tasktsOps';
import Error from '../Error/Error';

export default function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);
  const isLoading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <main className={css.container}>
        <TaskForm />
        {isLoading && <Loader>Loading message</Loader>}
        {error && <Error>Error message</Error>}
        {tasks.length > 0 && <TaskList />}
      </main>
    </div>
  );
}
