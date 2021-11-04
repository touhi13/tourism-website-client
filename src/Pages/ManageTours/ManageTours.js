import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ExtraBanner from '../Shared/ExtraBanner/ExtraBanner';
import ManageTour from './ManageTour/ManageTour';
import { useLocation } from 'react-router-dom';


const ManageTours = () => {
    const [tours, setTours] = useState([])
    const location = useLocation();
    useEffect(() => {
        // axios.get('http://localhost:5000/tours')
        axios.get('https://gruesome-cat-12788.herokuapp.com/tours')
            .then(res => {
                setTours(res.data);
            })
    }, []);
    const handleDeleteTour = (id)=>{
        const proceed = window.confirm('Are you sure, you want to cancel?');
        if (proceed) {
            // const url = `http://localhost:5000/tours/${id}`;
            const url = `https://gruesome-cat-12788.herokuapp.com/tours/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingTours = tours.filter(tours => tours._id !== id);
                        setTours(remainingTours);
                    }
                });
        }
    }
    return (
        <>
        <ExtraBanner bannerText={"Manage Tours"}></ExtraBanner>     
        <div className="container-fluid">
            <div className ="d-flex justify-content-between">
                <h2 className="text-dark my-5">Tours table</h2>
                <NavLink to="add-tour" className="btn my-auto bg-tripo text-white">Add new tour</NavLink>
                </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm text-center">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Tour Title</th>
                            {/* <th scope="col">Description</th> */}
                            <th scope="col">Tour Days</th>
                            <th scope="col">Location</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            tours?.map((tour,i)=> <ManageTour
                                key={tour._id}
                                tour={tour}  serial={i+1} handleDeleteTour={handleDeleteTour}
                                currentPage={location.pathname}></ManageTour>)
                        }
                    </tbody>
                </table>
            </div>
        </div>       
        </>
    );
};

export default ManageTours;