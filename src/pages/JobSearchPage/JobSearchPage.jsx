// src/pages/JobSearchPage/JobSearchPage.jsx

import React, { useState, useEffect } from 'react';
import { getJobs } from '../../api/jobService';

import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';

import './JobSearchPage.css';

function JobSearchPage() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate pagination values
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  const loadInitialJobs = async () => {
    setIsLoading(true);
    try {
      // Giả sử getJobs() không có tham số sẽ tải tất cả công việc
      // hoặc một tập hợp mặc định.
      // getJobs chịu trách nhiệm về URL đầy đủ và logic fetch.
      const data = await getJobs();
      setJobs(data || []); // Đảm bảo jobs luôn là một mảng
      if (data && data.length > 0) {
        setSelectedJob(data[0]);
      } else {
        setSelectedJob(null);
      }
    } catch (error) {
      console.error("Error fetching initial jobs:", error);
      setJobs([]); // Đặt thành mảng rỗng khi có lỗi
      setSelectedJob(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadInitialJobs();
  }, []); // Mảng phụ thuộc rỗng nghĩa là chỉ chạy một lần khi mount

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Cập nhật công việc được chọn thành công việc đầu tiên trên trang mới
    const newIndexOfFirstJob = (pageNumber - 1) * itemsPerPage;
    const firstJobOnPage = jobs[newIndexOfFirstJob];
    if (firstJobOnPage) {
      setSelectedJob(firstJobOnPage);
    } else {
      setSelectedJob(null); // Nếu không có công việc nào trên trang đó, đặt selectedJob thành null
    }
    window.scrollTo(0, 0);
  };

  const handleSearch = (searchTerm, location, seniority) => {
    const trimmedSearchTerm = searchTerm.trim();
    const trimmedSeniority = seniority;
    const trimmedLocation = location.trim();

    if (trimmedSearchTerm === "" && trimmedLocation === "") {
      // Nếu cả hai trường tìm kiếm đều trống, tải lại danh sách công việc ban đầu
      loadInitialJobs();
    } else {
      // Ngược lại, thực hiện tìm kiếm
      const performSearch = async () => {
        setIsLoading(true);
        setCurrentPage(1); // Đặt lại về trang đầu tiên cho kết quả tìm kiếm mới
        try {
          const params = {};
          if (trimmedSearchTerm !== "") {
            params.searchTerm = trimmedSearchTerm; // Hoặc 'search', 'title' tùy thuộc vào API backend
          }
          if (trimmedLocation !== "") {
            params.location = trimmedLocation;
          }
          if (trimmedSeniority !== "") {
            params.seniority = trimmedSeniority;
          }
          const data = await getJobs(params); // Gọi getJobs với các tham số tìm kiếm
          setJobs(data || []); // Đảm bảo jobs luôn là một mảng
          if (data && data.length > 0) {
            setSelectedJob(data[0]);
          } else {
            setSelectedJob(null); // Không tìm thấy kết quả
          }
        } catch (error) {
          console.error("Error searching jobs:", error);
          setJobs([]); // Xóa jobs khi có lỗi
          setSelectedJob(null);
        } finally {
          setIsLoading(false);
        }
      };
      performSearch();
    }
  };

  return (
    <div className="page-container">
      <div className="sticky-header">
        <div className="site-header">
          <div className="header-left">
            <button className="notification-btn">
              <i className="fas fa-bell"></i>
              Thông báo việc làm
            </button>
          </div>
          
          <div className="header-center">
            <h1 className="site-title">Joblytics.io.vn</h1>
            <p className="site-subtitle">Tìm kiếm công việc mơ ước của bạn</p>
          </div>

          <div className="header-right">
            <button className="login-btn">
              <i className="fas fa-user"></i>
              Đăng nhập
            </button>
          </div>
        </div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <main className="main-content">
        {isLoading ? (
          <div className="loading-spinner">Loading...</div>
        ) : (
          <>
            <div className="job-list-container">
              <JobList
                jobs={currentJobs}
                onJobSelect={handleJobSelect}
                selectedJobId={selectedJob?.id}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
            <JobDetails job={selectedJob} />
          </>
        )}
      </main>
    </div>
  );
}

export default JobSearchPage;