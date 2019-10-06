import React, { memo } from "react";

import "./Title.css"

const Title = props => {
  return (
    <h1 className="title">{props.title}</h1>
  );
};

export default memo(Title);
