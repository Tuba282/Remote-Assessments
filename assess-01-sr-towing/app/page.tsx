"use client";

import { useState, useEffect, useRef } from "react";
// import { Icon } from "@iconify/react";
import Head from "next/head";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Keyboard, Autoplay } from 'swiper/modules';
import Image from "next/image";
import SR_logo from "@/app/assets/SR_logo.svg";
import call_icon from "@/app/assets/call-icon.svg";
import mobile_call_icon from "@/app/assets/mobile-call-icon.svg";
import menu_icon from "@/app/assets/menu-icon.svg";
import header_text from "@/app/assets/header-text.svg";
import home_truck_image from "@/app/assets/home-truck-image.svg";
import downArrow from "@/app/assets/downArrow.gif";
import yellowShade from "@/app/assets/yellowShade.svg";
import blueShade from "@/app/assets/blueShade.svg";
import mostText from "@/app/assets/mostText.svg";
import truckOne from "@/app/assets/truckOne.svg";
import circleText from "@/app/assets/circleText.svg";
import timetext from "@/app/assets/timetext.svg";
import truckPicture from "@/app/assets/truckPicture.svg";
import attachFileIcon from "@/app/assets/attach-file-icon.svg";
import facebook from "@/app/assets/facebookIcon.svg";
import instagram from "@/app/assets/instagramIcon.svg";
import linkedin from "@/app/assets/linkedinIcon.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  });

  const [isActive, setIsActive] = useState(false);
  const fileInput = useRef<HTMLInputElement | null>(null)

  const uploadFile = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  }

  const toggleMenu = () => {
    setIsActive(!isActive);
    console.log("Active");
  };

  return (
    <>
      <div className="main-container">
        <div className="sub-main-container">
          <Head>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          {/* navbar */}

          <nav className="text-white" >
            <div className="navRight flex content-around items-center gap-5">
              <div className="logo">
                <Image src={SR_logo} alt="" />
              </div>
              <ul
                className={`navLinks ${isActive ? "active" : ""
                  } flex content-around items-center gap-5`}
              >
                <li className="hover:text-yellow-500 yellowLine cursor-pointer">
                  Service
                </li>
                <li className="hover:text-yellow-500 yellowLine cursor-pointer">
                  Light/Medium
                </li>
                <li className="hover:text-yellow-500 yellowLine cursor-pointer">
                  Heavy Duty
                </li>
                <li className="hover:text-yellow-500 yellowLine cursor-pointer">
                  Gallery
                </li>
                <li className="hover:text-yellow-500 yellowLine cursor-pointer">
                  About Us
                </li>
              </ul>
            </div>
            <div className="navCenter z-10 flex content-around items-center gap-2">
              <div className="navCall grayLine  border-2 border-gray-500 bg-gray-700 py-2 px-4 rounded-sm flex content-around items-center gap-5">
                <Image src={call_icon} alt="" /> Call 111-123-3456
              </div>
              <div className="navContact border-2 border-yellow-600 rounded-sm py-2 px-4 text-black font-semibold bg-yellow-500 grayLine ">
                Contact Us
              </div>
            </div>
            <div
              className="navleft z-10 flex content-around items-center gap-2"
              data-aos="fade-up" data-aos-delay="1500"
            >
              <div className="navContact border-2 border-yellow-600 p-2 rounded-sm flex content-around items-center gap-2 text-black font-semibold grayLine  bg-yellow-500">
                <Image src={mobile_call_icon} alt="" /> Call Now!
              </div>
              <div
                onClick={toggleMenu}
                className="navCall yellowLine border-2 border-gray-500 bg-gray-700 p-2 rounded-sm flex content-around items-center"
              >
                <Image src={menu_icon} alt="" />
              </div>
            </div>
          </nav>

          {/* hero section */}

          <div className="heroSection">
            <div className="heroContent z-10" >
              <div className="flex items-center content-center xl:w-[500px] lg:w-[400px] flex-wrap gap-1" data-aos="fade-down" data-aos-delay="1500">
                <h1 className="text-white montserrat xl:text-5xl lg:text-4xl text-[27px] font-bold">
                  Empowering
                </h1>
                <Image
                  src={header_text}
                  width={206}
                  height={90}
                  alt=""
                  className="lg:w-[100px] lg:h-[80px] w-[60px] h-[60px] rounded-full"
                  style={{ color: "transparent" }}
                />
                <h1 className="text-white montserrat xl:text-5xl lg:text-4xl text-[27px] font-bold">
                  with
                </h1>
                <h1 className="text-white montserrat xl:text-5xl lg:text-4xl text-[27px] font-bold">
                  Reliable
                </h1>
                <h1 className="text-white montserrat xl:text-5xl lg:text-4xl text-[27px] font-bold">
                  Towing
                </h1>
              </div>
              <p className="text-xl text-gray-300 font-light" data-aos="fade-up" data-aos-delay="1500">
                From AI-driven strategies to seamless digital transformation, we
                engineer solutions that align with Vision 2030—embedding
                intelligence into every layer of your operations for a smarter,
                more efficient future.
              </p>
              <div className="flex content-around items-center gap-2" data-aos="fade-up" data-aos-delay="1500">
                <div className="grayLine   border-2 border-yellow-600 rounded-sm py-2 px-4 text-black font-semibold bg-yellow-500">
                  Get A Free Quote
                </div>
                <div className="grayLine border-2 text-white border-gray-500 bg-gray-700 py-2 px-4 rounded-sm flex content-center items-center">
                  View Our Services
                </div>
              </div>
            </div>
            <div className="heroImage" data-aos="fade-left" data-aos-delay="1500">
              <Image src={home_truck_image} alt="" className="heroTruck" />
            </div>
          </div>

          {/* heroGif */}

          <div className="heroGif grid content-center items-center">
            <h1 className="text-[var(--gray)] text-xl">
              Trusted by people just like you!
            </h1>
            <div className="trusted"></div>
            <Image src={downArrow} alt="" className="downGif" />
            <Image src={blueShade} alt="" className="blueShade" />
            <Image src={yellowShade} alt="" className="yellowShade" />
          </div>

          {/* services section */}

          <div className="service">
            <div className="serviceContent">
              <div className="serviceText">
                <div className="flex flex-wrap my-5" data-aos="fade-left">
                  <h1 className="text-[var(--black)] montserrat xl:text-5xl lg:text-4xl text-[27px] font-bold">
                    The
                  </h1>
                  <Image src={mostText} alt="" className="" />
                  <h1 className="text-[var(--black)] montserrat xl:text-5xl lg:text-4xl text-[27px] font-bold">
                    Experienced Towing company in town
                  </h1>
                </div>
                <div className="lg:flex lg:flex-row my-3">
                  <p className="lg:text-[16px] text-[14px] text-[--textColor] lg:w-[630px] mt-0">Having car issues on the road? Worry no more!We make sure that you and your vehicle are safe 24/7.For the best roadside assistance services available, please
                    call:</p>
                </div>
              </div>
              <div className="serviceContact border-2 border-yellow-600 p-2 rounded-sm  text-black font-semibold grayLine bg-yellow-500" data-aos="fade-up">
                <Image src={mobile_call_icon} alt="" /> Call (715) 458-2119
              </div>
            </div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              freeMode={true}
              keyboard={{
                enabled: true,
              }}
              // centeredSlides={true}
              modules={[FreeMode, Keyboard, Autoplay]}
              breakpoints={{
                1024: { slidesPerView: 3, },
                767: { slidesPerView: 2, },
                660: { slidesPerView: 1, },
                480: { slidesPerView: 1, },
                375: { slidesPerView: 1, },
                300: { slidesPerView: 1, },
              }}
              className="mySwiper my-5"
            >
              <SwiperSlide>
                <div className="serviceCard">
                  <Image src={truckOne} alt="" />
                  <p className="my-2 font-semibold">Light & Medium Towing Service</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="serviceCard">
                  <Image src={truckOne} alt="" />
                  <p className="my-2 font-semibold">Light & Medium Towing Service</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="serviceCard">
                  <Image src={truckOne} alt="" />
                  <p className="my-2 font-semibold">Light & Medium Towing Service</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="serviceCard">
                  <Image src={truckOne} alt="" />
                  <p className="my-2 font-semibold">Light & Medium Towing Service</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="serviceCard">
                  <Image src={truckOne} alt="" />
                  <p className="my-2 font-semibold">Light & Medium Towing Service</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="serviceCard">
                  <Image src={truckOne} alt="" />
                  <p className="my-2 font-semibold">Light & Medium Towing Service</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="serviceCard">
                  <Image src={truckOne} alt="" />
                  <p className="my-2 font-semibold">Light & Medium Towing Service</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="serviceCard">
                  <Image src={truckOne} alt="" />
                  <p className="my-2 font-semibold">Light & Medium Towing Service</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="serviceCard">
                  <Image src={truckOne} alt="" />
                  <p className="my-2 font-semibold">Light & Medium Towing Service</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Choose section */}

          <div className="service Choose">
            <div className="serviceContent">
              <div className="serviceText p-10">
                <div className="flex flex-wrap my-5">

                  <h1 className="text-[var(--white)] montserrat xl:text-5xl lg:text-4xl text-[27px] font-semibold">
                    Why Choose Us?
                  </h1>
                </div>
                <div className="lg:flex lg:flex-row my-3">
                  <p className="lg:text-[16px] text-[14px] text-[--white] lg:w-[630px] mt-0 font-extralight" >Our localized expertise, combined with global experience, ensures that your business stays ahead of industry demands, leveraging cutting-edge technology to build sustainable, scalable solutions.</p>
                </div>
              </div>
              <div className="serviceContact rotate">
                <Image src={circleText} className="z-10" alt="" />
              </div>
            </div>
            <div className="partition p-10 my-3">
              <div className="part border-r pr-3" data-aos="fade-right" data-aos-delay="300">
                <p className="font-extralight grid gap-3  px-5 text-[--white]  xl:text-5xl lg:text-4xl text-[27px]">Quick
                  <span className="font-thin text-sm text-[--white]">Response Time</span>
                </p>

              </div>
              <div className="part border-r px-3" data-aos="fade-right" data-aos-delay="400">
                <p className="font-extralight grid gap-3  px-5 text-[--white]  xl:text-5xl lg:text-4xl text-[27px]">Hassle-free
                  <span className="font-thin text-sm text-[--white]">Cleanup</span>
                </p>

              </div>
              <div className="part border-r px-3" data-aos="fade-right" data-aos-delay="500">
                <p className="font-extralight grid gap-3  px-5 text-[--white]  xl:text-5xl lg:text-4xl text-[27px]">Roadside
                  <span className="font-thin text-sm text-[--white]">Assistance</span>
                </p>

              </div>
            </div>
            <div className="serviceContact border-2 xl:ml-10 border-yellow-600 p-2 rounded-sm  text-black font-semibold grayLine bg-yellow-500"
              data-aos="fade-up" data-aos-delay="500"
            >Get A Free Quote</div>
          </div>

          {/* heroGif */}

          <div className="heroGif grid content-center items-center">
            <div className="trusted trusted2"></div>
          </div>
          {/* services section */}

          <div className="service working">
            <Image src={truckPicture} alt="" className="truckPicture" data-aos="fade-down" data-aos-delay="500" />
            <div className="serviceContent">
              <div className="serviceText">
                <div className="my-5  xl:w-[550px]  flex flex-wrap">
                  <h1 className="text-[var(--black)montserrat xl:text-5xl lg:text-4xl text-[27px] font-semibold">
                    Working around the clock
                    <Image src={timetext} alt="" className="inline mt-4 mx-3" />
                  </h1>
                </div>

                <div className="flex content-around items-center gap-2" data-aos="fade-up" data-aos-delay="500">
                  <div className="grayLine   border-2 border-yellow-600 rounded-sm py-2 px-4 text-black font-semibold bg-yellow-500">
                    Get A Free Quote
                  </div>
                  <div className="grayLine border-2 text-white border-gray-500 bg-gray-700 py-2 px-4 rounded-sm flex content-center items-center">
                    View Our Services
                  </div>
                </div>
                <div className="">

                </div>
              </div>
              <div className="serviceContact lg:flex lg:flex-row my-3  lg:w-[630px] " data-aos="fade-down" data-aos-delay="300">
                <p className="lg:text-[16px] text-[14px] text-[--textColor] mt-0">We specializing in the design and construction of top-of-the-line NRC Carriers, Wreckers, and Quickswap units using the finest chassis from leading brands such as Kenworth, Peterbilt, Western Star, and more.</p>
              </div>
            </div>
          </div>

          {/* contect  */}
          <div className="contact">
            <div className="contactText" data-aos="fade-right">
              <h1 className="xl:text-5xl lg:text-4xl text-[27px] font-sans font-semibold text-[var(--white)]">In a rush ?</h1>
              <p className="lg:w-[360px]  lg:text-[20px] text-[20px] text-[--white] font-light">Our teams work 24/7 around the clock for your safety and security.</p>
              <div className="navCall lg:w-[270px] text-[var(--gray)] lg:h-[45px] grayLine  border-2 border-gray-500 bg-gray-700 py-2 px-4 rounded-sm flex content-around items-center gap-5">
                <Image src={call_icon} alt="" /> Call us at (111-123-3456)
              </div>
            </div>
            <div className="contactForm" data-aos="fade-down">
              <div className="flex justify-between ">
                <input type="text" className="w-[48%]" placeholder="Name" />
                <input type="text" className="w-[48%]" placeholder="Email" />
              </div>
              <input type="text" placeholder="Phone (eg:123-456-7890)" />
              <textarea name="" id="" placeholder="Message"></textarea>
              <div className="navCall py-2  flex justify-between  items-center">
                <Image src={attachFileIcon} alt="" />
                <p className="font-extralight text-[var(--gray)] grid   px-5 text-left text-[20px]">Attach File
                  <span className="font-thin text-[var(--gray)] text-sm ">Upload any JPEG, PNG or PDF file</span>
                </p>
                <p onClick={uploadFile} className="w-[150px] h-[40px]  text-[var(--gray)] flex justify-center items-center lg:h-[45px] rounded-md bg-gray-700 cursor-pointer" id="ChooseFile">Choose File</p>
                <input type="file" ref={fileInput} style={{ display: "none" }} />
              </div>
              {

              }
              <div className="grayLine h-[45px] border-2 border-yellow-600 rounded-sm py-2 px-4 text-black font-semibold bg-yellow-500">
                Send Message
              </div>

            </div>
          </div>

          {/* semiFooter */}
          <div className="semiFooter flex flex-wrap  xl:justify-between lg:justify-between justify-around items-center">
            <div className="semiFooterImg" data-aos="fade-left">
              <Image src={SR_logo} alt="" width={300} />
            </div>
            <div className="semiFooterLinks flex text-[var(--white)] gap-10 justify-between items-start" data-aos="fade-right">
              <ul className="font-semibold place-items-start">Pages
                <li className="hover:text-yellow-500 yellowLine cursor-pointer font-light"><br />
                  Service
                </li>
                <li className="hover:text-yellow-500 yellowLine cursor-pointer font-light">
                  Light/Medium
                </li>
                <li className="hover:text-yellow-500 yellowLine cursor-pointer font-light">
                  Heavy Duty
                </li>
                <li className="hover:text-yellow-500 yellowLine cursor-pointer font-light">
                  Gallery
                </li>
              </ul>
              <ul className="font-semibold place-items-start">Company
                <li className="hover:text-yellow-500 yellowLine cursor-pointer font-light"><br />
                  About Us
                </li>
                <li className="hover:text-yellow-500 yellowLine cursor-pointer font-light">
                  Careers
                </li>
                <li className="hover:text-yellow-500 yellowLine cursor-pointer font-light">
                  Contact
                </li>
              </ul>
            </div>
          </div>

          {/* footer */}
          <div className="footer  flex flex-wrap  xl:justify-between lg:justify-between justify-around text-center items-center text-[var(--white)]">
            <p  className="">© 2025 SR Towing. All rights reserved.</p>
            <div className="flex justify-between items-center gap-4" >
              <Image src={facebook} alt="" />
              <Image src={instagram} alt="" />
              <Image src={linkedin} alt="" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
