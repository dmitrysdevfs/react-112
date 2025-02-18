import PilotProfile from "./OfficerProfile"

export default function PilotsList({ items }) {
  return (
    <ul>
      {items.map((officer) => (
        <li key={officer.id}>
          <PilotProfile pilot={officer} />
          <hr />
        </li>
      ))}
    </ul>
  )
}