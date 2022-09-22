import video from '../videos/planePage.mp4'

function Airplane () {
    return(
        <div>
            <div className='videBg'>
                <video src={video} autoPlay loop muted style={{opacity:'0.8'}}></video>
            </div>
        </div>


    )
}
export default Airplane;
