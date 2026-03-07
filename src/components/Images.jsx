import React from 'react'

const Images = ({className,imgSrc,alt}) => {
  return (
     <img className={`${className}`} src={imgSrc} alt={alt} />
  )
}

export default Images