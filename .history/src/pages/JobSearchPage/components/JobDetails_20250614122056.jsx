// src/pages/JobSearchPage/components/JobDetails.jsx
import React from 'react';

function JobDetails({ job }) {
  if (!job) {
    return <div className="job-details placeholder">Chọn một việc làm để xem chi tiết</div>;
  }

  const { title, description } = job;

  return (
    <div className="job-details">
      <h2 className="job-detail-title">{title}</h2>
      <button className="apply-button">Ứng tuyển ngay</button>
      
      <div className="detail-section">
        <h3>Yêu cầu</h3>
        <ul>
          {description.requirements.map((req, index) => <li key={index}>{req}</li>)}
        </ul>
      </div>

      <div className="detail-section">
        <h3>Quyền lợi</h3>
        <ul>
          {description.benefits.map((ben, index) => <li key={index}>{ben}</li>)}
        </ul>
      </div>

       <div className="detail-section">
        <h3>Địa điểm làm việc</h3>
        <p>{description.workLocation}</p>
      </div>

       <div className="detail-section">
        <h3>Thời gian làm việc</h3>
        <p>{description.workTime}</p>
      </div>
    </div>
  );
}

export default JobDetails;