import React, { useEffect } from "react";
import { graphql, useStaticQuery } from 'gatsby'
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as carouselStyles from './carousel.module.scss'




function Carousel() {
  useEffect(() => {
    const myNavbar = document.getElementById("myNavbar");
    const navbarHeight = myNavbar.offsetHeight;

    document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
  }, []);

  const settings = {
    infinite: true,
    fade: true,
    lazyLoad: true,

    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    pauseOnHover: false,

    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false
  };

  const data = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "images/carousel"}}) {
              edges {
                node {
                  name
                  relativeDirectory
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
    `)

  return (
    <div>
      <Slider {...settings}>
        {data.allFile.edges.map((photo, index) => { // photo = edges from the query above
          return (
            <React.Fragment key={index}>
              <div>
                <GatsbyImage
                  className={carouselStyles.resize}
                  // style={{
                  //   maxHeight: "91.67vh", // Idk why its not just 100vh... photos don't match up w/ overlay at 100vh
                  // }}
                  image={getImage(photo.node.childImageSharp)} // essentially doing edges.node.childImageSharp
                />
              </div>
            </React.Fragment>
          )
        })}
      </Slider>
    </div>
  );

}

export default Carousel