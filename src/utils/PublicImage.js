import React from 'react';

const PublicImage = ({ src, alt, ...rest }) => (
  <img src={`${process.env.PUBLIC_URL}${src}`} alt={alt} {...rest} />
);

export default PublicImage;
