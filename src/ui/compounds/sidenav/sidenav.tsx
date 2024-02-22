import { SideNavLink } from 'src/ui/compounds/sidenav/sidenav-link/SidenavLink';
import './Sidenav.scss';

export function SideNav(): JSX.Element {
  const links: { path: string, label: string, iconClass: string }[] = [
    { iconClass: 'ph-bold ph-house', label: 'Home', path: '/home' },
    { iconClass: 'ph-bold ph-folder', label: 'Files', path: '/files?id=root' },
    { iconClass: 'ph-bold ph-star', label: 'Favorites', path: '/favorites?id=root' },
    { iconClass: 'ph-bold ph-images', label: 'Albums', path: '/albums' },
    { iconClass: 'ph-bold ph-user', label: 'User', path: '/user' },
    { iconClass: 'ph-bold ph-gear', label: 'Configuration', path: '/config' },
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