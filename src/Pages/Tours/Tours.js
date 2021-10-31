import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tour from './Tour/Tour';


const Tours = () => {
    const [tours, setTours] = useState([])
    // axios.post('http://localhost:5000/services', data)
    // .then(res => {
    //     if (res.data.insertedId) {
    //         alert('added successfully');
    //         reset();
    //     }
    // })
    useEffect(() => {
        axios.get('https://gruesome-cat-12788.herokuapp.com/tours')
            .then(res => {
                // console.log(res)
                setTours(res.data);
                // console.log(tours)

            })
    }, []);
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                {
                    tours.map(tour => <Tour
                        key={tour.id}
                        tour={tour}
                    ></Tour>)
                }
                </div>
            </div>
        </section>
    );
};

export default Tours;