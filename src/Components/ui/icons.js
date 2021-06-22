import React from "react";
import { Link } from "react-router-dom";

import mcitylogo from "../../Resources/images/logos/manchester_city_logo.png";
import kickers from "../../Resources/images/logos/kickers.jpg";
import kfc0 from "../../Resources/images/logos/kfc0.png";

export const CityLogo = (props) => {
  const template = (
    <div
      className="img_cover"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${kfc0}) no-repeat`,
      }}
    ></div>
  );

  if (props.link) {
    return (
      <Link to={props.linkTo} className="link_logo">
        {template}
      </Link>
    );
  } else {
    return template;
  }
};
