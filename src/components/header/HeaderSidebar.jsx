import React from 'react';
import SocialShare from '../utilities/SocialShare';
import logo2 from '@/public/assets/images/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const HeaderSidebar = ({ isSidebarOpen, handleSidebarClose }) => {
    return (
        <>
            <div className={`sidebar-group info-group ${isSidebarOpen ? "isActive" : ""}`} >
                <div className="sidebar-widget">
                    <div className="sidebar-widget-container">
                        <div className="widget-heading">
                            <Link href="#" className="close-side-widget" onClick={handleSidebarClose}>
                                <i className="bi bi-x-lg"></i>
                            </Link>
                        </div>
                        <div className="sidebar-textwidget">
                            <div className="sidebar-info-contents">
                                <div className="content-inner">
                                    <div className="sidebar-logo">
                                        <Link href="/"><Image src={logo2} alt="logo" /></Link>
                                    </div>
                                    <div className="about-box">
                                        <h2>PROPÓSITO</h2>

                                        <p className="text">Existimos para reducir del déficit de vivienda e infraestructura; construyendo soluciones más asequibles, eficientes, sustentables y formales.</p>
                                    </div>
                                    <div className="contact-info">
                                        <h2>Contacto</h2>
                                        <ul className="list-style-one">
                                            {/*<li><i className="bi bi-geo-alt-fill"></i>6391 Elgin St. Celina, Delaware</li>*/}
                                            <li><i className="bi bi-telephone-fill"></i><a href="tel:+001123456789">096 804 6671</a></li>
                                            <li><i className="bi bi-envelope"></i> <a href="mailto:info@constructorespositivos.com">info@constructorespositivos.com</a></li>
                                            <li><i className="bi bi-alarm-fill"></i> Horario Atención: 09.00 to 17.00
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className="social-box">
                                        <SocialShare />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSidebar;