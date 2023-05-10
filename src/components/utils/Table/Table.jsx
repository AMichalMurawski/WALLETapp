import IconsSvg from '../../../components/utils/IconsSvg/IconSvg';
import scss from './Table.module.scss';
const Table = ({ theadData, tbodyData, className }) => {
  return (
    <table className={className}>
      <thead className={className + '_head'}>
        <tr>
          {theadData.map(heading => {
            return (
              <th className={className + '_th'} key={heading}>
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
                <li><button className={scss.editButton}>
                  <IconsSvg icon="edit"/>
                  </button>
                  </li>
                <li>
                  <button className={scss.delButton}>Delete</button>
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
