
import React, { useContext } from 'react';
import Link from 'next/link';
import useSearchBox from '@/src/hooks/useSearchBox';
import { useStateValue } from '@/src/contexto/store';
import { useRouter } from 'next/navigation';


const SuscripcionMenu = ({ toggleSubMenu }) => {
    const router = useRouter();
    const [{ sesionUsuario }, dispatch] = useStateValue();
    const { handleSearchOpen, handleSearchClose } = useSearchBox()

    const salirSesion = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        dispatch({
            type: "SALIR_SESION",
            nuevoUsuario: null,
            autenticado: false
        });

        router.push('/home');
    }
    return (
        <>
            <ul className='mr10'>
                <li>
                    <Link href="/" onClick={salirSesion}>Inicio</Link>
                </li>
                {/*<li>
                    <Link href="/dreamsHouse/0">Asistencia Para Inmobiliarios / Trámites</Link>
                </li>*/}
                <li>
                    {/*<Link href="/blog-grid" onClick={toggleSubMenu} >Blog<i className="fas fa-chevron-down"></i></Link>*/}

                    <Link className="search-box-btn search-box-outer login"
                        href={{ javascript: void (0) }}
                        onClick={handleSearchOpen}
                        >
                        <i className="bi bi-person"></i><i className="fas fa-chevron-down"></i></Link>

                    <div className="sub-menu">
                        <ul className='dropdown-menu-content'>
                            <li>
                                <Link href={{ javascript: void (0) }}>Hola, 
                                    {                                         
                                        sesionUsuario
                                            ? (sesionUsuario.autenticado
                                                ? ' ' + sesionUsuario.usuario.firstName + ' ' + sesionUsuario.usuario.lastName
                                                : "No sesion")
                                            : "No sesion"
                                    }
                                </Link>
                            </li>
                            <li><Link href={{ javascript: void (0) }} onClick={salirSesion}>Cerrar Sesión</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default SuscripcionMenu;