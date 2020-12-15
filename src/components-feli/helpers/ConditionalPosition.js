import React from "react";

const ConditionalPosition = ({ isFirstPositioned, staticElement, dynamicElement}) => (
  <>
    {isFirstPositioned
      ? [dynamicElement, staticElement]
      : [staticElement, dynamicElement]}
  </>
);

export default ConditionalPosition;
