import React, { useState } from 'react';
import menuOption from '@/public/assets/jsonData/admin/AdminMenuOption.json'
import Link from 'next/link';
import { useStateValue } from '@/src/contexto/store';
//import handlePreventClick from '../click/handlePreventClick';

const VerticalMenu = () => {
    const [{ sesionUsuario }, dispatch] = useStateValue();
    const [tipo, setTipo] = useState(sesionUsuario ? sesionUsuario.usuario ? sesionUsuario.usuario.tipo : 0 : 0);
    return (
        <>
            <div className="widget-categories-box">
                <div className="widget-catagories-title">
                    <h4>{menuOption.title}</h4>
                </div>
                <div className="widget-categories-menu">
                    <ul>
                        {menuOption.categoriesData.map((category, idx) =>
                            tipo == 0 ? 
                            <li key={'category'+idx +category.id}>
                                <Link href={category.link}>{category.title}<span><i className={category.icon}></i></span></Link></li> :    
                            null
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default VerticalMenu;