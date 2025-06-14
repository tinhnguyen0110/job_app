// src/api/jobService.js

import { jobsData } from '../mockData';

// Hàm này giả lập việc gọi API để lấy danh sách công việc
export const getJobs = async (params = {}) => {
  console.log("Đang giả lập gọi API với tham số:", params);

  // Giả lập độ trễ mạng
  await new Promise(resolve => setTimeout(resolve, 500));

  // Trong tương lai, bạn sẽ thay thế phần này bằng lệnh fetch thật:
  /*
  try {
    const query = new URLSearchParams(params).toString();
    const response = await fetch(`http://your-fastapi-backend/api/jobs?${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return []; // Trả về mảng rỗng nếu có lỗi
  }
  */

  // Hiện tại, trả về dữ liệu giả lập
  return jobsData;
};