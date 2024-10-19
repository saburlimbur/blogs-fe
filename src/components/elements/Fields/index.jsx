import React from 'react';
import Label from './Label';
import Input from './Input';

const InputFields = (props) => {
  const { label, 
        htmlFor, 
        type, 
        name, 
        id, 
        placeholder,
        className, 
        autoComplete,
        required,
        onChange,
        onBlur,
        value
        } = props;
  return (
    <>
      <div>
        <Label 
            htmlFor={htmlFor} 
            className='block mb-2 text-base font-semibold text-[#111827]'
        >
          {label}
        </Label>
        <Input 
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
      </div>
    </>
  );
};

export default InputFields;
