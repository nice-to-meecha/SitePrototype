import { useEffect, useRef } from 'react'
import './Test.css'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

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
    hideMovingSlide = useRef(null), parallaxBg = useRef(null), snapContainer = useRef(null),
    firstWords = useRef(null), growingBackground = useRef(null), borderContainer = useRef(null),
    topBorder = useRef(null), leftBorder = useRef(null);
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

  // useEffect(() => {
  //   fadeInTextObserver = new IntersectionObserver((entries, observer) => {
  //     entries.forEach(el => {
  //       if (el.isIntersecting) {
  //         el.target.classList.add("show");
  //         observer.unobserve(el.target);
  //       }
  //     })
  //   }, {
  //     threshold: 1.0,
  //     rootMargin: "-10% 0%"
  //   });

  //   [fadeInTextRef.current, ...affiliations.current.children].forEach(ref => fadeInTextObserver.observe(ref));

  //   //  shrinkObserver = new IntersectionObserver((entries, observer) => {
  //   //   entries.forEach(el => {
  //   //     if (el.isIntersecting) {
  //   //       el.target.classList.add("shrink");
  //   //       observer.unobserve(el.target);
  //   //     }
  //   //   })
  //   // }, {
  //   //   threshold: 1.0,
  //   //   rootMargin: "-10% 0%"
  //   // });
  //   // [accountingCardRef, payrollCardRef, advisoryCardRef].forEach(el => 
  //   //   shrinkObserver.observe(el.current));

  //   stickySlideObserver = new IntersectionObserver((entries, observer) => {
  //     const intersectingEntry = entries.find(entry => entry.isIntersecting);
  //     if (intersectingEntry) {
  //       let newImg;
  //       console.log(intersectingEntry.target.id);
  //       if (intersectingEntry.target.id === "slide1") {
  //         newImg = img1;
  //       } else {
  //         newImg = img2;
  //       }
        
  //       animRef.current.setAttribute("src", newImg);
  //     }
  //   }, options);

  //   [slide1Ref, slide2Ref].forEach(slide => stickySlideObserver.observe(slide.current));
  // })

  // function clickServiceSlide(event) {
  //   // console.log(event);
  //   slide1Ref.current.classList.toggle("move");
  //   sideServiceButton.current.classList.toggle("slide-in");
  //   hideMovingSlide.current.classList.toggle("hide");
  //   document.querySelectorAll(".service-slide").forEach(slide => slide.classList.toggle("appear"));
  // }

  // function parallax(event) {
  //   console.log(event);
  // }



  useGSAP(() => {
    const openingTextAnim = gsap.to(fadeInTextRef.current, {
      opacity: "100%",
      filter: "blur(0px)",
      duration: 0.75,
      onComplete: logComplete,
      onCompleteParams: ["fade in"],
      scrollTrigger: {
        trigger: fadeInTextRef.current,
        start: "-10% bottom",
        end: "-10% 60%",
        scrub: false,
        toggleActions: "none play none reset",
      }
    });

    function logComplete(animName = "\b") {
      console.log(`${animName} completed!`);
    }

    const shiftBackground = gsap.timeline({
      paused: true,
      onStart: console.log,
      onStartParams: ["Starting shift background"],
      onComplete: logComplete,
      onCompleteParams: ["shift background"],
      // scrollTrigger: {
      //   trigger: growingBackground.current,
      //   start: "top+=10% 20%",
      //   end: "bottom top",
      //   scrub: false,
      //   toggleActions: "play none none reverse",
      //   markers: true,
      //   invalidateOnRefresh: true,
      // },
    });
    shiftBackground.to(growingBackground.current, {
        width: "100%",
        duration: 1,
      })
      .set(growingBackground.current, {
        left: "auto",
        right: 0,
      })
      .to(growingBackground.current, {
        width: "50%",
        duration: 1,
      });

    function logAndPlay(animName, timeline) {
      console.log(`${animName} completed!`);
      timeline.invalidate().play(0);
    }

    function playOnLeave(scrollTrigger) {
      console.log("OnLeave triggered");
      shiftBackground.invalidate().play(0);
    }

    // const snap = gsap.timeline();
    // snap.to(growingBackground.current, {
    //   width: "75%",
    //   onComplete: logAndPlay,
    //   onCompleteParams: ["snap", shiftBackground],
    //   scrollTrigger: {
    //     trigger: growingBackground.current,
    //     start: "top 20%",
    //     end: "top+=10% 20%",
    //     scrub: 0.5,
    //     markers: true,
    //     // snap: {
    //     //   delay: 0,
    //     //   duration: 0.1,
    //     // },
    //     // once: false,
    //     invalidateOnRefresh: true,
    //     // refreshPriority: 1,
    //   }, 
    // });

    

    // snap.call(shiftBackground.play);


    const borderAnim = gsap.timeline({
      scrollTrigger: {
        trigger: borderContainer.current,
        start: "20% 20%",
        scrub: false,
        toggleActions: "play none none reset",
        markers: true,
        invalidateOnRefresh: true,
      }
    });

    borderAnim.to(leftBorder.current, {
      width: "100%",
      duration: 1,
    })
      .to(topBorder.current, {
        height: "240vh",
        duration: 2,
      }, "<")
      .to(".inv-slide", {
        opacity: "100%",
        stagger: 0.3,
      }, "<1.1");

    const sectionColorChange = gsap.timeline({
      scrollTrigger: {
        trigger: "section",
        start: "top 15%",
        scrub: false,
        toggleActions: "play none none reset",
        markers: false,
        invalidateOnRefresh: true
      }
    });

    sectionColorChange.to("section", {
      "--trans-perc": "0%",
      duration: 0.5,
    })
      .to("section", {
        "--height": "100%",
        duration: 1.2,
      })
      .to("section > .border-box, section > .first-image", {
        display: "none",
      }, "<0.1")
      .to(".service-slides, .sticky-image", {
        display: "block",
      });

    const cubeTurn = gsap.timeline({
      repeat: -1,
      defaults: {
        duration: 3,
      }
    });
    cubeTurn.to(".cube", { rotateX: -90,  rotateY: 0  })
      .to(".cube", { rotateX: -90,  rotateY: -90 })
      .to(".cube", { rotateX: -90,  rotateY: -180 })
      .to(".cube", { rotateX: 0, rotateY: -180 })
      .to(".cube", { rotateX: 0, rotateY: -270 })
      .to(".cube", { rotateX: 0,  rotateY: -360 });
  }, []);

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
        {/* <div className="sliding-container">
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
        </div> */}
        <div className='snap-container' ref={snapContainer}>
          <div className='first-words' ref={firstWords}>
            <h3>Words</h3>
            <p>More and more words</p>
          </div>
          <div className='first-image'>
            <p>1</p>
          </div>
          <div className='growing-background' ref={growingBackground}/>
        </div>

        <section>
          <div className='border-box'>
            <h3>Borders</h3>
            <p>Why has On the Border come to mind? It's not even in sight.</p>
          </div>
          <div className='first-image'>
            <p>3</p>
          </div>
          <div className='service-slides'>
            <div className='slide-card'>
              <h3>Accounting</h3>
              <p>Something about accounting</p>
            </div>
            <div className='slide-card'>
              <h3>Payroll</h3>
              <p>Info about paying people</p>
            </div>
            <div className='slide-card'>
              <h3>Advisory</h3>
              <p>Helping people to do things</p>
            </div>
          </div>
          <div className='sticky-image'>
          </div>
        </section>

        {/* <div className='border-container' ref={borderContainer}>
          <div className='border-box'>
            <h3>Borders</h3>
            <p>Why has On the Border come to mind? It's not even in sight.</p>
          </div>
          <div className='left-border' ref={leftBorder}>
          </div>
          <div className='top-border' ref={topBorder}>
            <div className='inv-slide'>
              <h3>Accounting</h3>
              <p>Something about accounting</p>
            </div>
            <div className='inv-slide'>
              <h3>Payroll</h3>
              <p>Info about paying people</p>
            </div>
            <div className='inv-slide'>
              <h3>Advisory</h3>
              <p>Helping people to do things</p>
            </div>
          </div>
          <div className='first-image'>
            <p>2</p>
          </div>
        </div> */}

        <div className='affiliations' ref={affiliations}>
          <div className='affiliations-background'>
            <svg version="1.1"
              width="500"
              height="500"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              className='initial-logo'
            >
              <path d="M10,490 v-320 a160,160,0,0,1,160,-160 v340 Z" fill="#2c365d"/>
              <path d="M170,490 v-320 a160,160,0,0,1,160,-160 v340 Z" fill="#f49531"/>
              <path d="M330,490 v-320 a160,160,0,0,1,160,-160 v340 Z" fill="#bebebe"/>
              <path d="M490,490 v-80 l-80,80 Z" fill="#2c365d" />
            </svg>

            <p className='plus-sign'>+</p>

            <div className='cube-scene'>
              <div className='cube'>
                <div className='face'>
                  <p>1</p>
                </div>
                <div className='face'>
                  <p>2</p>
                </div>
                <div className='face'>
                  <p>3</p>
                </div>
                <div className='face'>
                  <p>4</p>
                </div>
                <div className='face'>
                  <p>5</p>
                </div>
                <div className='face'>
                  <p>6</p>
                </div>
              </div>
            </div>

            {/* <svg version="1.1"
              width="180"
              height="500"
              viewBox="0 0 180 500"
              xmlns="http://www.w3.org/2000/svg"
              className='left-logo'
            >
              <path d="M10,490 v-320 a160,160,0,0,1,160,-160 v340 Z" fill="#2c365d"/>
            </svg>
            <svg version="1.1"
              width="180"
              height="500"
              viewBox="0 0 180 500"
              xmlns="http://www.w3.org/2000/svg"
              className='mid-logo'
            >
              <path d="M10,490 v-320 a160,160,0,0,1,160,-160 v340 Z" fill="#f49531"/>
            </svg>
            <svg version="1.1"
              width="180"
              height="500"
              viewBox="0 0 180 500"
              xmlns="http://www.w3.org/2000/svg"
              className='right-logo'
            >
              <path d="M10,490 v-320 a160,160,0,0,1,160,-160 v340 Z" fill="#bebebe"/>
              <path d="M170,490 v-80 l-80,80 Z" fill="#2c365d" />
            </svg> */}
          </div>
            {/* AICPA, WSCPA, QuickBooks Pro Advisors */}
            {/* <img src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg" className="mcdonalds" />
          
          
            <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" className="google" />
          
          
            <img src="https://www.svgrepo.com/show/303125/apple-logo.svg" className="apple" />
          
            <img src="https://www.svgrepo.com/show/303137/airbnb-2-logo.svg" className="airbnb" /> */}
          
        </div>
        <div className='reviews'>
          <div className='review-card'></div>
          <div className='review-card'></div>
          <div className='review-card'></div>
          <div className='review-card'></div>
          <div className='review-card'></div>
        </div>
        <div className='call-to-action' ref={parallaxBg}>
          <div className="text">RANDOM</div>
        </div>
      </>
    )
}

