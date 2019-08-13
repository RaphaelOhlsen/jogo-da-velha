import React from 'react';

import './styles.css';

const Label = ({message}) => {
  return (
    <label htmlFor="label">
      <span className="message-label">{message}</span>
    </label>
  );
}
export default Label;