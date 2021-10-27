import cx from 'classnames';
import { ReactNode } from 'react';

interface DetailItemProps{
    thumbnail: string
    children: ReactNode
    category: string
    status: string
}

export default function DetailItem(props: DetailItemProps) {
  const {
    thumbnail, children, category, status,
  } = props;

  const classItem = cx({
    'fw-medium text-center label m-0 rounded-pill': true,
    pending: status === 'Pending',
    success: status === 'Success',
    failed: status === 'Failed',
  });
  return (
    <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
      <div className="game-checkout d-flex flex-row align-items-center">
        <div className="pe-4">
          <div className="cropped">
            <img
              src={`/img/${thumbnail}.png`}
              width="200"
              height="130"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
        <div>
          <p className="fw-bold text-xl color-palette-1 mb-10">
            {children}

          </p>
          <p className="color-palette-2 m-0">
            Category:
            {' '}
            {category}
          </p>
        </div>
      </div>
      <div>
        <p className={classItem}>{status}</p>
      </div>
    </div>
  );
}
