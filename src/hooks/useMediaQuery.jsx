import React, { useEffect, useState } from 'react'

const useMediaQuery = (media) => {
    const getMatches = (query)=> {
        // Prevents SSR issues
        if (typeof window !== 'undefined') {
          return window.matchMedia(query).matches
        }
        return false
    }

    const [isMobile, setIsMobile] = useState(getMatches(false));


    useEffect(() => {
      const mediaQuery = window.matchMedia(media);
  
      setIsMobile(getMatches(media))
  
      const handleMediaQueryChange = e => {
        setIsMobile(e.matches)
      }
  
      mediaQuery.addEventListener('change', handleMediaQueryChange)
  
      return () => {
        mediaQuery.removeEventListener('change', 
        handleMediaQueryChange)
      }
    }, [])

    return isMobile
}

export default useMediaQuery