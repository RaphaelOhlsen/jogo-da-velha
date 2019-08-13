import React from 'react';
import './styles.css';

import Player from '../../objects/Player'
import Card from '../../objects/Card';

const Hashtag = () => (
  <Card>
    <ul className="hashtag">
      <li className="item"><Player player="o" /></li>
      <li className="item"><Player player="x" /></li>
      <li className="item"><Player player="x" /></li>

      <li className="item"><Player player="o" /></li>
      <li className="item"><Player player="x" /></li>
      <li className="item"><Player player="o" /></li>
 
      <li className="item"><Player player="x" /></li> 
      <li className="item"><Player player="o" /></li>
      <li className="item"><Player player="x" /></li>
    </ul>
  </Card>
);

export default Hashtag;