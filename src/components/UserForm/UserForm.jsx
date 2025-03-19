import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './UserForm.module.css';

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Must be min 3 chars')
    .required('This field is required'),
  email: Yup.string().email('Invalid email').required('This field is required'),
  role: Yup.string()
    .oneOf(['guest', 'user', 'admin'])
    .required('This field is required'),
  notif: Yup.array()
    .of(Yup.string().oneOf(['email', 'sms', 'push']))
    .max(3),
});

export default function UserForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    // console.log('handleSubmit', values);
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: '',
        email: 'poly@mail.com',
        role: 'user',
        notif: [],
      }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label className={css.label}>Username:</label>
          {/* <input className={css.input} type="text" name="username" /> */}
          <Field className={css.input} type="text" name="username" />
          <ErrorMessage
            className={css.error}
            component="span"
            name="username"
          />
        </div>

        <div className={css.group}>
          <label className={css.label}>Email:</label>
          {/* <input className={css.input} type="email" name="email" /> */}
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage className={css.error} component="span" name="email" />
        </div>

        <div className={css.group}>
          <label className={css.label}>Role:</label>
          <Field as="select" className={css.input} name="role">
            <option value="guest">Guest</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Field>
          <ErrorMessage className={css.error} component="span" name="role" />
        </div>

        <fieldset className={css.group}>
          <legend className={css.legend}>Notification Preferences</legend>
          <label className={css.checkboxLabel}>
            <Field
              className={css.checkboxInput}
              type="checkbox"
              name="notif"
              value="email"
            />
            Receive email notifications
          </label>
          <label className={css.checkboxLabel}>
            <Field
              className={css.checkboxInput}
              type="checkbox"
              name="notif"
              value="sms"
            />
            Receive SMS notifications
          </label>
          <label className={css.checkboxLabel}>
            <Field
              className={css.checkboxInput}
              type="checkbox"
              name="notif"
              value="push"
            />
            Receive push notifications
          </label>
        </fieldset>
        <button className={css.button} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}
