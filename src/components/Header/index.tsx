import React from 'react';

import { FaBars } from 'react-icons/fa';

import { Container, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>globofeed</Logo>
      <FaBars size={24} />
    </Container>
  );
};

export default Header;
