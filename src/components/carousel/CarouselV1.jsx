"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { getBanners } from '@/src/actions/TareaAction';
import { useRouter } from 'next/navigation';
const CarouselV1 = ({ tipo, title = false, arrows = true, indicators = true, height = '600px' }) => {
    const router = useRouter();
	const [slide, setSlide] = useState(0);
	const [datalength, setDatalength] = useState(0);

	const [requestItem, setRequestItem] = useState({
		pageIndex: 1,
		pageSize: 50,
		sort: 'fechaDesc',
		search: '',
		estado: '1',
		tipo: tipo,
	});

	const [paginadorItem, setPaginadorItem] = useState({
		cont: 0,
		pageIndex: 0,
		pageSize: 0,
		pageCount: 0,
		data: [],
	});

	const getNav = async () => {
		router.push('/bolsa-empleo');
	};


	useEffect(() => {
		const getListaBanner = async () => {
			const resp = await getBanners(requestItem);
			setPaginadorItem(resp.data);
			setDatalength(resp.data.count);
		};
		getListaBanner();
		const interval = setTimeout(() => {
			setSlide(slide === datalength - 1 ? 0 : slide + 1);
			setDatalength(datalength);
		}, 5000);
		getListaBanner();
		return () => clearInterval(interval);
	}, [datalength]);

	const prevSlude = () => {
		setSlide(slide === 0 ? datalength - 1 : slide - 1);
		setDatalength(datalength);
	};

	const nextSlide = () => {
		setSlide(slide === datalength - 1 ? 0 : slide + 1);
		setDatalength(datalength);
	};


	return (
		<>
			<div className="slider-area mt-150 d-flex align-items-center">
				<div className="container">
					<div className="col-lg-12 col-md-12">
						<div className='container-home noSelect' style={{ height: height }}>
							{arrows ? <BsArrowLeftCircleFill className='arrow arrowLeft' onClick={prevSlude} /> : ''}
							{paginadorItem?.data?.map((item, idx) => {
								return <>
									<img src={item.imgPath} alt={item.nombre} key={idx} className={slide === idx ? 'slide' : 'slideHidden'} />
								</>
							})}
							{arrows ? <BsArrowRightCircleFill className='arrow arrowRight' onClick={nextSlide} /> : ''}

							{indicators ? (
								<span className='indicators'>
									{paginadorItem?.data?.map((_, idx) => {
										return (
											<button
												key={idx}
												onClick={() => {
													setSlide(idx);
												}}
												className={slide === idx ? 'indicator' : 'indicator indicatorInactive'}
											/>
										);
									})}
								</span>
							) : (
								''
							)}
						</div>

						<div className="slider-content animate__animated animate__slideInLeft">
							<div className="slider-main-title">
								<h1>¿QUIENES SOMOS?</h1>
							</div>
							<div className="slider-discripton">
								<p>Somos el Clúster de la industria de la construcción del Ecuador. Está integrado por una red dinámica de actores clave en la cadena de valor de la construcción. Nuestra comunidad incluye constructores, profesionales, artesanos, proveedores, ferreterías, transportistas y muchos más, todos trabajando juntos para impulsar el desarrollo y la innovación en el sector</p>
							</div>
							<div className="eulding-btn ml30">
								<Link href="/bolsa-empleo#selectedZone"  onClick={getNav}>Bolsa de empleo <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
							</div>
						</div>
					</div>

				</div>
			</div>

		</>
	);
};

export default CarouselV1;