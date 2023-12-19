import React from 'react'
import { Link } from 'gatsby'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import cross from '../images/mini-cross.png'
import instagram_logo from '../images/iglogo.png'
import facebook_logo from '../images/fblogo.png'
import spotify_logo from '../images/spotify.png'


import * as footerStyles from './footer.module.scss'

function Footer() {
  return (
    <footer>
      <Container fluid className={footerStyles.containerFluid}>
        <Row>
          <Col className="d-flex justify-content-center mt-3 mb-1">  {/* having one Col will auto set to width 12 */}
            <img src={cross} fluid="true" width={15} height={20} alt="Cross" />
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-2 mb-3">
          <Col md="auto" className="d-flex justify-content-center">
            <p className={footerStyles.footerLinks}><Link to="/about">
              ABOUT
            </Link>
            </p>
          </Col >

          <Col md="auto" className="d-flex justify-content-center">
            <p className={footerStyles.footerLinks}><Link to="/contact">
              CONTACT
            </Link>
            </p>
          </Col>
          <Col md="auto" className="d-flex justify-content-center">
            <p className={footerStyles.footerLinks}><a href="" target="_blank" rel="noopener noreferrer">NEWSLETTER</a>
            </p>
          </Col>
          <Col md="auto">
            <div className="d-flex justify-content-center">
              <p className={footerStyles.footerLinks}>
                FOLLOW US
              </p>
            </div>
            <Row>
              <Col className={[footerStyles.socialLogo, "d-flex justify-content-center justify-content-md-start"].join(' ')}>
                <a href="https://www.facebook.com/groups/uwaacf/" target="_blank" rel="noopener noreferrer">
                  <img src={facebook_logo} fluid="true" alt="facebook" />
                </a>
                <a href="https://www.instagram.com/uwaacf/" target="_blank" rel="noopener noreferrer">
                  <img src={instagram_logo} fluid="true" alt="instagram" />
                </a>
                {/* <a href="" target="_blank" rel="noopener noreferrer">
                  <img src={spotify_logo} fluid="true" alt="spotify" />
                </a> */}
              </Col>
            </Row>
          </Col>
        </Row>

        <div className={[footerStyles.footerEnd, "text-center"].join(' ')}>
          <p className="mb-0">Made with God's <span role="img" aria-label="heart">❤️</span> by AACF UW</p>
          <p className="mb-0">Asian American Christian Fellowship at University of Washington</p>
        </div>
      </Container>
    </footer>
  )


}

export default Footer;