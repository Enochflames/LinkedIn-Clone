import React from 'react';
import styled from 'styled-components';

const Jobs = () => {
  // Job data example (you can fetch this data from an API or your state management)
  const jobData = [
    {
      title: 'Machine Learning Engineer',
      company: 'Nurovant AI',
      location: 'Lagos, Lagos State, Nigeria (Remote)',
      promoted: true,
      easyApply: true,
      match: false,
      posted: '3 days ago',
      companyLogo: '/images/company-logo.png',
    },
    {
      title: 'Software Developer C/C++ on MacOS',
      company: 'Eryk',
      location: 'Lagos, Lagos State, Nigeria (On-site)',
      promoted: true,
      easyApply: true,
      match: false,
      posted: '4 days ago',
      companyLogo: '/images/company-logo.png',
    },
    {
      title: 'Data Analyst',
      company: 'Princeps Credit Systems Limited',
      location: 'Nigeria (On-site)',
      promoted: false,
      easyApply: false,
      match: true,
      posted: '3 days ago',
      companyLogo: '/images/company-logo.png',
    },
  ];

  return (
    <JobsContainer>
      <Heading>Job picks for you</Heading>
      <Description>Based on your profile and search history</Description>

      {jobData.map((job, index) => (
        <JobCard key={index}>
          <JobDetails>
            <JobTitle>{job.title}</JobTitle>
            <CompanyName>{job.company}</CompanyName>
            <Location>{job.location}</Location>
            {job.promoted && <PromotedBadge>Promoted ·</PromotedBadge>}
            {job.easyApply && <EasyApplyBadge>Easy Apply</EasyApplyBadge>}
            {job.match && <MatchBadge>Your profile matches this job</MatchBadge>}
            <PostedDate>{job.posted}</PostedDate>
          </JobDetails>
          <CloseButton>✕</CloseButton>
        </JobCard>
      ))}
    </JobsContainer>
  );
};

const JobsContainer = styled.div`
  margin: 20px;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  color: #000;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #888;
  margin-bottom: 20px;
`;

const JobCard = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const JobDetails = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  font-size: 1.1rem;
  color: #0a66c2;
  margin: 0;
  margin-bottom: 5px;
  font-weight: 500;
`;

const CompanyName = styled.p`
  font-size: 0.875rem;
  color: #333;
  margin: 0;
  margin-bottom: 5px;
`;

const Location = styled.p`
  font-size: 0.875rem;
  color: #777;
  margin: 0;
  margin-bottom: 5px;
`;

const PromotedBadge = styled.span`
  font-size: 0.75rem;
  color: #888;
  margin-right: 5px;
`;

const EasyApplyBadge = styled.span`
  font-size: 0.75rem;
  color: #0a66c2;
`;

const MatchBadge = styled.div`
  font-size: 0.75rem;
  color: #6a6a6a;
  margin-top: 5px;
  padding-top: 5px;
  border-top: 1px solid #ddd;
`;

const PostedDate = styled.p`
  font-size: 0.75rem;
  color: #888;
  margin: 0;
  margin-top: 5px;
`;

const CloseButton = styled.div`
  font-size: 1.2rem;
  color: #888;
  cursor: pointer;
`;

export default Jobs;
