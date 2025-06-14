// src/pages/JobSearchPage/components/SearchBar.jsx
import React from 'react';

function SearchBar({ onSearch }) {
  // Sau này sẽ lấy giá trị từ state
  return (
    <header className="search-bar">
      <input type="text" placeholder="Tên công việc, vị trí bạn muốn ứng tuyển..." />
      <input type="text" placeholder="Địa điểm" />
      <button onClick={() => onSearch('ai engineer', 'hanoi')}>Tìm kiếm</button>
    </header>
  );
}

export default SearchBar;