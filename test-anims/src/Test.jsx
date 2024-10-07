import { useEffect, useRef } from 'react'
import './Test.css'

export default function Test() {

  const fadeInTextRef = useRef(null);
  const accountingCardRef = useRef(null);
  const payrollCardRef = useRef(null);
  const advisoryCardRef = useRef(null);
  const attestationsCardRef = useRef(null);
  let fadeInTextObserver, shrinkObserver;

  window.addEventListener("scroll", () => {
    // Percentage of scroll height over entire body
    document.body.style.setProperty(
      "--scroll", 
      window.scrollY / (document.body.offsetHeight - window.innerHeight));
  }, false);

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

   shrinkObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.classList.add("shrink");
        observer.unobserve(el.target);
      }
    })
  }, {
    threshold: 1.0,
    rootMargin: "-10% 0%"
  });
  [accountingCardRef, payrollCardRef, advisoryCardRef].forEach(el => 
    shrinkObserver.observe(el.current));
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
          <div className='card' ref={accountingCardRef}>Accounting</div>
          <div className='card' ref={payrollCardRef}>Payroll</div>
          <div className='card' ref={advisoryCardRef}>Advisory</div>
          <div className='card' ref={attestationsCardRef}>Attestations</div>
        </div>
        <div className='certs'>
          <marquee>Affiliations</marquee>
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

