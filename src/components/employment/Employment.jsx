import Image from 'next/image';
import React from 'react';
import PriceV1Data from '../../../public/assets/jsonData/employ/EmployV1Data.json'
import SingleEmploy from './SingleEmploy';

const Employment = () => {
    return (
        <>
            <div className="pricing-area animate__animated animate__slideInUp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <div className="section-sub-title">
                                    <h4>Bolsa de Empleo</h4>
                                </div>
                                <div className="section-main-title pricing">
                                    <h2>Encuentra las mejores oportunidades</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-12" key={0}></div>
                        {PriceV1Data.priceData.map(plan =>
                            <div className="col-lg-4 col-md-6" key={plan.id}>
                                <SingleEmploy plan={plan} />
                            </div>
                        )}
                        <div className="col-lg-2 col-md-12" key={3}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Employment;