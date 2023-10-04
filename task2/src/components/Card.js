import React from 'react';
import { IconBuildingSkyscraper, IconHeart } from '@tabler/icons-react';
import { IconBed } from '@tabler/icons-react';
import { IconBath } from '@tabler/icons-react';
import { IconArrowsMove } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { IconMapPin } from '@tabler/icons-react';

const Card = ({ hotel_name, city, photo1, rooms, beds, bath, area, price, id, addressline1 }) => {

  const adrress = [
    {
      city: 'New York',
      address: '123 Main Street, New York, NY 10030',
    },
    {
      city: 'Paris',
      address: '123 Main Street, Paris, PA 10030',
    },
    {
      city: 'Mumbai',
      address: '123 Main Street, Mumbai, MB 10030',
    },
    {
      city: 'London',
      address: '123 Main Street, London, LD 10030',
    },
  ]

  const handleLike = () => {
    alert('Thank you for your response!');
  };

  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="bg-[#f1f6fc] p-4 rounded-3xl shadow-md">
      <img
        src={photo1}
        alt={hotel_name}
        className="w-full h-[300px] object-cover mb-3 rounded-2xl cursor-pointer"
      />
      <div className="flex flex-col">
        <div className="flex justify-between">
        <p style={{ display: 'flex', alignItems: 'center' }}>
          <IconMapPin size={16} color='orange' /> {" "} {adrress.find((item) => item.city === city).address}
        </p>
        </div>
        <div className='flex justify-betweenm items-start'>
          <h2 className="text-xl text-gray-700 font-semibold mt-2 mb-4 text-start">{hotel_name} , {addressline1}</h2>
        </div>
        <div className="grid grid-cols-4">
          {rooms && (
            <div className="flex flex-col items-center mb-2">
              <IconBuildingSkyscraper className="mr-1" color="grey" />
              <p className="text-gray-600 font-semibold">{rooms}</p>
            </div>
          )}
          {beds && (
            <div className="flex flex-col items-center mb-2">
              <IconBed className="mr-1" color="grey" />
              <p className="text-gray-600 font-semibold">{beds}</p>
            </div>
          )}
          {bath && (
            <div className="flex flex-col items-center mt-2">
              <IconBath className="mr-1" color="grey" />
              <p className="text-gray-600 font-semibold">{bath}</p>
            </div>
          )}
          {area && (
            <div className="flex flex-col items-center mt-2">
              <IconArrowsMove className="mr-1" color="grey" />
              <p className="text-gray-600 font-semibold">{area}</p>
            </div>
          )}
        </div>
        <div className="h-[1px] mt-4 bg-gray-300"></div>
        <div className="flex justify-between items-center my-4">
          <div className="flex items-baseline">
            <p className="text-blue-700 text-2xl font-semibold mr-1">{price.split("/")[0]}</p>
            {"/"}
            {price.split("/")[1]}
          </div>
          <div className="flex items-center">
            {/* <button onClick={handleLike} className="rounded-xl p-2 mr-2  bg-gray-300">
              <IconHeart color="blue" />
            </button> */}
            <button
              className="border-blue-700 border-2 hover:bg-blue-500 text-blue-700 font-bold py-2 px-3 rounded-full mt-auto"
              onClick={(e) => {
                e.stopPropagation();
                handleImageClick();
              }}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
