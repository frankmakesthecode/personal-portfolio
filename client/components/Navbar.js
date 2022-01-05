import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav>
      <div>
        <Link to="/home">Home</Link>
      </div>
    </nav>
    <hr />
  </div>
);

export default connect(null)(Navbar);
