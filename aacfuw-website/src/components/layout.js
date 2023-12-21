import React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/index.scss'

import * as layoutStyles from './layout.module.scss';

function Layout(props) {
  return (
    <div className={layoutStyles.layoutContainer}>
      <div className={layoutStyles.contentContainer}>
        <Header />
        <div className={layoutStyles.content}>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;