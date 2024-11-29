"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '@/public/assets/images/logo.png'
import HeaderTopBarV1 from './HeaderTopBarV1';
import Link from 'next/link';
import MainMenu from './MainMenu';
import HeaderSidebar from './HeaderSidebar';
import useStickyMenu from '@/src/hooks/useStickyMenu';
import MobileMenu from './MobileMenu';
import useSubMenuToggle from '@/src/hooks/useSubMenuToggle';
import useSearchBox from '@/src/hooks/useSearchBox';
import useMobileSidebarMenu from '@/src/hooks/useMobileSidebarMenu';
import useSidebarInfo from '@/src/hooks/useSidebarInfo';
import { useStateValue } from '@/src/contexto/store';
import { useRouter } from 'next/navigation';
import HeaderLogin from './HeaderLogin';
import AdminMenu from './AdminMenu';
import { getUsuario } from '@/src/actions/UsuarioAction';

const HeaderV1 = () => {
    const router = useRouter();
    const isMenuSticky = useStickyMenu();
    const toggleSubMenu = useSubMenuToggle();
    const { isMobileSidebarOpen, openMobileSidebar, closeMobileSidebar } = useMobileSidebarMenu();
    const { handleSearchOpen, handleSearchClose } = useSearchBox()
    const { isSidebarOpen, handleSidebarOpen, handleSidebarClose } = useSidebarInfo()

    const [servidorRespuesta, setServidorRespuesta] = useState(false);
    const [{ sesionUsuario }, dispatch] = useStateValue();
    useEffect(() => {
        if (sesionUsuario) {
            if (!servidorRespuesta) {
                //getProyectos(requestItem, dispatch);
                getUsuario(dispatch).then((resp) => {
                    setServidorRespuesta(true);
                });
            }
        } else {
            /* localStorage.removeItem("token");
             dispatch({
                 type: "SALIR_SESION",
                 nuevoUsuario: null,
                 autenticado: false
             });
             router.push('/home');*/
        }

    }, [servidorRespuesta]);

    return (
        <>
            <div className={`header-area ${isMenuSticky ? "sticky-nav" : ""}`} id="sticky-header">
                <div className="container">
                    <div className="row align-items-center cwhite">
                        <div className="col-lg-3 col-md-6">
                            <div className="header-logo ml30">
                                <Image src={logo} alt="logo" />
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12">
                            <div className="header-munu rigth">
                                {
                                    sesionUsuario
                                        ? (sesionUsuario.autenticado
                                            ? <AdminMenu />
                                            :
                                            <> <MainMenu />
                                                <div className="header-social mr50">
                                                    <ul>
                                                        <li><Link className="search-box-btn search-box-outer" href="#" onClick={handleSearchOpen}><i className="bi bi-person"></i></Link>
                                                        </li>
                                                        <li className="line">
                                                            <Link className="navSidebar-button"
                                                                href="#"
                                                                onClick={handleSidebarOpen}><i
                                                                    className="bi bi-grid-3x3-gap-fill"></i></Link></li>
                                                    </ul>
                                                </div></>)
                                        : <> <MainMenu />
                                            <div className="header-social mr50">
                                                <ul>
                                                    <li><Link className="search-box-btn search-box-outer" href="#" onClick={handleSearchOpen}><i className="bi bi-person"></i></Link>
                                                    </li>
                                                    <li className="line">
                                                        <Link className="navSidebar-button"
                                                            href="#"
                                                            onClick={handleSidebarOpen}><i
                                                                className="bi bi-grid-3x3-gap-fill"></i></Link></li>
                                                </ul>
                                            </div></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderLogin handleSearchClose={handleSearchClose} />
            <HeaderSidebar isSidebarOpen={isSidebarOpen} handleSidebarClose={handleSidebarClose} />
            <MobileMenu toggleSubMenu={toggleSubMenu} isMobileSidebarOpen={isMobileSidebarOpen} openMobileSidebar={openMobileSidebar} closeMobileSidebar={closeMobileSidebar} isMenuSticky={isMenuSticky} />
        </>
    );
};

export default HeaderV1;