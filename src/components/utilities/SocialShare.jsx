import Link from 'next/link';
import React from 'react';

const SocialShare = () => {
    return (
        <>
            <li><Link href="https://www.facebook.com/constructorespositivosecuador/" target='_blank'><i className="fab fa-facebook-f"></i></Link></li >
            <li><Link href="https://www.instagram.com/constructorespositivos/" target='_blank'><i className="fab fa-instagram"></i></Link></li>
            <li><Link href="https://www.tiktok.com/@constructorespositivos/" target='_blank'><i className="fab fa-tiktok"></i></Link></li>
            <li><Link href="https://x.com/Construpositivo/" target='_blank'><i className="fab fa-twitter"></i></Link></li>
            <li><Link href="https://www.youtube.com/@ConstructoresPositivos/" target='_blank'><i className="fab fa-youtube"></i></Link></li>
        </>
    );
};

export default SocialShare;