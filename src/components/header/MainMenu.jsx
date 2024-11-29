"use client"
import React from 'react';
import Link from 'next/link';
import useSearchBox from '@/src/hooks/useSearchBox';
import { useStateValue } from '@/src/contexto/store';

const MainMenu = ({ toggleSubMenu }) => { 
    const { handleSearchOpen, handleSearchClose } = useSearchBox()

    const divStyle = {
        display: 'none',
    };

    return (
        <>
            <ul>
                <li>
                    <Link href="/">Inicio</Link>
                </li>
               {/* <li>
                    <Link href="/dreamsHouse/0">La casa de tus sueños</Link>
                </li>
                <li>
                    <Link href="/provider">Proveedor de materiales</Link>
                </li>
                <li>
                    <Link href="/specialist/0">Especialistas</Link>
                </li>
                <li>
                    <Link href="/sustainability">Sustentabilidad</Link>
                </li>
                <li className='dropdown-on'>
                    <Link href="/news" onClick={toggleSubMenu} >Blog<i className="fas fa-chevron-down"></i></Link>
                    <div className="sub-menu">
                        <ul className='dropdown-menu-content'>
                            <li><Link href="/news">Noticias</Link></li>
                            <li><Link href="/blog-video">Videos</Link></li>
                            <li><Link href="/blog-sustent">Blog Sustentable</Link></li>
                            <li><Link href="/construction-data">Cifras de la construcción</Link></li>
                        </ul>
                    </div>
                </li>*/}
                <li className="header-login" style={divStyle}>
                    <Link className="search-box-btn search-box-outer" href="#" onClick={handleSearchOpen} >Iniciar Sesion</Link>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;