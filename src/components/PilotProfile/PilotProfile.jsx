import clsx from 'clsx';
import { BsAirplaneFill, BsAlarmFill, BsArchiveFill } from 'react-icons/bs';
import { CiBadgeDollar } from 'react-icons/ci';
import pilotAvatar from '../../assets/default-pilot.jpeg';
import css from './PilotProfile.module.css';

export default function PilotProfile({
  pilot: { name, rank, age, spec, active },
}) {
  const statusClsx = clsx(css.text, active ? css.active : css.retired);

  return (
    <div>
      <img src={pilotAvatar} alt="" />
      <p className={css.text}>
        <CiBadgeDollar className={css.icon} />
        Name: {name}</p>
      <p className={css.text}>
        <BsAirplaneFill className={css.icon} />
        Rank: {rank}
      </p>
      <p className={css.text}>
        <BsArchiveFill className={css.icon} />
        Age: {age}</p>
      <p className={css.text}>
        <BsAlarmFill className={css.icon} />
        Speciality: {spec}</p>
      <p className={statusClsx}>Status: {active ? 'Active' : 'Retired'}</p>
    </div>
  );
}
