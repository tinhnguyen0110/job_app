// src/api/jobService.js

// import { jobsData } from '../mockData';

// Hàm này giả lập việc gọi API để lấy danh sách công việc
// src/api/jobService.js

const API_BASE_URL = "http://localhost:8000/api/v1"; // Hoặc URL API của bạn

/**
 * Fetches jobs from the API.
 * @param {object} [params] - Optional parameters for filtering jobs.
 * @param {string} [params.searchTerm] - The search term for job titles, descriptions, etc.
 * @param {string} [params.location] - The location to search for jobs.
 * @returns {Promise<Array<object>>} A promise that resolves to an array of job objects.
 * @throws {Error} If the network response is not ok.
 */
export const getJobs = async (params) => {
  let url = `${API_BASE_URL}/jobs`;

  if (params && (params.searchTerm || params.location)) {
    const queryParams = new URLSearchParams();
    if (params.searchTerm) {
      // Đảm bảo tên tham số 'searchTerm' khớp với những gì backend mong đợi
      // Ví dụ: có thể là 'q', 'title', 'search', v.v.
      queryParams.append('searchTerm', params.searchTerm);
    }
    if (params.location) {
      queryParams.append('location', params.location);
    }
    url += `?${queryParams.toString()}`;
  }

  console.log("Fetching jobs from URL:", url); // Để debug

  try {
    const response = await fetch(url);
    if (!response.ok) {
      // Nếu server trả về lỗi, cố gắng parse lỗi nếu có body JSON
      let errorData;
      try {
        errorData = await response.json();
      } catch (e) {
        // Không có body JSON hoặc không parse được
        errorData = { message: response.statusText };
      }
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message || response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getJobs:", error);
    // Ném lại lỗi để component gọi có thể xử lý
    // Hoặc bạn có thể trả về một giá trị mặc định như mảng rỗng tùy theo yêu cầu
    throw error;
    // return []; // Hoặc trả về mảng rỗng nếu muốn component không bị crash
  }
};

/**
 * Fetches distinct seniority levels from the API.
 * @returns {Promise<Array<string>>} A promise that resolves to an array of seniority levels.
 * @throws {Error} If the network response is not ok.
 */
export const getSeniorities = async () => {
  const url = `${API_BASE_URL}/seniorities`; // Replace with your actual endpoint
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getSeniorities:", error);
    // You might want to return a default value or re-throw the error
    return []; // Or throw error;
  }
};


// Bạn có thể thêm các hàm API khác ở đây, ví dụ:
// export const getJobById = async (id) => { ... };
// export const createJob = async (jobData) => { ... };
