import React from 'react';
import FeatureV1sData from '../../../public/assets/jsonData/feature/FeatureV1sData.json'
import SingleFeatureV1 from './SingleFeatureV1';

const FeatureV1s = () => {
    return (
        <>
            <div className="feature-area mt-150 animate__animated animate__slideInDown">
                <div className="container mr-160">
                    <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6 col-md-12">
                            <div className="feature-items">
                                {FeatureV1sData.map(feature =>
                                    <SingleFeatureV1 feature={feature} key={feature.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV1s;