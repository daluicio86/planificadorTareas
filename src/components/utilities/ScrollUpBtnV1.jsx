"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ScrollUpBtnV1 = () => {
    const [scrollUpButton, setScrollUpButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200 && window.scrollY < 3800 ) {
                setScrollUpButton(true)
            } else {
                setScrollUpButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {scrollUpButton && (
                <div>
                {/*<a href='https://creditohipotecario.pichincha.com/calculadora'
                        target='_blank'
                        className='customScrollUp'
                        onClick={scrollUp}><i className="fas fa-arrow-up"></i></a>
                    <a href="https://www.biess.fin.ec/hipotecarios"
                        target='_blank'
                        className='customScrollUp'
                        onClick={scrollUp}><i className="fas fa-arrow-up"></i></a>
                    <a href="https://www.mutualistapichincha.com/en/cr%C3%A9ditos-de-vivienda-hasta-usd-105.340"
                        target='_blank'
                        className='customScrollUp'
                        onClick={scrollUp}><i className="fas fa-arrow-up"></i></a>*/}

                   {/* <Link href='https://creditohipotecario.pichincha.com/calculadora' 
                    target='_blank'
                    className='customScrollUpV2'
                    onClick={scrollUp}>
                        <Image src={`/assets/images/footer/gif_pichincha.gif`} width={120} height={120} alt="image" />
                    </Link>

                    <Link href='https://www.biess.fin.ec/hipotecarios' 
                    target='_blank'
                    className='customScrollUpV1'
                    onClick={scrollUp}>
                        <Image src={`/assets/images/footer/GIF_FONDO_AZUL.gif`} width={120} height={120} alt="image" />
                    </Link>

                    <Link href='https://www.mutualistapichincha.com/en/cr%C3%A9ditos-de-vivienda-hasta-usd-105.340' 
                    target='_blank'
                    className='customScrollUp'
                    onClick={scrollUp}>
                        <Image src={`/assets/images/footer/otro_btn.gif`} width={120} height={120} alt="image" />
                    </Link>      */}              
                </div>
            )}
        </>
    );
};

export default ScrollUpBtnV1;