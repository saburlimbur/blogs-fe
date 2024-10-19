import React from 'react';

const Label = (props) => {
  const { htmlFor, children, className } = props;
  return (
    <>
      <label className={className} htmlFor={htmlFor}>
        {children}
      </label>
    </>
  );
};

export default Label;
