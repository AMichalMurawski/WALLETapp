import { useWallet } from '../../hooks';
import Media from 'react-media';
import scss from './Balance.module.scss';
import { AddButton } from '../utils/AddButton/AddButton';
export const Balance = () => {
  const { balance } = useWallet();

  return (
   <Media
   queries={{
    mob: '(max-width: 767px)',
    tab: '(min-width: 768px) and (max-width: 1280px)',
    desk: '(min-width: 1280px)',
  }}>
    {matches =>(
      <>
      {matches.mob ? (
           <div className={scss.balance}>
      <div className={scss.balanceMain}>
        <div className={scss.balanceTitle}>Your Balance</div>
        <div className={scss.balanceNumber}>{balance}</div>
      </div>
      <AddButton/>
    </div>
      ) :(<div className={scss.balance}>
        <div className={scss.balanceMain}>
          <div className={scss.balanceTitle}>Your Balance</div>
          <div className={scss.balanceNumber}>{balance}</div>
        </div>
      </div>)}
      </>
    )}
   </Media>


    // <div className={scss.balance}>
    //   <div className={scss.balanceMain}>
    //     <div className={scss.balanceTitle}>Your Balance</div>
    //     <div className={scss.balanceNumber}>{balance}</div>
    //   </div>
    // </div>
  );
};
