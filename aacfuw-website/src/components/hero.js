  
import React from "react"
import { GatsbyImage} from 'gatsby-plugin-image';

export default (props) => (
  <React.Fragment>
    <GatsbyImage
      image={props.image}
      style={{
          width: `100%`,
          height: `70vh`
      }}
    />
  </React.Fragment>
)