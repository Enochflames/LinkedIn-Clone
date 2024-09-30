import React from "react";
import styled from "styled-components";

const notifications = [
  {
    id: 1,
    content:
      "Suggested for you: While hiring a candidate, Recruiters be like: - Fresher with poor skillset...",
    time: "10h",
  },
  {
    id: 2,
    content:
      "Amb. Victory Ashaka posted: Super grateful to have been nominated as 'Young Person of the Year 2024'...",
    time: "12h",
  },
  {
    id: 3,
    content:
      "People are viewing Amb. Victory Ashaka’s post: First poetry performance at UNGA...",
    time: "19h",
  },
  {
    id: 4,
    content:
      "Learn more about Scholarship Abroad and discover other Pages you might be interested in...",
    time: "1d",
  },
  {
    id: 5,
    content:
      "View collaborative article in Strategy: Here's how you can strategically set career goals...",
    time: "1d",
  },
  {
    id: 6,
    content:
      "A post by an employee at CEX.IO is popular: We received out license for Spain and are looking for an MD...",
    time: "1d",
  },
  {
    id: 1,
    content:
      "Suggested for you: While hiring a candidate, Recruiters be like: - Fresher with poor skillset...",
    time: "10h",
  },
  {
    id: 1,
    content:
      "Suggested for you: While hiring a candidate, Recruiters be like: - Fresher with poor skillset...",
    time: "10h",
  },
  {
    id: 1,
    content:
      "Suggested for you: While hiring a candidate, Recruiters be like: - Fresher with poor skillset...",
    time: "10h",
  }
];

// Styled Components
const NotificationsContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  
`;

const NotificationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 55px 0px 0px 0px;
  border-bottom: 1px solid #ddd;
`;

const NotificationContent = styled.p`
  width: 85%;
  font-size: 14px;
  color: #333;
  margin: 0;
`;

const NotificationTime = styled.p`
  width: 10%;
  font-size: 12px;
  color: gray;
  text-align: right;
  margin: 0;
`;

const MoreOptionsButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: gray;
  cursor: pointer;
`;

// Main Component
const Notifications = () => {
  return (
    <NotificationsContainer>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id}>
          <NotificationContent>{notification.content}</NotificationContent>
          <NotificationTime>{notification.time}</NotificationTime>
          <MoreOptionsButton>•••</MoreOptionsButton>
        </NotificationItem>
      ))}
    </NotificationsContainer>
  );
};

export default Notifications;
