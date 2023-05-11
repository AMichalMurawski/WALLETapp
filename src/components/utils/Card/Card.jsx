import { useAuth, useWallet } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTransactions } from '../../../redux/wallet/walletThunk';
import { Balance } from '../../Balance/Balance';
import { AddButton } from '../AddButton/AddButton';
import IconSvg from '../IconsSvg/IconSvg';
import scss from './Card.module.scss';

const Card = () => {
  const { user } = useAuth();
  const { transactions } = useWallet();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions({ walletId: user.wallets[0].id }));
  }, [dispatch, user.wallets]);

  return (
    <>
      <Balance />
      <div className={scss.buttonContain}>
      <AddButton />
      </div>
      {transactions.map((single, index) => {
        return (
          <div className={scss.container}>
            <div className={scss.transactionsCard}>
              <ul className={scss.transactionsUl}>
                <li>
                  <div className={scss.transactionsType}>Date</div>
                  <div className={scss.transactionsValue}>
                    {new Date(single.date).toLocaleDateString()}
                  </div>
                </li>
                <li>
                  <div className={scss.transactionsType}>Type</div>
                  <div className={scss.transactionsValue}>{single.type}</div>
                </li>
                <li>
                  <div className={scss.transactionsType}>Category</div>
                  <div className={scss.transactionsValue}>
                    {single.categoryId}
                  </div>
                </li>
                <li>
                  <div className={scss.transactionsType}>Comment</div>
                  <div className={scss.transactionsValue}>{single.comment}</div>
                </li>
                <li>
                  <div className={scss.transactionsType}>Sum</div>
                  <div className={scss.transactionsValue}>{single.sum}</div>
                </li>
                <li>
                  <button className={scss.editButton}>
                    <IconSvg icon="edit" />
                  </button>

                  <button className={scss.delButton}>Delete</button>
                </li>
              </ul>
            </div>
            
          </div>
        );
      })}

    </>
  );
};

export default Card;
