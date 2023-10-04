import React from 'react';
import { IconHeart } from '@tabler/icons-react';
import { IconUsers } from '@tabler/icons-react';
import { IconBrandSpeedtest } from '@tabler/icons-react';
import { IconSteeringWheel } from '@tabler/icons-react';
import { IconGasStation } from '@tabler/icons-react';

const Card = ({ image, title, people, mode, type, mileage, price }) => {
  const handleRentNow = () => {
    alert('Thank you for renting our car!');
  };

  const handleLike = () => {
    alert('Thank you for your response!');
  };

  return (
    <div className="bg-[#f1f6fc] p-4 rounded-3xl shadow-md">
      <img src={image} alt={title} className="w-full h-[300px] object-cover mb-3 rounded-2xl" />
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h2 className="text-2xl mt-2 mb-4">{title}</h2>
          <p className="flex items-center border-dashed border-2 border-[#b4d7fa] px-3 my-3 rounded-2xl font-semibold">
            2020
          </p>
        </div>
        <div className="grid grid-cols-2">
          {people && (
            <div className="flex mb-2">
              <IconUsers className="mr-1" color='#4a9cef' />
              <p className="text-gray-600 font-semibold">{people}</p>
            </div>
          )}
          {type && (
            <div className="flex mb-2">
              <IconGasStation className="mr-1" color='#4a9cef' />
              <p className="text-gray-600 font-semibold">{type[0].toUpperCase() + type.slice(1)}</p>
            </div>
          )}
          {mileage && (
            <div className="flex mt-2">
              <IconBrandSpeedtest className="mr-1" color='#4a9cef' />
              <p className="text-gray-600 font-semibold">{mileage}</p>
            </div>
          )}
          {mode && (
            <div className="flex mt-2">
              <IconSteeringWheel className="mr-1" color='#4a9cef' />
              <p className="text-gray-600 font-semibold">{mode[0].toUpperCase() + mode.slice(1)}</p>
            </div>
          )}
        </div>
        <div className='h-[1px] mt-4 bg-gray-300'></div>
        <div className="flex justify-between items-center my-4">
          <div className="flex items-baseline">
            <p className="text-gray-600 text-2xl font-semibold mr-1">{price.split("/")[0]}</p>{"/"}{price.split("/")[1]}
          </div>
          <div className="flex items-center">
            <button  onClick={handleLike} className='rounded-xl p-2 mr-2 bg-[#dce9f8]'>
              <IconHeart color="#4a9cef" />
            </button>
            <button
              className="bg-[#4a9cef] hover:bg-blue-500 text-white font-bold py-2 px-3 rounded-xl mt-auto"
              onClick={handleRentNow}
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
