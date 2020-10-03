import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Avatar from "../images/tomoe1.png";

const Bio = () => {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata;
        return (
          <div className="bio">
            <div className="bio-header">
              <figure className="bio-header__img">
                <img src={Avatar} alt="prof_image" />
              </figure>
              <div className="bio-header__name">{author}</div>
            </div>
            <div className="bio-description">
              I'm a beginner of design, frontend and English from Japan.
            </div>
            <div className="bio-social">
              <a href={social.twitter}>Twitter</a>
            </div>
          </div>
        );
      }}
    />
  );
};

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
