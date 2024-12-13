import React, { useState, useEffect } from 'react';
import Footer from '../Pages/Footer/Footer';

const FindDriver = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 1000); 
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="container" style={{ marginBlockStart: '180px' }}>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://picsum.photos/130/130?image=1027"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">Michele Miller</h3>
                  <h4 className="title">Web Developer</h4>
                </div>
                <ul className="social">
                  <li>
                    <a href="#" className="fab fa-facebook" aria-hidden="true"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-twitter" aria-hidden="true"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-google-plus" aria-hidden="true"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-linkedin-in" aria-hidden="true"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://picsum.photos/130/130?image=839"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">Patricia Knott</h3>
                  <h4 className="title">Web Developer</h4>
                </div>
                <ul className="social">
                  <li>
                    <a href="/" className="fab fa-facebook" aria-hidden="true"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-twitter" aria-hidden="true"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-google-plus" aria-hidden="true"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-linkedin-in" aria-hidden="true"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://picsum.photos/130/130?image=856"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">Justin Ramos</h3>
                  <h4 className="title">Web Developer</h4>
                </div>
                <ul className="social">
                  <li>
                    <a href="#" className="fab fa-facebook" aria-hidden="true"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-twitter" aria-hidden="true"></a>
                  </li>
                  <li>
                    <a href="/" className="fab fa-google-plus" aria-hidden="true"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-linkedin-in" aria-hidden="true"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://picsum.photos/130/130?image=836"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">Mary Huntley</h3>
                  <h4 className="title">Web Developer</h4>
                </div>
                <ul className="social">
                  <li>
                    <a href="#" className="fab fa-facebook" aria-hidden="true"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-twitter" aria-hidden="true"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-google-plus" aria-hidden="true"></a>
                  </li>
                  <li>
                    <a href="#" className="fab fa-linkedin-in" aria-hidden="true"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://picsum.photos/130/130?image=856"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">Mary Huntley</h3>
                  <h4 className="title">Web Developer</h4>
                </div>
                <ul className="social">
                  <li>
                    <a href="/" className="fab fa-facebook" aria-hidden="true"></a>
                  </li>
                  <li>
                    <a href="/" className="fab fa-twitter" aria-hidden="true"></a>
                  </li>
                  <li>
                    <a href="/" className="fab fa-google-plus" aria-hidden="true"></a>
                  </li>
                  <li>
                    <a href="/" className="fab fa-linkedin-in" aria-hidden="true"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FindDriver;
