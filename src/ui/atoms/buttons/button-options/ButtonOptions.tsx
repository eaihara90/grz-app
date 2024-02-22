import { ButtonHTMLAttributes, useEffect, useRef, useState } from 'react';
import './ButtonOptions.scss';

interface GrzButtonOptionsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onSelection: (_selection: string) => void;
  options: string[];
  size: 'sm' | 'md' | 'lg';
  theme?: 'primary' | 'danger';
}

export function GrzButtonOptions({ label, onSelection, options, size = 'md', theme = 'primary', ...props }: GrzButtonOptionsProps): JSX.Element {
  const grzBtnOptRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelection = (_selection: string): void => {
    onSelection(_selection);
    setIsOpen(false);
  }

  const handleBtnClick = (ev: MouseEvent): void => {
    const target = ev.target as Node;
    
    if (target && grzBtnOptRef && !grzBtnOptRef.current?.contains(target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleBtnClick);

    return () => {
      window.removeEventListener('click', handleBtnClick)
    };
  }, []);

  return (
    <div
      className="grz-btn-options"
      ref={grzBtnOptRef}>
      <button {...props}
        className={`grz-btn grz-btn--${theme} ${size} ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(_prev => !_prev)}>
        {label}
        <div className="icon-wrapper">
          <i className="ph-bold ph-caret-down icon"></i>
        </div>
      </button>
      
      <ul className={`grz-list-options ${isOpen ? 'open' : ''}`}>
        { options.map((x, index) => (
          <li
            key={index}
            className={`grz-option-item ${size}`}
            onClick={() => handleSelection(x)}>
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}