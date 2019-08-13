import React from 'react';

import Checkbox from '../../objects/Checkbox';
import Label from '../../objects/Label';
import Input from '../../objects/Input';

import './styles.css';

const Display = () => (
  <div class="wrap-display">
  <Input />
  <Checkbox />
  <Label message="Mostrar eventos" />
  
  </div>
);

export default Display;