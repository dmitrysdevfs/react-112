import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskForm from '../TaskForm/TaskForm';
import TextFilter from '../TextFilter/TextFilter';
import TaskList from '../TaskList/TaskList';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { fetchTasks } from '../../redux/tasktsOps';
import {
  selectTasks,
  selectIsLoading,
  selectIsError,
  selectTaskCount,
} from '../../redux/tasksSlice';
import css from './App.module.css';

export default function App() {
  const taskCount = useSelector(selectTaskCount);

  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <main className={css.container}>
        <p>Total task count: {taskCount}</p>
        <TaskForm />
        <TextFilter />
        {isLoading && <Loader>Loading message</Loader>}
        {error && <Error>Error message</Error>}
        {tasks.length > 0 && <TaskList />}
      </main>
    </div>
  );
}
