import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Layout from '../components/layout';
import Head from '../components/head';
import Image from 'react-bootstrap/Image';
import * as styles from '../styles/index.module.scss';

import background from '../images/background.png';

function Index() {
  return (
    <Layout>
      <Head title="Home" />
      <div className={styles.backgroundContainer}>
        <Image src={background} alt="Background" className={styles.backgroundImage} />
        <Container fluid className={styles.centerContainer}>
          <h2 className={styles.smallText}>We are</h2>
          <h1 className={styles.bigText}>AACF</h1>
          <Button href="/about" variant="outline-secondary" className={styles.learnMoreButton}>
            Learn More
          </Button>
        </Container>
      </div>
    </Layout>
  );
}

export default Index;
