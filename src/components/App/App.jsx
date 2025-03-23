import { Route, Routes } from 'react-router';
import AppHeader from '../AppHeader/AppHeader';
import css from './App.module.css';
import HomePage from '../../pages/HomePage';
import UserPage from '../../pages/UserPage';
import NotFoundPage from '../../pages/NotFoundPage';
import UserDitailsPage from '../../pages/UserDetailsPage';
import UserPosts from '../UserPosts/UserPosts';
import UserTodos from '../UserTodos/UserTodos';

export default function App() {
  return (
    <div className={css.container}>
      <AppHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<UserPage />} />
        <Route path="/dashboard/:userId" element={<UserDitailsPage />}>
          <Route path="posts" element={<UserPosts />} />
          <Route path="todos" element={<UserTodos />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
