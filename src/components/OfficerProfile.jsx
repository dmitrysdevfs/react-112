// export default function OfficerProfile(props) {
//    const { name, rank, age, spec } = props.pilot;

export default function PilotProfile({ pilot: { name, rank, age, spec, active } }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Rank: {rank}</p>
      <p>Age: {age}</p>
      <p>Speciality: {spec}</p>
      <p>Status: {active ? "Active" : "Retired"}</p>
    </div>
  );
}
