import React from 'react'
import Button from 'react-bootstrap/Button';
function Footer() {
  
  return (
    <>

    <div className='Footer bg-dark text-white pt-5 ps-3 '  style={{fontFamily:' "Poppins", Arial, sans-serif'}}>
      <br/>
        <div className="row mt-5 mb-5" >
            <div className="col-lg-3"   style={{fontFamily:' "Poppins", Arial, sans-serif'}}>
         <h4   style={{fontFamily:' "Poppins", Arial, sans-serif'}}>Vacation Rental</h4>
         <br /> 
         <p style={{color:'rgba(255,255,255,0.3)'}}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
   <div className='d-flex' style={{color:'rgb(253, 119, 146)'}}> <p>Read more <i class="fa-solid fa-greater-than" style={{marginLeft:'5px',fontSize:'10px'}}></i> </p> </div>
   
            </div>
            <div className="col-lg-3">
                <h4   style={{fontFamily:' "Poppins", Arial, sans-serif'}}>Services</h4>
                <br />
                <div style={{color:'rgba(255,255,255,0.5)'}}> 
                    
  <p>  Map Direction</p>
  <p>  Accomodation Services</p>
   <p> Great Experience</p>
 <p>   Perfect central location</p>

                </div>

            </div>
          <div className="col-lg-3">
                <h4   style={{fontFamily:' "Poppins", Arial, sans-serif'}}>Tag cloud</h4>
                <br />
                <div className=''>


                <Button className='custom-hover-btn' variant="outline-primary" style={{color:'white',backgroundColor:'dark',borderColor:'gray',fontSize:'12px'}}>  APARTMENT</Button>
             
                <Button variant="custom-primary" style={{color:'white',backgroundColor:'dark',borderColor:'gray',fontSize:'12px',marginLeft:'10px'}}>  HOME</Button>
                <Button variant="outline-primary" style={{color:'white',backgroundColor:'dark',borderColor:'gray',fontSize:'12px',marginLeft:'10px'}}>  VACTION</Button>
                <Button variant="outline-primary" style={{color:'white',backgroundColor:'dark',borderColor:'gray',fontSize:'12px',marginTop:'10px'}}>  RENTAL</Button>
                <Button variant="outline-primary" style={{color:'white',backgroundColor:'dark',borderColor:'gray',fontSize:'12px',marginLeft:'10px',marginTop:'10px'}}>  RENT</Button>
                <Button variant="outline-primary" style={{color:'white',backgroundColor:'dark',borderColor:'gray',fontSize:'12px',marginLeft:'10px',marginTop:'10px'}}>  HOUSE</Button> <br />
                <Button variant="outline-primary" style={{color:'white',backgroundColor:'dark',borderColor:'gray',fontSize:'12px',marginTop:'10px'}}>  PLACE</Button>
                <Button variant="outline-primary" style={{color:'white',backgroundColor:'dark',borderColor:'gray',fontSize:'12px' ,marginLeft:'10px',marginTop:'10px'}}>  DRINKS</Button>
                       
                </div>
              

            </div>

            <div className="col-lg-3">
            <h4   style={{fontFamily:' "Poppins", Arial, sans-serif'}}>Subcribe</h4>
            <br />

            <form action="" >
                  
             <div className='d-flex '  style={{height:'45px ' ,width:'260px' ,backgroundColor:'black'}}>
                    <input type="text" placeholder='enter your email address' style={{outline:'none',backgroundColor:'rgba(255,255,255,0.2)',border:'none',width:'260px'}} />
                <i className='fa fa-paper-plane' style={{fontSize:'20px',height:'45px',width:'40px',backgroundColor:'rgb(253, 119, 146)',paddingLeft:'9px',paddingTop:'9px'}}> </i>
             </div>

            </form>
            <br />
            <h5>Follow us</h5>
            <br />

            <div>
            <a  href=''  style={{fontSize:'16px', color:'white',textDecoration:'none'}}>  <i className="fa-brands fa-twitter"></i></a>
            <a href=''  style={{fontSize:'16px',paddingLeft:'20px', color:'white',textDecoration:'none'}}> <i className="fa-brands fa-facebook"></i></a>
            <a  href=''  style={{fontSize:'16px',paddingLeft:'20px', color:'white',textDecoration:'none'}}>  <i className="fa-brands fa-instagram"></i></a>

            </div>
            </div>
            </div>
            <br /><br />
        </div>
    




  
    </>
  )
}

export default Footer