import React from 'react';
import './TourSearch.css'

const TourSearch = () => {
    return (
        <div className="container text-center">
            <div className="tour-serach my-5">
                <h1 className="tour-search-heading Fw-bolder">Find your <span>next tour</span></h1>
                <p>Where would you like to go?</p>
            </div>
            <section className="search-sec">
                <div className="container">
                    <form action="#" method="post" novalidate="novalidate">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <input type="text" className="form-control search-slt" placeholder="Where to" />
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <input type="text" className="form-control search-slt" placeholder="When" />
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <select className="form-control search-slt" id="exampleFormControlSelect1">
                                            <option>Select Type</option>
                                            <option value="Adventure">Adventure</option>
                                            <option value="Wildlife">Wildlife</option>
                                            <option value="Sightseeing">Sightseeing</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <button type="button" className="btn btn-search wrn-btn">Find Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>

    );
};

export default TourSearch;