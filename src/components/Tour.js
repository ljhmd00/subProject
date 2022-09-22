import safari from '../videos/train.mp4'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import train from '../images/train.jpg'
import train2 from '../images/train2.jpg'
import {useState, useEffect} from 'react'
import {useRef} from 'react'



function Tour () {

    const [position, setPosition] =useState(0)

    function onScroll() {
        setPosition(window.scrollY)
    }

    useEffect(()=>{
        window.addEventListener('scroll', onScroll)
        return() => {
            window.removeEventListener('scroll',onscroll)
        }
    },[])

    const reserve = useRef(null)

    const scrollToSection = (elementRef) =>{
        window.scrollTo({
        top:elementRef.current.offsetTop,
        behavior:'smooth'
        })
    }
    





    return(
        <div>
            <div className='videoBg'>
                <video src={safari} autoPlay loop muted style={{width:'100%'}}></video>
            </div>
            <div className='mainContent'>
                <p>TRAIN TOUR</p>
                <Button variant="outline-light" style={{fontSize:'24px'}}
                onClick={()=>scrollToSection(reserve)}>투어 신청하기</Button>{' '}
            </div>

            <div className='tourNav' style={{
                width:'100%', 
                height:'100px',
                textAlign:'center',
                }} >
            </div>

            <div className='tourContent' style={{
                marginTop:'60px',
                display:'flex',
                }} ref={reserve}>
            <Card style={{
                width:'500px',
                marginLeft:'-260px',
                transform:`translateX(${position}px)`
                }}>
            <Card.Img src={train} />
            <Card.Body>
            <Card.Text style={{textAlign:'center'}}>
                외곽 기차 투어
            </Card.Text>
            </Card.Body>
            <Button variant="dark">예약하기</Button>
            </Card>

            <Card style={{
                width:'500px', 
                position:'absolute' ,
                marginTop:'470px',
                marginLeft:'1030px',
                transform:`translateX(${-position}px)`
                }}>
            <Card.Img src={train2} />
            <Card.Body>
            <Card.Text  style={{textAlign:'center'}}>
                시티 기차 투어
            </Card.Text>
            </Card.Body>
            <Button variant="dark">예약하기</Button>
            </Card>
            </div>







        </div>





    )
}

export default Tour;