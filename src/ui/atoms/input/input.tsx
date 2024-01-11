import { InputHTMLAttributes } from 'react';
import './input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function GrzInput({ ...props }: InputProps): JSX.Element {
  return (
    <input {...props } className={`grz-input`}/>
  );
}