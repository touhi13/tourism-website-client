import React from 'react';

const MyBooking = ({ booking, serial, handleCancelTour }) => {
    let { _id, tour_id, tour_name, tour_days, tour_location, tour_price, createdAt, status } = booking;

    return (
        <tr>
            <td>{serial}</td>
            <td>{tour_name}</td>
            <td>{tour_days}</td>
            <td>{tour_location}</td>
            <td>${tour_price}</td>
            <td>{status === 0 ? "Pending" : "Approved"}</td>
            <td> <button className="btn btn-danger" onClick={()=>{handleCancelTour(_id)}}> Cancel </button></td>

        </tr>
    );
};

export default MyBooking;