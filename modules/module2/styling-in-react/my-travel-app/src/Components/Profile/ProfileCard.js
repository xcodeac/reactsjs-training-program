import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 2px solid #ccd8e4;
    border-radius: 12px;
    padding: 20px;
    width: 250px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(25, 118, 210, 0.1);
    ${props => props.$active ? 'border-color: green;' : 'border-color: red;'};
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Name = styled.h2`
  margin: 0.5rem 0 0.25rem 0;
  font-size: 1.25rem;
`;

const Title = styled.p`
  margin: 0 0 1rem 0;
  color: #666;
`;

function ProfileCard({ name, title, image }) {

    const [active, setActive] = useState(false);

    return (
        <Container $active={active}>
            <Image src={image} alt={name} />
            <Name className='font-bold'>{name}</Name>
            <Title>{title}</Title>
            <h2 className='flex text-blue-500 font-bold underline'>Profile Card</h2>

            <button onClick={() => setActive(!active)}>
                {active ? 'Activated' : 'Deactivated'}
            </button>
        </Container>
    );
}

export default ProfileCard;
