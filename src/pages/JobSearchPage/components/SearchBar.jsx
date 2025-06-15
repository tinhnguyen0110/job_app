// src/pages/JobSearchPage/components/SearchBar.jsx
import React, { useState, useEffect } from 'react';
import { getSeniorities } from '../../../api/jobService'; // Import API service

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [selectedSeniority, setSelectedSeniority] = useState('');
  const [seniorityOptions, setSeniorityOptions] = useState([]);

  useEffect(() => {
    const fetchSeniorities = async () => {
      const seniorities = await getSeniorities();
      setSeniorityOptions(seniorities);
    };
    fetchSeniorities();
  }, []);

  const handleSearchClick = () => {
    onSearch(searchTerm, location, selectedSeniority);
  };

  return (
    <header className="search-bar">
      <input
        type="text"
        placeholder="Tên công việc, vị trí bạn muốn ứng tuyển..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Địa điểm"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <select
        value={selectedSeniority}
        onChange={(e) => setSelectedSeniority(e.target.value)}
      >
        <option value="">Tất cả cấp bậc</option>
        {seniorityOptions.map((seniority) => (
          <option key={seniority} value={seniority}>{seniority}</option>
        ))}
      </select>
      <button onClick={handleSearchClick}>Tìm kiếm</button>
    </header>
  );
}
export default SearchBar;