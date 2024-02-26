import { Link } from 'react-router-dom';
import './FavoriteFolderBreadcrumb.scss';

interface FavoriteFolderBreadcrumbProps {
  folderPath: string;
}

export function FavoriteFolderBreadcrumb({ folderPath }: FavoriteFolderBreadcrumbProps): JSX.Element {
  const paths = folderPath.split('\\');



  return (
    <div className="favorite-folder-breadcrumb">
      { paths.length && 
        <Link to={}></Link>
      }
    </div>
  )
}