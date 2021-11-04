import React from 'react';
import "./ExtraBanner.css"

const ExtraBanner = ({bannerText}) => {
    return (
        <div>
            <div className="fw-bolder text-white banner-container">
                <h1>
                    {bannerText}
                </h1>
            </div>
        </div>
    );
};

export default ExtraBanner;