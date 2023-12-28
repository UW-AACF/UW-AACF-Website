import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

import Head from '../components/head'


// import BackgroundImage from 'gatsby-background-image'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import aacfLogo from '../images/about/aacf_logo.png'

import * as aboutStyles from './about.module.scss'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {category: {eq: "about"}}}) {
                edges {
                    node {
                        frontmatter {
                            fall
                            spring
                            winter
                            theme
                            verse
                            fallWords
                            winterWords
                            springWords
                            featuredImage1 {
                                childImageSharp {
                                  gatsbyImageData
                                }
                            }
                            featuredImage2 {
                                childImageSharp {
                                  gatsbyImageData
                                }
                            }
                            featuredImage3 {
                                childImageSharp {
                                  gatsbyImageData
                                }
                            }
                            featuredImage4 {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                }
            }
        }
    `}

    
    render={data => {
      // Set ImageData.
      const imageData1 = [getImage(data.allMarkdownRemark.edges[0].node.frontmatter.featuredImage1.childImageSharp), `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`].reverse()
      const imageData2 = [getImage(data.allMarkdownRemark.edges[0].node.frontmatter.featuredImage2.childImageSharp), `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`].reverse()
      const imageData3 = [getImage(data.allMarkdownRemark.edges[0].node.frontmatter.featuredImage3.childImageSharp), `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`].reverse()
      const imageData4 = [getImage(data.allMarkdownRemark.edges[0].node.frontmatter.featuredImage4.childImageSharp), `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`].reverse()

      return (
        // <React.Fragment>
        <Layout>
          <Head title="About" />
          {/* < StaticImage
            Tag="section"
            className={className}
            image={imageData1}
            backgroundColor={`#040e18`}
          /> */}
          <div className={[aboutStyles.container, "mb-5"].join(' ')}>
            <div className={aboutStyles.grayBackground}>
              <Container>
                <Row className="mt-3">
                  <Col>
                    <h1>ABOUT US</h1>
                  </Col>
                </Row>
                <Row className="">
                  <Col sm={12} md={8}>
                    <p>Welcome to Asian American Christian Fellowship (AACF), a campus ministry under JEMS, a non-profit missions organization. <br></br><br></br> We are a Christian Fellowship at University of Washington - Seattle Campus. AACF has other fellowships in the other colleges within the country! Please continue reading to learn more about who we are and why we are.</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className={[aboutStyles.container, "d-flex flex-column justify-content-center"].join(' ')}>
            <Container>
              <Row className={[aboutStyles.headerText ,"justify-content-center"].join(' ')}>
                <Col sm={12} md={8}>
                  <h6>OUR MISSION</h6>
                </Col>
              </Row>
              <Row className="justify-content-center mb-5">
                <Col sm={12} md={8}>
                  <p>The mission of Asian American Christian Fellowship (AACF) is to reach into the university and collegiate community, primarily to those who are Asian Pacific Americans, with the life-changing message of Jesus Christ.</p>
                </Col>
              </Row>
              <Row className={[aboutStyles.headerText ,"justify-content-center"].join(' ')}>
                <Col sm={12} md={8}>
                  <h6>VISION STATEMENT</h6>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col sm={12} md={8} className="text-left">
                  <p>We are committed to <strong> making disciples by educating and equipping students in biblical foundations</strong>, Christian disciplines, and the development of spiritual gifts in order to prepare them for witness and service on the campus, in the local church, in the marketplace, and in world missions.</p>
                </Col>
              </Row>
              <Row className={[aboutStyles.headerText ,"justify-content-center"].join(' ')}>
                <Col sm={12} md={8}>
                  <h6>JEMS</h6>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col sm={12} md={8} className="text-left">
                  <p>The ministry of AACF, Asian American Christian Fellowship, began with a group of college students who had attended the JEMS Mount Hermon summer conference. They wanted the summer fellowship to continue beyond the conference. And in 1972 that desire crystallized at CSU Los Angeles where the first bible study was held. A handful of college students gathered on campus for a bible study. More bible studies popped up all over the west coast of the U.S.. Groups started up at UCLA, UC Berkeley, UW Seattle, CSULB, SJSU, and Stanford. And in 1977 these bible studies became known as Asian American Christian Fellowship. At that time, the AACF leadership realized that there was a void for college-aged Asian American. So began the mission, to reach college campuses with the life-changing message of Jesus Christ and to raise up the next generation of Christian leaders. In 2020 we have 20 AACF chapters that includes nearly 700 students who are, in turn, reaching thousands of college students and faculty.</p>
                </Col>
              </Row>
            </Container>
            <Button variant="secondary" className={aboutStyles.jemsButton}>Learn More</Button>
          </div>
          
          

          {/* <GatsbyImage
            Tag="section"
            className={className}
            image={imageData2}
            backgroundColor={`#040e18`}
          /> */}
          <div fluid className={[aboutStyles.container, "text-center"].join(' ')}>

            <Container>
              <Row className="justify-content-center">
                <Col sm={12} md={9}>
                  <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.theme}</h1>
                  <h3>{data.allMarkdownRemark.edges[0].node.frontmatter.verse}</h3>
                </Col>
              </Row>
              <Row className="pt-md-4">
                <Col sm={12} md={4} className="pt-5 pt-md-0">
                  <h2>Fall</h2>
                  <h3 className={aboutStyles.themeWords}>{data.allMarkdownRemark.edges[0].node.frontmatter.fallWords}</h3>
                  <p>{data.allMarkdownRemark.edges[0].node.frontmatter.fall}</p>
                </Col>
                <Col sm={12} md={4} className="pt-5 pt-md-0">
                  <h2>Winter</h2>
                  <h3 className={aboutStyles.themeWords}>{data.allMarkdownRemark.edges[0].node.frontmatter.winterWords}</h3>
                  <p>{data.allMarkdownRemark.edges[0].node.frontmatter.winter}</p>
                </Col>
                <Col sm={12} md={4} className="pt-5 pt-md-0">
                  <h2>Spring</h2>
                  <h3 className={aboutStyles.themeWords} >{data.allMarkdownRemark.edges[0].node.frontmatter.springWords}</h3>
                  <p>{data.allMarkdownRemark.edges[0].node.frontmatter.spring}</p>
                </Col>
              </Row>
            </Container>
          </div>


          {/* <GatsbyImage
            Tag="section"
            className={className}
            image={imageData3}
            backgroundColor={`#040e18`}
          />
          <div fluid className={[aboutStyles.container, "text-center"].join(' ')} >
            <Container>
              <Row className="justify-content-center">
                <Col sm={12} md={8}>
                  <h1>OUR VISION</h1>
                  <p>We are committed to <strong> making disciples by educating and equipping students in biblical foundations</strong>, Christian disciplines, and the development of spiritual gifts in order to prepare them for witness and service on the campus, in the local church, in the marketplace, and in world missions.</p>
                  <p></p>
                </Col>
              </Row>
            </Container>
          </div> */}

          {/* <GatsbyImage
            Tag="section"
            className={className}
            fluid={imageData4}
            backgroundColor={`#040e18`}
          /> */}
          <div fluid className={[aboutStyles.container].join(' ')} >
            <Container>
              <Row>
                <Col className="text-center">
                  <h1>STATEMENT OF FAITH</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="lead text-center">The Asian American Christian Fellowship (AACF) as of division of JEMS, believes:</p>
                  <ul id="statementsOfFaith">
                    <li>That the Bible is God's Word, written by men divinely and uniquely inspired by the Holy Spirit, and that it is the supreme and final authority in all matters of faith and conduct.</li>
                    <li>In One God, eternally existing in three persons: Father, Son and Holy Spirit.</li>
                    <li>In Jesus Christ, the world’s only Savior; in His pre-existence, virgin birth, sinless life, vicarious death, burial, and bodily resurrection and personal return.</li>
                    <li>In the Holy Spirit as a Person, indwelling and empowering the believer, convicting the unsaved and presenting the claims of Christ.</li>
                    <li>That sinful man is lost and can be redeemed only by the death and shed blood of Christ upon the cross through the regeneration of the Holy Spirit.</li>
                    <li>In the resurrection of the dead, the believer to life everlasting and the unbeliever to eternal condemnation.</li>
                    <li>That the Church, the Body of Christ, is comprised of all who have accepted the redemption provided by Christ.</li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  {/* <h3>Learn More:</h3> */}
                  {/* <a href="http://www.aacf.org/" target="_blank" rel="noopener noreferrer">
                    <img
                      src={aacfLogo}
                      alt="aacf logo"
                    />
                  </a> */}
                <a href="https://www.aacf.org/aacf-story/" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className='learnMoreButton'>Read More About AACF</Button>
                </a>
                </Col>
              </Row>
            </Container>
          </div>

        </Layout>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)
  `
  width: 100%;
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection


// import React, {useEffect} from 'react'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container'

// import Layout from '../components/layout'
// import Head from '../components/head';
// import * as aboutStyles from './about.module.scss'


// export default function About() {

//   useEffect(() => {
//     const myNavbar = document.getElementById("myNavbar");
//     const navbarHeight = myNavbar.offsetHeight;

//     document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
//   }, []);

//   return (
//     <Layout>
//       <Head title="About Us"/>

//       <Container fluid className={aboutStyles.aboutPageBackground}>
//         <div className={aboutStyles.aboutPageBackgroundOverlay}></div>
//         <h1 className={aboutStyles.aboutUsTitle}>About Us</h1>
//       </Container>

//       <Container fluid className={aboutStyles.centerContainer}>
//         <h2 className={aboutStyles.mediumText}>What Is AACF?</h2>
//         <p className={aboutStyles.paragraphText}>
//           Welcome to Asian American Christian Fellowship (AACF), a campus ministry under JEMS, a non-profit missions organization.
//         </p>
//         <p className={aboutStyles.paragraphText}>
//           We are a Christian Fellowship at University of Washington - Seattle Campus.

//           AACF has other fellowships in the other colleges within the country!

//           Please continue reading to learn more about who we are and why we are.
//         </p>
//       </Container>

//       <Container fluid className={aboutStyles.centerContainer}>
//         <h2 className={aboutStyles.mediumText}>Our Mission</h2>
//         <p className={aboutStyles.paragraphText}>
//           The mission of AACF is to reach into the university and collegiate community, primarily to those who are Asian Pacific Americans, with the life-changing message of Jesus Christ. ​
//         </p>
//         <br/>
//         <h2 className={aboutStyles.mediumText}>Vision Statement</h2>
//         <p className={aboutStyles.paragraphText}>
//           We are committed to <strong> making disciples by educating and equipping students in biblical foundations</strong>, Christian disciplines, and the development of spiritual gifts in order to prepare them for witness and service on the campus, in the local church, in the marketplace, and in world missions.
//         </p>
//         <p className={aboutStyles.paragraphText}>
//           College students who come through the ministry of AACF are educated and equipped for witness and service to wherever God leads them. Our aim is to give them knowledge and experience to be salt and light (Matthew 5:13-16) to the communities where God has placed them and beyond. We do this by giving students opportunities to lead and serve. We deeply value student leadership and their initiative to creatively contextualize ministry on their campus. We give them a framework for campus ministry and they are encouraged to make it their own.
//         </p>
//         <p className={aboutStyles.paragraphText}>
//           Our ministry specializes in reaching Asian Americans on the college campus. Our fellowships are open to all. You don't have to be Asian, American, or Christian to join our fellowship. We extend a humble invitation to any student who is searching for forgiveness and the grace of Jesus Christ.
//         </p>
//       </Container>

//       <Container fluid className={aboutStyles.centerContainer}>
//         {/* About/history info is from the aacf.org website*/}
//         {/* Unsure if there is a better way to package the text? Seems messy having it all here in the <p> elements  -mm*/}
//         <h2 className={aboutStyles.mediumText}>History</h2>
//         <p className={aboutStyles.paragraphText}>
//           AACF has been at University of Washington for 40 years and God has shown himself faithful in so many ways during that time. We are all about building community as well as developing strong Christ-centered leaders. Being a part of this ministry students get a chance to live out what it means to live as an active believer as well as one that takes ownership of their faith.
//         </p>
//         <p className={aboutStyles.paragraphText}>
//           Since its birth on the UW campus in 1975, AACF UW has invested in the lives of over 1500 students, growing Christ followers and developing more than 240 student leaders passionate about loving God and loving others. Our alumni continue to be leaders making an impact for God on the campus as volunteer or paid campus ministers, in the local church as pastors or ministry leaders, in the work place as managers, teachers, health care professionals, etc., and in the world as career missionaries.
//         </p>
//         <br/>
//         <a href="https://www.aacf.org/aacf-story/" target="_blank" rel="noopener noreferrer">
//           <Button variant="secondary" className='learnMoreButton'>Read More About Our Story</Button>
//         </a>
//         <br/>
//       </Container>
//     </Layout>
//   )
// }
