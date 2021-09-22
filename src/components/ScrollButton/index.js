import React, {useState} from 'react';
import './style.css';

function ScrollButton() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200){
      setVisible(true)
    } else if (scrolled <= 200){
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <a className="scroll-button" href=''><i class="bi bi-arrow-up-circle" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}></i></a>
  )
}

export default ScrollButton;