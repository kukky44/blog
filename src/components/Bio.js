import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Avatar from "../images/profile.png";
import TwitterSvg from "../images/twitter.svg";
// import FacebookSvg from "../images/facebook.svg";

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
              I'm fond of design and programming.
            </div>
            <div className="bio-social">
              <a
                className="bio-social__link"
                href={"https://twitter.com/" + social.twitter}
              >
                <img
                  className="bio-social__img"
                  alt="twitter"
                  src={TwitterSvg}
                />
                {/* <div className="bio-social__title">Twitter</div> */}
              </a>
              {/* <a
                className="bio-social__link"
                href={"https://facebook.com/" + social.twitter}
              >
                <img
                  className="bio-social__img"
                  alt="twitter"
                  src={FacebookSvg}
                />
                <div className="bio-social__title">Facebook</div>
              </a> */}
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
          facebook
        }
      }
    }
  }
`;

export default Bio;
