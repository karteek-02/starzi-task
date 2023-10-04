import React from 'react'
import { useNavigate, useParams } from 'react-router';
import Card from './Card';
import data from './hotels.json';

const Details = () => {
    const { id } = useParams();
    const hotel = data.hotels.find((hotel) => hotel.id === id);
    const navigate = useNavigate();

    return (
        <div>
            <button
                className="bg-blue-500 rounded-full p-2 px-4 my-4 ms-auto text-white"
                onClick={() => navigate("/")}
            >
                Back to Home Page
            </button>
            <div className="flex flex-col items-center">
                <h2 className='font-semibold text-2xl my-2'>Hotel ID: {id}</h2>
                <Card {...hotel} />
            </div>
        </div>
    )
}

export default Details;