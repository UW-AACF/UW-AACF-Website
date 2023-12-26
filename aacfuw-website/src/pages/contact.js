import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

// bootstrap imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import * as contactStyles from './contact.module.scss'
import instagram_logo from '../images/iglogo.png'
import facebook_logo from '../images/fblogo.png'
import link from '../images/link.png'

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "Contact"}}}) {
            edges {
                node {
                    frontmatter {
                        featuredImage {
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                    }
                }
            }
        }
    }

    `)
  return (
    console.log('@@', getImage(data.allMarkdownRemark.edges[0].node.frontmatter.featuredImage.childImageSharp)),
    <Layout>
      <Head title="Contact" />
      <div fluid className={[contactStyles.heading, "text-center"].join(' ')}>
        <GatsbyImage
          image={getImage(data.allMarkdownRemark.edges[0].node.frontmatter.featuredImage.childImageSharp)}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            maxHeight: "100vh",
            height: "100%",
            zIndex: -1,
          }}
          // imgStyle={{
          //     backgroundColor: 'black'
          // }}
          // backgroundColor={"black"}
          className={contactStyles.background}
        />
        <Container>
          <Row>
            <Col>
              <h1>CONTACT US</h1>
            </Col>
          </Row>
          <Row className={[contactStyles.info, "justify-content-center"].join(' ')}>
            <Col sm={12} md={8}>
              <h3>aacf.uw@gmail.com</h3>
              {/* TODO: implement React form for newsletter, or integrate netlify forms  */}
            </Col>
          </Row>
          <Row className={[contactStyles.info, "justify-content-center pt-3"].join(' ')}>
            <Col sm={12} md={10} className={["justify-content-center  d-flex"].join(' ')}>
              <a href="https://www.instagram.com/uwaacf/" target="_blank" rel="noopener noreferrer">
                <img src={instagram_logo} fluid="true" alt="instagram" />
                <p>@uwaacf</p>
              </a>
              <a href="https://www.facebook.com/groups/uwaacf/" target="_blank" rel="noopener noreferrer">
                <img src={facebook_logo} fluid="true" alt="facebook" />
                <p>/uwaacf</p>
              </a>
              <a href="https://www.flowcode.com/page/uwaacf" target="_blank" rel="noopener noreferrer">
                <img src={link} fluid="true" alt="facebook" />
                <p>/flowcode</p>
              </a>
            </Col>
            <Col sm={8} md={10} className="mt-3">
              <Button className={contactStyles.button} target="_blank" size="lg" variant="light" href="">DONATE TO OUR MINISTRY</Button>
            </Col>
            <Col sm={8} md={10} className="mt-3">
              <Button className={contactStyles.button} target="_blank" size="lg" variant="light" href="">JOIN OUR EMAIL NEWSLETTER</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <br/> {/* For spacing between button and footer */}
    </Layout>
  )
}

export default ContactPage
