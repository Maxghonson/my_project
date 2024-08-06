import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Name = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
`;

const Info = styled.p`
  color: #666;
`;

const AnimalCard = ({ name, speed, location, diet, lifespan }) => (
  <Card>
    <Name>{name}</Name>
    <Info><strong>Speed:</strong> {speed}</Info>
    <Info><strong>Location:</strong> {location}</Info>
    <Info><strong>Diet:</strong> {diet}</Info>
    <Info><strong>Lifespan:</strong> {lifespan}</Info>
  </Card>
);

export default AnimalCard;
