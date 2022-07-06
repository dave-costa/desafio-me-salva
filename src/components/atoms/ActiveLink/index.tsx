import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'
import React from 'react'
interface ActiveLinkProps extends LinkProps {
    children: ReactElement
    active: string
}

export function ActiveLink({children, active, ...rest}: ActiveLinkProps) {
    const {asPath} = useRouter()
    const className = asPath == rest.href ? active : ''
    return (
        <Link {...rest}>
            {cloneElement(
                <div>
                    {children}
                </div>,  {
                className, 
            })}
        </Link> 
    )
}