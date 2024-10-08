import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='background-logo'>
          <div className="footer-menu">
            <div className="footer-subtitle get-started">
              <h3>Get Started</h3>
              <div><a>Phone</a></div>
              <div><a>Email</a></div>
              <div>
                <a>Insta icon</a>
                <a>FB icon</a>
              </div>
            </div>
            <div className="footer-subtitle us">
              <h3>Us</h3>
              <div><a>About</a></div>
              <div><a>Contact</a></div>
            </div>
            <div className="footer-subtitle services">
              <h3>Services</h3>
              <div><a>Accounting</a></div>
              <div><a>Payroll</a></div>
              <div><a>Advisory</a></div>
              <div><a>Attestations</a></div>
            </div>
          </div>
          <svg version="1.1"
              width="500"
              height="500"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              id="bbs-logo-footer">

            <path
              d="M10,490 v-320 a159,159,0,0,1,159,-159 v340 Z"
              fill="#ffffff15"
              // stroke="#fff"
              // strokeOpacity={0.25}
              // strokeWidth={3}
            />
            <path
              d="M170,490 v-320 a159,159,0,0,1,159,-159 v340 Z"
              fill="#ffffff15"
              // stroke="#fff"
              // strokeOpacity={0.25}
              // strokeWidth={3}
            />
            <path
              d="M330,490 v-320 a159,159,0,0,1,159,-159 v340 Z"
              fill="#ffffff15"
              // stroke="#fff"
              // strokeOpacity={0.25}
              // strokeWidth={3}
            />
            <path
              d="M490,490 v-80 l-80,80 Z"
              fill="#ffffff15"
              // stroke="#fff"
              // strokeOpacity={0.25}
              // strokeWidth={3}
            />
          </svg>
        </div>
    </footer>
  )
}