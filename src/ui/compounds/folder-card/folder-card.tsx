import { Link } from 'react-router-dom';

import './folder-card.scss';
import { GrzIconButton } from 'src/ui/atoms/buttons';

interface FolderProps {
  path: string;
  title: string;
  thumbnailUrl?: string;
}

export function FolderCard({ title, path }: FolderProps): JSX.Element {
  return (
    <Link to={path} className="folder-card">
      <i className="ph ph-folder-simple folder-card__icon"></i>
      <p className="folder-card__title">{title}</p>

      <div className="folder-card__actions">
        <GrzIconButton size="md" onClick={(ev) => ev.preventDefault()}>
          <i className="ph ph-pencil-simple-line"></i>
        </GrzIconButton>

        <GrzIconButton size="md">
          <i className="ph ph-trash"></i>
        </GrzIconButton>
      </div>
    </Link>
  );
}