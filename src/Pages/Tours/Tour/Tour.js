import React from 'react';
import { Link } from 'react-router-dom';
import './Tour.css'

const Tour = ({ tour }) => {
    const { _id, name, price, days, img,location } = tour;

    return (
        <div className="col mb-5">
            <div className="card h-100">
                {/* <!-- Product image--> */}
                <div className="card-images">
                    <img className="card-img-top" src={img} alt="..." />
                </div>

                {/* <!-- Product details--> */}
                <div className="card-body mx-auto">
                    <h5 className="card-title fs-3 text-dark mb-1">{name}</h5>
                    <p className=""><span className="tour-price fs-4">${price}</span> /Per Person</p>
                    <hr />
                    <div className="d-flex justify-content-between"><p><i className="far fa-clock me-1"></i>{days} Days</p><p><i className="fas fa-map-marked me-1"></i>{location}</p></div>
                    {/* <!-- Product name--> */}
                    {/* <h5 className="tour-desc">{description}</h5> */}
                    {/* <!-- Product price--> */}
                    <div className="text-center">
                        <Link to={`/booking/${_id}`}>
                            <button className="btn bg-tripo text-white mt-auto">Book Now</button>
                        </Link>
                    </div>
                </div>
                {/* <!-- Product actions--> */}
{/* 
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">

                </div> */}
            </div>
        </div>
    );
};

export default Tour;