import plane from '../videos/plane.mp4'


function Main () {
    return(
        <div>
        <div className='main'>
        <div className='videoBg'>
        <video src={plane} autoPlay loop muted></video>
        </div>
        <div className='mainContent'>
        <p>TRIP YOGIYA</p>
        </div>
        </div>
        </div>
        
    )

}

export default Main;