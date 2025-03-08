import { FaTshirt } from 'react-icons/fa';
import css from './OrderForm.module.css';
import { useState } from 'react';

const initialValues = {
  size: 'sm',
  color: 'red',
};

export default function OrderForm({ onOrder }) {
  const [values, setValues] = useState(initialValues);

  const handlerChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    onOrder(values);
    setValues(initialValues);
  };

  // const handleChangeSize = (event) => {
  //   setValues({
  //     ...values,
  //     size: event.target.value,
  //   });
  // };

  // const handleChangeColor = (event) => {
  //   setValues({
  //     ...values,
  //     color: event.target.value,
  //   });
  // };

  return (
    <form
      autoComplete="off"
      noValidate
      className={css.form}
      onSubmit={handlerSubmit}
    >
      <FaTshirt size="160" color={values.color} />

      <div className={css.group}>
        <label htmlFor="">Size</label>
        <select name="size" id="" value={values.size} onChange={handlerChange}>
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>

      <div className={css.group}>
        <label htmlFor="">Color</label>
        <select
          name="color"
          id=""
          value={values.color}
          onChange={handlerChange}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
