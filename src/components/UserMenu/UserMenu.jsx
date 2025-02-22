import css from "./UserMenu.module.css"

export default function UserMenu() {
  return (
    <div className={css.container}>
      <p>Welcome, Mango!</p>
      <button>Log out</button>
    </div>
  )
}