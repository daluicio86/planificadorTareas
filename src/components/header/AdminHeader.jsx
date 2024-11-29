"use client"
import headerLogo from '@/public/assets/images/logo.png'
import { useStateValue } from '@/src/contexto/store';
import Link from 'next/link';
import { useState } from 'react';

const AdminHeader = () => {
	//const [{ sesionUsuario }, dispatch] = useStateValue();
	const imagenDefault = '';

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const salirSesion = (e) => {
		e.preventDefault();
		localStorage.removeItem('token');
		/*dispatch({
			type: 'SALIR_SESION',
			nuevoUsuario: null,
			autenticado: false,
		});*/

		window.location.assign('/home')
	};

	return (
		<div className='myContainer noSelect'>
			<img
				className='imgheader'
				src="https://firebasestorage.googleapis.com/v0/b/constructorespositivos-1a342.appspot.com/o/varias%2Fbreadcrumbs-bg.jpg?alt=media&token=9fbc7afb-9eef-400c-9b38-fa3de742b3be"
			/>
			<div className='responsiveAdminHeaderContainer'>
				<Link href="/home">
					<img src={headerLogo} alt="Cpositivos" className='headerLogoImgClass' />
				</Link>
			</div>
			<ul className='links active'>
				<Link href="/home">
					<li>INICIO</li>
				</Link>
				<Link href="#">
					<li>ASISTENCIA PARA INMOBILIARIOS / TRÁMITES</li>
				</Link>
			</ul>
		</div>
	);
};

export { AdminHeader };
