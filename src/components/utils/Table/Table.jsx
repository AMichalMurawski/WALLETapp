import { useDispatch } from 'react-redux';
import IconsSvg from '../../../components/utils/IconsSvg/IconSvg';
import scss from './Table.module.scss';
import { deleteTransaction } from '../../../redux/wallet/walletThunk';
import { useAuth, useWallet } from '../../../hooks';
import {
  modalShowEditTransaction,
  modalSpliceTransaction,
} from '../../../redux/modal/modalThunk';
import { refreshTokens } from '../../../redux/auth/authThunk';

const Table = ({ theadData, tbodyData, className }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { transactions } = useWallet();

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
    ).catch(
      dispatch(refreshTokens()).then(
        dispatch(
          deleteTransaction({ walletId: user.wallets[0].id, transactionId: id })
        )
      )
    );
  };

  return (
    <table className={className}>
      <thead className={className + '_head'}>
        <tr>
          {theadData.map((heading, i) => {
            return (
              <th className={className + '_th'} key={i}>
                {heading}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className={className + '_body'}>
        {tbodyData.map((row, index) => {
          return (
            <tr key={row._id}>
              <td className={className + '_td'}>
                {new Date(row.date).toLocaleDateString()}
              </td>
              <td className={className + '_td'}>{row.type}</td>
              <td className={className + '_td'}>{row.categoryId}</td>
              <td className={className + '_td'}>{row.comment}</td>
              <td className={className + '_td'}>{row.sum}</td>
              <td>
                <ul className={scss.editHome}>
                  <li>
                    <button
                      className={scss.editButton}
                      data-id={row._id}
                      onClick={handleEdit}
                    >
                      <IconsSvg icon="edit" />
                    </button>
                  </li>
                  <li>
                    <button
                      className={scss.delButton}
                      data-id={row._id}
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
