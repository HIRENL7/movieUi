"use client"
import React from 'react'
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
        console.log(data.results.slice(1, 2));
        setTredingMovies(data.results.slice(1, 2)); // Slice to get only the first four movies
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className='h-[100vh]'>
      <Row className='flex gap-10 w-full' xxl={12} xl={12} lg={12}>
        {tredingMovies?.map((movie, index) => {
          return <>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className=' w-[100%] aspect-[3/2]'
            />
          </>
        })}
      </Row>

    </div>
  )
}

export default Herosection


