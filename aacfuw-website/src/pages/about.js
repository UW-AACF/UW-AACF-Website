import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

import Layout from '../components/layout'
import Head from '../components/head';
import * as aboutStyles from './about.module.scss'


export default function about() {
  return (
    <Layout>
      <Head title="About Us"/>

      <Container fluid className={aboutStyles.aboutPageBackground}>
        <div className={aboutStyles.aboutPageBackgroundOverlay}></div>
        <h1 className={aboutStyles.aboutUsTitle}>About Us</h1>
      </Container>

      <Container fluid className={aboutStyles.centerContainer}>
        <h2 className={aboutStyles.mediumText}>What Is AACF?</h2>
        <p className={aboutStyles.paragraphText}>
          Welcome to Asian American Christian Fellowship (AACF), a campus ministry under JEMS, a non-profit missions organization.
        </p>
        <p className={aboutStyles.paragraphText}>
          We are a Christian Fellowship at University of Washington - Seattle Campus.

          AACF has other fellowships in the other colleges within the country!

          Please continue reading to learn more about who we are and why we are.
        </p>
      </Container>

      <Container fluid className={aboutStyles.centerContainer}>
        <h2 className={aboutStyles.mediumText}>Our Mission</h2>
        <p className={aboutStyles.paragraphText}>
          The mission of AACF is to reach into the university and collegiate community, primarily to those who are Asian Pacific Americans, with the life-changing message of Jesus Christ. ​
        </p>
        <br/>
        <h2 className={aboutStyles.mediumText}>Vision Statement</h2>
        <p className={aboutStyles.paragraphText}>
          We are committed to <strong> making disciples by educating and equipping students in biblical foundations</strong>, Christian disciplines, and the development of spiritual gifts in order to prepare them for witness and service on the campus, in the local church, in the marketplace, and in world missions.
        </p>
        <p className={aboutStyles.paragraphText}>
          College students who come through the ministry of AACF are educated and equipped for witness and service to wherever God leads them. Our aim is to give them knowledge and experience to be salt and light (Matthew 5:13-16) to the communities where God has placed them and beyond. We do this by giving students opportunities to lead and serve. We deeply value student leadership and their initiative to creatively contextualize ministry on their campus. We give them a framework for campus ministry and they are encouraged to make it their own.
        </p>
        <p className={aboutStyles.paragraphText}>
          Our ministry specializes in reaching Asian Americans on the college campus. Our fellowships are open to all. You don't have to be Asian, American, or Christian to join our fellowship. We extend a humble invitation to any student who is searching for forgiveness and the grace of Jesus Christ.
        </p>
      </Container>

      <Container fluid className={aboutStyles.centerContainer}>
        {/* About/history info is from the aacf.org website*/}
        {/* Unsure if there is a better way to package the text? Seems messy having it all here in the <p> elements  -mm*/}
        <h2 className={aboutStyles.mediumText}>History</h2>
        <p className={aboutStyles.paragraphText}>
          AACF has been at University of Washington for 40 years and God has shown himself faithful in so many ways during that time. We are all about building community as well as developing strong Christ-centered leaders. Being a part of this ministry students get a chance to live out what it means to live as an active believer as well as one that takes ownership of their faith.
        </p>
        <p className={aboutStyles.paragraphText}>
          Since its birth on the UW campus in 1975, AACF UW has invested in the lives of over 1500 students, growing Christ followers and developing more than 240 student leaders passionate about loving God and loving others. Our alumni continue to be leaders making an impact for God on the campus as volunteer or paid campus ministers, in the local church as pastors or ministry leaders, in the work place as managers, teachers, health care professionals, etc., and in the world as career missionaries.
        </p>
        <br/>
        <a href="https://www.aacf.org/aacf-story/" target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" className='learnMoreButton'>Read More About Our Story</Button>
        </a>
        <br/>
      </Container>
    </Layout>
  )
}
