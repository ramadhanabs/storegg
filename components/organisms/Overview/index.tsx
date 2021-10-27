import CategoriesItem from './CategoriesItem';
import TableRow from './TableRow';

export default function index() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              <CategoriesItem icon="desktop" total="Rp.9.000.000">
                Game
                <br />
                Desktop
              </CategoriesItem>
              <CategoriesItem icon="desktop" total="Rp.9.000.000">
                Game
                <br />
                Mobile
              </CategoriesItem>
              <CategoriesItem icon="desktop" total="Rp.9.000.000">
                Other
                <br />
                Games
              </CategoriesItem>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">Game</th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  icon="overview-1"
                  title="Mobile
                        Legends:
                        The New
                        Battle 2021"
                  category="Mobile"
                  amount={299}
                  price={290000}
                  status="Pending"
                />
                <TableRow
                  icon="overview-2"
                  title="Call of Duty: Modern Warfare"
                  category="Desktop"
                  amount={3000}
                  price={9000000}
                  status="Success"
                />
                <TableRow
                  icon="overview-3"
                  title="Clash of Clans"
                  category="Mobile"
                  amount={3000}
                  price={9000000}
                  status="Failed"
                />
                <TableRow
                  icon="overview-4"
                  title="Arena of Valor 2021"
                  category="Mobile"
                  amount={3000}
                  price={9000000}
                  status="Pending"
                />

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
