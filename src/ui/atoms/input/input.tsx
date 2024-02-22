import { InputHTMLAttributes } from 'react';
import './Input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

export function GrzInput({ fullWidth, ...props }: InputProps): JSX.Element {
  return (
    <input {...props } className={`grz-input ${fullWidth ? 'full-width': ''}`}/>
  );
}