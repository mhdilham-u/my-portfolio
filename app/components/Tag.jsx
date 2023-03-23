import React from "react";

const Tag = (props) => {
  return (
    <>
      <span className="px-3 py-1 bg-primary rounded-full text-xs font-medium text-white">{props.text}</span>
    </>
  );
};

export default Tag;
