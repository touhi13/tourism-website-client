import React from 'react';
// import { Link } from 'react-router-dom';

const ManageBooking = ({ booking, serial, handelStatusChange, handleDeleteTour }) => {
    let { _id, name, email, phone, address, tour_id, tour_name, tour_price, createdAt, status } = booking;
    return (
        <tr>
            <td>{serial}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>{tour_name}</td>
            <td>${tour_price}</td>
            <td>{status === 0 ? "Pending" : "Approved"}</td>
            <td>{<button className="btn btn-warning me-1" onClick={() => { handelStatusChange({ _id, status }) }}> {status === 0 ? "Approve" : "Cancel"} </button>}
                <button className="btn btn-danger" onClick={() => { handleDeleteTour(_id) }}> Delete </button>
            </td>

        </tr>
    );
};

export default ManageBooking;