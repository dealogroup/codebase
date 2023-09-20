import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, size = "lg", color = "black" }) => {
  const iconStyles = {
    fontSize: size,
    color: color,
  };

  return <FontAwesomeIcon icon={icon} style={iconStyles} />;
};

export default Icon;
