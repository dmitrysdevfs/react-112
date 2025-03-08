import { useState } from 'react';
// import UserForm from '../UserForm/UserForm';
import css from './App.module.css';
import OrderForm from '../OrderForm/OrderForm';
import AppBar from '../AppBar/AppBar';

export default function App() {
  const [filter, setFilter] = useState('');
  const [lang, setLang] = useState('en');

  const handleFilterChange = (newValue) => {
    setFilter(newValue);
  };

  const handleChangeLang = (newLang) => {
    setLang(newLang);
  };

  // const [users, setUsers] = useState([]);

  // const addUser = (newUser) => {
  //   setUsers((prevUsers) => {
  //     return [...prevUsers, newUser];
  //   });
  // };

  return (
    <div className={css.container}>
      {/* <h1>Forms in React</h1> */}
      <AppBar
        filter={filter}
        lang={lang}
        onFilter={handleFilterChange}
        onSelectLang={handleChangeLang}
      />
      <h2>Current lang: {lang}</h2>
      <h2>Filter: {filter}</h2>
      <OrderForm onOrder={(newOrder) => console.log(newOrder)} />
      {/* <UserForm onAdd={addUser} /> */}
    </div>
  );
}
