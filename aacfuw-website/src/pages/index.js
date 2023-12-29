import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import Carousel from '../components/carousel';

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import * as styles from '../styles/index.module.scss';

// import background from '../images/logo_transparent.png';

function Index() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {category: {eq: "Home"}}}) {
        edges {
          node {
            frontmatter {
              title
              events {
                event {
                  name
                  description
                  link
                  img {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Home" />
      <div>
        <Container fluid className={styles.centerContainer}>
          <h2 className={styles.smallText}>We are</h2>
          <h1 className={styles.bigText}>AACF</h1>
          <Button href="/about" variant="outline-secondary" className={styles.learnMoreButton}>Learn More</Button>
        </Container>
      </div>
      <div className={styles.backgroundCarousel}>
        <Carousel/>
      </div>
      <div className={styles.carouselOverlay} />

      {/* There is no backgroundContainer style yet */}
      {/* <Container fluid className={styles.backgroundContainer}>
      </Container> */}

      <Container className="mb-5 text-center"> {/* Can be fluid*/}
          <Row className="d-flex justify-content-center">
              {data.allMarkdownRemark.edges[0].node.frontmatter.events.map((event, index) => {
                  return (
                      <React.Fragment key={index}>
                          {/* TODO: Should use react-key-index instead */}
                          <Col md={4} lg={3} className="px-2 py-2 d-flex justify-content-center">
                              <Button className={styles.cardButton}>
                                  <Card href="/about" style={{ width: '14rem' }} className={["border-0", styles.card].join(' ')}>
                                      {/* <Button href="/about">This is a button</Button> */}
                                      <GatsbyImage image={getImage(event.event.img)} className="card-img-top"/>
                                      <Card.Body>
                                          <Card.Title className={styles.cardTitle}>{event.event.name}</Card.Title>
                                          <Card.Text className={styles.cardText}>{event.event.description}</Card.Text>
                                      </Card.Body>
                                  </Card>
                              </Button>
                          </Col>
                      </React.Fragment>
                  )
              })}
          </Row>
      </Container>

    </Layout>
  );
}

export default Index;
