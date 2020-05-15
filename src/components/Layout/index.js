import React from "react"
import PropTypes from "prop-types"

import Header from '../Header';
import Footer from '../Footer';
import GlobalStyle from '../../styles/global';

import "./styles.css"

const Layout = ({ children }) => {
  return (
    <>  
        <GlobalStyle />
        <Header/>
        <main>{children}</main>
        <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
