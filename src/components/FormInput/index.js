import React from 'react';
import cn from 'classnames';

const FormInput = ({
  className,
  type,
  name,
  id,
  placeholder,
  onChange,
  value,
  textarea,
}) => {
  if (!textarea) {
    return (
      <input
        className={cn(
          'form-input',
          className,
        )}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    );
  } else if (textarea) {
    return (
      <textarea
        className={cn(
          'form-input',
          'textarea',
          className,
        )}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    );
  } else {
    return;
  }
}

export default FormInput;
