import cn from 'classnames';
import Link from 'next/link';

interface Menuprops{
    title: string,
    active? : boolean,
    href: string,
}

export default function Menu(props: Partial<Menuprops>) {
  const { title, active, href = '/' } = props;
  const classTitle = cn({
    'nav-link': true,
    active,
  });
  return (
    <div>
      <li className="nav-item my-auto">
        <Link href={href}>
          <a className={classTitle} aria-current="page">{title}</a>
        </Link>
      </li>
    </div>
  );
}
