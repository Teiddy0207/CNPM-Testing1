import React, { useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import { SlCalender } from 'react-icons/sl';

function Search({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [flights, setFlights] = useState([
    { id: 1, destination: 'New York', currentLocation: 'Los Angeles', departureDate: '2023-10-15' },
    { id: 2, destination: 'Paris', currentLocation: 'London', departureDate: '2023-10-20' },
    { id: 3, destination: 'Tokyo', currentLocation: 'Seoul', departureDate: '2023-11-01' },
  ]);
  const handleSearch = () => {
    // Thực hiện tìm kiếm (gọi hàm onSearch và truyền các thông tin cần thiết)
    onSearch({
      location: searchInput,
      currentLocation: currentLocation,
      departureDate: departureDate,
    });
  };

  return (
    <div className="search container">
      <div className="sectionContainer grid">
        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>
          </div>
          <div className="singleBtn">
            <span>Business Class</span>
          </div>
          <div className="singleBtn">
            <span>First class</span>
          </div>
        </div>
        <div className="searchInputs flex">
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className='icon' />
            </div>
            <div className="texts">
              <h4>Điểm đến</h4>
              <input
                type="text"
                placeholder='Hôm nay bạn muốn đi đâu'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
          </div>
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className='icon' />
            </div>
            <div className="texts">
              <h4>Điểm xuất phát</h4>
              <input
                type="text"
                placeholder='Địa điểm hiện tại'
                value={currentLocation}
                onChange={(e) => setCurrentLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="singleInput flex">
            <div className="iconDiv">
              <SlCalender className='icon' />
            </div>
            <div className="texts">
              <h4>Ngày khởi hành</h4>
              <input
                type="text"
                placeholder='Ngày khởi hành'
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>
          </div>
          <button className='btn btnBlock flex' onClick={handleSearch}>Tìm chuyến bay</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
