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

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        // const URL = "http://localhost:8000/api/v1/jobs";
        // const response = await fetch(URL);

        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }

        const data = [
          {
              "id": 1,
              "raw_job_id": 399,
              "job_title": "Frontend Developer",
              "seniority": "Middle",
              "company": "PNJ",
              "location": "Ho Chi Minh",
              "salary": "Negotiable",
              "job_description": "The provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are nThe provided text includes various job descriptions in Vietnamese and English, including Backend Developer (AWS), Senior Data Modelling,  Chuyên viên cao cấp - Dự báo kế hoạch và phân tích kinh doanh, Chuyên viên cao cấp – Dự báo kế hoạch & Phân tích Kinh doanh, Chuyên viên Tối Ưu Vận Hành Bán Lẻ (Data Analysis), Data Analysis and System Development Specialist, Senior Data Engineer, AI Data Science Expert, Senior AI Engineer, and AI Product Manager.  Specific details about each role's responsibilities are not provided.",
              "job_requirements": "Not specified in the provided text.",
              "benefits": "Not specified in the provided text.",
              "date_posted": "2025-06-10",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 2,
              "raw_job_id": 400,
              "job_title": "Automation/Manual Tester & Business Analyst",
              "seniority": "",
              "company": "K&M Holdings",
              "location": "Truong Cong Giai, Cau Giay, Hanoi, Vietnam",
              "salary": "Up-to $1500 plus benefits",
              "job_description": "Automation/Manual Tester & Business Analyst. The candidate will be working as a member of the centralized Support team supporting 3 flagship products. They will design and execute automated test scripts for AI-enhanced Web/PWA and mobile applications and gather and document requirements from clients.",
              "job_requirements": "Bachelor’s degree in Computer Science, Engineering, or a related field (or equivalent experience). 3+ years of professional experience combining software QA/Automation and business analysis roles. Proficiency with automation testing tools (e.g. Selenium, JUnit, Cypress, Appium) and programming/scripting languages (e.g. Java, Python, JavaScript). Strong understanding of SDLC and Agile methodologies. Excellent analytical and problem-solving abilities, with strong verbal and written communication skills. Experience writing user stories, acceptance criteria, and functional specifications. Skilled at requirements gathering, process mapping, and translating business needs into technical deliverables. Comfortable engaging with clients or stakeholders to elicit requirements and present findings. Working knowledge of CRM platforms. Ability to quickly learn domain contexts to test relevant scenarios. Adaptable and proactive, with the ability to work in a fast-changing start-up environment. Familiarity with AI and machine learning concepts or workflows. Prior experience with Progressive Web Apps and mobile app development/testing. Exposure to Behavior-Driven Development (BDD) tools (e.g. Cucumber) or CI/CD pipelines for test automation. ISTQB, CBAP, or equivalent certifications are a plus. Experience with project tools like Jira, Confluence, or similar is advantageous. Demonstrated ability to thrive in Agile teams",
              "benefits": "JOB OFFER after 1 online interview round\nClear career path & ESOP opportunities upon product launch\nMentorship by seasoned Tech Leads & free access to modern learning courses\nSocial, Health, and Unemployment Insurance provided after probation period\nAnnual leave in accordance with regulations\nPublic holidays off as per labor laws\nHoliday bonuses: 13th-month salary bonus\nTeam building activities, monthly birthday celebrations, etc.\nSupport for parking fees, lunch, beverages, etc.",
              "date_posted": "2025-05-15",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 3,
              "raw_job_id": 401,
              "job_title": "Manufacturing Design Engineer",
              "seniority": "",
              "company": "Apple",
              "location": null,
              "salary": null,
              "job_description": "Manufacturing Design/Quality Engineer responsible for managing battery manufacturing processes at contract manufacturers (CMs), reviewing battery specifications, working with suppliers to ensure manufacturing processes meet Apple's requirements, developing and implementing quality standards, and driving process improvements.",
              "job_requirements": "Bachelor's degree and above with 3+ years of experience in manufacturing process development and quality in high-volume manufacturing.  Fluent written and oral English. Fluent oral Chinese is a plus.  Familiarity with MSA, GD&T, Metrology, DFMEA, and tolerance analysis is preferred. Experience with design of experiments, FACA, and statistical data analysis is preferred. Excellent product management skills and experience in manufacturing process design, review, and buy-off are preferred. Battery pack or cell manufacturing experience is a plus.  Soft skills such as leadership, project management, communication, teamwork, influencing, and self-motivation are required. Knowledge of AI/ML is a plus. Periodic travel is required.",
              "benefits": null,
              "date_posted": "2025-05-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 4,
              "raw_job_id": 402,
              "job_title": "Risk",
              "seniority": "Lead",
              "company": "Circle Asia",
              "location": "Vietnam",
              "salary": "Competitive salary packages",
              "job_description": "Architect and implement the end-to-end risk management strategy for a new credit card product, focusing on responsible lending and utilizing alternative data and behavioral segmentation. Design and oversee the credit underwriting strategy, including acceptance criteria, credit limit assignment, and pricing. Configure and manage risk rules and decisioning logic within a SaaS risk engine. Develop and manage fraud prevention strategies. Establish portfolio monitoring frameworks and track key risk indicators. Ensure compliance with regulations. Explore and implement AI/ML models for credit scoring, fraud detection, and portfolio analysis. Develop and evolve detailed Circle score model and product restrictions.",
              "job_requirements": "5+ years of experience in credit risk management in consumer lending or credit cards in a Vietnamese bank or fintech. Strong understanding of credit underwriting principles, scorecard development, and credit policy creation. Experience with fraud prevention strategies and tools in digital/card payments. Proficiency in data analysis using SQL, Python, or R. Experience working with risk decision engines. Knowledge of Vietnamese banking and lending regulations. Familiarity with AI/ML applications in risk management.",
              "benefits": "Competitive salary packages, Stock options, 5 days workweek (Sat & Sun holiday), 20 days annual leave, Flexible working, Health and wellness benefits, Opportunities for professional development, Creative and collaborative work environment",
              "date_posted": "2025-06-10",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 5,
              "raw_job_id": 403,
              "job_title": "ReactJS Web Lead",
              "seniority": "Lead",
              "company": "TymeX",
              "location": "Vietnam",
              "salary": null,
              "job_description": "Lead the development and implementation of front-end features for a new digital banking platform.  Collaborate with a team of engineers using Agile and DevOps methodologies.  Evangelize best practices in JavaScript and ReactJS.  Mentor other engineers.",
              "job_requirements": "Must have: ReactJS, NextJS, HTML, CSS, JavaScript (ES6+), Git, RESTful APIs, experience with micro-frontends, unit testing, and browser testing.  Nice to have: 7+ years of front-end experience, experience with CSS frameworks (Bootstrap, TailwindCSS, Ant Design), familiarity with CI/CD, Vue/Angular experience, banking domain experience.",
              "benefits": "Meal and parking allowances, full benefits and salary during probation, health insurance for employee and family, career development opportunities, international work environment, overseas travel opportunities, hackathons and company events, performance bonus, 15 days annual leave + 3 days sick leave, 40-hour work week.",
              "date_posted": "2025-05-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 6,
              "raw_job_id": 404,
              "job_title": "IT BrSE/Project Manager",
              "seniority": "Manager",
              "company": "Công Ty Cổ Phần Onetech Asia",
              "location": null,
              "salary": "40 - 60 triệu VNĐ",
              "job_description": "Manage software projects for clients in Japan and Vietnam (30 man-month/month scale). Optimize project workflow from kickoff to release, including risk management, requirement changes, and quality control.  Communicate and interpret Japanese via chat, email, and video meetings. Analyze business operations, writing workflow documentation and defining/refining requirements.  Participate in writing basic project design documents.",
              "job_requirements": "N2 Japanese proficiency or higher (excellent communication and writing skills preferred). Minimum 5 years of experience as a Business System Engineer/Project Manager, including at least 2 years of technical experience (Developer, system engineer, etc.). Understanding of software development processes, familiar with Agile and Waterfall. Ability to analyze business operations, write basic and detailed design documents. Strong organizational, planning, communication, problem-solving, and team management skills. Proactive, responsible, \"can-do\" mindset, willingness to learn new technologies (AI, AWS, Cloud...). Experience living/working in Japan. PMP, PMI-ACP certification or PMBOK training. Programming, testing background or experience in web, cloud, startup projects, especially AI-related projects.",
              "benefits": "Attractive income: project bonuses, 13th-month salary. Flexible working hours: Monday - Friday, 8:00 - 17:15 (lunch break 11:45 - 13:00). Ideal working environment: Young, creative, dynamic with team building activities and annual trips. Excellent benefits: Full social insurance, transparent salary increases based on performance, regular health checkups. Investment in development: support for training costs, certifications, and allowances upon achievement. Advanced technology: work on projects using Hololens 2, Oculus Quest, HTC Vive, Cloud, AI.",
              "date_posted": "2025-06-10",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 7,
              "raw_job_id": 239,
              "job_title": "Software Engineer",
              "seniority": "Senior",
              "company": "TechBiz Global GmbH",
              "location": "Germany",
              "salary": "",
              "job_description": "Senior Software Engineer to design and develop cutting-edge AI-powered solutions, software architectures, and mobile applications.  Responsibilities include AI and software development, architecture design, mobile app development, cross-functional collaboration, code quality and documentation, and research & innovation.",
              "job_requirements": "At least 7 years of professional software engineering experience; strong background in machine learning and deep learning; proficiency in Python; extensive experience in designing and developing scalable software architectures; solid experience in developing mobile applications; exceptional analytical and problem-solving abilities; strong communication skills; familiarity with cloud platforms, containerization, and version control; experience with mobile frameworks is a plus.",
              "benefits": "",
              "date_posted": "2025-05-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 8,
              "raw_job_id": 182,
              "job_title": "Data Scientist (AI Engineer)",
              "seniority": "Senior",
              "company": "Trustify Technology",
              "location": "",
              "salary": "Well compensation package based on performance and value creation",
              "job_description": "Develop and implement AI projects using LLMs, GenAI, and open-source projects. Optimize and fine-tune AI models. Collaborate with cross-functional teams to integrate AI models into production systems. Drive product impact through data analysis and machine learning. Work on problems like personalization, search, and recommendation using techniques like LLMs, RAG, and statistical modeling. Collaborate with engineering and product teams to deploy models enhancing user experience. Turn data into actionable insights and scalable systems. Stay updated on AI trends. Work with cloud platforms (AWS, GCP, Azure).",
              "job_requirements": "BS/MS/PhD in Computer Science or related field. 5+ years of experience in data science, machine learning, or AI development. Strong programming skills in Python (NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch). Experience with computer vision tools (OpenCV, scikit-image, YOLO, Detectron, etc.). Expertise in video/audio/speech processing (FFmpeg, OpenCV, Librosa, DeepSpeech) models is a plus. Proficiency in working with large datasets and cloud platforms (AWS/GCP/Azure). Familiarity with MLOps tools. Strong analytical and problem-solving skills. Good communication in English.",
              "benefits": "Bonus review bi-annually based on performance. Bonus for excellent project performance. Annually company trip & project close team outing. Additional health care policy for employees. Healthcare: Annual health check-up, Premium Health Insurance (Trustify Care)",
              "date_posted": "2025-05-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 9,
              "raw_job_id": 183,
              "job_title": "AI Engineer",
              "seniority": "",
              "company": "MB Bank",
              "location": "",
              "salary": "Thu nhập hấp dẫn",
              "job_description": "Develop, apply, optimize, and integrate AI models for business/banking applications in Computer Vision, NLP, etc. Participate in service deployment: system architecture, model design, workflow, functionality, performance optimization. Coding, test metrics, service, and unit testing following DevOps, MLOps model. Research and learn the latest scientific papers on AI, ML, DL. For fresher candidates: participate in training programs and internship projects to develop into official positions.",
              "job_requirements": "Bachelor's degree in Information Technology, Computer Science, Telecommunications, Software Technology, Information Systems, etc. Preferred candidates with 1.5+ years of relevant experience. Knowledge and understanding of: Python, C/C++; Service/MicroService with FastAPI/Flask/Django; Tensorflow/Pytorch/DGL/PyG/Onnx; API (Restful/gRPC); Git and Git Flow; Docker/Kubernetes, Kubeflow/MLFlow, TritonServer/Tensorflow Serving; Supervised learning, Reinforcement learning; Image/Video/Audio/NLP processing; CNN/RNN/Transformer/Attention, SVM/KNN/Clustering, GNN; Knowledge Distiller/Model Prune, Model Quantization.",
              "benefits": "Attractive income with comprehensive benefits package: 13th-month bonus; performance bonus; holiday bonuses; personal and team awards; annual vacation; regular health check-ups; personal and family health insurance; birthday gifts and paid leave.  Opportunities for career development: working with new technologies; learning from experts; new learning methods; support for professional development. Ideal work environment: friendly and talented colleagues; modern workspace.",
              "date_posted": "2025-05-20",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 10,
              "raw_job_id": 184,
              "job_title": "AI Engineer",
              "seniority": "",
              "company": "Aloha Consulting Group",
              "location": "",
              "salary": "",
              "job_description": "Design, develop, and implement AI-powered agents to automate repetitive tasks; drive automation across core business functions; ensure smooth integration of AI technologies with existing digital infrastructure; utilize RPA platforms; optimize AI models; work with leadership to identify automation opportunities; stay updated on new trends and technologies in AI.",
              "job_requirements": "Bachelor’s degree in Computer Science, Artificial Intelligence, Software Engineering, or a related field; minimum 2 years of practical experience with AI/ML, especially in automation and AI agents; expertise in designing intelligent systems; strong coding background in Python; skilled in working with RPA tools and integrating APIs; experience with cloud AI ecosystems; understanding of compliance, cybersecurity, and ethical considerations in AI applications; basic English communication skills; strong analytical and problem-solving abilities.",
              "benefits": "",
              "date_posted": "2025-05-26",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 11,
              "raw_job_id": 185,
              "job_title": "Ai & Prompting Engineer",
              "seniority": "",
              "company": "Công Ty Cổ Phần Đầu Tư Và Công Nghệ Hebela",
              "location": "",
              "salary": "Upto 15 triệu VNĐ",
              "job_description": "Research, design, and test effective prompts for AI models to solve specific business tasks (Chatbot, Marketing Content Expert, Ads Policy, etc.). Build and maintain automated workflows on the RPA platform (N8N). Work with technical and business teams to integrate AI into daily workflows. Train and support internal teams on prompt engineering and AI applications. Continuously update and apply advanced AI technologies such as GPT-4, Claude, Copilot AI, MidJourney, Deepseek to propose optimal solutions.",
              "job_requirements": "University degree in Information Technology, Artificial Intelligence, or related fields. Minimum 6 months of experience. Experience working with large language models, advanced AI tools, and a deep understanding of how they work. Proficiency in designing and optimizing prompts for real-world AI applications. Knowledge of Robotic Process Automation (RPA), Retrieval-Augmented Generation (RAG), and tools like N8N. Analytical, problem-solving, and logical thinking skills. Ability to work independently and in a team, effective communication. Proactive learning and adaptability to new technologies. Preference for candidates with knowledge of AI tools and platforms such as MidJourney, Deepseek. Experience in building and managing prompt libraries for each task is an advantage.",
              "benefits": "Income: Up to 15 million VND + Allowance + Bonus. Guaranteed benefits on salary and bonus system, commission bonus policy, incentive policy for high-achieving employees. Bonuses for holidays, 13th-month salary, Women's Day (20/10), International Women's Day (8/3), monthly cosmetic shopping vouchers on the Hebela App. Young, dynamic 9x working environment, encouraging creativity, innovation, and creating a development space for each individual. Maximum support and training to help employees master knowledge, develop, and improve skills to meet the job requirements. Regular salary increases and opportunities for promotion. Full welfare benefits as prescribed, team building, annual travel, tea breaks, monthly birthdays, and special events throughout the year.",
              "date_posted": "2025-05-29",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 12,
              "raw_job_id": 186,
              "job_title": "Machine Learning Engineer",
              "seniority": "Senior",
              "company": "Snaphunt",
              "location": "",
              "salary": "",
              "job_description": "Develop cutting-edge AI and machine learning solutions for financial applications, including portfolio optimization, forecasting, and risk management.  Manage the entire product development lifecycle, from coding and algorithm design to meeting project milestones and stakeholder expectations.",
              "job_requirements": "Bachelor's, Master's, or Ph.D. in a relevant field; 5+ years of experience in the full lifecycle of ML/AI solutions; expert Python programmer; proficiency in PyTorch, TensorFlow, and scikit-learn; NLP experience with Hugging Face Transformers, spaCy, or NLTK; experience with Large Language Models and tools like LangChain or LlamaIndex; understanding of data architectures and big-data technologies (Spark, Kafka); experience deploying solutions on AWS, GCP, or Azure; understanding of time-series forecasting or risk-analysis workflows; familiarity with software engineering best practices (CI/CD, automated testing, Docker/Kubernetes); experience productionizing NLP/LLM applications (a plus); familiarity with MLOps frameworks (a plus); experience in regulated or security-sensitive environments (a plus).",
              "benefits": "",
              "date_posted": "2025-05-30",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 13,
              "raw_job_id": 187,
              "job_title": "AI & Machine Learning Engineer",
              "seniority": "Fresher",
              "company": "SPHINX JSC",
              "location": "tầng 1, tòa nhà HL, ngõ 82, đường Duy Tân, Cầu Giấy, Hà Nội",
              "salary": "trao đổi (dựa theo năng lực và kinh nghiệm). Có hỗ trợ phụ cấp thực tập đối với level Intern",
              "job_description": "Fresher AI & Machine Learning. Join the AI and Machine Learning development team.  Long-term project with guidance and training from experts.",
              "job_requirements": "University degree in Information Technology or Data Science. Good logical thinking and problem-solving skills. Ability to learn and research proactively. Long-term career orientation in AI/Machine Learning.",
              "benefits": "Onsite allowance, overtime allowance, project bonus, exceeding target bonus, 13th-month bonus, business profit bonus,... Social insurance, health insurance, unemployment insurance, maternity allowance, wedding allowance, birthday allowance,... Regular salary increase and professional review. Provided with necessary equipment and tools. Subsidy for relevant certifications. Opportunities for self-development. Work with a dynamic team.  Training and career guidance. Participation in new and advanced training courses. Recognition of contributions. Support for relevant certifications. Post-internship review and official contract signing. Professional, friendly and open work environment. English language training. Internal company cultural competitions. Team building activities, annual trips. Company celebrations and events.",
              "date_posted": "2025-06-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 14,
              "raw_job_id": 188,
              "job_title": "AI Engineer",
              "seniority": "",
              "company": "Viettel Software Services (A Member of Viettel Group)",
              "location": "36A Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
              "salary": "Thu nhập cạnh tranh thỏa thuận theo kinh nghiệm và năng lực.\nLương tháng 13, Thưởng quý, Thưởng dự án, Thưởng năng suất. \nNghỉ mát, thưởng ngày lễ và các ngày chỉ có ở Viettel như Ngày Sáng Tạo - 1/6, 22/12, quà Tết Dương, Tết Âm  tri ân Gia đình, người sinh thành (25-30 triệu/năm)",
              "job_description": "Tham gia phát triển các sản phẩm nội bộ về Chatbot, CV, OCR, Voice2Text ... bằng ứng dụng AI từ các kỹ thuật ML, DL, Transformer, LLM/ Prompt/ Multi agent.Đảm bảo chất lượng dữ liệu, kết quả mô hình, báo cáo định kỳ tự động.Chịu trách nhiệm bảo trì, cải thiện, làm sạch và thao tác dữ liệu, khắc phục các sự cố tồn tại.Thiết kế API giao tiếp với các hệ thống nội bộ, hợp tác với các nhóm khác để tích hợp giải pháp xây dựng sản phẩm hoàn thiện.Đóng gói và triển khai trên môi trường Product với docker và docker-compose.Xây dựng các tài liệu Thiết kế tổng thể, giải pháp, Thiết kế chi tiết, tài liệu Giám sát, theo quy trình DS/AI.",
              "job_requirements": "Có kinh nghiệm từ 1 năm trở lên với vị trí tương đương\nTốt nghiệp ĐH chuyên ngành: Khoa học dữ liệu, Khoa học máy tính, CNTT, Toán học ứng dụng, Điện tử viễn thông hoặc chuyên ngành khác liên quan.\nKiến thức về lập trình, cấu trúc dữ liệu và giải thuật, lý thuyết đồ thị.\nKiến thức về xác suất thống kê, đại số tuyến tính, giải tích.\nKiến thức về các loại CSDL (RDBMS, Graph Databases, NoSQL Products, ...).\nKiến thức về học máy (Machine Learning), học sâu (Deep Learning), về xử lý ngôn ngữ tự nhiên (NLP), xử lý hình ảnh;\nSử dụng thành thạo một trong các thư viện học máy: Scikit-learn, TensorFlow, Keras, PyTorch;\nKỹ năng lập trình thành thạo Python, SQL.\nKỹ năng đọc bài báo khoa học và lập trình lại các thuật toán, giải pháp đề xuất trong bài báo khoa học.\nKỹ năng trực quan hóa dữ liệu.\nKỹ năng triển khai với các nền tảng containerization (Docker, Kubernetes) là một điểm cộng.\nKỹ năng với các nhiệm vụ trong NLP: conversational AI, information extraction, text summarization, text completion, sentiment analysis,...\nKỹ năng với các nhiệm vụ trong LLM: LangChain, vector embeddings, NLTK, GPT-3, GPT-4, ChatGPT, Claude, Mistral, LLaMA, spaCy, Stanford CoreNLP, word2vec, Alpaca , FastText, BERT, VectorDB, BERT, LLM/Prompt, LangGraph\nCó kinh nghiệm làm việc với các thư viện python: numpy, matplotlib/seaborn, pandas, scikit learn, Jupyter notebook, v.v.\nCó kinh nghiệm trong xây dựng kiến trúc, phát triển, triển khai các giải pháp phân tích dữ liệu là một điểm cộng.",
              "benefits": "1. Chế độ lương, thưởng, thu nhập:\n\nThu nhập cạnh tranh thỏa thuận theo kinh nghiệm và năng lực.\nLương tháng 13, Thưởng quý, Thưởng dự án, Thưởng năng suất. \nNghỉ mát, thưởng ngày lễ và các ngày chỉ có ở Viettel như Ngày Sáng Tạo - 1/6, 22/12, quà Tết Dương, Tết Âm  tri ân Gia đình, người sinh thành (25-30 triệu/năm)\n16 ngày nghỉ phép/năm hưởng nguyên lương\nBảo hiểm sức khỏe , bảo hiểm sức khỏe cho người thân, bảo hiểm nhân thọ,…\nHưởng các Chính sách đãi ngộ toàn diện của \"Người Viettel\"\n\n2. Cơ hội phát triển bản thân\n\nCơ hội thăng tiến không giới hạn, trở thành quản lý của các dự án mới\nĐược thử sức với các công nghêm mới, dự án hấp dẫn, thử thách đủ lớn trong và ngoài nước\nCơ hội học hỏi từ các chuyên gia hàng đầu, lãnh đạo và đồng nghiệp ưu tú.\nCơ hội được đào tạo, trau dồi kĩ năng, chuyên môn để phát triển toàn diện.\n\n3. Môi trường làm việc\n\nĐược làm việc trong Tập đoàn toàn cầu, tiên phong thực hiện sứ mệnh kiến tạo xã hội số.\nMôi trường mở, trẻ trung, năng động, trân trọng, yêu thương, tương hỗ & lắng nghe mỗi người từ những ý tưởng nhỏ nhất.\nKhông gian làm việc xanh, mở, hiện đại.\n\n4.Địa điểm làm việc\n\nĐịa điểm: 36A Dịch Vọng Hậu, Cầu Giấy, Hà Nội\nThời gian làm việc: Thứ 2 đến thứ 6",
              "date_posted": "2025-05-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 15,
              "raw_job_id": 189,
              "job_title": "AI Engineer",
              "seniority": "Senior",
              "company": "Backbase",
              "location": "",
              "salary": "",
              "job_description": "Design, develop, and deploy AI solutions for real-world banking challenges; Stay abreast of the latest advancements in AI, particularly Large Language Models (LLMs); Effectively utilize various LLM platforms to tailor AI solutions to specific mission needs; Collaborate with other members and customers to understand operational requirements and translate them into actionable AI applications; Troubleshoot and maintain deployed AI systems, ensuring optimal performance; Document and share knowledge effectively to train future AI engineers; Maintain the highest level of physical fitness and mental preparedness.",
              "job_requirements": "Proficiency in programming languages like Python, Java, or C++; In-depth understanding of machine learning algorithms and deep learning architectures; Experience with cloud computing platforms (e.g., AWS, Azure, GCP); Exceptional problem-solving skills and the ability to think critically under pressure; Excellent communication and collaboration skills to work effectively within a team.",
              "benefits": "",
              "date_posted": "2025-05-21",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 16,
              "raw_job_id": 192,
              "job_title": "AI Engineer",
              "seniority": "Middle",
              "company": "Saigon Technology",
              "location": "",
              "salary": "Competitive Salary and Brilliant Health Benefits\nAttractive salary (13th-month salary, salary review twice/year) and project bonus",
              "job_description": "Develop and apply ML/DL techniques to solve business problems (chatbots, LLMs, OCR, fraud detection, facial recognition). Develop internal AI products.",
              "job_requirements": "MUST-HAVE SKILLS:\nProgramming skills (Python, Java)\n2+ years of experience in AI/ML projects\nExperience with ML/DL frameworks (TensorFlow, PyTorch, Keras, scikit-learn, Pandas, Langchain, LlamaIndex)\nExperience with OpenAI, Gemini, or other LLMs\nExperience with chatbot frameworks (Rasa, Dialogflow, Transformer, BERT, LLM/Prompt)\nFamiliar with OCR algorithms (OpenCV, Tesseract, Textract, Google Cloud Vision, PaddleOCR)\nExperience with Linux, GPU servers, Google Colab, Jupyter, Git, Docker\nGood English proficiency\nNICE TO HAVE SKILLS:\nBackend web development (Flask, Django, FastAPI)\nExperience with SkyPilot, Triton, Sherpa, Icefall\nExperience with SQL and NoSQL databases\nExperience with Vector databases\nExperience building REST/SOAP APIs\nMLOps experience (MLflow, DVC, Feature Store, Airflow, CI/CD)\nExperience with Generative AI, LLMs, Prompt Engineering, Diffusion models, HuggingFace, Ollama, LlamaCPP",
              "benefits": "Competitive Salary and Brilliant Health Benefits\nAttractive salary (13th-month salary, salary review twice/year) and project bonus\nBonus programs for candidate referral, technical article writing\nInterest-free loan support for personal plan\nAllowance for sickness, maternity, paternity and periodic health examination\nPVI health care program\nThe staff of the quarter and year reward\nProgressive and Fun Working Environment\nA professional English-speaking working environment with Agile – Scrum model\nHybrid Working Model: Flexible working time and WFH support.\nAnnual company trip and regular team-building parties\nSports clubs (football, badminton, swimming …)\nValuable Training\nSponsor examination fee for professional certificates (AWS, Azure, IELTS, PMP, Scrum Master,...)\nSponsor fee for joining any technical training sessions and courses.\nFree English workshops",
              "date_posted": "2025-05-19",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 17,
              "raw_job_id": 193,
              "job_title": "Machine Learning Engineer",
              "seniority": "",
              "company": "EV Search",
              "location": "",
              "salary": "",
              "job_description": "Develop and deploy advanced machine learning models, focusing on image and language-based technologies to enhance product features.  Requires deep technical knowledge and collaborative skills to deliver measurable value.",
              "job_requirements": "Solid experience developing and evaluating machine learning models (image recognition or NLP); proven ability to deploy and maintain ML models in production; understanding of DevOps or MLOps; strong collaborative skills and problem-solving mindset.  Preferred: experience with large-scale ML models (LLMs/LVMs); familiarity with end-to-end pipelines; exposure to machine learning in industrial applications.",
              "benefits": "Work on technically demanding projects; exposure to interdisciplinary knowledge (machine learning, software engineering, product operations); opportunities to explore MLOps or product development; firsthand experience in transforming technology into business impact",
              "date_posted": "2025-05-15",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 18,
              "raw_job_id": 194,
              "job_title": "AI Engineer",
              "seniority": "Senior",
              "company": "Hitachi Digital Services",
              "location": null,
              "salary": null,
              "job_description": null,
              "job_requirements": null,
              "benefits": null,
              "date_posted": "2025-05-29",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 19,
              "raw_job_id": 195,
              "job_title": "AI Engineer",
              "seniority": "",
              "company": "Hitachi Digital Services",
              "location": "",
              "salary": "",
              "job_description": "",
              "job_requirements": "",
              "benefits": "",
              "date_posted": "2025-05-29",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 25,
              "raw_job_id": 217,
              "job_title": "Ai",
              "seniority": "Junior",
              "company": "Công Ty TNHH Carrot Global Việt Nam",
              "location": "",
              "salary": "2 - 3 triệu VNĐ",
              "job_description": "Assist in building and training machine learning and deep learning models. Prepare, clean, and analyze structured and unstructured data for training purposes. Support experiments with different model architectures and hyperparameter tuning. Evaluate model performance using relevant metrics and help improve model accuracy. Work closely with data engineers and senior AI developers to integrate models into production. Research new AI tools, libraries, and techniques to stay updated with the latest trends.",
              "job_requirements": "Strong interest in AI/ML and a basic understanding of supervised and unsupervised learning. Experience with Python and common AI libraries (e.g., scikit-learn, NumPy, pandas, TensorFlow or PyTorch). Ability to work with datasets: preprocessing, visualization, and basic analysis. Good problem-solving skills and a strong willingness to learn. Ability to read and understand academic papers or technical documentation. Familiarity with Git or version control tools.",
              "benefits": "5-day workweek (Monday to Friday) Support for English courses and certifications Training and mentorship in AI/ML Opportunity to work on real-world projects and build a professional portfolio Young, collaborative, and learning-driven team environment",
              "date_posted": "2025-06-06",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 20,
              "raw_job_id": 196,
              "job_title": "Software Engineer",
              "seniority": "Senior",
              "company": "Bjak",
              "location": "Vietnam",
              "salary": "Competitive salary",
              "job_description": "Work with product managers and stakeholders to define AI and machine learning objectives, requirements, and timelines. Design, develop, and implement AI models, algorithms, and applications to solve complex business challenges. Oversee the full AI model lifecycle, including data collection, preprocessing, model training, evaluation, and deployment. Optimize and maintain AI-driven systems for scalability, security, and efficiency. Apply advanced analytics and machine learning techniques to drive data-driven decision-making. Stay updated with the latest advancements in AI, ML, and deep learning, incorporating best practices into projects. Conduct research to explore and integrate cutting-edge AI techniques. Collaborate effectively with the Malaysia-based team to ensure smooth project execution and alignment.",
              "job_requirements": "Bachelor's, Master’s, or Ph.D. in Computer Science, Artificial Intelligence, Data Science, or a related field. Proven experience as an AI/ML Engineer, Senior Software Engineer, or Data Scientist. Proficiency in AI and ML frameworks and programming languages (e.g., Python, TensorFlow, PyTorch, Scikit-learn). Strong expertise in data preprocessing, feature engineering, and model evaluation. Experience in deploying and optimizing AI models in a production environment. Excellent problem-solving, analytical thinking, and debugging skills. Strong communication and teamwork abilities. Must be a Vietnamese citizen. Must be willing to work remotely from Vietnam while collaborating with the Malaysia team.",
              "benefits": "Fully remote work arrangement from Vietnam, Exciting projects in a fast-moving, innovative environment, Attractive remuneration and performance incentives, Strong learning and career growth opportunities, International work environment and flat organization",
              "date_posted": "2025-05-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 21,
              "raw_job_id": 197,
              "job_title": "Ai Engineer (Ml/Ai)",
              "seniority": "",
              "company": "Công Ty Cổ Phần Techainer",
              "location": "",
              "salary": "20 - 29 triệu VNĐ",
              "job_description": "Design, build, and maintain scalable, high-performance microservices that orchestrate autonomous agent workflows; Implement context management, memory retrieval, and streaming responses to support real-time conversational agents; Leverage LangGraph to define dynamic, graph-based LLM pipelines; Develop robust infrastructure to automate model training, versioning, testing, and deployment; Implement continuous integration, canary releases, blue-green deployments, and rollback strategies; Partner with Product Managers, Business Analysts, and AI Researchers to translate novel agent architectures into production-ready services; Communicate design trade-offs, performance benchmarks, and roadmap items.",
              "job_requirements": "2+ years building backend services for ML/AI products (Chatbot, AI Agent, or Computer Vision); Hands-on Python expertise in production; Deep familiarity with at least one LLM framework (e.g., Hugging Face Transformers, OpenAI API); Proven ability to architect prompt management, session/state persistence, fallback strategies, and safe-completion policies; LangGraph Expertise: Demonstrable track record designing and deploying LangGraph pipelines for multi-stage conversational or agent workflows; Strong understanding of data structures, algorithms, network I/O, concurrency models, and distributed systems; Experience with containerized, low-latency services using Kubernetes, Docker, and gRPC/REST; Competence in unit/integration testing, version control (Git), code reviews, and common design patterns",
              "benefits": "Young, dynamic, creative and comfortable working environment; 13th month salary, Bonus twice a year up to 05 months; Performance evaluation once/year; Lunch allowance; 12 days’ annual leave/year; Great opportunities to get self promotion and recognitions coming from member’s contributions; Receive training sessions on skill development, business knowledge, etc...; Birthday party & personalised gifts",
              "date_posted": "2025-05-19",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 22,
              "raw_job_id": 198,
              "job_title": "AI Engineer",
              "seniority": "Senior",
              "company": "VINBIGDATA",
              "location": null,
              "salary": null,
              "job_description": "Develop optimal models and algorithms in the field of natural language processing (NLP). Build and implement effective solutions for products applying NLP technologies.",
              "job_requirements": "Bachelor's degree in Information Technology, Computer Science, or equivalent. At least 2 years of experience in NLP.  Proficient in Python, Java, C++, and machine learning/deep learning platforms like Scikit-learn, PyTorch, and TensorFlow. Excellent English skills.",
              "benefits": "Full insurance coverage according to the Labor Law (Social Insurance, Health Insurance, Unemployment Insurance).  Health insurance provided by the company.  Employee discounts on Vingroup services. 12 annual leave days. Laptop and other work equipment provided. Monthly lunch allowance. Company canteen with amenities. Mental health program. Company team-building activities and annual trips. Opportunities for professional development and training. Modern and comfortable office environment. Various clubs and activities.",
              "date_posted": "2025-05-19",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 23,
              "raw_job_id": 199,
              "job_title": "AI Prompt Engineer",
              "seniority": "Intern",
              "company": "Hyred APAC",
              "location": "Remote (Vietnam)",
              "salary": "VND 4,000,000 - 4,500,000/month",
              "job_description": "AI Prompt Engineer Intern who's passionate about visual storytelling through artificial intelligence.  The intern will work with design and content teams to generate high-quality images and videos using AI tools like Sora, Gemini Veo, Runway, and Firefly.",
              "job_requirements": "A student or recent graduate in Design, Computer Science, Media, or related fields. Familiarity with generative AI tools for visual content (e.g. Sora, Runway, Firefly, Midjourney, etc.).  Curious, experimental, and eager to learn and push creative boundaries. Strong English communication skills and ability to explain how different prompts yield different results. Bonus: Basic video editing or motion graphics knowledge.",
              "benefits": "Work remotely with a supportive and innovative team. Gain hands-on experience with cutting-edge AI tools. Build a unique portfolio of generative AI projects",
              "date_posted": "2025-05-30",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 24,
              "raw_job_id": 216,
              "job_title": "AI Engineer",
              "seniority": "",
              "company": "Công Ty TNHH Veriserve Việt Nam",
              "location": "",
              "salary": "Tối thiểu 13 tháng lương 1 năm,và các khoản thưởng vào các ngày lễ khác.\nThưởng giới thiệu ứng viên 20M – 40M/1 người tùy từng thời điểm.\nThưởng bằng cấp 5-20M/ 1 lần\nThưởng lễ tết 1tr/ 1 lần\nTiền ma chay, hiếu hỉ 2tr/1 người",
              "job_description": "The job description is not explicitly stated but it is implied that this is a position in a company with opportunities for professional growth, training, and international work experience.  The work environment is described as professional, young, dynamic, and fair.",
              "job_requirements": "The job requirements are not specified.",
              "benefits": "Thời gian làm việc linh hoạt 5 ngày/ tuần từ 7h30 đến 8h30 (nghỉ Thứ 7, Chủ Nhật).\nNghỉ trưa 1 tiếng\nThử việc 120% lương\nTham gia đầy đủ Bảo hiểm tuân thủ theo Luật Lao động hiện hành. (đóng full lương)\nBảo hiểm sức khỏe\nHỗ trợ ăn trưa\nKhám sức khỏe định kỳ hàng năm.\nTối thiểu 13 tháng lương 1 năm,và các khoản thưởng vào các ngày lễ khác.\nThưởng giới thiệu ứng viên 20M – 40M/1 người tùy từng thời điểm.\nThưởng bằng cấp 5-20M/ 1 lần\nThưởng lễ tết 1tr/ 1 lần\nTiền ma chay, hiếu hỉ 2tr/1 người\nĐánh giá tăng lương 2 lần/năm.\nTham gia các sự kiện ngoại khóa, hoạt động Team Building, Workshop, tiệc sinh nhật hàng tháng,...\nDu lịch 1 lần/năm trong nước hoặc nước ngoài.",
              "date_posted": "2025-05-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 26,
              "raw_job_id": 218,
              "job_title": "AI Engineer",
              "seniority": "",
              "company": "Oracle",
              "location": "",
              "salary": "",
              "job_description": "Provides presales technical / functional support to prospective clients and customers; acts as a technical resource for less experienced Sales Consultants; develops and delivers high-quality standard Oracle presentations and demonstrations; presents and articulates advanced product features and benefits, product future direction and overall Oracle solutions; designs, validates, and presents Oracle software solutions; develops and manages reference sites.",
              "job_requirements": "Some years of experience working with AI infrastructure and workloads, as well as data platforms. Proficiency in both On Premises and Cloud environments preferred.",
              "benefits": "Competitive benefits based on parity and consistency and support our people with flexible medical, life insurance, and retirement options. We also encourage employees to give back to their communities through our volunteer programs.",
              "date_posted": "2025-05-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 27,
              "raw_job_id": 219,
              "job_title": "Singapore, Ho Chi Minh•Hybrid",
              "seniority": "",
              "company": "Ascenda",
              "location": "Vietnam or Singapore",
              "salary": "",
              "job_description": "Senior DevOps Engineer for Data & ML Infrastructure. This role involves designing, building, and maintaining scalable infrastructure for data pipelines and machine learning workflows; implementing SRE practices; managing ML workflows; building CI/CD pipelines; improving automation and observability; empowering data teams; and partnering on tool evaluations.",
              "job_requirements": "Strong knowledge in DevOps engineering with focus on Linux-based cloud infrastructure (AWS); proficiency with infrastructure-as-code and automation tools (Terraform, Kubernetes, Helm, Ansible, CI/CD); hands-on experience building and operating AI/ML infrastructure; solid understanding of SRE principles; experience with monitoring, observability, and incident management; good DevOps scripting automation skills (Python, Ruby, Bash); excellent communication and collaboration skills; problem-solving skills; experience with DataOps infrastructure (Airflow or Argo Workflows, AWS Redshift, ETL/ELT pipelines) and MLOps best practices is a plus.",
              "benefits": "Competitive compensation package; unparalleled career growth opportunities; supportive and dynamic environment.",
              "date_posted": "2025-06-02",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 28,
              "raw_job_id": 220,
              "job_title": "Machine Learning Engineer",
              "seniority": "Senior",
              "company": "our Hiring Partner",
              "location": "",
              "salary": "",
              "job_description": "Spearhead the creation of cutting-edge AI and machine learning applications for finance, focusing on portfolio optimization, forecasting, and risk management.  Involves end-to-end development of innovative models, ensuring projects meet stakeholder expectations and timelines.",
              "job_requirements": "Advanced degree in a relevant field (Computer Science, Data Science, etc.)\n5+ years of hands-on experience in AI/ML, with demonstrable model deployment in production environments.\nExperience in the financial sector (time series forecasting, portfolio optimization, quantitative analysis).\nProficiency in Python and experience with machine learning frameworks (PyTorch, scikit-learn).\nExperience with data architecture, big data technologies, and cloud platforms (AWS, GCP, or Azure).\nKnowledge of financial analytics, risk modeling, quantitative finance methodologies, LLMs, convex optimization techniques, and financial econometrics.",
              "benefits": "Collaborative and inclusive corporate culture\nOpportunities for professional growth and career progression\nFlexible working options",
              "date_posted": "2025-05-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 29,
              "raw_job_id": 221,
              "job_title": "E-Banking Application Development Manager",
              "seniority": "Deputy",
              "company": "HDBank",
              "location": "",
              "salary": "Thưởng 13,14\nThưởng theo xếp loại",
              "job_description": "Ensure the electronic banking application system operates safely, stably, and efficiently, meeting the goals and development strategy of HDBank. Ensure that electronic banking application development projects meet quality and progress requirements.",
              "job_requirements": "Bachelor's degree or higher in IT or related fields. At least 5 years of experience in Machine Learning & Deep Learning (Computer Vision, OCR, face recognition, EKYC authentication), Python programming, big data handling, AI frameworks (TensorFlow, PyTorch), image processing (OpenCV, Pillow), and model deployment. At least 2 years of management experience. Deep understanding of IT systems in banking. Strong skills in system organization, performance evaluation, negotiation, decision-making, personnel management, and change management.  High compliance, calmness, integrity, self-confidence, creativity, and result-orientation.",
              "benefits": "13th and 14th-month bonuses, performance-based bonuses, health insurance, accident insurance, annual vacation",
              "date_posted": "2025-06-12",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 30,
              "raw_job_id": 222,
              "job_title": "AI Data Science Expert",
              "seniority": "",
              "company": "PNJ",
              "location": "",
              "salary": "",
              "job_description": "Build AI/ML models to optimize customer experience, personalize journeys, and maximize value from the customer base.  Design modern customer data measurement systems for data-driven marketing, operations, and product development.  Develop AI/ML models for customer segmentation, churn prediction, and marketing optimization. Design robust customer data and measurement systems, including metrics frameworks and scoring models.  Innovate with GenAI applications to enhance customer experience and extract insights from unstructured data.",
              "job_requirements": "Bachelor's degree in Data Science, Statistics, Computer Science, or related field. 5+ years of hands-on Data Science experience focused on customer-centric problems. Proven track record of deploying various ML models (segmentation, churn prediction, recommendation systems, etc.). Experience building customer measurement systems. Understanding of marketing automation systems, CRM, and DMP/CDP platforms. Proficiency in Python, SQL, and ML libraries. Experience building data pipelines and deploying models. Familiarity with GenAI architecture is a plus. Strategic thinking, self-starter, curious and business-minded.",
              "benefits": "",
              "date_posted": "2025-06-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 31,
              "raw_job_id": 223,
              "job_title": "Python AI Developer",
              "seniority": "",
              "company": "HONGTHAI Technical",
              "location": "",
              "salary": "",
              "job_description": "Develop Generative AI applications using cutting-edge technologies like ComfyUI, LLMs, RAG, and deep model training.  Responsibilities include designing data processing pipelines, integrating LLMs, building RAG systems, training models, optimizing performance, collaborating with product teams, and contributing to documentation.",
              "job_requirements": "Minimum 2 years of Python development experience in AI/ML; Proficiency with ComfyUI; Experience with open-source LLMs or APIs; Strong knowledge of RAG architecture and vector databases; Skill in training and fine-tuning NLP/vision models using PyTorch/Transformers; Experience deploying models via Docker, APIs, or frontends; Good English reading comprehension.",
              "benefits": "Creative, open-source-friendly environment; Work on real commercial AI projects; Support for equipment, GPU server costs, and technical documentation; Performance-based bonuses.",
              "date_posted": "2025-05-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 32,
              "raw_job_id": 236,
              "job_title": "AI Lead",
              "seniority": "Lead",
              "company": "Báo Điện Tử VnExpress",
              "location": null,
              "salary": "Thỏa thuận",
              "job_description": "Lead the AI/ML R&D strategy, build and lead an AI Lab team (4-5 members), define project objectives and outcomes, design AI/ML architecture for key products, integrate AI solutions into products and services (especially Generative AI), ensure solution quality and efficiency, deploy scalable AI systems, collaborate with other departments, monitor AI program performance, and cooperate with research and technology partners.",
              "job_requirements": "Bachelor's/Master's degree in Computer Science, Statistics, Data Science, AI, Machine Learning, or related fields; 4-5+ years of AI experience; team management experience (leading at least 3 AI engineers); experience in developing AI solutions (especially Generative AI); expertise in NLP, Computer Vision, and Recommendation Systems; experience integrating AI into products and services; experience building and scaling AI products/services in production; experience with modern ML frameworks (PyTorch, TensorFlow, Hugging Face...); creative thinking to develop AI models; fluent English.",
              "benefits": "Work at FPT (Top 100 companies with the best working environment); competitive salary; 13th-month bonus; VnExpress birthday bonus (1/2 month); performance-based bonus; annual leave (4-6 million VND/year); meal, gas, and phone allowance (1.2-1.5 million VND/month); clothing allowance (5 million VND/year); laptop; high-quality healthcare for employees and family; English, professional, and skill enhancement training; team-building activities; work from Monday to Friday and Saturday morning (remote)",
              "date_posted": "2025-06-04",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 33,
              "raw_job_id": 237,
              "job_title": "Data Scientist",
              "seniority": "",
              "company": "Deliveree On-Demand Logistics",
              "location": "REGIONAL COMPANY",
              "salary": "Competitive compensation & Benefits\n13th Month Salary",
              "job_description": "Develop and implement machine learning, deep learning, and LLM-based solutions to address complex logistic challenges. Handle and analyze large datasets. Collaborate across various AI subfields, including tabular data, NLP, and MLOps.  Translate complex data into actionable insights. Contribute to the development and infrastructure of AI projects. Work on the entire AI project lifecycle. Proactively propose solutions, conduct independent research.",
              "job_requirements": "Bachelor’s degree in any field, preferably with a combination of software engineering and statistical/mathematical skills. 2+ years of experience in a Data Scientist or similar role. Strong proficiency in machine learning, deep learning, and LLMs. Familiarity with various AI subfields (tabular data, NLP, MLOps). Comprehensive understanding of the AI project lifecycle. Self-driven and capable of independent work. Detail-oriented with a natural intuition for data. Strong analytical and data-driven mindset. Basic knowledge of data warehouses, databases, ETL/ELT, and SQL. Excellent presentation and communication skills. Genuine curiosity and enthusiasm for applying algorithms to solve problems. Strong affinity for AI. High motivation and a growth mindset to overcome challenges. Comfortable working in a dynamic and fast-paced professional environment.",
              "benefits": "International Working Environment\nStronger Career Path /Learning latest technologies\nOpportunities for onsite trip in our operating markets.\nFlexible Working Hour and location (2 days/month)\nSupport Meal Allowance\nFree Flow of Coffee and Drinks\nEvery Month Special Snack & Beers\nFree Late Dinner Menu from near restaurant\nLoyalty Bonus Package\n13th Month Salary\nAnnual Health Checkup\n100% Insurance According To Labor Law\nPremium Healthcare Insurance Package\n15 Days Paid Annual Leave\nMonthly Technical Sharing\nDevelop Personalized Career Path\nWelcome Kit From Deliveree\nWelcome Gift Funky Toy\nRegular Team Social Events (Quarterly Company Parties)\nSocial Club activities\nCool Entertainment Area (Guitar, Video Games, ...)",
              "date_posted": "2025-05-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 34,
              "raw_job_id": 238,
              "job_title": "AI Developer",
              "seniority": "",
              "company": "Công Ty TNHH Thương Mại Dịch Vụ Kết Nối Năng Động",
              "location": "",
              "salary": "",
              "job_description": "Design, develop, and deploy machine learning and deep learning models for practical applications; research and integrate AI solutions into the company's systems, including AI agents, chatbots, or automation systems; collect, process, and clean data to ensure quality input for machine learning models; analyze and optimize the performance of AI models, improving accuracy and processing speed; deploy AI models to production environments and monitor post-deployment performance; collaborate with other departments to identify problems where AI can be applied; and research the latest AI technologies for application in the company's products and services.",
              "job_requirements": "University degree in Computer Science, Information Technology, Applied Mathematics, or a related field; experience in AI or machine learning; proficiency in at least one programming language: Python, R, or Java; experience working with AI/ML libraries and frameworks such as TensorFlow, PyTorch, Scikit-learn, or Keras; in-depth understanding of machine learning algorithms (supervised, unsupervised, reinforcement learning) and deep neural networks (CNN, RNN, Transformer); experience working with large databases and data processing (SQL, NoSQL, or Big Data frameworks such as Spark); understanding of DevOps for AI (MLOps) is an advantage; logical thinking, problem-solving skills, and teamwork; good English for research and communication.",
              "benefits": "Opportunity to work on real-world AI projects and participate in advanced technology workshops; dynamic and creative work environment with a team of leading experts; performance-based bonuses and other company benefits; support for advanced professional training and participation in AI-related courses/certifications.",
              "date_posted": "2025-05-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 35,
              "raw_job_id": 243,
              "job_title": "Lập Trình Viên Tích Hợp AI (AI Integration Dev)",
              "seniority": "",
              "company": "Công Ty TNHH Phần Mềm Alliance",
              "location": "",
              "salary": "Thỏa thuận",
              "job_description": "Research and integrate AI tools into software projects using existing AI services like OpenAI, AWS AI, Azure AI, and Google AI.  Responsibilities include researching and selecting AI tools, integrating AI APIs into backend systems, optimizing AI service performance, collaborating with frontend developers, ensuring security and efficiency, and staying updated on AI trends.",
              "job_requirements": "Graduated or about to graduate in IT; Good programming skills (Google App Script, C#, asp.net mvc API preferred); Understanding of RESTful API, JSON, WebSocket, and HTTP protocols.  Preferred: Debugging and code optimization skills; Experience with AI APIs like OpenAI, AWS AI, Azure AI, Google AI, Hugging Face; Experience with AI services like ChatGPT, Bard, Claude, or text-to-image models; Understanding of microservices, Docker, and Kubernetes; Good English skills.",
              "benefits": "13th-month salary; Annual trip (usually in April); Project-based bonuses; Young and collaborative work environment; Many leads to share knowledge and grow together; Projects to help everyone develop.",
              "date_posted": "2025-05-19",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 36,
              "raw_job_id": 244,
              "job_title": "Backend Engineer (Python)",
              "seniority": "Senior",
              "company": "Employment Hero",
              "location": "Vietnam",
              "salary": null,
              "job_description": "Senior Backend Engineer responsible for building and deploying innovative features, working with machine learning infrastructure, collaborating with cross-functional teams, optimizing existing infrastructure, working on data ingestion and processing, implementing monitoring and logging solutions, staying informed about industry trends, and mentoring junior engineers.",
              "job_requirements": "Strong expertise in Python and its frameworks (e.g., Django, Flask), good understanding of database concepts and experience with relational databases, experience in developing software using microservices or SOA architecture on public clouds (preferably AWS), experience with containerization and orchestration technologies (Docker, Kubernetes), excellent problem-solving skills, understanding of software design patterns, quality coding practices (test-driven development, unit testing, secure coding), experience with Agile methodologies, experience mentoring team members or leading a squad, English language abilities.  A Bachelor's degree in Computer Science or a related field is preferred; a Master's degree is a plus. Experience in functional programming and familiarity with AWS tooling are also beneficial.",
              "benefits": "Generous home office budget, cutting-edge tools and technology, 20 days annual leave plus VN public holidays, $500 USD for professional development, $500 USD for English learning courses, premium healthcare insurance for employee and loved ones, full gross salary paid social insurance, sports club funded by Employment Hero, monthly get-together with lunch budget, reward and recognition programs, employee share option program, annual global gathering.",
              "date_posted": "2025-05-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 37,
              "raw_job_id": 245,
              "job_title": "Data Science Manager",
              "seniority": "Senior",
              "company": "GreenFeed",
              "location": "",
              "salary": "",
              "job_description": "Develop, train, and optimize deep learning models for computer vision tasks such as object detection, segmentation, and image classification. Build scalable pipelines for real-time image and video data processing.  Analyze large-scale datasets and leverage various learning techniques. Research and implement state-of-the-art architectures. Collaborate with cross-functional teams and present findings to stakeholders. Deploy and monitor models on cloud platforms or edge devices.",
              "job_requirements": "Bachelor’s or higher degree in a related field. 3-5+ years of experience applying computer vision techniques. Hands-on experience with large datasets, image processing libraries, and deep learning frameworks. Strong programming skills in Python and proficiency in TensorFlow, PyTorch, or OpenCV. Experience with image and video annotation tools and cloud platforms. Knowledge of MLOps tools and algorithm optimization techniques. Strong problem-solving and communication skills. Collaborative mindset.",
              "benefits": "",
              "date_posted": "2025-05-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 38,
              "raw_job_id": 246,
              "job_title": "AI Consultant",
              "seniority": "Lead",
              "company": "NFQ Asia",
              "location": "Vietnam (Ho Chi Minh, Da Nang, Ha Noi & Can Tho)",
              "salary": "Competitive Compensation",
              "job_description": "AI Consulting Lead to drive client engagements and shape the future of AI offerings.  Translate business goals into actionable AI strategies, design tailored AI solutions, act as a trusted advisor, lead pre-sales activities, and stay ahead of emerging trends in AI/ML.",
              "job_requirements": "5+ years of experience in AI, Data, and Technology Consulting; demonstrated ability to engage and influence C-suite stakeholders; proven track record designing and delivering AI/ML solutions; hands-on experience with Python and relevant AI/ML frameworks; strong strategic thinking; excellent communication skills; entrepreneurial mindset; fluent in English.",
              "benefits": "Competitive Compensation, performance-based bonuses, benefits package, Laptop, Community Tech activities, fun & dynamic environment, modern office, 13th-month salary (pro-rata), performance review twice yearly, Premium Healthcare & Annual Health-check, 15 days annual leave",
              "date_posted": "2025-05-20",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 39,
              "raw_job_id": 247,
              "job_title": "Data Scientist",
              "seniority": "Senior",
              "company": "MTI Technology Co., Ltd",
              "location": "",
              "salary": "",
              "job_description": "The job description includes two experience levels: Middle and Senior.  Both require strong programming skills in Python, expertise in machine learning, and experience with NLP.  The Senior role adds requirements for experience leading teams, production-level code, and expertise in MLOps and scalable model deployment. Both roles require familiarity with GCP and LLMs.",
              "job_requirements": "Middle:\n• Fluent in English\n• Bachelor’s degree in CS, Applied Mathematics, or related field\n• 3-5 years of experience in Data Science/Analytics/Computer Vision/NLP\n• Advanced Python skills (Pandas, NumPy, Scikit-learn)\n• Proficient in GitHub/GitLab, SQL, and visualization (Seaborn, Tableau)\n• Strong ML expertise (random forests, gradient boosting) and evaluation metrics\n• Skilled in tabular data feature engineering (XGBoost, CatBoost)\n• Proficient in NLP (sentiment analysis) using NLTK/spaCy/Transformers\n• Experienced in fine-tuning LLMs (BERT) and model serving (Flask, FastAPI, Docker)\n• Familiar with GCP (BigQuery, Vertex AI) and APIs for ChatGPT/Gemini tasks\n• Excellent problem-solving skills\n• Self-motivated and eager to learn\n• Able to collaborate and present technical information\nSenior:\n• Fluent in English\n• Bachelor’s degree in CS, Applied Mathematics, or related field\n• 5+ years of industrial experience in NLP and/or Machine Learning (tabular data)\n• Expert in Python with production-ready code\n• Advanced skills in GitHub/GitLab, SQL, and data visualization\n• Proven ML expertise (ensemble methods, deep learning) using TensorFlow/PyTorch\n• Mastery of tabular data (XGBoost, PCA) and NLP (transformers, sequence modeling)\n• Skilled in training/serving custom LLMs (GPT) with TensorFlow Serving, FastAPI, Docker/Kubernetes\n• Expert in GCP (BigQuery, Vertex AI) for scalable model deployment/monitoring\n• Proficient in using ChatGPT/Gemini for advanced applications with prompt optimization\n• Experienced in MLOps and solution design\n• Excellent problem-solving skills\n• Self-motivated and eager to learn\n• Good communication and presentation skills\n• Experience leading data science teams",
              "benefits": "",
              "date_posted": "2025-05-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 40,
              "raw_job_id": 266,
              "job_title": "PHP engineer",
              "seniority": "",
              "company": "SotaTek JSC",
              "location": "",
              "salary": "",
              "job_description": "Develop a chatbot platform using PHP and AngularJS for a Japanese AI client.  Work on other projects as assigned, implement designs, write unit tests, directly communicate with the client to clarify requirements, and utilize new AI/Big Data technologies. Onsite overseas opportunities available for candidates with N2 Japanese proficiency or higher.",
              "job_requirements": "PHP and AngularJS development experience.  Ability to understand design documents and implement them. Unit testing skills. Direct client communication skills.  N2 Japanese level (or equivalent) for overseas opportunities.",
              "benefits": "Opportunities to work onsite overseas and with the newest AI/Big Data technologies.",
              "date_posted": "2025-06-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 41,
              "raw_job_id": 324,
              "job_title": "Service Reliability Engineer",
              "seniority": "",
              "company": "Jobgether",
              "location": "Singapore, Philippines, Vietnam, India, or Malaysia",
              "salary": "Competitive salary and performance bonuses",
              "job_description": "Ensure the stability, performance, and scalability of the company’s systems and services. Serve as the highest level of technical escalation within the support team, working closely with product, tech, and data teams to resolve complex issues. Provide technical support, troubleshooting, resolving system issues, and contributing to continuous improvement efforts.",
              "job_requirements": "A strong academic foundation, ideally from reputable universities. At least 5 years of experience as a Software Engineer with a proven track record of resolving complex system issues. Familiarity with JavaScript tech stack (Node, NestJS, React, Vue) and experience working with MongoDB, PostgreSQL, and MySQL. Expertise in working with cloud platforms such as AWS and proficiency in Bitbucket and GitHub (CI/CD processes). Strong analytical skills and attention to detail with the ability to diagnose and solve complex technical problems. Experience in providing customer-facing technical support and exhibiting customer attentiveness. Proficiency in reading logs, especially using tools like Splunk, and an understanding of load testing tools. A collaborative mindset, with the ability to work effectively in cross-functional teams and drive outcomes in a fast-paced environment.",
              "benefits": "Flexible remote/hybrid work arrangements, Competitive salary and performance bonuses, Generous paid time off and holidays, Health and wellness benefits, Professional development opportunities, Employee stock options and profit-sharing, Access to an inclusive and diverse work culture with a focus on work-life balance",
              "date_posted": "2025-05-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 42,
              "raw_job_id": 325,
              "job_title": "Associate, AI-Powered Product Analysis and Ops",
              "seniority": "Senior",
              "company": "Renn Labs",
              "location": "Vietnam",
              "salary": "",
              "job_description": "Conducting market research, testing product features, analyzing user behavior, translating business needs into technical requirements, facilitating requirement-gathering sessions, collaborating with teams to optimize processes, tracking product roadmap progress, presenting findings, collaborating with Product Managers to define product roadmap, staying updated on industry trends.",
              "job_requirements": "Bachelor’s degree in Computer Science, Business, Data Analytics, or a related field, or equivalent practical experience. Above 3 years of experience as Product Analyst, Business Analyst, Product Owner, Project Coordinator, Product Operations etc. Experience gathering, analyzing, researching, documenting, and translating business needs into technical solutions. Knowledge of UX design principles and tools. Proficiency with analytics tools and A/B testing methods. Experience working in Agile frameworks. Strong analytical thinking, problem-solving skills. Excellent communication and interpersonal skills. Ability to handle multiple projects simultaneously. Eagerness to learn.",
              "benefits": "Work on cutting-edge AI projects, collaborate with a global team, work on transformative initiatives, partner with leading innovators, receive rewards that recognize your expertise.",
              "date_posted": "2025-05-15",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 43,
              "raw_job_id": 326,
              "job_title": "Backend Software Engineer",
              "seniority": "",
              "company": "Upskills",
              "location": "Singapore",
              "salary": "",
              "job_description": "Backend Developer responsible for designing, developing, and maintaining backend infrastructure of AI-driven software applications.  Collaborate with cross-functional teams to deliver scalable and performant systems using NodeJS or Python.  Optimize application performance, conduct code reviews, and promote DevOps best practices.",
              "job_requirements": "Master's/Bachelor's degree in IT, Computer Science, or related field; 2-3 years of backend development experience (NodeJS, Python, or Java); experience with RESTful APIs and/or GraphQL; proficiency in cloud services (AWS, Azure, or GCP); knowledge of data dictionaries, templates, workflows; familiarity with CI/CD, Docker, and Kubernetes; extensive experience with backend development and architecture; understanding of cross-browser compatibility; proficient in GIT; strong debugging and problem-solving skills; startup spirit; good English communication; ability to work independently.",
              "benefits": "",
              "date_posted": "2025-06-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 44,
              "raw_job_id": 327,
              "job_title": "Quality Engineer",
              "seniority": "Senior",
              "company": "Katalon",
              "location": "",
              "salary": "competitive compensation and periodic performance bonuses",
              "job_description": "Senior Quality Engineer to help deliver high-quality software while contributing to the development and enhancement of the Quality Platform. Collaborate with fellow engineers and product teams to ensure the platform meets the highest standards of software quality. Work with advanced testing techniques to assess and improve the quality of the platform. Provide expertise on quality engineering while supporting the overall success of the product.",
              "job_requirements": "Strong understanding of Test methodologies and principles; 2+ years of hands-on experience with automation tools such as Katalon, Cypress, or Playwright; Experience with object-oriented programming (OOP) and proficiency in programming languages (Groovy, Java); Practical experience with mobile testing and API testing; Familiarity with automated build/deployment pipelines (e.g., Jenkins, Circle CI, GitHub Action, Azure Pipelines); Experience in Agile Teams (Scrum, SAFe framework); Strong multitasking abilities and adaptability to fast-paced environments; Experience supporting testability, defining acceptance criteria, and collaborating on non-functional requirements; Proficient in English communication and presentation skills.",
              "benefits": "Total Remuneration: Satisfying your financial goals through competitive compensation and periodic performance bonuses. Well-being & Work-life Balance: Staying healthy through comprehensive health plans and generous paid leaves. Statutory Compliance: Labor compliance with local regulations that ensure employee security. Work Facilities & Accommodation: Top-notch equipment, supportive allowances, and A-class facilities. Diversity, Equity, Engagement, & Inclusion: Becoming part of a global team that celebrates differences, equal opportunity, and meaningful employee recognition. Growth & Rewards: Thriving professionally through employee enablement, a culture of trust, and rewarding performance.",
              "date_posted": "2025-05-20",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 45,
              "raw_job_id": 267,
              "job_title": "LLM Engineer",
              "seniority": "Junior",
              "company": "N/A",
              "location": "Hà Nội, Tầng 4 - Tòa nhà Lebuiding số 342 đường Mỹ Đình, Phường Mỹ Đình 1, Nam Từ Liêm",
              "salary": "10 - 25 triệu",
              "job_description": "Design, implement, and operate applications using large language models (LLM). Build LLM-based interactive systems. Apply and integrate prompt engineering techniques. Optimize model infrastructure and ensure system stability and efficiency.",
              "job_requirements": "University degree in IT or related fields. 1-2 years of experience in AI/ML, preferably NLP, Information Retrieval or LLMs. Proficiency in Python and libraries such as LangChain, LlamaIndex, Transformers. Experience deploying models/microservices with Docker, Git, CI/CD. Good knowledge of vector DBs, embedding models, tokenization, and prompting strategies. Ability to think logically, handle LLM errors (hallucination, latency, rate limit, etc.). Preference for candidates who have worked with backend systems or have knowledge of DevOps, APIs, and microservices.",
              "benefits": "Income up to 25 million VND/month, negotiable based on ability. Opportunity to work with leading experts and gain practical experience in AI/ML. Various bonuses: holidays, Tet, trade union, children, Mid-Autumn Festival. Young and dynamic working environment with supportive colleagues and flexible working arrangements. Vibrant internal culture: team building, vacations, happy hours, birthdays. Working time: Monday - Friday, weekends off. Opportunity to work on new technology projects: ERP, CRM, Banking, BigData/AI. Advanced training by lecturers from FPT University and University of Technology (UET). Full benefits: social insurance, regular health check-ups at major hospitals.",
              "date_posted": "2025-06-11",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 46,
              "raw_job_id": 268,
              "job_title": "Solution Support Engineer",
              "seniority": "Senior",
              "company": "SAP",
              "location": "Numerous Support Centers across the world",
              "salary": "",
              "job_description": "As a Technical Support Engineer, you are responsible for troubleshooting and driving the resolution of SAP product related issues. This entails actively engaging with all levels within the SAP teams and maintaining consistent, up-to-date communication with customers. Your role is pivotal in ensuring that SAP products are utilized smoothly and effectively by our customers.",
              "job_requirements": "7+ years working experience within IT industry in similar job position, Fluent in oral and written English (Japanese speaking is a plus), Demonstrates strong technical knowledge on SAP ABAP, skilled in debugging ABAP code to quickly identify and resolve issues, Bachelor’s or master’s degree (preferred in computer science or engineering), Role-Specific Skills: Troubleshooting, Product Thinking, Knowledge Management, Relationship Building, Generative AI Day-To-Day Practice, Critical Thinking, etc., Professional Skills: Learning Agility, Emotional Intelligence, Effective Communication, Diversity Awareness, Customer Focus, Creative Thinking, Complex Problem Solving, and Collaboration., Strong team player who learns and adapts quickly, With knowledge for SAP S/4HANA product (Financials Controlling, Sales and Sourcing & Procurement) is plus",
              "benefits": "We offer a highly collaborative, caring team environment with a strong focus on learning and development, recognition for your individual contributions, and a variety of benefit options for you to choose from",
              "date_posted": "2025-05-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 47,
              "raw_job_id": 275,
              "job_title": "Solution Support Engineer",
              "seniority": "Associate",
              "company": "SAP",
              "location": null,
              "salary": null,
              "job_description": "As a Technical Support Engineer, you will troubleshoot and resolve issues related to SAP products. You will work with internal teams and customers, ensuring smooth product usage.  Responsibilities include offering technical solutions, documenting solutions and best practices, collaborating with internal teams, and providing feedback to product development.",
              "job_requirements": "Fluent in oral and written English (Japanese speaking is a plus)\nBachelor’s or master’s degree (preferred in computer science or engineering)\nTroubleshooting, Product Thinking, Knowledge Management, Relationship Building, Generative AI Day-To-Day Practice, Critical Thinking\nLearning Agility, Emotional Intelligence, Effective Communication, Diversity Awareness, Customer Focus, Creative Thinking, Complex Problem Solving, and Collaboration\nStrong team player who learns and adapts quickly",
              "benefits": "We offer a highly collaborative, caring team environment with a strong focus on learning and development, recognition for your individual contributions, and a variety of benefit options for you to choose from. SAP’s culture of inclusion, focus on health and well-being, and flexible working models help ensure that everyone – regardless of background – feels included and can run at their best.",
              "date_posted": "2025-06-12",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 48,
              "raw_job_id": 276,
              "job_title": ".NET Software Engineer",
              "seniority": "Senior",
              "company": "Employment Hero",
              "location": "Remote",
              "salary": "",
              "job_description": "Senior .NET Engineer to join the Payroll team to scale products and features and solve technical challenges.  Responsibilities include end-to-end development for .NET applications, implementing improvements, debugging and testing code, recommending process improvements, performing peer reviews, maintaining documentation, and conducting training sessions.",
              "job_requirements": "Extensive experience as a .NET or .NET Core developer with C#; Experience with SQL Server; Experience with agile methodologies and test-driven development; Strong communication and collaboration skills; Knowledge of NHibernate or similar, NUnit/XUnit, Castle Windsor or similar, and Knockout or similar JavaScript framework.  Payroll domain experience and AWS Cloud exposure are a plus.",
              "benefits": "Remote work flexibility; Access to cutting-edge tools; Ambitious colleagues; ESOP (employee share options); Generous paternity leave; Subsidized egg freezing; WFH office expense budget; Outstanding learning & development opportunities",
              "date_posted": "2025-06-08",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 120,
              "raw_job_id": 255,
              "job_title": "Fullstack Engineer",
              "seniority": "Senior",
              "company": "Freec",
              "location": "Hà Nội",
              "salary": "Đang cập nhật",
              "job_description": "Senior Fullstack Engineer to lead the development of the UI for a next-generation AI & Web3 indexing platform.  100% remote, contract-to-hire opportunity.  Focus on building seamless, user-centric experiences using Lit, Shoelace, Web Components, and Generative AI.",
              "job_requirements": "Hands-on expertise with Lit and Shoelace; Solid backend experience; Strong knowledge of JavaScript (ES6+), HTML5, CSS3, and modern web development best practices; Ability to work asynchronously across US and European time zones; High initiative and self-driven; 5+ years of fullstack experience with a strong emphasis on frontend development; Excellent communication skills and proficiency with Notion, Linear, Slack, and Zoom.",
              "benefits": "100% remote work;  Opportunity to join the core team; Modern tech stack; Work directly with the founding team; Fast-paced and transparent environment.",
              "date_posted": "2025-06-13",
              "model": "gemini-1.5-flash"
          },
          {
              "id": 49,
              "raw_job_id": 277,
              "job_title": "Supplier Development Engineer, Packaging, Electronic Product Manufacturing",
              "seniority": "Senior",
              "company": "Google",
              "location": null,
              "salary": null,
              "job_description": "Supplier Development Engineer responsible for ensuring high-quality manufacturing and delivery of packaging components for Google devices. This role involves technical program management, process engineering, quality engineering, and collaboration with external suppliers throughout the product lifecycle. Responsibilities include supplier management, sourcing, quality oversight, and collaboration with cross-functional teams.",
              "job_requirements": "Minimum qualifications: Bachelor's degree in Package Engineering, Materials or Process Engineering, or related field, or equivalent experience. 8 years of experience in manufacturing, quality, or packaging. Fluency in English and Mandarin. Preferred qualifications: 3 years of experience as Senior Supplier Development Engineer or equivalent. Knowledge of printed retail packaging manufacturing processes and design, retail electronic device packaging manufacturing quality control. Ability to collaborate cross-functionally and cross-regionally. Excellent people management, troubleshooting, statistical process control, failure analysis, and program management skills.",
              "benefits": null,
              "date_posted": "2025-05-27",
              "model": "gemini-1.5-flash"
          }
      ]
        setJobs(data);
        if (data.length > 0) {
          setSelectedJob(data[0]);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Uncomment this line when API is ready
    fetchJobs();
    
    // For now, using static data
    if (jobs.length > 0) {
      setSelectedJob(jobs[0]);
    }
  }, []);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Update selected job to first job on new page
    const firstJobOnPage = jobs[indexOfFirstJob + ((pageNumber - 1) * itemsPerPage)];
    if (firstJobOnPage) {
      setSelectedJob(firstJobOnPage);
    }
    window.scrollTo(0, 0);
  };

  const handleSearch = (searchTerm, location) => {
    console.log("Searching with:", { searchTerm, location });
    // Implement search logic here
  };

  return (
    <div className="page-container">
      <SearchBar onSearch={handleSearch} />
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