import { useAuth, useWallet } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  deleteTransaction,
  getTransactions,
} from '../../../redux/wallet/walletThunk';
import { Balance } from '../../Balance/Balance';
import { AddButton } from '../AddButton/AddButton';
import IconSvg from '../IconsSvg/IconSvg';
import scss from './Card.module.scss';
import {
  modalShowEditTransaction,
  modalSpliceTransaction,
} from '../../../redux/modal/modalThunk';

const Card = () => {
  const { user } = useAuth();
  const { transactions, changeTransactions } = useWallet();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions({ walletId: user.wallets[0].id }));
  }, [dispatch, user.wallets]);

  useEffect(() => {
    dispatch(getTransactions({ walletId: user.wallets[0].id }));
  }, [changeTransactions]);

  const handleEdit = e => {
    const id = e.currentTarget.getAttribute('data-id');
    const transaction = transactions.filter(e => e._id === id);
    dispatch(modalSpliceTransaction({ ...transaction[0], id }));
    dispatch(modalShowEditTransaction(true));
  };

  const handleDelete = e => {
    const id = e.currentTarget.getAttribute('data-id');
    dispatch(
      deleteTransaction({ walletId: user.wallets[0].id, transactionId: id })
    );
  };

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
                  <button
                    className={scss.editButton}
                    data-id={single._id}
                    onClick={handleEdit}
                  >
                    <IconSvg icon="edit" />
                  </button>

                  <button
                    className={scss.delButton}
                    data-id={single._id}
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
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
