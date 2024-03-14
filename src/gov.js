import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';

function App() {
  return (
    <>
<nav   className="navbar navbar-expand-lg bg-body-tertiary">
  <div   className="container-fluid">
    <a   className="navbar-brand" href="/">GOService</a>
    <button   className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span   className="navbar-toggler-icon"></span>
    </button>
    <div   className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul   className="navbar-nav me-auto mb-2 mb-lg-0">
        <li   className="nav-item">
          <a   className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li   className="nav-item">
          <a   className="nav-link" href="/">Link</a>
        </li>
        <li   className="nav-item dropdown">
          <a   className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sectors
          </a>
          <ul   className="dropdown-menu">
                <li><a   className="dropdown-item" href="/">Transportation</a></li>
                <li><a   className="dropdown-item" href="/">Education</a></li>
                <li><a   className="dropdown-item" href="/">Health</a></li>
              </ul>
            </li>
          </ul>
          <div   className="mymargin">
      <form   className="d-flex" role="search">
        <input   className="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
        <button   className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
        <form   className="d-flex" role="search">
          <Link to="/login">
        <button  className="btn btn-outline-success" type="submit">login</button>
        {/* <button  className="btn btn-outline-success mx-2" type="submit">signup</button> */}
        </Link>
      </form>
 
    </div> 
  </div>
</nav>
<div id="carouselExampleCaptions" className="carousel slide container mb-3 mt-3 bg-body-tertiary">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner rounded">
    <div className="carousel-item active">
      <img src="https://www.intelligenttransport.com/wp-content/uploads/India.jpg" className="d-block w-100 rounded" width="750" height="650" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Transportation</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/03/14/Pictures/_0b20ab4c-26ef-11e8-a8dd-98cd3615fcfa.jpg" className="d-block w-100 rounded" width="750" height="650" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Education</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/02/25/Photos/health-kyGB--621x414@LiveMint.jpg" className="d-block w-100 rounded"  width="750" height="650" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Health</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<footer className="text-center text-lg-start bg-body-tertiary text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">
     
      <div className="row mt-3">
        
        <div className="col-md-5 col-lg-4 col-xl-3 mx-1 mb-4 ">
         
          <h6 className="mb-0" >
            <i className="fas fa-gem"></i>GOService
          </h6>
          <p className="mx-5">
            We are the change,we seek.
          </p>
        </div>
       

      
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 className=" fw-bold mb-2">
           Guides
          </h6>
          <p className="mb-2">
            <a href="/" className="text-reset">Home</a>
          </p>
          <p  className="mb-2">
            <a href="/" className="text-reset">Builder</a>
          </p>
          <p  className="mb-2">
            <a href="/" className="text-reset">How to file a complaint?</a>
          </p>
          <p  className="mb-2">
            <a href="/" className="text-reset">Others</a>
          </p>
        </div>
       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className=" fw-bold mb-1">
            Useful links
          </h6>
          <p  className="mb-2">
            <a href="/" className="text-reset">Transportation</a>
          </p>
          <p  className="mb-2">
            <a href="/" className="text-reset">Education</a>
          </p>
          <p  className="mb-2">
            <a href="/" className="text-reset">Health</a>
          </p>
        </div>
      
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
    
          <h6 className="fw-bold mb-1">Contact</h6>
          <p  className="mb-1"><i className="fas fa-home mb-1"></i>Basavangudi, Bengaluru</p>
          <p  className="mb-1"><i className="fas fa-envelope mb-1"></i>projectFWD@gmail.com</p>
          <p className="mb-1"p><i className="fas fa-phone mb-1"></i>+ 91 82717 67128</p>
          <p  className="mb-1"><i className="fas fa-print mb-1"></i>+ 91 76076 65605</p>
          <p  className="mb-1"><i className="fas fa-print mb-1"></i>+ 91 90199 79712</p>
          < p  className="mb-1"><i className="fas fa-print mb-1"></i>+ 91 97643 07846</p>
        </div>
    
      </div>
      
    </div>
  </section>

  <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="/">GOService</a>
  </div>

</footer>

   </>
   
  );
}

export default App;