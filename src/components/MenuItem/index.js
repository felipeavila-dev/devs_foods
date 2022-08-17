import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import{ LinkArea, LinkIcon } from './styled';

export default ({ icon, link }) => {
  const location = useLocation();

  let isActive = location.pathname === link;

  return(
    <Link to={ link }>
      <LinkArea active={ isActive }>
        <LinkIcon src={ icon } />
      </LinkArea>
    </Link>
  );
}