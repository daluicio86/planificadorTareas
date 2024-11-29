import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const SingleFeatureV1 = ({ feature }) => {
    const { activeClass, featureNumber, thumb, titleFirst, titleLast, icon, link = '#' } = feature

    return (
        <>
            <div className={`feature-single-box ${activeClass}`}>
                <div className="feature-content">
                    <div className={`feature-icon-thumb ${featureNumber}`}>
                        <Image src={`/assets/images/resource/${thumb}`} width={40} height={40} alt="feature1" />
                    </div>
                    {feature.id === 3 ?
                        <div className={`feature-title ${featureNumber}`}>
                            <h4><Link href={link} >{titleFirst}</Link></h4>
                            <h4><Link href={link} >{titleLast}</Link></h4>
                        </div> : <div className={`feature-title ${featureNumber}`}>
                            <h4><Link href={link} >{titleFirst}</Link></h4>
                            <h4><Link href={link} >{titleLast}</Link></h4>
                        </div>}

                    <div className={`feature-icon ${featureNumber}`}>
                        <Link href={link} ><i className={icon}></i></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleFeatureV1;