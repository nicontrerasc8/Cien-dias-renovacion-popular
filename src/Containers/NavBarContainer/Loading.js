import {useEffect, useState} from 'react'
import Logo from "./images.jpeg"

const LoadingContainer = () => {
   return (
      <div className="loading-container">
          <img src={Logo}/>
      </div>
   )
}

export default LoadingContainer