import { Link } from 'react-router-dom';

import './FavoriteFolderCard.scss';
import { GrzIconButton } from 'src/ui/atoms/buttons';

interface FavoriteFolderCardProps {
  path: string;
  title: string;
  thumbnailUrl?: string;
}

export function FavoriteFolderCard({ title, path }: FavoriteFolderCardProps): JSX.Element {
  return (
    <Link to={path} className="favorite-folder-card">
      <i className="ph ph-folder-simple favorite-folder-card__icon"></i>
      <p className="favorite-folder-card__title">{title}</p>

      <div className="favorite-folder-card__actions">
        <GrzIconButton size="md" onClick={(ev) => ev.preventDefault()}>
          <i className="ph ph-pencil-simple-line"></i>
        </GrzIconButton>

        <GrzIconButton size="md" theme="danger">
          <i className="ph ph-trash"></i>
        </GrzIconButton>
      </div>
    </Link>
  );
}