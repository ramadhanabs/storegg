import cx from 'classnames';

interface TableRowRules{
    icon: string
    title: string
    category: string
    amount: number
    price: number
    status: 'Pending' | 'Success' | 'Failed'
}

export default function TableRow(props: TableRowRules) {
  const {
    title, category, amount, price, icon, status,
  } = props;
  const classItem = cx({
    'float-start icon-status': true,
    pending: status === 'Pending',
    success: status === 'Success',
    failed: status === 'Failed',
  });
  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${icon}.png`}
          width={80}
          height={60}
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}

          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          {amount}
          {' '}
          Gold
        </p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={classItem} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}

          </p>
        </div>
      </td>
    </tr>
  );
}
