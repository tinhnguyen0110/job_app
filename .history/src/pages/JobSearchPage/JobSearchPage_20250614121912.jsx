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

  useEffect(() => {
    const fetchInitialJobs = async () => {
      try {
        setIsLoading(true);
        const data = await getJobs();
        setJobs(data);
        if (data.length > 0) {
          setSelectedJob(data[0]);
        }
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu công việc:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInitialJobs();
  }, []);

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