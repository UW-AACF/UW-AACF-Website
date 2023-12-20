import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

import Layout from '../components/layout';
import Head from '../components/head';
import * as styles from '../styles/index.module.scss';

import background from '../images/logo_transparent.png';

function Index() {
  return (
    <Layout>
      <Head title="Home" />
      <Container fluid className={styles.centerContainer}>
        <h2 className={styles.smallText}>We are</h2>
        <h1 className={styles.bigText}>AACF</h1>
        <Button href="/about" variant="outline-secondary" className={styles.learnMoreButton}>Learn More</Button>
      </Container>

      <Container fluid className={styles.backgroundContainer}>

      </Container>
    </Layout>
  );
}

export default Index;
