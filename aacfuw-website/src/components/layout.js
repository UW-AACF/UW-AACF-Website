import React from 'react'

import Footer from '../components/footer'
// import Header from '../components/header'
import '../styles/index.scss'

import * as layoutStyles from '../images/layout.module.scss';

function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.stickyFooter}>
        {/* <Header /> */}
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;