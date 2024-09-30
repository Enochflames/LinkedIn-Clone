import React from "react";
import styled from "styled-components";

function Network() {
  const people = [
    {
      name: "Rabiu Ridwan",
      title: "Data Science | Data Analytics",
      university: "Olabisi Onabanjo University(O.O.U)",
      img: "/images/goody.jpg",
    },
    {
      name: "Abisola Gbadebo",
      title: "Data Analyst Professional",
      university: "Olabisi Onabanjo University(O.O.U)",
      img: "/images/goody.jpg",
    },
    {
      name: "Adesimisola Alogbo",
      title: "Data Analyst at Highbury College",
      university: "Olabisi Onabanjo University(O.O.U)",
      img: "/images/goody.jpg",
    },
    {
      name: "Adesimisola Alogbo",
      title: "Data Analyst at Highbury College",
      university: "Olabisi Onabanjo University(O.O.U)",
      img: "/images/goody.jpg",
    },
    {
      name: "Adesimisola Alogbo",
      title: "Data Analyst at Highbury College",
      university: "Olabisi Onabanjo University(O.O.U)",
      img: "/images/goody.jpg",
    },
    {
      name: "Adesimisola Alogbo",
      title: "Data Analyst at Highbury College",
      university: "Olabisi Onabanjo University(O.O.U)",
      img: "/images/goody.jpg",
    },
    {
      name: "Adesimisola Alogbo",
      title: "Data Analyst at Highbury College",
      university: "Olabisi Onabanjo University(O.O.U)",
      img: "/images/goody.jpg",
    },
    {
      name: "Adesimisola Alogbo",
      title: "Data Analyst at Highbury College",
      university: "Olabisi Onabanjo University(O.O.U)",
      img: "/images/goody.jpg",
    },
    {
      name: "Adesimisola Alogbo",
      title: "Data Analyst at Highbury College",
      university: "Olabisi Onabanjo University(O.O.U)",
      img: "/images/goody.jpg",
    },
    {
      name: "Adesimisola Alogbo",
      title: "Data Analyst at Highbury College",
      university: "Olabisi Onabanjo University(O.O.U)",
      img: "/images/goody.jpg",
    },
    {
      name: "Adesimisola Alogbo",
      title: "Data Analyst at Highbury College",
      university: "Olabisi Onabanjo University(O.O.U)",
      img: "/images/goody.jpg",
    },
    {
      name: "Adesimisola Alogbo",
      title: "Data Analyst at Highbury College",
      university: "Olabisi Onabanjo University(O.O.U)",
      img: "/images/goody.jpg",
    },
    // Add more people data as needed
  ];

  return (
    <Container>
      <Content>
        {people.map((person, index) => (
          <ProfileCard key={index}>
            <ProfileImage src={person.img} alt={person.name} />
            <Info>
              <Name>{person.name}</Name>
              <Title>{person.title}</Title>
              <University>{person.university}</University>
              <ConnectButton>+ Connect</ConnectButton>
            </Info>
          </ProfileCard>
        ))}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 10px 0px 90px;
  gap: 15px;
  background-color: #f3f2ef;
  padding-right: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProfileCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Info = styled.div`
  text-align: center;
`;

const Name = styled.h3`
  font-size: 16px;
  margin: 10px 0 5px;
`;

const Title = styled.p`
  font-size: 14px;
  color: gray;
`;

const University = styled.p`
  font-size: 12px;
  color: #666;
  margin-bottom: 15px;
`;

const ConnectButton = styled.button`
  background-color: #0a66c2;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #004182;
  }
`;

export default Network;
