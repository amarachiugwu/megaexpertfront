import React, { useEffect } from "react";
// import $ from 'jquery'
import Slider from "react-slick";
import WhyUsBox from "../components/WhyUsBox";
import ProfitCalculatorBox from '../components/ProfitCalculatorBox'
function HomeScreen () {

    useEffect(() => {
        
        // $(".counter-item").each(function () {
        //     $(this).isInViewport(function (status) {
        //       if (status === "entered") {
        //         for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
        //           var el = document.querySelectorAll('.odometer')[i];
        //           el.innerHTML = el.getAttribute("data-odometer-final");
        //         }
        //       }
        //     });
        // });
      
    }, [])

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <i 
                onClick={onClick}
                className="las la-arrow-right arrow-right slick-arrow"></i>
        );
    }

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <i 
                onClick={onClick}
                className="las la-arrow-left arrow-left slick-arrow"></i>
        );
    }

    var testimonials = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,
        focusOnSelect: true,
        autoplay: true,
        pauseOnHover: true,
        centerMode: true,
        fade: true,
        speed: 1000,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    }

    const styles = {
        testimonialImg:{
            borderRadius: '15px 0px 15px 15px',
            overflow: 'hidden',
            width: '100px',
            margin: '0 auto',
        }
    }

    var sponsors = {
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
      
        ]
    };

    function  toggleQstn() {

    }


    return (
        
        <>
            
            <section className="banner-section bg_img" style={{ background: "url(/assets/images/banner/bg.png) center bottom" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4  d-none d-lg-block">
                            <div className="banner-thumb">
                                <img src="assets/images/banner/thumb.png" alt="banner"/>
                                <div className="shapes ">
                                    <div className="shape2">
                                        <img src="assets/images/banner/shape1.png" alt="banner"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="banner-content">
                                <h1 className="banner-title">Mega <span className="text--base">Expert </span><span> Finance</span></h1>
                                <span className="subtitle" style={{ textTransform:"lowercase" }}>DECENTRALIZED TRADING & INVESTMENT PLATFORM WITH BLOCKCHAIN INFRASTRUCTURE</span>
                                <div className="button-group d-flex flex-wrap align-items-center">
                                    <a href="sign-up" className="cmn--btn btn--secondary">get started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="how-work padding-top padding-bottom">
                <div className="container">
                    <div className="row justif-content-center align-items-center">
                        <div className="col-lg-6">
                            <div className="how-work-left-content">
                                <div className="section-header wow fadeInUp">
                                    <span className="subtitle">How to Do It</span>
                                    <h2 className="title">try easy 3 step to invest</h2>
                                    <p>We welcome you to the digital world of crypto investment, Mega Expert Finance is an active cryptocurrency mining and trading participant, crypto-currency asset management, which is built on many years of experience and deep market knowledge in the stock and digital market.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row align-items-center gy-4">
                                <div className="col-md-6 col-sm-6">
                                    <div className="row gy-4">
                                        <div className="col-12 wow fadeInUp" data-wow-delay=".2s">
                                            <div className="how-work-item">
                                                <div className="how-work-item-thumb theme-one">
                                                    <i className="las la-atlas"></i>
                                                </div>
                                                <div className="how-work-item-content">
                                                    <h4 className="title"><a href="sign-up.html">Quick Registration</a></h4>
                                                    <p>Signup today to enjoy all the invetment options.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeInUp" data-wow-delay=".3s">
                                            <div className="how-work-item gradient-two">
                                                <div className="how-work-item-thumb theme-two">
                                                    <i className="las la-hand-holding-usd"></i>
                                                </div>
                                                <div className="how-work-item-content">
                                                    <h4 className="title"><a href="investment-plan-01.html">Make An Invest</a></h4>
                                                    <p>Our investment options are the best you can ever find.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="how-work-item gradient-four">
                                        <div className="how-work-item-thumb theme-four">
                                            <i className="las la-wallet"></i>
                                        </div>
                                        <div className="how-work-item-content">
                                            <h4 className="title"><a href="login.html">Get Your Profit</a></h4>
                                            <p>Get your profit instantly on withdrawal.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            


            <div className="sponsor-section wow fadeInUp">
                <div className="container">
                    <div className="sponsor-slider">
                        <Slider {...sponsors}>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item1.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item2.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item3.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item4.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item5.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item6.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item1.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item2.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item3.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item4.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item5.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item6.png" alt=""/>
                                </div>
                            </div>
                        </Slider> 
                    </div>
                </div>
            </div>




            <section className="feature-section padding-top">
                <div className="container">
                    <div className="row align-items-center gy-5 ">
                        <div className="col-lg-6 col-md-10 wow fadeInLeft d-none d-lg-block" >
                            <div className="feature-thumb">
                                <img src="assets/images/feature/thumb.png" alt="feature"/>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight">
                            <div className="feature-content">
                                <div className="section-header">
                                    <span className="subtitle">awesome hyip features</span>
                                    <h2 className="title">our best Hyip features</h2>
                                </div>
                                <ul className="feature-info-list">
                                    <li>
                                        Mega Expert Finance is completely free of charge and accessible accross the globe!.
                                    </li>
                                    <li>
                                        Mega Expert Finance can help you trade in both the manual and automatic formats with an average of 87.35% Win Rate across all compatible brokers.
                                    </li>
                                    <li>
                                        
                                        Mega Expert Finance is fully SSL and highly secure thereby providing little or no chance for your personal details to be phished by cyber-criminals.    
                                    </li>
                                    <li>
                                        Mega Expert Finance can be synced with the Top-Class brokers in the market providing you with security for your capital and a peace of mind.
                                    </li>
                                    <li>
                                        Mega Expert Finance is completely free of charge and accessible accross the globe!.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="plan-section padding-top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-header text-center">
                                <span className="subtitle wow fadeInUp">choose your plan</span>
                                <h2 className="title wow fadeInUp" data-wow-delay=".4s">best investment platform for your profit</h2>
                            </div>
                        </div>
                    </div>
                    <div className="plan-wrapper row g-4">
                        <div className="col-sm-6 col-lg-12">
                            <div className="plan-item wow fadeIn" data-wow-delay=".1s">
                                <div className="plan-inner-part">
                                    <h2 className="plan-interest-percent">600%</h2>
                                </div>
                                <div className="plan-inner-part">
                                    <ul className="plan-invest-limit">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Minimum : $30.00
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Maximum : $1500.00
                                        </li>
                                    </ul>
                                </div>
                                <div className="plan-inner-part">
                                    <h2 className="plan-invest-time">04 <sub>DAYS</sub></h2>
                                </div>
                                <div className="plan-inner-part">
                                    <a href="login.html" className="cmn--btn-2">Invest now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-12">
                            <div className="plan-item wow fadeIn" data-wow-delay=".2s">
                                <div className="plan-inner-part">
                                    <h2 className="plan-interest-percent">700%</h2>
                                </div>
                                <div className="plan-inner-part">
                                    <ul className="plan-invest-limit">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Minimum : $30.00
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Maximum : $1500.00
                                        </li>
                                    </ul>
                                </div>
                                <div className="plan-inner-part">
                                    <h2 className="plan-invest-time">10 <sub>DAYS</sub></h2>
                                </div>
                                <div className="plan-inner-part">
                                    <a href="login.html" className="cmn--btn-2">Invest now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-12">
                            <div className="plan-item wow fadeIn" data-wow-delay=".3s">
                                <div className="plan-inner-part">
                                    <h2 className="plan-interest-percent">800%</h2>
                                </div>
                                <div className="plan-inner-part">
                                    <ul className="plan-invest-limit">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Minimum : $30.00
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Maximum : $1500.00
                                        </li>
                                    </ul>
                                </div>
                                <div className="plan-inner-part">
                                    <h2 className="plan-invest-time">07 <sub>DAYS</sub></h2>
                                </div>
                                <div className="plan-inner-part">
                                    <a href="login.html" className="cmn--btn-2">Invest now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-12">
                            <div className="plan-item wow fadeIn" data-wow-delay=".4s">
                                <div className="plan-inner-part">
                                    <h2 className="plan-interest-percent">1200%</h2>
                                </div>
                                <div className="plan-inner-part">
                                    <ul className="plan-invest-limit">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Minimum : $30.00
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Maximum : $1500.00
                                        </li>
                                    </ul>
                                </div>
                                <div className="plan-inner-part">
                                    <h2 className="plan-invest-time">15 <sub>DAYS</sub></h2>
                                </div>
                                <div className="plan-inner-part">
                                    <a href="login.html" className="cmn--btn-2">Invest now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button text-center wow slideIn pb-4">
                        <a href="investment-plan-01.html" className="cmn--btn">Discover More</a>
                    </div>
                </div>
            </section>




            <section className="counter-section padding-top">
                <div className="container">
                    <div className="row justif-content-center gy-5">
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-wrapper">
                                <div className="counter-item">
                                    <div className="counter-inner">
                                        <h2 className="counter-sign">$ </h2>
                                        <span className="odometer title" data-odometer-final="557"></span>
                                    </div>
                                </div>
                                <span className="info">Invested in pitches</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-wrapper">
                                <div className="counter-item">
                                    <div className="counter-inner">
                                        <span className="odometer title" data-odometer-final="254"></span>
                                        <h2 className="counter-sign">K</h2>
                                    </div>
                                </div>
                                <span className="info">Registrated Members</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-wrapper">
                                <div className="counter-item">
                                    <div className="counter-inner">
                                        <span className="odometer title" data-odometer-final="774"></span>
                                        <h2 className="counter-sign">K</h2>
                                    </div>
                                </div>
                                <span className="info">Average Investment</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-wrapper">
                                <div className="counter-item">
                                    <div className="counter-inner">
                                        <span className="odometer title" data-odometer-final="7740"></span>
                                    </div>
                                </div>
                                <span className="info">Total Investment Plan</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <WhyUsBox/>




            <section className="testimonial-seciton pb-180">
                <div className="container">
                    <div className="row gy-4 align-items-center justify-content-center">
                        <div className="col-lg-5 d-none d-lg-block  wow slideInLeft">
                            <div className="testimonial-thumb">
                                <img src="assets/images/testimonial/thumb2.png" alt="testimonial"/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-10">
                            <div className="testimonial-content">
                                <div className="section-header text-center">
                                    <span className="subtitle wow fadeInUp">our happly client</span>
                                    <h2 className="title wow fadeInUp" data-wow-delay=".5s">Discover Our Happy 
                                        Client Feedback</h2>
                                </div>
                                <div className="testimonial-slider-wrapper">
                                    
                                    <div className="testimonial-slider">
                                        <Slider
                                            {...testimonials}
                                            >
                                            <div className="content-item">
                                                <div className="img-item padding bottom" style={styles.testimonialImg}>
                                                    <img src="assets/images/testimonial/item3.png" alt="testimonial"/>
                                                </div>

                                                <div className="quote-icon">
                                                    <i className="las la-quote-left"></i>
                                                </div>
                                                <div className="content-inner">
                                                    <p>
                                                    Pipsum dolor sit, amet  adipisicing elit. Molestiae similique facere quia! Eligendi, eveniet aut impedit deleniti autem obcaecati ni
                                                    </p>
                                                    <h5 className="name">Robindronath Chondro</h5>
                                                    <span className="designation">Businessman</span>
                                                </div>
                                            </div>
                                            <div className="content-item">

                                                <div className="img-item padding bottom" style={styles.testimonialImg}>
                                                    <img src="assets/images/testimonial/item3.png" alt="testimonial"/>
                                                </div>

                                                <div className="quote-icon">
                                                    <i className="las la-quote-left"></i>
                                                </div>
                                                <div className="content-inner">
                                                    <p>
                                                        Mattis vestibulum elit omnis metuseu urna at facilisi loborntum turpis velsed molestie varius purus rhoncus 
                                                    </p>
                                                    <h5 className="name">Jubayer Al Somser</h5>
                                                    <span className="designation">Developer</span>
                                                </div>
                                            </div>
                                            <div className="content-item">
                                                <div className="img-item padding bottom" style={styles.testimonialImg}>
                                                    <img src="assets/images/testimonial/item4.png" alt="testimonial"/>
                                                </div>

                                                <div className="quote-icon">
                                                    <i className="las la-quote-left"></i>
                                                </div>
                                                <div className="content-inner">
                                                    <p>
                                                        Kikit Mattis vestibulum elit omnis metuseu urna at facilisi loborntum turpis velsed molestie varius purus rhoncus  incidunt ipsam soluta rem ipsum.
                                                    </p>
                                                    <h5 className="name">Raihan Rafuj</h5>
                                                    <span className="designation">Designer</span>
                                                </div>
                                            </div> 
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="help-section  overflow-hidden">
                <div className="container">
                    <div className="row align-items-center gy-5 flex-column-reverse flex-lg-row">
                        <div className="col-lg-6">
                            <div className="help-content">
                                <div className="section-header">
                                    <span className="subtitle wow fadeInUp">we are ready for your help</span>
                                    <h2 className="title wow fadeInUp" data-wow-delay=".5s">How We Can Help You?</h2>
                                    <p className="wow fadeInUp" data-wow-delay=".6s">
                                        Dapibus et amet sociis, arcu orci orci tincidunt neque. Purus etortor sjustmauris eumalesuada architecto.
                                    </p>
                                </div>
                                <div className="faq-tab-menu nav-tabs nav border-0 row g-4 justify-content-center">
                                    <div className="col-6 col-sm-4 col-md-4 col-lg-6 col-xl-4 wow fadeInLeft" data-wow-delay=".2s">
                                        <a href="#investor" className="item active" data-bs-toggle="tab">
                                            <div className="thumb">
                                                <img src="assets/images/help/trading.png" alt=""/>
                                            </div>
                                            <h5>Become an investor</h5>
                                        </a>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-4 col-lg-6 col-xl-4 wow fadeInLeft" data-wow-delay=".3s">
                                        <a href="#privacy" className="item" data-bs-toggle="tab">
                                            <div className="thumb">
                                                <img src="assets/images/help/password.png" alt=""/>
                                            </div>
                                            <h5>our company privacy</h5>
                                        </a>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-4 col-lg-6 col-xl-4 wow fadeInLeft" data-wow-delay=".4s">
                                        <a href="#account" className="item" data-bs-toggle="tab">
                                            <div className="thumb">
                                                <img src="assets/images/help/support.png" alt=""/>
                                            </div>
                                            <h5>how setting account</h5>
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane show fade active" id="investor">
                                        <div className="faq-wrapper">
                                            <div className="faq-item wow fadeInUp" data-wow-delay=".3s">
                                                <div className="faq-title" onclick={toggleQstn}>
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
                                            <div className="faq-item open active wow fadeInUp" data-wow-delay=".4s">
                                                <div className="faq-title" onclick={toggleQstn}>
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
                                            <div className="faq-item wow fadeInUp" data-wow-delay=".5s">
                                                <div className="faq-title" onclick={toggleQstn}>
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
                                    <div className="tab-pane show fade" id="privacy">
                                        <div className="faq-wrapper">
                                            <div className="faq-item">
                                                <div className="faq-title" onclick={toggleQstn}>
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
                                                <div className="faq-title" onclick={toggleQstn}>
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
                                                <div className="faq-title" onclick={toggleQstn}>
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
                                    <div className="tab-pane show fade" id="account">
                                        <div className="faq-wrapper">
                                            <div className="faq-item">
                                                <div className="faq-title" onclick={toggleQstn}>
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
                                                <div className="faq-title" onclick={toggleQstn}>
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
                                                <div className="faq-title" onclick={toggleQstn}>
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
                        <div className="col-lg-6 d-none d-lg-block wow fadeInRight">
                            <div className="help-thumb ">
                                <img src="assets/images/help/thumb.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            <section className="affiliate-section padding-top padding-bottom overflow-hidden">
                <div className="container">
                    <div className="row gy-5 align-items-center">
                        <div className="col-lg-5 d-lg-block d-none wow fadeInLeft">
                            <div className="affiliate-thumb">
                                <img src="assets/images/affiliate/thumb.png" alt="affiliate"/>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="affiliate-content">
                                <div className="section-header">
                                    <span className="subtitle  fadeInUp">Affiliate program</span>
                                    <h2 className="title  fadeInUp" data--delay=".5s">Make Money By Affiliate With Out Invest</h2>
                                </div>
                                <div className="affilate-tab-menu row g-4">
                                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 tab-item  fadeInUp" data--delay=".3s" >
                                        <div className="affiliate-tab-item">
                                            <div className="item-inner">
                                                <h3 className="percentage">05%</h3>
                                                <span className="serial">1st</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 tab-item  fadeInUp" data--delay=".4s" >
                                        <div className="affiliate-tab-item">
                                            <div className="item-inner">
                                                <h3 className="percentage">07%</h3>
                                                <span className="serial">2nd</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 tab-item  fadeInUp" data--delay=".5s" >
                                        <div className="affiliate-tab-item">
                                            <div className="item-inner">
                                                <h3 className="percentage">12%</h3>
                                                <span className="serial">3rd</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="affiliate-item-content">
                                    <h4 className="title">Dapibus et amet sociis, arcu orci orci tinci dunt neque. Purus etortor sjust mauris eumales uada architecto.</h4>
                                    <p>Pulvinar a diam ipsum volutpat, bibendum bibendum quia urna id eros. Laoreet fusce dictum amet, purus facilisis pellentesque sed est tristique, ut ligula ac aut integer per, eu purus commodo, id fermentum semper nisl a. Interdum purus molestie. Volutpat quisque justo tellus arcu eget, nonummy vel luctus hendrerit etiam, integer congue aliquam, nunc velit sunt ut at ve</p>
                                    <a href="affiliate.html" className="cmn--btn">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape">
                    <img src="assets/images/affiliate/bg-map.png" alt="affiliate"/>
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
    );
}

export default HomeScreen;