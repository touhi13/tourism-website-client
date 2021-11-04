import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tour from './Tour/Tour';
import './Tours.css'

const Tours = () => {
    const [tours, setTours] = useState([])
    useEffect(() => {
        axios.get('https://gruesome-cat-12788.herokuapp.com/tours')
            .then(res => {
                setTours(res.data);
            })
    }, []);
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <h3 className="text-center tour-heading mb-5">Featured Tours</h3>
                <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
                    {
                        tours.map(tour => <Tour
                            key={tour._id}
                            tour={tour}
                        ></Tour>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Tours;