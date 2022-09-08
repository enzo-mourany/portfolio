import React, {useState, useEffect} from 'react'

const scrollToDiscoverButton = () => {
    const [showScrollToDiscoverButton, setShowScrollToDiscoverButton] = useState(false);

    useEffect(() => {
        if(window.screenY > 300) {
            setShowScrollToDiscoverButton(true);
        } else {
            setShowScrollToDiscoverButton(false);
        }
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default scrollToDiscoverButton
