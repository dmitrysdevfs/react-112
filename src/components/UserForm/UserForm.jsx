import css from './UserForm.module.css';

export default function UserForm() {
  return (
    <form className={css.form}>
      <div className={css.group}>
        <label className={css.label}>Username:</label>
        <input className={css.input} type="text" name="username" />
      </div>

      <div className={css.group}>
        <label className={css.label}>Email:</label>
        <input className={css.input} type="email" name="email" />
      </div>

      <div className={css.group}>
        <label className={css.label}>Role:</label>
        <select className={css.input} name="role">
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <fieldset className={css.group}>
        <legend className={css.legend}>Notification Preferences</legend>
        <label className={css.checkboxLabel}>
          <input
            className={css.checkboxInput}
            type="checkbox"
            name="email_notif"
          />
          Receive email notifications
        </label>
        <label className={css.checkboxLabel}>
          <input
            className={css.checkboxInput}
            type="checkbox"
            name="sms_notif"
          />
          Receive SMS notifications
        </label>
        <label className={css.checkboxLabel}>
          <input
            className={css.checkboxInput}
            type="checkbox"
            name="push_notif"
          />
          Receive push notifications
        </label>
      </fieldset>
      <button className={css.button} type="submit">
        Submit
      </button>
    </form>
  );
}
