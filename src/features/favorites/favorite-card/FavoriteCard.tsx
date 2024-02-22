import './FavoriteCard.scss';
import { GrzIconButton } from 'src/ui/atoms/buttons';

interface FavoriteCardProps {
  title: string;
  url: string;
}


export function FavoriteCard({ title, url }: FavoriteCardProps): JSX.Element {
  return (
    <div className="favorite-card">
      <i className="ph ph-file favorite-card__icon"></i>
      <p className="favorite__title">{title}</p>
      <div className="favorite-card__actions">
        <GrzIconButton size="md">
          <a target="_blank" href={url} className="link"><i className="ph ph-arrow-square-out"></i></a>
        </GrzIconButton>

        <GrzIconButton size="md">
          <i className="ph ph-pencil-simple-line"></i>
        </GrzIconButton>

        <GrzIconButton size="md">
          <i className="ph ph-trash"></i>
        </GrzIconButton>
      </div>
    </div>
  );
}