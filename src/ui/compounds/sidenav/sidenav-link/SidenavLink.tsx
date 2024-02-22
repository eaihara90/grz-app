import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SidenavLink.scss';

interface SideNavLinkProps {
  iconClass: string;
  label: string;
  path: string;
}

export function SideNavLink({ iconClass, label, path }: SideNavLinkProps): JSX.Element {
  const [showLabel, setShowLabel] = useState<boolean>(false);

  return (
    <li className="sidenav-item">
      <NavLink
        className="sidenav-item__link"
        to={`${path}`}
        onMouseOver={() => setShowLabel(true)}
        onMouseLeave={() => setShowLabel(false)}>
        <i className={`sidenav-item__link-icon ${iconClass}`}></i>
      </NavLink>
      { showLabel ?
        <span className="sidenav-item__label">
          {label}
        </span> :
        null
      }
    </li>
  )
}