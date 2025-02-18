import AppBar from './AppBar';
import PilotsList from './PilotList';
import officers from '../officers.json';

const activeOfficers = officers.filter((officer) => officer.active);
const youngOfficers = officers.filter((officer) => officer.age < 40);

export default function App() {
  return (
    <>
      <AppBar />

      <h2>Active Officers</h2>
      <PilotsList items={activeOfficers} />

      <h2>Young Officers</h2>
      <PilotsList items={youngOfficers} />
    </>
  );
}
