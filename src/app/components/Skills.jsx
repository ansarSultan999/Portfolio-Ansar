"use client";
import React, { useRef } from "react";
import Image from 'next/image';
import html from '../../../public/Skills/html.png';
import css from '../../../public/Skills/css.png';
import react from '../../../public/Skills/react.png';
import next from '../../../public/Skills/next.webp';
import node from '../../../public/Skills/node.png';
import firebase from '../../../public/Skills/firebase.png';
import javascript from '../../../public/Skills/javascript.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";

const Skills = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="back-clr">
      <div className="py-32 container mx-auto">
        <div className="Service-heading">
          <h2>My Skills</h2>
          <p>
            Proficient in HTML, CSS, JavaScript, and frameworks like React and
            Next.js, creating responsive, user-friendly, and visually engaging
            web applications. Skilled in UI/UX design, performance optimization,
            and cross-browser compatibility.
          </p>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={6}
          // centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <div className="slider-main">
                <div>
                   <Image
                      src={html}
                      className='skill-img'
                      alt="Your Company"
                    />
                </div>
                <div className="skill-text">92%</div>
              </div>
              <div className="Skill-Outer">HTML</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className="slider-main">
                <div>
                   <Image
                      src={css}
                      className='skill-img'
                      alt="Your Company"
                    />
                </div>
                <div className="skill-text">92%</div>
              </div>
              <div className="Skill-Outer">CSS</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className="slider-main">
                <div>
                   <Image
                      src={javascript}
                      className='skill-img'
                      alt="Your Company"
                    />
                </div>
                <div className="skill-text">92%</div>
              </div>
              <div className="Skill-Outer">JAVASCRIPT</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className="slider-main">
                <div>
                   <Image
                      src={react}
                      className='skill-img'
                      alt="Your Company"
                    />
                </div>
                <div className="skill-text">92%</div>
              </div>
              <div className="Skill-Outer">REACT</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className="slider-main">
                <div>
                   <Image
                      src={next}
                      className='skill-img'
                      alt="Your Company"
                    />
                </div>
                <div className="skill-text">92%</div>
              </div>
              <div className="Skill-Outer">NEXT JS</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className="slider-main">
                <div>
                   <Image
                      src={node}
                      className='skill-img'
                      alt="Your Company"
                    />
                </div>
                <div className="skill-text">92%</div>
              </div>
              <div className="Skill-Outer">NODE JS</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className="slider-main">
                <div>
                   <Image
                      src={firebase}
                      className='skill-img'
                      alt="Your Company"
                    />
                </div>
                <div className="skill-text">92%</div>
              </div>
              <div className="Skill-Outer">FIREBASE</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className="slider-main">
                <div>
                   <Image
                      src={html}
                      className='skill-img'
                      alt="Your Company"
                    />
                </div>
                <div className="skill-text">92%</div>
              </div>
              <div className="Skill-Outer">HTML</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className="slider-main">
                <div>
                   <Image
                      src={html}
                      className='skill-img'
                      alt="Your Company"
                    />
                </div>
                <div className="skill-text">92%</div>
              </div>
              <div className="Skill-Outer">HTML</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;
