import PilotProfile from "../PilotProfile/PilotProfile"
import css from './PilotList.module.css'

export default function PilotsList({ items }) {
  return (
    <ul className={css.list}>
      {items.map((officer) => (
        <li className={css.item} key={officer.id}>
          <PilotProfile pilot={officer} />
        </li>
      ))}
    </ul>
  )
}