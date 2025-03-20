import { Formik, Form, Field } from 'formik';
import css from './SearchForm.module.css';

export default function SearchForm({ onSearch }) {
  return (
    <Formik
      initialValues={{
        topic: '',
      }}
      onSubmit={(values, actions) => {
        onSearch(values.topic);
        // console.log(values.topic);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field className={css.iput} type="text" name="topic" />
        <button className={css.button} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
}
