import React from 'react'
import Slider from "react-slick";
import BannerBox from '../components/BannerBox'
import ProfitCalculatorBox from '../components/ProfitCalculatorBox'

function FAQScreen() {

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        margin: 20,
        centerMode:true,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          
      
        ]
    }

    
  return (
    <>
        <BannerBox page="Faq" title="FREQUENTLY ASKED QUESTIONS" image="/assets/images/faq/thumb2.png" />




        <section className="help-section padding-top padding-bottom">
            <div className="container">
                <div className="help-content">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-header text-center">
                                <span className="subtitle  fadeInUp">frequently asked questions</span>
                                <h2 className="title mx-100">have many question about us</h2>
                                <p className=" fadeInUp" data--delay=".6s">
                                    Dapibus et amet sociis, arcu orci orci tincidunt neque. Purus etortor sjustmauris eumalesuada architecto.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="faq-tab-menu nav-tabs nav border-0 row g-4 justify-content-center">
                        <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2  fadeInUp" data--delay=".1s">
                            <a href="#investor" className="item active" data-bs-toggle="tab">
                                <div className="thumb">
                                    <img src="assets/images/help/trading.png" alt=""/>
                                </div>
                                <h5>Become an investor</h5>
                            </a>
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2  fadeInUp" data--delay=".2s">
                            <a href="#privacy" className="item" data-bs-toggle="tab">
                                <div className="thumb">
                                    <img src="assets/images/help/password.png" alt=""/>
                                </div>
                                <h5>our company privacy</h5>
                            </a>
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2  fadeInUp" data--delay=".3s">
                            <a href="#account" className="item" data-bs-toggle="tab">
                                <div className="thumb">
                                    <img src="assets/images/help/support.png" alt=""/>
                                </div>
                                <h5>how setting account</h5>
                            </a>
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2  fadeInUp" data--delay=".4s">
                            <a href="#account" className="item" data-bs-toggle="tab">
                                <div className="thumb">
                                    <img src="assets/images/help/support.png" alt=""/>
                                </div>
                                <h5>how setting account</h5>
                            </a>
                        </div>
                    </div>
                    <div className="tab-content  fadeInUp">
                        <div className="tab-pane show fade active" id="investor">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="faq-wrapper">
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Why You Should Become An Investor?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item open active">
                                            <div className="faq-title">
                                                <h5 className="title">Can I Invest Using Cryptocurrency?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Why You Choose Us?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="faq-wrapper">
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Why You Should Become An Investor?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item open active">
                                            <div className="faq-title">
                                                <h5 className="title">Can I Invest Using Cryptocurrency?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Why You Choose Us?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane show fade" id="privacy">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="faq-wrapper">
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Frequently gets updated based on new data insights.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item open active">
                                            <div className="faq-title">
                                                <h5 className="title">Drives internal pageviews to.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Showcases expertise, trust, and authority.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="faq-wrapper">
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Frequently gets updated based on new data insights.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item open active">
                                            <div className="faq-title">
                                                <h5 className="title">Drives internal pageviews to.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Showcases expertise, trust, and authority.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane show fade" id="account">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="faq-wrapper">
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Frequently gets updated based on new data insights.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item open active">
                                            <div className="faq-title">
                                                <h5 className="title">Drives internal pageviews to.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Showcases expertise, trust, and authority.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="faq-wrapper">
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Frequently gets updated based on new data insights.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item open active">
                                            <div className="faq-title">
                                                <h5 className="title">Drives internal pageviews to.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Showcases expertise, trust, and authority.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        <section className="commission-section bg_img" style={{ background: "url(assets/images/affiliate/bg.jpg) no-repeat center" }}>
            <div className="container">
                <div className="commission-wrapper">
                    <div className="commission-thumb d-none d-lg-block">
                        <img src="assets/images/commission/thumb.png" alt="commission"/>
                    </div>
                    <div className="commission-content"> 
                        <h2 className="title">30% <br/>
                            <span>Affiliate Commission</span>
                        </h2>
                        <p>
                            Phasellus a non dui hymenaeos mi ideu non ut lacus, nec erat consequataceuaugueid augue gravida consequat Magna erat nuncsit.
                        </p>
                        <a href="affiliate.html" className="cmn--btn">View Details</a>
                        <div className="shape1">
                            <img src="assets/images/commission/shape1.png" alt="commission"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   


   
   <section className="testimonial-section-two padding-top padding-bottom">
       <div className="container">
           <div className="row justify-content-center">
               <div className="col-lg-7">
                   <div className="section-header text-center">
                       <span className="subtitle  fadeInUp">client feedback</span>
                       <h2 className="title  mx-100">Happy Client What Say About Us</h2>
                       <p className=" fadeInUp" data--delay=".6s">
                           Pipsum dolor sit amet consectetur adipisicing elit. Aliquam modi explicabo nam ex unde et dolorum non dolor! Dolorum nobis
                       </p>
                   </div>
               </div>
           </div>
           <div className="testimonial-slider-two">
               <Slider {...settings}>
                   <div className="single-slider">
                       <div className="testimonial-item-two">
                           <div className="testimonial-thumb-two">
                               <img src="assets/images/testimonial/item2.png" alt=""/>
                           </div>
                           <div className="testimonial-content-two">
                               <div className="quote-icon">
                                   <i className="las la-quote-left"></i>
                               </div>
                               <h4 className="name">Robindronat</h4>
                               <span className="designation">Hyip Investor</span>
                               <p>Placerat pellentesque eros elit lobortis eleifend amet vivamus integer sed tellus quibusdam mauris. Leo cras molestie.</p>
                           </div>
                       </div>
                   </div>
                   <div className="single-slider">
                       <div className="testimonial-item-two">
                           <div className="testimonial-thumb-two">
                               <img src="assets/images/testimonial/item4.png" alt=""/>
                           </div>
                           <div className="testimonial-content-two">
                               <div className="quote-icon">
                                   <i className="las la-quote-left"></i>
                           </div>
                               <h4 className="name">Robindronat</h4>
                               <span className="designation">Hyip Investor</span>
                               <p>Placerat pellentesque eros elit lobortis eleifend amet vivamus integer sed tellus quibusdam mauris. Leo cras molestie.</p>
                           </div>
                       </div>
                   </div>
                   <div className="single-slider">
                       <div className="testimonial-item-two">
                           <div className="testimonial-thumb-two">
                               <img src="assets/images/testimonial/item3.png" alt=""/>
                           </div>
                           <div className="testimonial-content-two">
                               <div className="quote-icon">
                                   <i className="las la-quote-left"></i>
                               </div>
                               <h4 className="name">Robindronat</h4>
                               <span className="designation">Hyip Investor</span>
                               <p>Placerat pellentesque eros elit lobortis eleifend amet vivamus integer sed tellus quibusdam mauris. Leo cras molestie.</p>
                           </div>
                       </div>
                   </div>
                   <div className="single-slider">
                       <div className="testimonial-item-two">
                           <div className="testimonial-thumb-two">
                               <img src="assets/images/testimonial/item4.png" alt=""/>
                           </div>
                           <div className="testimonial-content-two">
                               <div className="quote-icon">
                                   <i className="las la-quote-left"></i>
                               </div>
                               <h4 className="name">Robindronat</h4>
                               <span className="designation">Hyip Investor</span>
                               <p>Placerat pellentesque eros elit lobortis eleifend amet vivamus integer sed tellus quibusdam mauris. Leo cras molestie.</p>
                           </div>
                       </div>
                   </div>

               </Slider>
           </div>
       </div>
   </section>



   <section className="payment-gateway padding-bottom">
       <div className="container">
           <div className="row align-items-center gy-4">
               <div className="col-lg-5">
                   <div className="section-header">
                       <h2 className="title  fadeInUp" data--delay=".5s">We accept payment in crypto</h2>
                       <p className=" fadeInUp" data--delay=".6s">
                           We support the popular cryptocurrencies like Bitcoin, Ethereum, Tether, Litecoin, Dash, Binance, Solana, and many more.
                       </p>
                   </div>
               </div>
               <div className="col-lg-7  fadeInRight">
                   <div className="payment-gateway-slider">
                       <div className="sigle-slider">
                           <div className="gateway-item">
                               <img src="/assets/images/gateway/icon1.png" alt="gateway"/>
                               <span className="coin-name">Bitcoin</span>
                           </div>
                       </div>
                       <div className="sigle-slider">
                           <div className="gateway-item">
                               <img src="/assets/images/gateway/icon2.png" alt="gateway"/>
                               <span className="coin-name">Ethereum</span>
                           </div>
                       </div>
                       <div className="sigle-slider">
                           <div className="gateway-item">
                               <img src="/assets/images/gateway/icon3.png" alt="gateway"/>
                               <span className="coin-name">Ripple</span>
                           </div>
                       </div>
                       <div className="sigle-slider">
                           <div className="gateway-item">
                               <img src="/assets/images/gateway/icon4.png" alt="gateway"/>
                               <span className="coin-name">Litecoin</span>
                           </div>
                       </div>
                       <div className="sigle-slider">
                           <div className="gateway-item">
                               <img src="/assets/images/gateway/icon2.png" alt="gateway"/>
                               <span className="coin-name">Ethereum</span>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>



        <ProfitCalculatorBox/>
    </>
  )
}

export default FAQScreen