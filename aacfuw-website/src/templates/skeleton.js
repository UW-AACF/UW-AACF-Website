import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'

import Head from '../components/head'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

// import Hero from '../components/hero'

// import eventsStyles from './events.module.scss'
import * as skeletonStyles from './skeleton.module.scss'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug } }) {
            frontmatter {
                category
                description
                who
                location
                date
                title
                link
                button
                img {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
            }
            html
            fields {
                slug
            }
        }
    }
`

const ConnectEvents = (props) => {
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
            <GatsbyImage
                image={getImage(props.data.markdownRemark.frontmatter.img.childImageSharp)}
                style={{
                    width:`100%`,
                    maxHeight:`70vh`

                }}
            />
            <Container className={[skeletonStyles.info, "text-center"].join(' ')}>
                <Row>
                    <Col >
                        <h1 className={skeletonStyles.title}>{props.data.markdownRemark.frontmatter.title}</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} md={8}>
                        <p>{props.data.markdownRemark.frontmatter.description}</p>
                    </Col>
                </Row>
                <Row className={[skeletonStyles.details, "justify-content-center d-flex mt-2 mt-md-4"].join(' ')}>
                    <Col xs={12} md={3}>
                        <h3>Who</h3>
                        <p>{props.data.markdownRemark.frontmatter.who}</p>
                    </Col>
                    <Col xs={12} md={3}>
                        <h3>Where</h3>
                        <p>{props.data.markdownRemark.frontmatter.location}</p>
                    </Col>
                    <Col xs={12} md={3}>
                        <h3>When</h3>
                        <p>{props.data.markdownRemark.frontmatter.date}</p>
                    </Col>
                </Row>
                <Row className={["justify-content-center d-flex"].join(' ')}>
                    <Col xs={12} md={4}>
                    { props.data.markdownRemark.frontmatter.link.trim() === "" ?
                        (<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Not Ready Yet!</Tooltip>}>
                            <span className="d-block">
                                <Button className={skeletonStyles.button} disabled style={{ pointerEvents: 'none' }} size="lg" block variant="secondary">{props.data.markdownRemark.frontmatter.button}</Button>
                            </span>
                        </OverlayTrigger>
                        )
                        : (<Button className={skeletonStyles.button} target="_blank" href={props.data.markdownRemark.frontmatter.link} size="lg" block variant="dark">{props.data.markdownRemark.frontmatter.button}</Button>) }
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default ConnectEvents
