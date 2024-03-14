import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Row className=' flex flex-col justify-center items-center '>
                <Col>
                    <Row className='flex gap-[50px] justify-center '>
                        <img src='../assets/images/fa-brands_facebook-square.png' />
                        <img src='../assets/images/fa-brands_instagram.png' />
                        <img src='../assets/images/fa-brands_twitter.png' />
                        <img src='../assets/images/fa-brands_youtube.png' />

                    </Row>
                </Col>
                <Col> <Row className='flex gap-[50px] justify-center '>
                    <h2> Conditions of Use</h2>
                    <h2>Privacy & Policy</h2>
                    <h2>Press Room</h2>
                </Row></Col>
                <Col>© 2021 MovieBox by Adriana Eka Prayudha  </Col>
            </Row>
        </footer>
    )
}

export default Footer