import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { tourId } = useParams();
    const{tour, setTour} = useState()
    useEffect(() => {
        axios.get(`https://localhost:5000/tours/${tourId}`)
            .then(res => {
                setTour(res.data);
                console.log(tour)
            })
    }, []);

    return (
        <div class="container my-5">
            <div class="row">
                <div class="col-md-8">
                    <img class="img-fluid" alt="" src="https://i.ibb.co/8xrkrFh/Medical-workers-covid-19-and-vaccination-concept-Confident-professional-doctor-female-nurse-in-blue.jpg" />
                </div>
                <div class="col-md-4">
                    <h3 class="my-3">Description</h3>
                    <p>You will be treated by caring, internationally trained doctors. They take the time to listen to you and understand your healthcare needs.</p><div class="d-grid my-5 gap-2">
                        <button type="button" class="btn btn-primary btn-lg">Make Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;