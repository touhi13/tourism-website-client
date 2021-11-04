import React from 'react';
import { NavLink } from 'react-router-dom';

const ManageTour = ({ tour, serial, handleEditTour, handleDeleteTour, currentPage }) => {
    let { _id, name, img, description, days, location, price } = tour;

    return (
        <tr>
            <td>{serial}</td>
            <td><img className="img-fluid" width="256px" src={img} alt="" /></td>
            <td className="">{name}</td>
            {/* <td className="tour-desc">{description}</td> */}
            <td>{days}</td>
            <td>{location}</td>
            <td>${price}</td>
            <td>
                <NavLink to={`/booking/${_id}`}><button className="btn btn-info me-1" > Details </button></NavLink>
                <NavLink to={{
                    pathname: `/edit-tour/${_id}`,
                    state: { from: currentPage }
                }}><button className="btn btn-primary me-1"> Edit </button></NavLink>
                <button className="btn btn-danger me-1" onClick={() => { handleDeleteTour(_id) }}> Delete </button>
            </td>

        </tr>
    );
};

export default ManageTour;