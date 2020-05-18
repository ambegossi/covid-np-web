import React from "react"

import { graphql } from 'gatsby';

import flag from "../images/flag.svg";
import Layout from "../components/Layout"
import SEO from "../components/seo"

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
} from '../styles/index/styles.js';

const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <SEO title="Início" lang="pt" />
          <Container>
        <Cases>
          <CaseItem>
            <CaseNumber>{data.confirmed}</CaseNumber>
            <CaseText>Casos confirmados</CaseText>
          </CaseItem>
          <CaseItem>
            <CaseNumber>{data.cured}</CaseNumber>
            <CaseText>Casos curados</CaseText>
          </CaseItem>
          <CaseItem>
            <CaseNumber>{data.investigation}</CaseNumber>
            <CaseText>Casos em investigação</CaseText>
          </CaseItem>
          <CaseItem>
            <CaseNumber>{data.discarded}</CaseNumber>
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

    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              confirmed
              cured
              investigation
              discarded
          }
        }
      }
    }
  }
}`