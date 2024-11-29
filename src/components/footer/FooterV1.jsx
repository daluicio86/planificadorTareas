"use client"
import React from 'react';
import footerLogo from '@/public/assets/images/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import SocialShare from '../utilities/SocialShare';
//import FooterProject from '../../../public/assets/jsonData/footer/FooterProject.json'
import FooterServices from '../../../public/assets/jsonData/footer/FooterServices.json'
import FooterLinks from '../../../public/assets/jsonData/footer/FooterLinks.json'
import handleSmoothScroll from '../utilities/handleSmoothScroll';
import HeaderSidebar from '../header/HeaderSidebar';
import useSidebarInfo from '@/src/hooks/useSidebarInfo';
import useStickyMenu from '@/src/hooks/useStickyMenu';
import useSubMenuToggle from '@/src/hooks/useSubMenuToggle';
import useMobileSidebarMenu from '@/src/hooks/useMobileSidebarMenu';
import useSearchBox from '@/src/hooks/useSearchBox';

const FooterV1 = () => {
    const isMenuSticky = useStickyMenu();
    const toggleSubMenu = useSubMenuToggle();
    const { isMobileSidebarOpen, openMobileSidebar, closeMobileSidebar } = useMobileSidebarMenu();
    const { handleSearchOpen, handleSearchClose } = useSearchBox()
    const { isSidebarOpen, handleSidebarOpen, handleSidebarClose } = useSidebarInfo()
    return (
        <>
            <div className="footer-area">
                <div className="container">
                    <div className="row ml30">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-wiget animate__animated animate__zoomIn" >
                                <div className="footer-wiget-log">
                                    <Link href="/" onClick={handleSmoothScroll}><Image src={footerLogo} alt="image" /></Link>
                                </div>
                                <div className="footer-wiget-text">
                                    <p>Optimiza tus tareas y maximiza tu productividad</p>
                                </div>
                                <div className="footer-wiget-social">
                                    <ul>
                                        {/*<SocialShare />*/}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-lg-3 col-md-6">
                            <div className="footer-wiget animate__animated animate__slideInDown" >
                                <div className="footer-wiget-title">
                                    <h4>{FooterServices.title}</h4>
                                </div>
                                <div className="footer-wiget-menu">
                                    <ul>
                                        {FooterServices.serviceData.map(service =>
                                        service.link.length > 0 ?
                                            <li key={service.id}><Link href={service.link}><i className={service.icon}></i>{service.serviceText}</Link></li>
                                            :<li key={service.id}><p href={service.link}><i className={service.icon}></i>{service.serviceText}</p></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>*/}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-wiget animate__animated animate__slideInDown" >
                                <div className="footer-wiget-title">
                                    <h4>{FooterLinks.title}</h4>
                                </div>
                                <div className="footer-wiget-menu">
                                    <ul>
                                        {FooterLinks.linkData.map(data =>
                                            data.id == 5 ?
                                                <li key={data.id}>
                                                    <Link href='#' onClick={handleSidebarOpen}><i className={data.icon}></i>{data.linkText}</Link></li>
                                                : <li key={data.id}>
                                                    {data.link.length ? <Link href={data.link}><i className={data.icon}></i>{data.linkText}</Link>
                                                        : <p href={data.link}><i className={data.icon}></i>{data.linkText}</p>}
                                                </li>

                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-lg-3 col-md-6 col-sm-6 pr-0">
                            <div className="foter-box">
                                <div className="footer-wiget-title">
                                    <h4>{FooterProject.title}</h4>
                                </div>
                                <div className="row">
                                    {FooterProject.projectData.map(project =>
                                        <div className="col-lg-4 col-sm-4" key={project.id}>
                                            <div className="footer-recent-thumb">
                                                <Link href={project.link} target='_blank'>  <Image src={`/assets/images/footer/${project.thumb}`} width={90} height={90} alt="image" /></Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>*/}
                    </div>
                    <div className="row ml30 mt-110">
                        <div className="col-lg-6 col-md-12">
                            <div className="copyright-text">
                                <p>Copyright &copy; <Link href="https://#/" target='_blank'>Doctorcell</Link> todos los derechos reservados.</p>
                            </div>
                        </div>
                          {/* <div className="col-lg-6 col-md-12">
                            <div className="footer-condition">
                                <ul>
                                    <li><Link href="https://forms.gle/NhqzbMws6ajDzXueA">Suscríbete</Link></li>
                                    <li><Link href="#" onClick={handleSmoothScroll}>Faqs</Link></li>
                                  <li><Link href="/contact">Support</Link></li>
                                </ul>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
            <HeaderSidebar isSidebarOpen={isSidebarOpen} handleSidebarClose={handleSidebarClose} />
        </>
    );
};

export default FooterV1;