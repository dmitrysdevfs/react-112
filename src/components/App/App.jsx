// import css from './App.module.css'

// import AppBar from '../AppBar/AppBar';
// import PilotList from '../PilotList/PilotList';
// import officers from '../../officers.json';

// import RainIcon from "../../assets/cloud-rain.svg";

const ProfileSection = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

const StudentProfile = () => {
  return (
    <div>
      <p>Профіль студента</p>
      <button>Кнопка щось зробити</button>
    </div>
  );
};

export default function App() {
  return (
    <>
      <ProfileSection title="Рейтинг">
        <StudentProfile />
      </ProfileSection>
      <ProfileSection title="Що це за очки досвіду та рівні?">
        <p>Список досвіду</p>
      </ProfileSection>
      <ProfileSection title="Як отримати більше очків досвіду?">
        <h3>Вказівки</h3>
      </ProfileSection>

      {/* <RainIcon width="80" height="80" />

      <h1 className={css.title}>Styling React Components</h1>

      <AppBar />

      <h2>Active Officers</h2>
      <PilotList items={officers} /> */}
    </>
  );
}
