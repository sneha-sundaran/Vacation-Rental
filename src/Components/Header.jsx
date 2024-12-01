import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() {
  
  return (
    <>
    <div  className='header' >
        <div className='topnav text-white  ' style={{width:'100%',height:'25px',backgroundColor:'rgb(252, 69, 106)',fontSize:'13px', textAlign:'center'}}>
          
<div className='d-flex justify-content-between'>
  
  <div className='d-flex'><p><span style={{color: 'rgba(255, 255, 255,0.6)'}}>Phone no</span>: +00 1234 567 </p> <p> <span style={{color: 'rgba(255, 255, 255,0.6)'}} >or  email us:</span> emailsample@email.com</p></div>
  <div className='nav-icon me-5'>

 <a href=''  style={{fontSize:'16px',paddingLeft:'20px', color:'white',textDecoration:'none'}}> <i className="fa-brands fa-facebook"></i></a>
<a  href=''  style={{fontSize:'16px',paddingLeft:'20px', color:'white',textDecoration:'none'}}>  <i className="fa-brands fa-twitter"></i></a>
<a  href=''  style={{fontSize:'16px',paddingLeft:'20px', color:'white',textDecoration:'none'}}>  <i className="fa-brands fa-instagram"></i></a>
<a  href=''  style={{fontSize:'16px',paddingLeft:'20px', color:'white',textDecoration:'none'}} ><i className="fa-brands fa-dribbble"></i>
  
</a>
    
  </div>
  
</div>
        </div>

        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><h4 style={{fontWeight:'bolder'}}>Vacation<span style={{color:'rgb(253, 119, 146)'}}>Rental</span></h4>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action1">About</Nav.Link>
            <Nav.Link href="#action1">Services</Nav.Link>
            <Nav.Link href="#action1">Appartment</Nav.Link>
            <Nav.Link href="#action1">Blog</Nav.Link>
            <Nav.Link href="#action1">Contact</Nav.Link>
          
            
          </Nav>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <Navbar expand="lg" className="bg-body-white">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
       
        <Navbar.Collapse id="basic-navbar-nav">
         
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

    </div>
     
    </>
  )
}

export default Header