import React from 'react'

const PublicImage = ({ src, alt, ...rest }) => {
  const isExternal = src?.startsWith('http') || src?.startsWith('https')

  const finalSrc = isExternal ? src : `${process.env.PUBLIC_URL}${src}`

  // console.log('Image src:', finalSrc)

  return <img src={finalSrc} alt={alt} {...rest} />
}

export default PublicImage
