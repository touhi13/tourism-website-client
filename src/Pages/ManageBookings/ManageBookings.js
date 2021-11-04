import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ExtraBanner from '../Shared/ExtraBanner/ExtraBanner';
import ManageBooking from './ManageBooking/ManageBooking';

const ManageBookings = () => {
    const [bookings, setBookings] = useState([])
    const [status, setStatus] = useState(false);


    useEffect(() => {
        // axios.get('http://localhost:5000/bookings')
        axios.get('https://gruesome-cat-12788.herokuapp.com/bookings')
            .then(res => {
                setBookings(res.data);
                setStatus(false);
            })
    }, [status]);
    const handelStatusChange = (data) => {
        // const url = 'http://localhost:5000/bookings/status';
        const proceed = window.confirm('Are you sure, you want to change status?');
        if (proceed) {
        const url = 'https://gruesome-cat-12788.herokuapp.com/bookings/status';
        axios.post(url, data)
            .then(res => {
                if (res.data.acknowledged === true) {
                    setStatus(true);
                }
            })
        }
    }
    const handleDeleteTour = (id)=>{
        const proceed = window.confirm('Are you sure, you want to cancel?');
        if (proceed) {
            // const url = `http://localhost:5000/bookings/${id}`;
            const url = `https://gruesome-cat-12788.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingBookings = bookings.filter(bookings => bookings._id !== id);
                        setBookings(remainingBookings);
                    }
                });
        }
    }
    return (
        <>
        <ExtraBanner bannerText={"Manage Bookings"}></ExtraBanner>
        <div className="container-fluid">
                <h2 className="text-center text-dark my-5">Bookings table</h2>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Traveller Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Tour Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            bookings?.map((booking,i)=> <ManageBooking
                                key={booking._id}
                                booking={booking} handelStatusChange={handelStatusChange} serial={i+1} handleDeleteTour={handleDeleteTour}
                            ></ManageBooking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default ManageBookings;