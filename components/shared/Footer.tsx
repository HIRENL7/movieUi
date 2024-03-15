import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Row className=' flex flex-col justify-center items-center  gap-[30px] mb-[30px] '>
                <Col>
                    <Row className='flex gap-[50px] justify-center '>
                        <img className='w-[24px] h-[27.43px]' src='../assets/images/fa-brands_facebook-square.png' />
                        <img className='w-[24px] h-[27.43px]' src='../assets/images/fa-brands_instagram.png' />
                        <img className='w-[24px] h-[27.43px]' src='../assets/images/fa-brands_twitter.png' />
                        <img className='w-[24px] h-[27.43px]' src='../assets/images/fa-brands_youtube.png' />

                    </Row>
                </Col>
                <Col> <Row className='flex gap-[50px] justify-center '>
                    <h2 className='font-bold'> Conditions of Use</h2>
                    <h2 className=' font-bold '>Privacy & Policy</h2>
                    <h2 className='font-bold '>Press Room</h2>
                </Row></Col>
                <Col className='text-[#6B7280] text-[18px] font-bold leading-[23.44px] h-[23px]'>© 2021 MovieBox by Adriana Eka Prayudha  </Col>
            </Row>
        </footer>
    )
}

export default Footer