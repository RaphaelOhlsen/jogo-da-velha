import React from 'react';
import './styles.css';

import InputGame from '../InputGame';
import LabelGame from '../LabelGame';

const InputCheckbox = ({ id = "", value = "", content = "", type=""}) => ( 
  <>
    <InputGame id={id} value={value} type={type} content={content} />
    <LabelGame htmlFor={id} content={content} />
  </>
);

export default InputCheckbox; 
