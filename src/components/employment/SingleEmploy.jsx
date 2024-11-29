import Link from 'next/link';
import React from 'react';

const SingleEmploy = ({ plan }) => {
    const { animation, title, link, btnText } = plan

    return (
        <>
            <div className={`pricing-single-box ${animation}`}>
                <div className="pricing-content">
                    <div className="pricing-title">
                        <h3>{title}</h3>
                    </div>
                </div>
                <div className="pircing-btn">
                    <Link href={link}>{btnText}</Link>
                </div>
            </div>
        </>
    );
};

export default SingleEmploy;