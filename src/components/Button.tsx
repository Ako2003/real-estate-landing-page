import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
};

export default function Button({bgColor = 'transparent', textColor = 'white', borderColor = 'transparent', className = '', children, ...props}: ButtonProps) {

    const style = {
        '--btn-bg': bgColor,
        '--btn-text': textColor,
        '--btn-border': borderColor,
    } as React.CSSProperties;

    return (
        <button
            {...props}
            style={style}
            className={`border border-[var(--btn-border)] bg-[var(--btn-bg)] !text-[var(--btn-text)] hover:bg-[var(--btn-text)] hover:!text-[var(--btn-bg)] font-libre-baskerville px-7 py-2 cursor-pointer transition-color duration-300 ${className}`}
        >
            {children}
        </button>
    );
}
