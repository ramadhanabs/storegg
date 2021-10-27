import Image from 'next/image';
import Footer from './Footer';
import MenuItem from './MenuItem';

interface SideBarRules{
  active: 'overview' | 'transactions' | 'settings'
}

export default function Sidebar(props: SideBarRules) {
  const { active } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <div className="user text-center pb-50 pe-30">
          <Image src="/img/avatar-1.png" width={90} height={90} className="img-fluid mb-20" alt="" />
          <h2 className="fw-bold text-xl color-palette-1 m-0">Shayna Anne</h2>
          <p className="color-palette-2 m-0">shayna@anne.com</p>
        </div>
        <div className="menus">
          <MenuItem title="Overview" icon="overview" link="member" active={active === 'overview'} />
          <MenuItem title="Transactions" icon="transactions" link="member/transactions" active={active === 'transactions'} />
          <MenuItem title="Messages" icon="messages" link="member" />
          <MenuItem title="Card" icon="card" link="member" />
          <MenuItem title="Rewards" icon="rewards" link="member" />
          <MenuItem title="Settings" icon="settings" link="member/edit-profile" active={active === 'settings'} />
          <MenuItem title="Logout" icon="logout" link="sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
