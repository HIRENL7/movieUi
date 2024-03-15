"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { Button, Card, Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap';
const Herosection = () => {
  const [tredingMovies, setTredingMovies] = useState<any[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWM3Zjc2ZmRiNWJkMWRkNjMyZjc0NjEyMDEwODRjZSIsInN1YiI6IjY1ZjMwYzM0YzQ5MDQ4MDE2MzE5ZTU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9kykYHiD_xmGcVlgyXrewYjc74xtUB6MjN4dcgKg5D0'
          }
        };
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const data = await response.json();
        console.log(data.results.slice(0, 6));
        setTredingMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className='h-[600px]'>
      <Swiper
        // direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        {tredingMovies?.map((movie, index) => {
          return <>
            <SwiperSlide key={index}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className=' w-[100%] h-[600px] object-cover' />
              <Container className='absolute top-[158px] left-[98px] '>
                <Card className='' style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title className='font-bold leading-[56px] text-white text-[48px]'>{movie.original_title}</Card.Title>
                    <div className='flex justify-start gap-6 items-center'>
                      <div className='flex  items-center pt-[10px]'>
                        <Card.Img variant="top" src={`../assets/images/imdb.png`} />
                        <p className='text-white pl-[20px]'>{movie.vote_average}</p>
                      </div>
                      <div className='flex  items-center pt-[10px]'>
                        <Card.Img variant="top" src={`../assets/images/tomato.png`} />
                        <p className='text-white pl-[15px]'>{movie.popularity}%</p>
                      </div>
                    </div>
                    <div className='pt-[10px]'><Card.Text className='text-white'>{movie.overview.slice(0, 100)}...</Card.Text></div>

                    <Button className='text-white mt-[10px] p-[6px] gap-[8px] w-[169px] h-[36px] rounded-md bg-red-600 flex items-center justify-start'>

                      <Card.Img variant="top" src={`../assets/images/Play.png`} className='h-[20px] w-[20px]' />
                      <p className='text-white pl-[8px] text-[13px] font-bold leading-[15px]'>WATCH TRAILER</p>
                    </Button>


                  </Card.Body>
                </Card>
              </Container>

            </SwiperSlide >

          </>
        })}


      </Swiper>


    </div >
  )
}

export default Herosection


