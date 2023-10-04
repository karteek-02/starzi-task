import React, { useState } from 'react';
import Card from './Card';
import data from './hotels.json';
import { useNavigate } from 'react-router';
import { IconHourglassHigh } from '@tabler/icons-react';

const CardList = () => {
  const hotels = data.hotels;
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(hotels.length / cardsPerPage);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('New York');

  const handleShowMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/property/${id}`);
  };

  const filteredCards = hotels.filter((hotel) =>
    hotel.hotel_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const filteredHotels = filteredCards.filter((hotel) => hotel.city === selectedCity);

  const currentCards = filteredHotels.slice(0, endIndex);

  const cityButtons = ['New York', 'Paris', 'Mumbai', 'London'].map((city) => (
    <button
      key={city}
      onClick={() => {
        setSelectedCity(city);
        setCurrentPage(1); 
      }}
      className={`px-3 py-1 font-serif rounded-full  ml-5 ${
        selectedCity === city ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700'
      }`}
    >
      {city}
    </button>
  ));

  return (
    <div className='p-6'>
      <div className='flex items-center flex-col'>
        <h2 className='text-4xl font-bold my-2'>Featured Listed Property</h2>
        <p className='text-md font-semibold mb-8'>Real Estate can be bought , sold , leased , rented, and can be a <br /> valuable investment oppurtunity. The value of real estate can be ... </p>
      </div>
      <div className="flex flex-row items-start mb-4">
        {cityButtons}
      </div>

      <div className="grid grid-cols-3 gap-5">
        {currentCards.map((hotel, index) => (
          <button onClick={() => handleImageClick(hotel.id)}>
            <Card key={index} {...hotel} />
          </button>
        ))}
      </div>
      {currentPage < totalPages && (
        <div className="flex justify-center mt-5">
          <button
            className=" flex justify-between font-serif bg-blue-700 text-white rounded-full p-3 "
            onClick={handleShowMore}
          >
           <IconHourglassHigh />&nbsp;&nbsp;Show More 
          </button>
        </div>
      )}
    </div>
  );
};

export default CardList;
