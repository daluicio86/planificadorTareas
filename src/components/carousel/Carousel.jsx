"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { getBanners } from '@/src/actions/TareaAction';

const Carousel = ({ tipo, title = false, arrows = true, indicators = true, height = '600px' }) => {

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
			<div className='container-cp noSelect' style={{ height: height }}>
				{title && (
					<div className='title'>
						<h1>Proyectos inmobiliarios</h1>
					</div>
				)}
				{arrows ? <BsArrowLeftCircleFill className='arrow arrowLeft' onClick={prevSlude} /> : ''}
				{paginadorItem?.data?.map((item, idx) => {
					return <img src={item.imgPath} alt={item.nombre} key={idx} className={slide === idx ? 'slide' : 'slideHidden'} />;
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
		</>
	);
};

export default Carousel;