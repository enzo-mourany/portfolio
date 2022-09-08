import React, {useState, useEffect} from 'react'
import { HiArrowDown } from 'react-icons/hi';

const scrollToDiscoverButton = () => {
    const [showScrollToDiscoverButton, setShowScrollToDiscoverButton] = useState(true);

    useEffect(() => {
        if(window.screenY > 300) {
            setShowScrollToDiscoverButton(true);
        } else {
            setShowScrollToDiscoverButton(false);
        }
    }, [])

    const scrollToDiscover = () => {
        window.scrollTo({
            top: 200,
            behavior: "smooth",
        });
    };

  return (
    <div>
      <HiArrowDown onClick={scrollToDiscover} />
    </div>
  )
}

export default scrollToDiscoverButton
