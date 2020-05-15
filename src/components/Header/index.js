import React from 'react';

import logo from '../../images/logo-np.svg';

import {Container, Wrapper, Logo, Title, Right} from './styles';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src={logo} alt="Nova Prata" />
        </Logo>
        <Title>
          Covid-19 Nova Prata - RS
        </Title>
      <Right/>
      </Wrapper>
    </Container>
  )
}

export default Header;