import React from "react";
import styled from "styled-components";

const Rightside = () => {
  const suggestions = [
    { name: "Folashade Marrgareth", occupation: "Data Scientist" },
    { name: "Sam Jackson", occupation: "Software Engineer" },
    { name: "George Armstrong", occupation: "Product Manager" },
    { name: "Michael Brown", occupation: "UX Designer" },
    { name: "Joshua Adeojo", occupation: "Data Analyst"},
    { name: "John Iyke", occupation: "Technical writer"},
    {name: "Anthony Smith", occupation: "Graphics Designer"}
  ];

  return (
    <Container>
      <Title>People You May Know</Title>
      {suggestions.map((person, index) => (
        <Suggestion key={index}>
          <SuggestionInfo>
            <Name>{person.name}</Name>
            <Occupation>{person.occupation}</Occupation>
          </SuggestionInfo>
          <FollowButton>Follow</FollowButton>
        </Suggestion>
      ))}
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  width: 20%;
`;

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Suggestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const SuggestionInfo = styled.div`
  flex-grow: 1;
`;

const Name = styled.div`
  font-weight: bold;
`;

const Occupation = styled.div`
  color: gray;
  font-size: 12px;
`;

const FollowButton = styled.button`
  background-color: #0a66c2;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #004182;
  }
`;

export default Rightside;