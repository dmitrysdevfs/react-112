import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../redux/store';

export default function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.value);

  const handleDeposit = () => {
    //
    //
    const depositAction = deposit(50);
    dispatch(depositAction);
  };

  const handleWithdraw = () => {
    const withdrawAction = withdraw(20);
    dispatch(withdrawAction);
  };

  return (
    <div>
      <p>Balance: {balance} credits </p>
      <button onClick={handleDeposit}>Deposit credit</button>
      <button onClick={handleWithdraw}>Withdraw credit</button>
    </div>
  );
}
