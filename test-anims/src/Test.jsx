import './Test.css'

function App() {

    return (
      <>
        <div className='header'>
          {/* Include multiple sources with different file formats,
            for varying browser support */}
          <video className='header-video' autoPlay controls loop muted>
            <source
              src='/test-stock-video.mp4'
              type='video/mp4'
            />
            Video giving meaningful introduction to Blantyre Business Services
          </video>
        </div>
        <div className='opening-text'/>
        <div className='service-intros'/>
        <div className='certs'/>
        <div className='reviews'/>
        <div className='call-to-action'/>
        <div className='footer'/>
      </>
    )
}

export default App
