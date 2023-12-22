// TODO: this page is better as a template since there will be variable leaders


import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Head from "../components/head"

import * as ministryStyles from './ministries.module.scss'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'



const Ministries = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {category: {eq: "Ministries"}}}) {
              edges {
                node {
                  frontmatter {
                    title
                    featuredImage
                    ministries {
                      ministry {
                        people {
                          person {
                            detail
                            name
                            core
                            verse
                            extra
                            featuredImage {
                              childImageSharp {
                                gatsbyImageData
                              }
                            }
                          }
                        }
                        type
                        responsibility
                      }
                    }
                  }
                }
              }
            }
          }
    `)

    // console.log(data)
    // this is the blog page that holds blog list
    return (
        <Layout>
            <Head title="Ministries"/>
            <div className="mb-5">
            {/* style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${cross})`}} */}
                <div class="jumbotron" fluid className={[ministryStyles.heading, "text-center mb-0"].join(' ')}>
                    <Container>
                        <Row>
                            <Col>
                                <h1>AACF SLO MINISTRIES</h1>
                                <p>See below who is serving in AACF SLO!</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {data.allMarkdownRemark.edges[0].node.frontmatter.ministries.map((ministry, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Container className="mb-4"> {/* Can be fluid*/}
                                <Row className={ministryStyles.ministryTitle}>
                                    <Col>
                                        <h2 className="text-center mb-2">{ministry.ministry.type}</h2>
                                        <p className="text-center">{ministry.ministry.responsibility}</p>
                                        <hr/>
                                    </Col>
                                </Row>
                                {/* <Row className="justify-content-center">
                                    <Col xs={12} md={8}>
                                        <p>{ministry.ministry.responsibility}</p>
                                        <hr/>
                                    </Col>
                                </Row>
                                className="d-flex justify-content-left"
                                 */}
                                <Row className={"d-flex " + (ministry.ministry.type !== "advisor" ? "justify-content-left" : "justify-content-center")}>
                                {ministry.ministry.people.map((childOfGod, index) => {
                                    if (ministry.ministry.type === 'prayer') {
                                        return (
                                            <Col key={index} className="px-5 py-2 d-flex justify-content-center">
                                                 <h3 className={ministryStyles.prayer}>{ministry.ministry.responsibility}</h3>
                                            </Col>

                                        );
                                    }

                                    return (
                                        <React.Fragment key={index}>
                                             {/* TODO: Should use react-key-index instead since safer */}
                                            <Col md={4} className="px-5 py-2 d-flex justify-content-center">
                                                <Card style={{ width: '18rem' }} className="border-0">
                                                    <GatsbyImage image={getImage(childOfGod.person.featuredImage.childImageSharp)} className="card-img-top"/>
                                                    <Card.Body className={ministryStyles.cardBody}>
                                                        <Card.Title className={[ministryStyles.name, "mb-0"].join(' ')}>{childOfGod.person.name}</Card.Title>
                                                        {childOfGod.person.core.trim() !== "" &&
                                                            ( <Card.Text className={[ministryStyles.core, "text-muted"].join(' ')}>{childOfGod.person.core}</Card.Text>) }
                                                         <Card.Text className={[ministryStyles.subtitle, ""].join(' ')}>{childOfGod.person.detail}</Card.Text>
                                                         <Card.Text className={ministryStyles.detail}>{childOfGod.person.verse}</Card.Text>
                                                         <Card.Text className={ministryStyles.detail}>{childOfGod.person.extra}</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </React.Fragment>
                                    )
                                })}

                                </Row>
                            </Container>
                        </React.Fragment>
                    )
                })}
            </div>
            {/* <h1>Ministries page</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges[0].node.frontmatter.ministries.map((m) => {
                    return (
                        <li key={m.uid}>
                            <p>{m.uid}hello</p>


                        </li>
                    )
                })}
            </ol> */}
        </Layout>
    )
}
// LOOK AT REACT-KEY-INDEX LIB TO FIX KEY ERRORS
export default Ministries

/* <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                hi
                                <p>{edge.node.frontmatter.date}</p>
                            </Link> */
/* <h1>{m.ministry.type}</h1>
{m.ministry.people.map((p) => {
    return (
        <div key={p.id}>
            <p>{p.person.name}</p>
            <img src={p.person.photo.childImageSharp.fluid.base64}/>
        </div>
    )
})} */
