import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const { className, children, theme, ...otherProps } = props;
    return (
        <button
            type='button'
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
