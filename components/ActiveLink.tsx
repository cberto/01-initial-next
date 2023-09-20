import { useRouter } from 'next/router';

import Link from 'next/link';
import { CSSProperties, FC } from 'react';


//CSSProperties  para validar el css
const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

interface Props{
    text: string,
    href: string
}


export const ActiveLink: FC<Props> = ({ text, href }) => {
//saber el path donde se encuentra
    const { asPath } = useRouter();

    return (
        <Link legacyBehavior href={ href }>
            {/* renderizar estilo */}
            <a style={ asPath === href ? style : undefined }>{ text }</a>
        </Link>
        );
};