import { useEffect, useRef } from 'react'
import './Test.css'

function App() {

  const fadeInTextRef = useRef(null);
  let fadeInTextObserver;

  useEffect(() => {
    fadeInTextObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.add("show");
          observer.unobserve(el.target);
        }
      })
    }, {
      threshold: 1.0,
      rootMargin: "-10% 0%"
    });
   fadeInTextObserver.observe(fadeInTextRef.current);
  })

    return (
      <>
        <div className='header'>
          {/* Include multiple sources with different file formats,
            for varying browser support */}
          <video className='header-video' autoPlay loop muted>
            <source
              src='/test-stock-video.mp4'
              type='video/mp4'
            />
            Video giving meaningful introduction to Blantyre Business Services
          </video>
          <div className='video-transition'></div>
        </div>
        <div className='opening-text'>
          <p ref={fadeInTextRef}>We are here to show you a better way</p>
        </div>
        <div className='service-cards'>
          <div className='card'>Accounting</div>
          <div className='card'>Payroll</div>
          <div className='card'>Advisory</div>
        </div>
        <div className='certs'/>
        <div className='reviews'/>
        <div className='call-to-action'/>
        <footer></footer>
      </>
    )
}

export default App
