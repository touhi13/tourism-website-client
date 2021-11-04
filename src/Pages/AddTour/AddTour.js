import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import ExtraBanner from '../Shared/ExtraBanner/ExtraBanner';




const AddTour = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://gruesome-cat-12788.herokuapp.com/tours', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <>
            <ExtraBanner bannerText = {"Add Tour"}></ExtraBanner>
            <div className="container px-5 my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card border-0 rounded-3 shadow-lg">
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <div className="h1 fw-light">Add Tour</div>
                                    {/* <p className="mb-4 text-muted">A functional, Bootstrap 5 contact form with validation built using SB Forms. Try it out!</p> */}
                                </div>
                                <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                                    {/* <!-- Name Input --> */}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="name" placeholder="Name" {...register("name", { required: true, maxLength: 50 })} />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                    {/* <!-- Price Input --> */}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="price" type="number" placeholder="Price" {...register("price")} />
                                        <label htmlFor="price">Price</label>
                                    </div>
                                    {/* <!-- Location Input --> */}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="location"  placeholder="Location" {...register("location")} />
                                        <label htmlFor="location">Location</label>
                                    </div>
                                    {/* <!-- Days Input --> */}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="days" type="number"placeholder="Days" {...register("days")} />
                                        <label htmlFor="days">Days</label>
                                    </div>
                                    {/* <!-- Image Input --> */}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="img" placeholder="Image Url"{...register("img")} />
                                        <label htmlFor="img">Image Url</label>

                                    </div>

                                    {/* <!-- Description Input --> */}
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="description" type="text" placeholder="Description" style={{ height: "10rem" }}{...register("description")}></textarea>
                                        <label htmlFor="description">Description</label>
                                    </div>


                                    {/* <!-- Submit button --> */}
                                    <div className="d-grid">
                                        <button className="btn bg-tripo btn-lg" id="submitButton" type="submit">Submit</button>
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

export default AddTour;