// src/pages/JobSearchPage/components/JobListItem.jsx
import React from 'react';

function JobListItem({ job, onSelect, isSelected }) {
  const itemClassName = `job-list-item ${isSelected ? 'selected' : ''}`;

  return (
    <div className={itemClassName} onClick={() => onSelect(job)}>
      <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
      <div className="job-info">
        <h3 className="job-title">{job.title}</h3>
        <p className="company-name">{job.company}</p>
        <div className="job-tags">
          <span>{job.salary}</span>
          <span>{job.location}</span>
          <span>{job.experience}</span>
        </div>
      </div>
    </div>
  );
}

export default JobListItem;