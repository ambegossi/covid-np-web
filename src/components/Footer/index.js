import React from 'react';

import logo from '../../images/logo-np-transparent.svg';

import {Container, Wrapper, Secretary, Copy } from './styles';

const Footer = () => {
  return (
    <>
    <Container>
      <Wrapper>
        <p>SERVIÇO DE VIGILÂNCIA EPIDEMIOLÓGICA</p>
        <Secretary>
          <img src={logo} alt="Nova Prata"/>
          <p>SECRETARIA MUNICIPAL DA SAÚDE</p>
        </Secretary>
        <p>COMITÊ MUNICIPAL DE ENFRENTAMENTO AO COVID-19</p>
      </Wrapper>
    </Container>
    <Copy>
      <p>Desenvolvido por ambegossi</p>
    </Copy>
    </>
  )
}

export default Footer;