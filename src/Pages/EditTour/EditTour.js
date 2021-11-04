import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import ExtraBanner from '../Shared/ExtraBanner/ExtraBanner';
import { useHistory, useLocation, useParams } from 'react-router';
const EditTour = () => {
    const { register, handleSubmit, reset } = useForm({ mode: 'onBlur'});
    const [tour, setTour] = useState();
    const { tourId } = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(location)
    const redirect_uri = location.state?.from || '/';
    useEffect(() => {
        axios.get(`https://gruesome-cat-12788.herokuapp.com/tours/${tourId}`)
            .then(res => {
                // console.log(res.data);
                setTour(res.data)
                // console.log(tour._id)
            })
    }, []);
    const onSubmit = data => {
        console.log(data);
        // axios.put(`http://localhost:5000/tours/${tourId}`, data)
        axios.put(`https://gruesome-cat-12788.herokuapp.com/tours/${tourId}`, data)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    alert('updated successfully');
                    history.push(redirect_uri);
                }
            })
            
    }
    return (
        <>
        <ExtraBanner bannerText = {"Edit Tour"}></ExtraBanner>
        <div className="container px-5 my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card border-0 rounded-3 shadow-lg">
                        <div className="card-body p-4">
                            <div className="text-center">
                                <div className="h1 fw-light">Edit Tour</div>
                                {/* <p className="mb-4 text-muted">A functional, Bootstrap 5 contact form with validation built using SB Forms. Try it out!</p> */}
                            </div>
                            <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                                {/* <!-- Name Input --> */}
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="name" placeholder="Name" {...register("name", { required: true, maxLength: 50 })} defaultValue={tour?.name}/>
                                    <label htmlFor="name">Name</label>
                                </div>
                                {/* <!-- Price Input --> */}
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="price" type="number" placeholder="Price" {...register("price")} defaultValue={tour?.price}/>
                                    <label htmlFor="price">Price</label>
                                </div>
                                {/* <!-- Location Input --> */}
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="location"  placeholder="Location" {...register("location")} defaultValue={tour?.location}/>
                                    <label htmlFor="location">Location</label>
                                </div>
                                {/* <!-- Days Input --> */}
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="days" type="number"placeholder="Days" {...register("days")} defaultValue={tour?.days}/>
                                    <label htmlFor="days">Days</label>
                                </div>
                                {/* <!-- Image Input --> */}
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="img" placeholder="Image Url"{...register("img")} defaultValue={tour?.img}/>
                                    <label htmlFor="img">Image Url</label>

                                </div>

                                {/* <!-- Description Input --> */}
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" id="description" type="text" placeholder="Description" style={{ height: "10rem" }}{...register("description")} defaultValue={tour?.description}></textarea>
                                    <label htmlFor="description">Description</label>
                                </div>


                                {/* <!-- Submit button --> */}
                                <div className="d-grid">
                                    <button className="btn bg-tripo btn-lg" id="submitButton" type="submit">Update</button>
                                </div>
                            </form>
                            {/* <!-- End of contact form --> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default EditTour;
