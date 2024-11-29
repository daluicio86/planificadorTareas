import React from 'react';
import FeatureV1dhData from '../../../public/assets/jsonData/feature/FeatureV1dhData.json'
import SingleFeatureV1dh from './SingleFeatureV1dh';

const FeatureV1dh = () => {

    return (
        <>
            <div className="feature-area mt-150 animate__animated animate__slideInDown">
                <div className="container mr-160">
                    <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6 col-md-12">
                            <div className="feature-items">
                                {FeatureV1dhData.map(feature =>
                                    <SingleFeatureV1dh feature={feature} key={feature.id} link={feature.link} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV1dh;