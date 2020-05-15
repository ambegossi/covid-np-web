import React from "react"

import flag from '../../images/flag.svg';

import {
  Cases, 
  Container, 
  CaseItem, 
  CaseNumber, 
  CaseText, 
  Flag, 
  FlagContent,
  FlagTitle,
  FlagDescription,
} from './styles';

const IndexPage = () => (
    <Container>
      <Cases>
        <CaseItem>
          <CaseNumber>16</CaseNumber>
          <CaseText>Casos confirmados</CaseText>
        </CaseItem>
        <CaseItem>
          <CaseNumber>04</CaseNumber>
          <CaseText>Casos curados</CaseText>
        </CaseItem>
        <CaseItem>
          <CaseNumber>03</CaseNumber>
          <CaseText>Casos em investigação</CaseText>
        </CaseItem>
        <CaseItem>
          <CaseNumber>45</CaseNumber>
          <CaseText>Casos descartados</CaseText>
        </CaseItem>
      </Cases>
      <Flag>
        <img src={flag} alt="Bandeira de distanciamento"/>
        <FlagContent>
          <FlagTitle>Bandeira laranja - Risco médio</FlagTitle>
          <FlagDescription>A região encontra-se em um dos dois cenários: 1- Média capacidade do sistema de saúde e 
            baixa propagação do vírus ou 2- Alta capacidade do sistema de saúde e média propagação do vírus.
          </FlagDescription>
        </FlagContent>
      </Flag>
      
      <a href="http://novaprata.rs.gov.br/">Decreto 8085/2020</a>

      <p>Proteja-se!</p>
      <p>#UseMáscara</p>
    </Container>
)

export default IndexPage
