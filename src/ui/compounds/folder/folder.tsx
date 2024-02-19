import { Link } from 'react-router-dom';

import './folder.scss';
import { GrzIconButton } from 'src/ui/atoms/buttons';

interface FolderProps {
  path: string;
  title: string;
  thumbnailUrl?: string;
}

export function Folder({ title, path }: FolderProps): JSX.Element {
  return (
    <Link to={path} className="folder">
      <i className="ph ph-folder-simple folder__icon"></i>
      <p className="folder__title">{title}</p>

      <div className="folder__actions">
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