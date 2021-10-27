import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface MenuItemRules{
    icon: 'overview' | 'card' | 'logout' | 'messages' | 'rewards' | 'settings' | 'transactions'
    title: string
    active?: boolean
    link?: string
}

export default function MenuItem(props: Partial<MenuItemRules>) {
  const {
    icon, title, active, link,
  } = props;
  const classItem = cx({
    item: true,
    'mb-30': true,
    active,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/sidebar-${icon}.svg`} width={25} height={25} alt="" />
      </div>
      <p className="item-title m-0">
        <Link href={`/${link || ''}`}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
