import React from 'react'
import './testmonial.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect } from 'react'
import { useState } from 'react'
import star_1 from '../../Assets/star-bright.png'
import star_2 from '../../Assets/star-2.png'


const Testmonial = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
};

const [testmonial,setTestmonial]=useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://669fe609b132e2c136ff7dea.mockapi.io/testmonial/comments');
            const jsonData = await response.json();
            setTestmonial(jsonData);
        };
        fetchData();
    }, []);



  return (
    <div className='testmonial'>
        <h1 className='testmonial-head'>Clients Testmonial</h1>
          <Slider {...settings}>
            {testmonial.map((item)=>{
              return(
                <div className="item" key={item.id}>
                <div className="section-one-part1">
                <h1>{item.title}</h1>
                <p>{item.content}</p>
                </div>
    
                <div className="section-one-part2">
                <img src={item.image} alt="" />
                <div>
                  <p>{item.name}</p>
                  <span>{item.job}</span>
                </div>
                </div>

                <div className="section-one-part2-stars">
                {item.rate == 5 ? (
                  <div className="section-one-part2-stars-star">
                    <img src={star_1} alt="" />
                    <img src={star_1} alt="" />
                    <img src={star_1} alt="" />
                    <img src={star_1} alt="" />
                    <img src={star_1} alt="" />
                  </div>
                ) : item.rate == 4  ? (
                  <div className="section-one-part2-stars-star">
                  <img src={star_1} alt="" />
                  <img src={star_1} alt="" />
                  <img src={star_1} alt="" />
                  <img src={star_1} alt="" />
                  <img src={star_2} alt="" />
                </div>
                ) : item.rate == 3  ? (
                  <div className="section-one-part2-stars-star">
                  <img src={star_1} alt="" />
                  <img src={star_1} alt="" />
                  <img src={star_1} alt="" />
                  <img src={star_2} alt="" />
                  <img src={star_2} alt="" />
                </div>
                ) : item.rate == 2  ?(
                  <div className="section-one-part2-stars-star">
                  <img src={star_1} alt="" />
                  <img src={star_1} alt="" />
                  <img src={star_2} alt="" />
                  <img src={star_2} alt="" />
                  <img src={star_2} alt="" />
                </div>
                ): item.rate == 1  ?(
                  <div className="section-one-part2-stars-star">
                  <img src={star_1} alt="" />
                  <img src={star_2} alt="" />
                  <img src={star_2} alt="" />
                  <img src={star_2} alt="" />
                  <img src={star_2} alt="" />
                </div>
                ):(
                  <div className="section-one-part2-stars-star">
                  <img src={star_2} alt="" />
                  <img src={star_2} alt="" />
                  <img src={star_2} alt="" />
                  <img src={star_2} alt="" />
                  <img src={star_2} alt="" />
                </div>
                )}
                </div>
                </div>
            )})}
        </Slider>
    </div>
  )
}

export default Testmonial
