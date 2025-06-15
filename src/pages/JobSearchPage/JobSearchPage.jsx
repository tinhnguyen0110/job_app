// src/pages/JobSearchPage/JobSearchPage.jsx

import React, { useState, useEffect } from 'react';
import { getJobs } from '../../api/jobService';

import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import SearchBar from './components/SearchBar';

import './JobSearchPage.css'; // Import file CSS riêng cho trang này

function JobSearchPage() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchInitialJobs = async () => {
  //     try {
  //       setIsLoading(true);
  //       const data = await getJobs();
  //       setJobs(data);
  //       if (data.length > 0) {
  //         setSelectedJob(data[0]);
  //       }
  //     } catch (error) {
  //       console.error("Lỗi khi tải dữ liệu công việc:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchInitialJobs();
  // }, []);

    useEffect(() => {
    // Định nghĩa một hàm async bên trong để có thể dùng await
    const fetchJobs = async () => {
      try {
        
        // Gọi API đến backend FastAPI của bạn
        const URL = "http://localhost:8000/api/v1/jobs"
        const response = await fetch(URL);

        // Nếu response không thành công (ví dụ: lỗi 404, 500), ném ra một lỗi
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Chuyển đổi response thành dạng JSON
        const data = await response.json();
        
        // Cập nhật state với dữ liệu nhận được
        setJobs(data);
        if (data.length > 0) {
          setSelectedJob(data[0]);
        }
      } catch (e) {
        // Nếu có bất kỳ lỗi nào trong quá trình fetch, cập nhật state lỗi
        console.error("Lỗi khi fetch dữ liệu công việc:", e);
        setError(e.message);
      } finally {
        // Dù thành công hay thất bại, cuối cùng cũng dừng trạng thái loading
        setIsLoading(false);
      }
    };

    // Gọi hàm fetch dữ liệu
    fetchJobs();

  }, []); 
  console.log(jobs)
  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const handleSearch = (searchTerm, location) => {
    console.log("Bắt đầu tìm kiếm với:", { searchTerm, location });
    // Logic tìm kiếm thật sẽ được triển khai ở đây
  };

  return (
    <div className="page-container">
      <SearchBar onSearch={handleSearch} />
      <main className="main-content">
        {isLoading ? (
          <div className="loading-spinner">Đang tải...</div>
        ) : (
          <>
            <JobList

              jobs={jobs}
              onJobSelect={handleJobSelect}
              selectedJobId={selectedJob ? selectedJob.id : null}
            />
            <JobDetails job={selectedJob} />
          </>
        )}
      </main>
    </div>
  );
}

export default JobSearchPage;