import React from 'react'
import loader from './loader.gif'

export default function Spinner() {
  return (
      <div className='text-center my-5'>
      <img src={loader} classNameName='opacity-25' alt="loading Img" />
    </div>
  )
}

