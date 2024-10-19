import React from 'react';

const Input = (props) => {
  const { 
        type, 
        name, 
        id, 
        value, 
        onChange, 
        onBlur, 
        className, 
        placeholder, 
        autoComplete, 
        required 
        } = props;
  return (
    <>
      <input 
        type={type} 
        name={name} 
        id={id} 
        className={className} 
        autoComplete={autoComplete} 
        placeholder={placeholder} 
        required={required} 
        onChange={onChange} 
        onBlur={onBlur} 
        value={value} 
    />
    </>
  );
};

export default Input;
