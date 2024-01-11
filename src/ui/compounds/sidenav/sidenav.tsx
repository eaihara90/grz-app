import { SideNavLink } from 'src/ui/atoms/sidenav-link/sidenav-link';
import './sidenav.scss';

export function SideNav(): JSX.Element {
  const links: { path: string, label: string, iconClass: string }[] = [
    { iconClass: 'ph-bold ph-house', label: 'Home', path: '/home' },
    { iconClass: 'ph-bold ph-folder', label: 'Files', path: 'files?id=root' },
    { iconClass: 'ph-bold ph-user', label: 'User', path: 'user' },
    { iconClass: 'ph-bold ph-gear', label: 'Configuration', path: 'config' },
  ];

  return (
    <nav className="sidenav">
      <ul className="sidenav__list">
        { links?.map((x, i) => (
          <SideNavLink
            key={i}
            iconClass={x.iconClass}
            label={x.label}
            path={x.path}
          />
        ))}
      </ul>
    </nav>
  );
}