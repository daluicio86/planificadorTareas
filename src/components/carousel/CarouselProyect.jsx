import { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const CarouselProyect = ({ data, title = false, arrows = true, indicators = false, height = '600px' }) => {
	const [slide, setSlide] = useState(0);

	useEffect(() => {
		const interval = setTimeout(() => {
			setSlide(slide === data.length - 1 ? 0 : slide + 1);
		}, 5000);

		return () => clearInterval(interval);
	});

	const prevSlude = () => {
		setSlide(slide === 0 ? data.length - 1 : slide - 1);
	};

	const nextSlide = () => {
		setSlide(slide === data.length - 1 ? 0 : slide + 1);
	};

	return (
		<div className='container noSelect' style={{ height: height }}>
			{arrows ? <BsArrowLeftCircleFill className='arrow-cp arrowLeft' onClick={prevSlude} /> : ''}
			{data?.map((item, idx) => {
				return <img src={item.path} alt={item.nombre} key={idx} className={slide === idx ? 'slide' : 'slideHidden'} />;
			})}
			{arrows ? <BsArrowRightCircleFill className='arrow-cp arrowRight' onClick={nextSlide} /> : ''}

			{indicators ? (
				<span className='indicators'>
					{data.map((_, idx) => {
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
	);
};
export { CarouselProyect };
