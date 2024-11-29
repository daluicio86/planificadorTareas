
import { useEffect, useState } from "react";

const Environmentalndicator = () => {
	const [width, setWidth] = useState(1000);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<>
			{width > 840 ?
				<div className='sustainableContainer'>
					<img className='imagen-ei' src="https://firebasestorage.googleapis.com/v0/b/constructorespositivos-1a342.appspot.com/o/sustentabilidad%2F5.png?alt=media&token=6dee46fe-64d9-42e8-8d84-f503362a3da5" />
					<div className='ctexts-ei'>
						<p className='texts-ei'>¿Por qué es crucial reducir la huella de carbono en la construcción y otros sectores?</p>
						<hr />
					</div>
					<br />
					<div className='ctexts1-ei'>
						<p className='texts1-ei'>Reducir la huella de carbono en la construcción y otros sectores es crucial para combatir el cambio climático, mejorar la calidad del aire y la salud pública, asegurar el uso sostenible de los recursos naturales, y cumplir con regulaciones ambientales, lo que también puede generar ahorros económicos y aumentar la competitividad</p>
					</div>
				</div> :
				<div className='sustainableContainer'>
					<img className='imagen-ei' src="https://firebasestorage.googleapis.com/v0/b/constructorespositivos-1a342.appspot.com/o/sustentabilidad%2Fpage%2F4.png?alt=media&token=15119626-9184-4240-8e3c-2b261b33ef96" />
				</div>
			}
		</>
	);
};

export { Environmentalndicator };
