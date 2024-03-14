
import React, { useEffect, useState } from 'react'
import { Button, Card, Carousel, CarouselItem, Col, Row, Container } from 'react-bootstrap'

const Cast = () => {
    const [cast, setCast] = useState<any[]>([]);

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
                const response = await fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', options);
                const data = await response.json();
                console.log(data.results);

                setCast(data.results.slice(0, 4)); // Slice to get only the first four movies

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
                    <p className='font-bold text-4xl leading-[46.87px]'>Featured Cast</p>
                    <div className='flex justify-between items-center'>
                        <p>See More</p>
                        <img src='../assets/images/Chevronright.png' />
                    </div>
                </div>
                <Container>
                    <Carousel>
                        <CarouselItem>
                            <Row className='flex gap-10 w-full' xxl={12} xl={12} lg={12}>
                                {cast?.map((movie, index) => (
                                    <Col key={index} xxl={3} xl={3} lg={3}>
                                        <Card style={{ width: '16rem' }}>
                                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.profile_path}`} />
                                            <Card.Body>
                                                <Card.Title>{movie.name}</Card.Title>
                                                <Card.Text>
                                                    {movie.overview}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </CarouselItem>
                    </Carousel>
                </Container>
            </div>
        </>
    )
}

export default Cast