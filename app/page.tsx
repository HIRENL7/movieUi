"use client"

import Cast from "@/components/Cast";
import Featured from "@/components/Featured";
import Image from "next/image";
import { useEffect, useState } from "react";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";

export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);

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
        setMovies(data.results); // Assuming 'results' contains the list of movies
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []); // Empty dependency array to only run the effect once on component mount
  console.log(movies);

  return (
    <div className="flex flex-col items-between justify-between pt-24 pl-10 pr-10">
      <Featured />
      <Cast />
    </div>
  );
}
