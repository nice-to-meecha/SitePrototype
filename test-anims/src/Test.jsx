import { useEffect, useRef } from 'react'
import './Test.css'

export default function Test() {

  const img1 = "https://cdn.pixabay.com/photo/2023/10/24/12/01/pumpkins-8338100_1280.jpg";
  const img2 = "https://cdn.pixabay.com/photo/2024/09/21/19/23/corn-9064747_960_720.jpg";
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6
  };

  const fadeInTextRef = useRef(null), animRef = useRef(null), slide1Ref = useRef(null),
    slide2Ref = useRef(null), affiliations = useRef(null), sideServiceButton = useRef(null),
    hideMovingSlide = useRef(null), parallaxBg = useRef(null);
  // const accountingCardRef = useRef(null);
  // const payrollCardRef = useRef(null);
  // const advisoryCardRef = useRef(null);
  // const attestationsCardRef = useRef(null);
  let fadeInTextObserver, shrinkObserver, stickySlideObserver;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // Percentage of scroll height over entire body
      document.body.style.setProperty(
        "--scroll", 
        window.scrollY / (document.body.offsetHeight - window.innerHeight));
  
      parallaxBg.current.style.backgroundPositionY = window.scrollY * 0.9 + "px";
    }, false);
  })

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

    [fadeInTextRef.current, ...affiliations.current.children].forEach(ref => fadeInTextObserver.observe(ref));

    //  shrinkObserver = new IntersectionObserver((entries, observer) => {
    //   entries.forEach(el => {
    //     if (el.isIntersecting) {
    //       el.target.classList.add("shrink");
    //       observer.unobserve(el.target);
    //     }
    //   })
    // }, {
    //   threshold: 1.0,
    //   rootMargin: "-10% 0%"
    // });
    // [accountingCardRef, payrollCardRef, advisoryCardRef].forEach(el => 
    //   shrinkObserver.observe(el.current));

    stickySlideObserver = new IntersectionObserver((entries, observer) => {
      const intersectingEntry = entries.find(entry => entry.isIntersecting);
      if (intersectingEntry) {
        let newImg;
        console.log(intersectingEntry.target.id);
        if (intersectingEntry.target.id === "slide1") {
          newImg = img1;
        } else {
          newImg = img2;
        }
        
        animRef.current.setAttribute("src", newImg);
      }
    }, options);

    [slide1Ref, slide2Ref].forEach(slide => stickySlideObserver.observe(slide.current));
  })

  function clickServiceSlide(event) {
    // console.log(event);
    slide1Ref.current.classList.toggle("move");
    sideServiceButton.current.classList.toggle("slide-in");
    hideMovingSlide.current.classList.toggle("hide");
    document.querySelectorAll(".service-slide").forEach(slide => slide.classList.toggle("appear"));
  }

  function parallax(event) {
    console.log(event);
  }

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
        {/* <div className='service-cards'>
          <div className='card' ref={accountingCardRef}>Accounting</div>
          <div className='card' ref={payrollCardRef}>Payroll</div>
          <div className='card' ref={advisoryCardRef}>Advisory</div>
          <div className='card' ref={attestationsCardRef}>Attestations</div>
        </div> */}
        <div className="sliding-container">
          <div className="side-service-button">
            <div className="services-text" onClick={clickServiceSlide} ref={sideServiceButton}>Services</div>
          </div>
          <div className="info">
            <div className="hide-moving-slide" ref={hideMovingSlide}>
              <div className="slide intro-service-slide" ref={slide1Ref} id="slide1">
                <div>
                  <h3>Services</h3>
                  <p>
                    We get things done like no one else can. We'll guide
                    you through the process, each step of the way. You want
                    it? We've got it. We can assure things will be just the
                    way you want them. Have them your way... This doesn't
                    count as copyright infringement, right..? 😅
                  </p>
                </div>
                <button className="open-services" onClick={clickServiceSlide}>{"<"}</button>
              </div>
            </div>
            <div className="slide service-slide" id="accounting-slide">
              <h3>Accounting</h3>
              <p>
                We get things done like no one else can. We'll guide
                you through the process, each step of the way. You want
                it? We've got it. We can assure things will be just the
                way you want them. Have them your way... This doesn't
                count as copyright infringement, right..? 😅
              </p>
            </div>
            <div className="slide service-slide" id="payroll-slide">
              <h3>Payroll</h3>
              <p>
                We get things done like no one else can. We'll guide
                you through the process, each step of the way. You want
                it? We've got it. We can assure things will be just the
                way you want them. Have them your way... This doesn't
                count as copyright infringement, right..? 😅
              </p>
            </div>
            <div className="slide service-slide" id="advisory-slide">
              <h3>Advisory</h3>
              <p>
                We get things done like no one else can. We'll guide
                you through the process, each step of the way. You want
                it? We've got it. We can assure things will be just the
                way you want them. Have them your way... This doesn't
                count as copyright infringement, right..? 😅
              </p>
            </div>
            <div className="slide" id="slide2" ref={slide2Ref}>
              <h3>Assurances</h3>
              <p>
                Legal matters aside... This. Is. What. We. Do. It is
                what it is, and we have what you need. It makes perfect
                cents (haha) to go with us. Just keep scrolling, if you
                need more convincing.
              </p>
            </div>
          </div>
          <div className="anim-container">
            <img
              className="anim"
              src="https://cdn.pixabay.com/photo/2023/10/24/12/01/pumpkins-8338100_1280.jpg"
              ref={animRef}
            />
          </div>
        </div>
          <div className='affiliations' ref={affiliations}>
              {/* AICPA, WSCPA, QuickBooks Pro Advisors */}
              <img src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg" className="mcdonalds" />
            
            
              <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" className="google" />
            
            
              <img src="https://www.svgrepo.com/show/303125/apple-logo.svg" className="apple" />
            
              <img src="https://www.svgrepo.com/show/303137/airbnb-2-logo.svg" className="airbnb" />
            
          </div>
          <div className='reviews'>
            <div className='review-card'></div>
            <div className='review-card'></div>
            <div className='review-card'></div>
            <div className='review-card'></div>
            <div className='review-card'></div>
          </div>
          <div className='call-to-action' onScrollCapture={parallax} ref={parallaxBg}>
            <div className="text">RANDOM</div>
          </div>
      </>
    )
}

