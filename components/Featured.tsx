import { useState, useEffect } from 'react';
import { Button, Card, Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
const Featured = () => {

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
                const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
                const data = await response.json();
                console.log(data.results);
                setMovies(data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <>
            <div className='flex justify-center items-between flex-col'>
                <div className='flex justify-between items-center'>
                    <p className='font-bold text-4xl leading-[46.87px]'>Featured Movie</p>
                    <div className='flex justify-between items-center'>
                        <p>See More</p>
                        <img src='../assets/images/Chevronright.png' />
                    </div>
                </div>
                <Container className='h-[auto]'>
                    <Row className='flex gap-2' xxl={12} xl={6} lg={6}>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}

                            breakpoints={{
                                '@0.00': {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                '@0.75': {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                '@1.00': {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                '@1.50': {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {movies?.map((movie, index) => (
                                <>

                                    <SwiperSlide>
                                        <Col key={index} xxl={3} xl={3} lg={3} sm={1}>
                                            <Card className='py-[22px] pr-[22px] mb-[30px] w-full' >
                                                <Card.Img className='absolute right-[30px] top-[30px]' variant="top" src={'../assets/images/Favorite.png'} />
                                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                                <Card.Body>
                                                    <Card.Text className='mt-[8px] text-[#9CA3AF] leading-[15.62px] text-[12px] font-bold'>
                                                        USA - {movie.release_date.slice(0, 4)}
                                                    </Card.Text>
                                                    <Card.Title className='mt-[8px] text-[#111827] leading-[23.44px] text-[18px] font-bold'>{movie.title}</Card.Title>
                                                    <div className='flex justify-start gap-6 items-center'>
                                                        <div className='flex  items-center pt-[10px]'>
                                                            <Card.Img variant="top" src={`../assets/images/imdb.png`} />
                                                            <p className='pl-[10px]'>{movie.vote_average}</p>
                                                        </div>
                                                        <div className='flex  items-center pt-[10px]'>
                                                            <Card.Img variant="top" src={`../assets/images/tomato.png`} />
                                                            <p className=' pl-[10px]'>{movie.popularity} %</p>
                                                        </div>
                                                    </div>
                                                    <Card.Text className='mt-[8px] text-[#9CA3AF] leading-[15.62px] text-[12px] font-bold'>
                                                        Action, Drama, History
                                                    </Card.Text>

                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </SwiperSlide>

                                </>
                            ))}
                        </Swiper>
                    </Row>


                </Container>
            </div >
        </>
    );
};

export default Featured;
