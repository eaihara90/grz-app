import './File.scss';
import { GrzIconButton } from 'src/ui/atoms/buttons';

interface FileProps {
  title: string;
  url: string;
}

export function File({ title, url }: FileProps): JSX.Element {
  return (
    <div className="file">
      <i className="ph ph-file file__icon"></i>
      <p className="file__title">{title}</p>
      <div className="file__actions">
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