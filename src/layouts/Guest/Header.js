import React from 'react'
import useResponsive from '../../hooks/useResponsive';
import HeaderDesktop from './HeaderDesktop';


export default function Header() {

    const isDesktop = useResponsive('up', 'md')

    return (
        <>
            {isDesktop ? <HeaderDesktop /> : 'header mobile'}
        </>
    )
}
