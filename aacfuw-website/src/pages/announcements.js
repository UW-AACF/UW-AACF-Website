import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import * as styles from './announcements.module.scss';

function Announcements() {
    return (
        <Layout>
            <Head title="Announcements" />
            <div className={[styles.container, "mb-5"].join(' ')}>
            <div className={styles.grayBackground}>
              <Container>
                <Row className="mt-3">
                  <Col>
                    <h1>ANNOUNCEMENTS</h1>
                  </Col>
                </Row>
                <Row className="">
                  <Col sm={12} md={8}>
                    <p>Stay updated on the latest AACF events. We have events almost every day of the week so don't miss out!</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
            <div>
                <Container fluid className={styles.centerContainer}>
                <Row className="justify-content-center">
                    <Col sm={12} md={8} className="text-center">
                    <iframe className={styles.calendar} src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&src=dXdhYWNmQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=b25tMDZxdmJpampsMm82dDZpZjExdXRiYnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y19xaWxtZ3VlbzgycnM5dTRub2U3c3Y1dGNwa0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWFjZi51d3NlYXR0bGVAYWFjZi5vcmc&color=%23E67C73&color=%2333B679&color=%23039BE5&color=%23C0CA33&color=%23AD1457" width="800" height="600" frameborder="0" scrolling="no"></iframe>
                    {/* <iframe className={styles.calendar} src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&src=c3VuZ2gxNDA0QGdtYWlsLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043" width="800" height="600" frameborder="0" scrolling="no"></iframe> */}
                    </Col>
                </Row>

                </Container>
            </div>

        </Layout>
    );
}

export default Announcements;
