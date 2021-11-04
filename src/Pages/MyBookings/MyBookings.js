import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import ExtraBanner from '../Shared/ExtraBanner/ExtraBanner';
import MyBooking from './Mybooking/MyBooking';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        axios.post('https://gruesome-cat-12788.herokuapp.com/my-bookings',user)
        // axios.post('http://localhost:5000/my-bookings', user)
            .then(res => {
                console.log(res.data)
                setBookings(res.data);
            })
    }, []);

    const handleCancelTour = (id)=>{
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
            <ExtraBanner bannerText={"My Bookings"}></ExtraBanner>
            <div className="container-fluid my-5">
                <h2 className="text-center text-dark my-5">Bookings table</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tour Title</th>
                                <th scope="col">Tour Days</th>
                                <th scope="col">Location</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings?.map((booking,i) => <MyBooking
                                    key={booking._id}
                                    booking={booking} serial={i+1} handleCancelTour={handleCancelTour}
                                ></MyBooking>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MyBookings;