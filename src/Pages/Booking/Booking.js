import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import ExtraBanner from '../Shared/ExtraBanner/ExtraBanner';

const Booking = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { tourId } = useParams();
    const [tour, setTour] = useState()

    useEffect(() => {
        axios.get(`https://gruesome-cat-12788.herokuapp.com/tours/${tourId}`)
            .then(res => {
                // console.log(res.data);
                setTour(res.data)
                // console.log(tour._id)
            })
    }, []);

    const onSubmit = data => {
        data.tour_id = tour._id;
        data.tour_name = tour.name;
        data.tour_days = tour.days;
        data.tour_location= tour.location;
        data.tour_price= tour.price;
        data.status = 0;
        axios.post('https://gruesome-cat-12788.herokuapp.com/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };

    return (
        // <div className="container my-5">
        //     <div className="row">
        //         <div className="col-md-8">
        //             <img className="img-fluid" alt="" src={tour?.img} />
        //             <p>{tour?.description}</p>
        //         </div>
        //         <div className="col-md-4">
        //             <h3 className="my-3">Description</h3>
        //             <p>You will be treated by caring, internationally trained doctors. They take the time to listen to you and understand your healthcare needs.</p><div className="d-grid my-5 gap-2">
        //                 <button type="button" className="btn btn-primary btn-lg">Make Appointment</button>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <>
            <ExtraBanner bannerText={tour?.name}></ExtraBanner>
            <div className="container-fluid px-5 my-5">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-md-6 col-12">
                        {/* <div className="card border-0 rounded-3 shadow-lg overflow-hidden">
                        <div className="card-body p-0">
                            <div className="row g-0">
                                <div className="col-sm-6 d-none d-sm-block bg-image"> */}

                        <img className="img-fluid" alt="" src={tour?.img} />
                        <div className="d-flex justify-content-between my-3"> <p className=""><span className="tour-price fs-4">${tour?.price}</span> /Per Person</p><p><i className="far fa-clock me-1"></i>{tour?.days} Days</p><p><i className="fas fa-map-marked me-1"></i>{tour?.location}</p></div>
                        <h3 className="text-dark fw-bold">Overview</h3>
                        <p>{tour?.description}</p>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12 p-4">
                        <div className="text-center">
                            <div className="h3 fw-light">Book this tour</div>
                            {/* <p className="mb-4 text-muted">Split layout contact form</p> */}
                        </div>



                        <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>

                            {/* <!-- Name Input --> */}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" defaultValue={user.displayName} placeholder="Name" {...register("name")} />
                                <label for="name">Name</label>
                            </div>

                            {/* <!-- Email Input --> */}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="emailAddress" placeholder="Email Address" defaultValue={user.email} {...register("email", { required: true })} />
                                <label for="emailAddress">Email Address</label>
                            </div>
                            {/* <!-- Phone Input --> */}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" defaultValue="" placeholder="Phone" {...register("phone")} />
                                <label for="phone">Phone</label>
                            </div>
                            {/* <!-- Address Input --> */}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="address" defaultValue="" placeholder="Address" {...register("address")} />
                                <label for="address">Address</label>
                            </div>

                            {/* <!-- Submit button --> */}
                            <div className="d-grid">
                                <button className="btn bg-tripo btn-lg " id="submitButton" type="submit">Book Now</button>
                            </div>
                        </form>
                        {/* <!-- End of contact form --> */}

                    </div>
                </div>

            </div>
            {/* </div>
                </div>
            </div>
        </div> */}
        </>
    );
};

export default Booking;