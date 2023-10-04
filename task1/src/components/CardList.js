import React, { useState } from 'react';
import Card from './Card';
import data from './data.json';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import { IconArrowLeft } from '@tabler/icons-react';

const CardList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(data.data.length / cardsPerPage);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const filteredCards = data.data.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCards = filteredCards.slice(startIndex, endIndex);

  return (
    <div className='p-6'>
      <div className='bg-[#f1f6fc] p-4 rounded-3xl mb-5 shadow-md'>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className='rounded-xl w-[400px] px-4 py-2'
          style={{ border: '1px solid', borderColor: "#dce9f8" }}
        />
      </div>
      <div className="grid grid-cols-3 gap-5">
        {currentCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className="flex justify-between mt-12 bg-[#f1f6fc] p-4 mb-4 rounded-3xl items-center shadow-md">
        <div className="text-black-500 text-sm  font-sans">
          {currentPage} from {totalPages}
        </div>
        <div className='flex items-center'>
          {currentPage > 1 && (
            <button
              className=" hover:bg-blue-700 bg-white shadow-md rounded-xl font-bold py-2 px-2 ml-4 "
              onClick={handlePrevClick}
            >
              <IconArrowLeft />
            </button>
          )}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`${
                currentPage === index + 1 ? 'bg-blue-500 hover:bg-blue-700' : 'bg-white shadow-md rounded-xl font-bold hover:bg-gray-400'
              } text-black font-bold py-2 px-4 ml-4 rounded-full`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              className="bg-white shadow-md hover:bg-blue-700 rounded-xl font-bold py-2 px-2 ml-4 "
              onClick={handleNextClick}
            >
              <IconArrowNarrowRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardList;
