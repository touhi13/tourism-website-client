import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';




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
        <div className="container px-5 my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card border-0 rounded-3 shadow-lg">
                        <div className="card-body p-4">
                            <div className="text-center">
                                <div className="h1 fw-light">Contact Form</div>
                                <p className="mb-4 text-muted">A functional, Bootstrap 5 contact form with validation built using SB Forms. Try it out!</p>
                            </div>


                            <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>

                                {/* <!-- Name Input --> */}
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="name"  placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                                    <label for="name">Name</label>
                                    {/* <div className="invalid-feedback" >Name is required.</div> */}
                                </div>

                                {/* <!-- Price Input --> */}
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="price" type="number" placeholder="Price" {...register("price")}/>
                                    <label for="price">Price</label>
                                    {/* <div className="invalid-feedback" data-sb-feedback="price:required">Price is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="price:price">Price is not valid.</div> */}
                                </div>
                                {/* <!-- Image Input --> */}
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="img" placeholder="Image Url"{...register("img")}/>
                                    <label for="img">Image Url</label>
                                    {/* <div className="invalid-feedback" data-sb-feedback="img:required">Image Url is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="img:img">Image Url is not valid.</div> */}
                                </div>

                                {/* <!-- Description Input --> */}
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" id="description" type="text" placeholder="Description" style={{ height: "10rem" }}{...register("description")}></textarea>
                                    <label for="description">Description</label>
                                    {/* <div className="invalid-feedback" data-sb-feedback="description:required">Description is required.</div> */}
                                </div>


                                {/* <!-- Submit button --> */}
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button>
                                </div>
                            </form>
                            {/* <!-- End of contact form --> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTour;