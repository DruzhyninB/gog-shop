import * as React from 'react';
import './Banner.scss'

interface BannerProps {
    src: string
    title: string
}
export const Banner = (props: BannerProps) => {
    return (
        <img className="banner" src={props.src} alt={'Banner'} title={props.title} />
    )
}
