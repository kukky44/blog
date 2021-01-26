import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Avatar from "../images/tomoe1.png";
import TwitterSvg from "../images/twitter.svg";

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
              <a
                className="bio-social__link"
                href={"https://twitter.com/" + social.tiwtter}
              >
                <img
                  className="bio-social__img"
                  alt="twitter"
                  src={TwitterSvg}
                />
                <div className="bio-social__title">Twitter</div>
              </a>
              <a
                className="bio-social__link"
                href={"https://twitter.com/" + social.tiwtter}
              >
                <img
                  className="bio-social__img"
                  alt="twitter"
                  src={TwitterSvg}
                />
                <div className="bio-social__title">Twitter</div>
              </a>
              <a
                className="bio-social__link"
                href={"https://twitter.com/" + social.tiwtter}
              >
                <img
                  className="bio-social__img"
                  alt="twitter"
                  src={TwitterSvg}
                />
                <div className="bio-social__title">Twitter</div>
              </a>
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
