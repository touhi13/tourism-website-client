import React from 'react';

const Tour = ({tour}) => {
    const { _id, name, price, description, img } = tour;

    return (
        <div className="col mb-5">
            <div className="card h-100">
                {/* <!-- Product image--> */}
                <div classNameName="card-images">
                    <img className="card-img-top" src={img} alt="..." />
                    <h5 classNameName="card-titles bg-primary">{name}</h5>
                </div>

                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                    <div className="text-center">
                        {/* <!-- Product name--> */}
                        <h5 className="fw-bolder">{description}</h5>
                        {/* <!-- Product price--> */}
                        {price}
                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                </div>
            </div>
        </div>
    );
};

export default Tour;