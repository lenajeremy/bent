'use client';

import * as React from 'react'

export type ButtonProps = {
    children: React.ReactNode;
    additionalClassName?: string;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button = (props: ButtonProps) => {
    return (
        <button className={props.className}>{props.children}</button>
    )
}

export default Button;