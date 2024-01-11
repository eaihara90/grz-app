import './folder-tree.scss';
import { FolderContentModel } from 'src/models/folder-content.model';

interface FolderTreeProps {
  content: FolderContentModel[];
}

export function FolderTree({ content }: FolderTreeProps): JSX.Element {
  return (
    <ul className="folder-tree">
      { content.map((x, i) => <li key={i}>{x.title}</li>)}
    </ul>
  );
}