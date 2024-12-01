import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import serviceimg1 from '../assets/services-1.jpg'
import serviceimg2 from '../assets/services-2.jpg'
import serviceimg3 from '../assets/services-3.jpg'
import room1 from '../assets/room-1.jpg'
import room2 from '../assets/room-2.jpg'
import room3 from '../assets/room-3.jpg'
import room4 from '../assets/room-4.jpg'

import pro1 from '../assets/person_1.jpg'
import pro2 from '../assets/person_2.jpg'
import pro3 from '../assets/person_3.jpg'
import pro4 from '../assets/person_4.jpg'
import pro5 from '../assets/person-5.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
function Home() {
  const[checkinDate, setCheckinDate]=useState(null)
  const[checkoutDate, setCheckoutDate]=useState(null)

  // const [display, setDisplay] = useState(true);
  // const [width, setWidth] = useState(600);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480, // When the screen width is 480px or smaller
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <> 
    
   <div className='first-part'>

      <div  className='bagimg'>
        <div className='top-content d-flex'>
          <div className="content ">
            <p>
            Welcome to Vacation Rental
          </p>
          <h1 id='rent'>
          Rent an appartment for your vacation
          </h1>
  
          <div className='buttonss'>
            <button id='btn1'>LEARN MORE </button>
            <button id='btn2'>CONTACT US </button>
          </div>
            </div>
  
  
       
         
         
        </div>
      
        <div className="bookForm " >
  
  <form action="" className='ms-3'>

  <h3 className="mb-3 text-dark mt-2 ms-5">Book your apartment</h3>
  <input type="text"  className='fname mt-3' placeholder='Full name' style={{height:'43px',width:'390px' ,border:'none',outline:'none' ,borderRadius:'5px',color:'black',backgroundColor:'#EEEEEE'}} />
<div className="row  mt-4">
  <div className="col-6">
  <DatePicker selected={checkinDate} onChange={date=>setCheckinDate(date) } placeholderText='Check-In' className="custom-datepicker" />
  </div>
  <div className="col-6">
  <DatePicker selected={checkoutDate} onChange={date=>setCheckoutDate(date)} placeholderText='Check-Out' className="custom-datepicker text-dark" />

  </div>
</div>

<div className="row mt-4">
  <div className="col-6">

  <select placeholder="Adults" style={{height:'43px',width:'170px' ,border:'none',backgroundColor:"   #EEEEEE",outline:'none' ,borderRadius:'5px'}} >
  <option>Adults</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>
  </div>
  <div className="col-6">
  <select placeholder="chikdren"style={{height:'43px',width:'170px' ,border:'none',backgroundColor:"   #EEEEEE",outline:'none' ,borderRadius:'5px'}} >
  <option>Children</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>
  </div>
</div>
<div className="row mt-4">
  <div className="col-6">
<input type="text" className='phone'  placeholder='Phone'style={{height:'43px',width:'170px' ,border:'none',backgroundColor:"   #EEEEEE",outline:'none' ,borderRadius:'5px'}}  />
  </div>
  <div className="col-6">
 <input type="text" className='time'  style={{height:'43px',width:'170px' ,border:'none',backgroundColor:"   #EEEEEE",outline:'none' ,borderRadius:'5px'}}  placeholder='Time'/>
  </div>
</div>

<button className='bookAppartment mt-4'>
  BOOK APPARTMENT NOW 

</button >

{/* <Button variant="outline-primary">Primary</Button> */}

  </form>
</div>
</div>
   </div>
 
    <div className='cards-home'>
    <Row className='ms-5 mt-5'>
        <Col>  <Card className=' mb-5' style={{ width: '20rem' }}>
      <Card.Img variant="top" src={serviceimg1} />
      <Card.Body>
        <Card.Title style={{fontFamily:'"Playfair Display", serif',fontWeight:'400',fontSize:'26px',textAlign:'center'}}>  Map Direction</Card.Title>
        <Card.Text style={{fontFamily:'"Poppins", Arial, sans-serif',fontSize:'14px',lineHeight:'1.8',fontWeight:'400',color:'grey' ,textAlign:'center'}}>


Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
        </Card.Text>
        <Button variant="primary" className='f-button' style={{marginLeft:'55px',fontFamily:'"Poppins", Arial, sans-serif',fontWeight:'200' ,fontSize:'13px',letterSpacing:'1.5px',backgroundColor:'rgb(253, 119, 146)',borderRadius:'3px',height:'40px'}}>READ MORE</Button>
      </Card.Body>
    </Card></Col>
        <Col>  <Card  className=' mb-5' style={{ width: '20rem' }}>
      <Card.Img variant="top"  src={serviceimg2}/>
      <Card.Body>
        <Card.Title style={{fontFamily:'"Playfair Display", serif',fontWeight:'400',fontSize:'26px',textAlign:'center'}}>  Accomodation Services</Card.Title>
        <Card.Text style={{fontFamily:'"Poppins", Arial, sans-serif',fontSize:'14px',lineHeight:'1.8',fontWeight:'400',color:'grey' ,textAlign:'center'}}>
      
Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
        </Card.Text>
        <Button variant="primary" className='f-button' style={{marginLeft:'55px',fontFamily:'"Poppins", Arial, sans-serif',fontWeight:'200' ,fontSize:'13px',letterSpacing:'1.5px',backgroundColor:'rgb(253, 119, 146)',borderRadius:'3px',height:'40px'}}>READ MORE</Button>
      </Card.Body>
    </Card></Col>
        <Col>  <Card  className=' mb-5' style={{ width: '20rem' }}>
      <Card.Img variant="top"  src={serviceimg3}/>
      <Card.Body>
        <Card.Title style={{fontFamily:'"Playfair Display", serif',fontWeight:'400',fontSize:'26px',textAlign:'center'}}>  Great Experience</Card.Title>
        <Card.Text style={{fontFamily:'"Poppins", Arial, sans-serif',fontSize:'14px',lineHeight:'1.8',fontWeight:'400',color:'grey' ,textAlign:'center'}}>
      
Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
        </Card.Text>
        <Button variant="primary" className='f-button' style={{marginLeft:'55px',fontFamily:'"Poppins", Arial, sans-serif',fontWeight:'200' ,fontSize:'13px',letterSpacing:'1.5px',backgroundColor:'rgb(253, 119, 146)',borderRadius:'3px',height:'40px'}}>READ MORE</Button>
      </Card.Body>
    </Card></Col>
      </Row>

    </div>

    <div className="appartments mt-5">
    <h1 style={{fontFamily:'"Playfair Display", serif',fontWeight:'300' ,textAlign:'center',marginBottom:'50px',marginTop:'10px',fontSize:'50px'}}>Apartment Room</h1>
 <br />

      <Row className=' firstRoom '>
        <Col className='bg-dark' sm= {6}>
        
        <Row>
          <Col sm={6} ><img src={room1} id='room1' className='appartmentImg' />
          </Col>
          <Col sm={6}style={{background:'white',height:'400px'}}>
        <div className='card-details text-center pt-5'>

            <div><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
      <h3  style={{fontWeight:'300',fontSize:'28px',fontFamily:'"Playfair Display", "serif"',paddingTop:'14px'}}>Suite Room</h3>
       
      <p>Max: 3 Persons</p><p>Size: 45 m2</p><p>View: Sea View</p><p>Bed: 1</p>
      <Button variant="primary" style={{height:'40px',width:'150px',backgroundColor:'white',color:'Black',fontSize:'13px',fontWeight:'200',}}> View Room Details</Button>
        </div>
          </Col>
        </Row>
        </Col>
        <Col className='second'  sm={6}>
        <Row>
          <Col sm={6}style={{background:'white',height:'400px'}}><img src={room2} className='appartmentImg' id='room2'/></Col>
          <Col sm={6} style={{background:'white',height:'400px'}}>
          <div className='card-details text-center pt-5'>
            <div><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
      <h3  style={{fontWeight:'300',fontSize:'28px',fontFamily:'"Playfair Display", "serif"',paddingTop:'14px'}}>Standard Room</h3>
       
      <p>Max: 3 Persons</p><p>Size: 45 m2</p><p>View: Sea View</p><p>Bed: 1</p>
      <Button variant="primary" style={{height:'40px',width:'150px',backgroundColor:'white',color:'Black',fontSize:'13px',fontWeight:'200'}}> View Room Details</Button>

        </div>
        </Col>
        </Row>
        </Col>
      </Row>
      
      <Row className='secondRoom bg-primary'>
        <Col className='bg-dark' sm= {6} style={{border:'none'}}>
        
        <Row style={{border:'none'}}>
          <Col sm={6} style={{background:'white',height:'400px',border:'none'}}>
          <div className='card-details text-center pt-5' style={{border:'none'}}>
            <div style={{border:'none'}}><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
      <h3  style={{fontWeight:'300',fontSize:'28px',fontFamily:'"Playfair Display", "serif"',paddingTop:'14px'}}>Family Room</h3>
       
      <p>Max: 3 Persons</p><p>Size: 45 m2</p><p>View: Sea View</p><p>Bed: 1</p>
      <Button variant="primary" style={{height:'40px',width:'150px',backgroundColor:'white',color:'Black',fontSize:'13px',fontWeight:'200'}}> View Room Details</Button>

        </div>
        </Col>
          <Col sm={6}style={{background:'white',height:'400px'}}><img src={room3} className='appartmentImg'  id='room3'/></Col>
        </Row>
        </Col>
        <Col className='bg-primary'  sm={6}>
        <Row>
          <Col sm={6}style={{background:'white',height:'400px'}}>
          <div className='card-details text-center pt-5'>
            <div><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
      <h3  style={{fontWeight:'300',fontSize:'28px',fontFamily:'"Playfair Display", "serif"',paddingTop:'14px'}}>Dulex Room</h3>
       
      <p>Max: 3 Persons</p><p>Size: 45 m2</p><p>View: Sea View</p><p>Bed: 1</p>
      <Button variant="primary" style={{height:'40px',width:'150px',backgroundColor:'white',color:'Black',fontSize:'13px',fontWeight:'200'}}> View Room Details</Button>
        </div></Col>
          <Col sm={6} style={{background:'white',height:'400px'}}><img src={room4}  className='appartmentImg'  id='room4'/></Col>
        </Row>
        </Col>
      </Row>

    </div>

    <div className='clients-review' style={{marginTop:'-20px'}}>
    <h1 style={{fontFamily:'"Playfair Display", serif',fontWeight:'300' ,textAlign:'center',marginBottom:'50px',marginTop:'10px',fontSize:'50px'}}>
    


    Happy Clients & Feedbacks</h1>

    <div className="slider-container" >

      <div
      >
        <Slider {...settings}>
          <div className=''>
           

          <div className='client1'>
              <Row className='  '>
                <Col     className='photo' ><img src={pro1} style={{height:'60px',width:'60px',borderRadius:'50%',marginLeft:'20px',marginTop:'25px'}}></img>
                
                </Col>
                <Col >
                <p>Lorem, ipsum dolor  quia beatae et corrupti, repellendus sequi, optio dolores perferendis. Aliquid.</p>
                <h5 style={{color:'black'}}>Philip</h5>
                <p>Businessman</p>
                </Col>
              </Row>
          </div>
          </div>
          <div>
           
            
          <div className='client2'>
              <Row className='' >
                <Col  className='photo' ><img src={pro2} style={{height:'60px',width:'60px',borderRadius:'50%',marginLeft:'20px',marginTop:'25px'}}></img>
                
                </Col>
                <Col >
                <p>Lorem, ipsum dolor  quia beatae et corrupti, repellendus sequi, optio dolores perferendis. Aliquid.</p>
                <h5 style={{color:'black'}}>Richard</h5>
                <p>Businessman</p>
                
                </Col>
              </Row>
          </div>
          </div>
          <div>

            
         <div className='client3'>
              <Row className='' >
                <Col  className='photo' ><img src={pro3} style={{height:'60px',width:'60px',borderRadius:'50%',marginLeft:'20px',marginTop:'25px'}}></img>
                
                </Col>
                <Col >
                <p>Lorem, ipsum dolor  quia beatae et corrupti, repellendus sequi, optio dolores perferendis. Aliquid.</p>
                <h5 style={{color:'black'}}>Henrry</h5>
                <p>Businessman</p>
                
                </Col>
              </Row>
         </div>
          </div>
          <div>
         
            
      <div className='client4'>
              <Row className=''>
                <Col  className='photo' ><img src={pro4} style={{height:'60px',width:'60px',borderRadius:'50%',marginLeft:'20px',marginTop:'25px'}}></img>
                
                </Col>
                <Col >
                <p>Lorem, ipsum dolor  quia beatae et corrupti, repellendus sequi, optio dolores perferendis. Aliquid.</p>
                <h5 style={{color:'black'}}>Richard</h5>
                <p>Businessman</p>
                
                </Col>
              </Row>
      </div>
          </div>
          <div>
          
            
       <div className='client5'>
              <Row className='' >
                <Col  className='photo' ><img src={pro5} style={{height:'60px',width:'60px',borderRadius:'50%',marginLeft:'20px',marginTop:'25px'}}></img>
                
                </Col>
                <Col >
                <p>Lorem, ipsum dolor  quia beatae et corrupti, repellendus sequi, optio dolores perferendis. Aliquid.</p>
  
                <h5 style={{color:'black'}}>Della</h5>
                <p>Businesswomen</p>
                </Col>
              </Row>
       </div>
          </div>
        </Slider>
      </div>
    </div>





       
    </div>
    <br />

    </>
  )
}

export default Home