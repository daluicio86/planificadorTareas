"use client"
import Link from 'next/link';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import logo from '@/public/assets/images/logo.png'
import { loginUsuario, registrarUsuario } from '@/src/actions/UsuarioAction';
import { useRouter } from 'next/navigation'
import { useStateValue } from '@/src/contexto/store';
const clearUsuario = {
    email: '',
    password: '',
};
const clearRegister = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};
const HeaderLogin = ({ handleSearchClose }) => {
    const [{ sesionUsuario }, dispatch] = useStateValue();
    const router = useRouter()
    const [login, setLogin] = useState(true);
    const [tipo, setTipo] = useState(0);

    const [usuario, setUsuario] = useState({
        email: '',
        password: '',
    });

    const [register, setRegister] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        tipo: 0
    });

    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegister(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
    }

    function handleTipoChange(event, value) {
        setTipo(value);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const loginEventoUsuario = () => {
        loginUsuario(usuario, dispatch).then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                window.localStorage.setItem('token', response.data.token);
                handleSearchClose();
                //setUsuario(clearUsuario);
                switch (response.data.tipo) {
                    case 0:
                        router.push('/sponsor');
                        break;
                    case 1:
                        router.push('/edit-specialist');
                        break;
                    case 2:
                        router.push('/edit-specialist');
                        break;
                    case 3:
                        router.push('/edit-provider');
                        break;
                    default:
                        router.push('/sponsor');
                        break;
                }
            } else {
                /*   dispatch({
                       type: 'OPEN_SNACKBAR',
                       openMensaje: {
                           open: true,
                           mensaje: 'El password o el email son incorrectos',
                       },
                   });*/
            }
        });
    };

    const registrarEventoUsuario = () => {
        switch (register.tipo) {
            case 0:
                window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdIKYoUKrvRhPREMwH5ukYAjZCfvn_9njSllzfN9kUysdinkg/viewform';
                break;
            case 1:
                window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfM8-dzRaWw1hSzRZUbCf6ta_UZEIk3y4f2B1GK9ZKw1oAm0Q/viewform?usp=send_form';
                break;
            case 2:
                window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSebEtx9qG7E5L_aJN9Qwldcnxm4bFIJCuFzcGWrqB5bGBNueA/viewform';
                break;
            case 3:
                window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSex48i8GpiXMRg-6NXucoUaDsBWeOOTxjUcUU40-8OP8WLH_A/viewform';
                break;
        }
        /* registrarUsuario(register, dispatch).then(response => {
             setRegister(clearRegister);
             handleSearchClose();
             switch (tipo) {
                 case 0:
                     router.push('/sponsor');
                     break;
                 case 1:
                     router.push('/edit-specialist');
                     break;
                 case 2:
                     router.push('/edit-specialist');
                     break;
                 case 3:
                     router.push('/edit-provider');
                     break;
                 default:
                     router.push('/sponsor');
                     break;
             }
             window.localStorage.setItem('token', response.data.token);
         });*/
    };


    return (
        <>
            {login ? (
                <><div className="search-popup">
                    <div className='row align-items-center'>
                        <div className='col-lg-3 col-md-6'>
                            <div className="header-logo-v1 ml30">
                                <Link href="/"><Image src={logo} alt="logo" /></Link>
                            </div>
                        </div>
                    </div>

                    <button className="close-search style-two" onClick={handleSearchClose}><span className="flaticon-multiply"><i
                        className="far fa-times-circle"></i></span></button>
                    <button className="close-search" onClick={handleSearchClose}><i className="fas fa-arrow-up"></i></button>
                    <form onSubmit={handleSearch}>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Correo" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="Contraseña" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <div className="eulding-btn about">
                                <Link href={{ javascript: void (0) }} onClick={loginEventoUsuario}>Ingresar <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
                            </div>
                        </div>
                        {/*<div className="form-group">
                            <div className="eulding-btn about">
                                <Link href={{ javascript: void (0) }} >¿Olvidaste tu contraseña? <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
                            </div>
                        </div>*/}
                        <div className="form-group">
                            <div className="eulding-btn about">
                                <Link href={{ javascript: void (0) }} onClick={() => {
                                    setLogin(false);
                                }}>Regístrate y contrata un servicio <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
                            </div>
                        </div>
                    </form>
                </div></>
            ) : (<>
                <div className="search-popup">
                    <div className='row align-items-center'>
                        <div className='col-lg-3 col-md-6'>
                            <div className="header-logo-v1 ml30">
                                <Link href="/"><Image src={logo} alt="logo" /></Link>
                            </div>
                        </div>
                    </div>

                    <button className="close-search style-two" onClick={handleSearchClose}><span className="flaticon-multiply"><i
                        className="far fa-times-circle"></i></span></button>
                    <button className="close-search" onClick={handleSearchClose}><i className="fas fa-arrow-up"></i></button>
                    <form onSubmit={handleSearch}>
                        <div className='row'>
                            <div className="form-group col-lg-12 col-md-12">
                                <select name='tipo' onChange={handleRegisterChange}>
                                    <option value={0}>Publicar Proyectos</option>
                                    <option value={1}>Publicar Maestros Especialistas</option>
                                    <option value={2}>Publicar Servicios Profecionales</option>
                                    <option value={3}>Publicar Proveedores</option>
                                </select>
                            </div>
                            {/*} <div className="form-group col-lg-6 col-md-12">
                                <input type="text" name="firstName" placeholder="Nombre" required onChange={handleRegisterChange} />
                            </div>
                            <div className="form-group col-lg-6 col-md-12">
                                <input type="text" name="lastName" placeholder="Apellido" required onChange={handleRegisterChange} />
                            </div>
                            <div className="form-group col-lg-6 col-md-12">
                                <input type="email" name="email" placeholder="Correo" required onChange={handleRegisterChange} />
                            </div>
                            <div className="form-group col-lg-6 col-md-12">
                                <input type="text" name="ruc" placeholder="Ruc" required onChange={handleRegisterChange} />
                            </div>
                            <div className="form-group col-lg-6 col-md-12">
                                <input type="password" name="password" placeholder="Contraseña" required onChange={handleRegisterChange} />
                            </div>
                            <div className="form-group col-lg-6 col-md-12">
                                <input type="password" name="confirmPassword" placeholder="Confirmar Contraseña" required onChange={handleRegisterChange} />
                            </div>*/}
                        </div>
                        <div className="form-group">
                            <div className="eulding-btn about">
                                <Link href={{ javascript: void (0) }} onClick={registrarEventoUsuario}>Registrar <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="eulding-btn about">
                                <Link href={{ javascript: void (0) }} onClick={() => {
                                    setLogin(true);
                                }}>Login <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
                            </div>
                        </div>
                    </form>
                </div></>)}

        </>
    );
};

export default HeaderLogin;