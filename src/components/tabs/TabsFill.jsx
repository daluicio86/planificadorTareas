"use client";
import React from 'react'
import Link from "next/link";
import handleSmoothScroll from '../utilities/handleSmoothScroll';
import { Tabs } from './Tabs';

const TabsFill = ({ aboutClass }) => {

    return (
        <>
            <div className={`about-area-hd animate__animated animate__slideInUp ${aboutClass}`}>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 title'>
                        <h1>Proyectos inmobiliarios</h1>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className="col-lg-2 col-md-12 center"></div>
                    <div className='col-lg-8 col-md-12'>
                        <Tabs />
                    </div>
                    <div className="col-lg-2 col-md-12 center"></div>
                </div>
                <br />
                <div className="row">
                    <div className="col-lg-5 col-md-12 center"></div>
                    <div className="col-lg-2 col-md-12 center">
                        <Link href='https://forms.gle/PRruzF7xhwkvUHZW7' target='_blanck' className='linkClass-hd'>
                            <div className='button'>Regístrate</div>
                        </Link>
                    </div>
                    <div className="col-lg-5 col-md-12 center"></div>
                </div>
                <br />
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className='textSection-hd'>
                            <div className='textContainer-hd'>
                                <div className='line' />
                                <h1>Nuestros Proyectos</h1>
                                <div className='line' />
                            </div>
                            <p className='center'>
                                Descubre las mejores ofertas inmobiliarias en Ecuador con Constructores Positivos. Nuestra plataforma te conecta con las propiedades más destacadas del mercado, garantizando calidad y confianza en cada transacción.
                            </p>
                            <h4 className='center'>
                                ¡Explora ahora y encuentra tu próximo hogar!
                            </h4>
                        </div>
                        <div className='row buttonsSection'>
                            <div className="col-lg-3 col-md-12 eulding-btn about center">
                                <Link href="#" onClick={handleSmoothScroll}>VIVIENDAS <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
                            </div>
                            <div className="col-lg-3 col-md-12 eulding-btn about center">
                                <Link href="#" onClick={handleSmoothScroll}>VIS/VIP <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
                            </div>

                            <div className="col-lg-3 col-md-12 eulding-btn about center">
                                <Link href="#" onClick={handleSmoothScroll}>LOCALES <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
                            </div>
                            <div className="col-lg-3 col-md-12 eulding-btn about center">
                                <Link href="#" onClick={handleSmoothScroll}>TERRENOS <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default TabsFill;