import video from '../videos/about.mp4'

function About () {
    return(
        <div>
            <div className='videoBg'>
                <video src={video} autoPlay loop muted style={{opacity:'0.8',width:'100%'}}></video>
            </div>
        </div>

    )
}

export default About;