
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
}

export const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};
