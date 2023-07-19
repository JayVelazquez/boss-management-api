import React from 'react';
import { Link } from 'react-router';

const Heading = () => {
  return (
    <div id="heading">
      
        <div id="title">
          <Link to="/">
            <span className="button">Boss Management API</span>
          </Link>
        </div>
    </div>
  )
}

export default Heading;
