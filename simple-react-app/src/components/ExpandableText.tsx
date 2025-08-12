import React, { useState } from "react";

interface Props {
  children: string;
  numCharactersVisible?: number;
}

const ExpandableText = ({ children, numCharactersVisible = 10 }: Props) => {
  const [showHide, setShowHide] = useState(false);

  if (children.length <= numCharactersVisible) return <p>{children}</p>;

  const text = showHide
    ? children
    : children.substring(0, numCharactersVisible);

  return (
    <p>
      {text}...
      <button
        onClick={() => {
          setShowHide(!showHide);
        }}
      >
        {showHide ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
