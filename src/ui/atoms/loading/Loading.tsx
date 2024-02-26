import ReactDOM from 'react-dom';

import './Loading.scss';

export function Loading(): JSX.Element {
  return (
    ReactDOM.createPortal(
      <div className="loading-wrapper">
        <span className="loader"></span>
      </div>,
      document.querySelector('#loading-root')!
    )
  );
}