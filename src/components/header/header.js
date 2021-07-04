import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GitHub_Repo } from '../../common/const';

import './index.css';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div className="header-container">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <a
        className="github-link"
        href={GitHub_Repo}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
