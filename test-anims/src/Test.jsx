import { useEffect, useRef } from 'react'
import './Test.css'

export default function Test() {

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
          <p ref={fadeInTextRef}>Inspirational text</p>
        </div>
        <div className='service-cards'>
          <div className='card'>Accounting</div>
          <div className='card'>Payroll</div>
          <div className='card'>Advisory</div>
        </div>
        <div className='certs'>
          <marquee>Certifications</marquee>
        </div>
        <div className='reviews'>
          <div className='review-card'></div>
          <div className='review-card'></div>
          <div className='review-card'></div>
          <div className='review-card'></div>
          <div className='review-card'></div>
          <div className='review-card'></div>
          <div className='review-card'></div>
          <div className='review-card'></div>
          <div className='review-card'></div>
          <div className='review-card'></div>
          <div className='review-card'></div>
          <div className='review-card'></div>
        </div>
        <div className='call-to-action'/>
      </>
    )
}

