import React from 'react';
import './Statistics.css'

const Statistics = () => {
    return (
        <section className="funfact-one text-center">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-2 col-md-6">
                        <div className="funfact-one__single">
                            <h3><span className="counter">22</span>+</h3>
                            <p>Professional Tour Guides</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-6 justify-content-xl-center">
                        <div className="funfact-one__single">
                            <h3><span className="counter">84</span>k</h3>
                            <p>Tours are Completed</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-6 justify-content-xl-center">
                        <div className="funfact-one__single">
                            <h3><span className="counter">17</span>+</h3>
                            <p>Traveling Experience</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-6 justify-content-xl-end text-xl-right">
                        <div className="funfact-one__single">
                            <h3><span className="counter">88</span>k</h3>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;