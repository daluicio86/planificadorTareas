"use client"
import Image from 'next/image';
import logo from '@/public/assets/images/logo.png'
import Link from 'next/link';
import HeaderSearchContent from './HeaderSearchContent';
import HeaderSidebar from './HeaderSidebar';
import useStickyMenu from '@/src/hooks/useStickyMenu';
import useSubMenuToggle from '@/src/hooks/useSubMenuToggle';
import useSearchBox from '@/src/hooks/useSearchBox';
import useMobileSidebarMenu from '@/src/hooks/useMobileSidebarMenu';
import useSidebarInfo from '@/src/hooks/useSidebarInfo';
import AdminMenu from './AdminMenu';
import AdminMobileMenu from './AdminMobileMenu';
import { useRouter } from 'next/navigation'

const AdminHeaderV1 = () => {
    const router = useRouter();

    const isMenuSticky = useStickyMenu();
    const toggleSubMenu = useSubMenuToggle();
    const { isMobileSidebarOpen, openMobileSidebar, closeMobileSidebar } = useMobileSidebarMenu();
    const { handleSearchOpen, handleSearchClose } = useSearchBox()
    const { isSidebarOpen, handleSidebarOpen, handleSidebarClose } = useSidebarInfo();


    return (
        <>
            {/*} <HeaderTopBarV1 />*/}
            <div className={`header-area ${isMenuSticky ? "sticky-nav" : ""}`} id="sticky-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="header-logo ml30">
                                <Link href="/"><Image src={logo} alt="logo" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12"></div>
                        <div className="col-lg-5 col-md-12">
                            <div className="header-munu">
                                <AdminMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderSearchContent handleSearchClose={handleSearchClose} />
            <HeaderSidebar isSidebarOpen={isSidebarOpen} handleSidebarClose={handleSidebarClose} />
            <AdminMobileMenu toggleSubMenu={toggleSubMenu} isMobileSidebarOpen={isMobileSidebarOpen} openMobileSidebar={openMobileSidebar} closeMobileSidebar={closeMobileSidebar} isMenuSticky={isMenuSticky} />
        </>
    );
};

export default AdminHeaderV1;