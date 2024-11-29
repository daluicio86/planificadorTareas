import { useEffect, useState } from "react";


const BenefitsSustainability = () => {
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
				<div className='benefitsSustainableContainer'>
					<img className='imagen' src="https://firebasestorage.googleapis.com/v0/b/constructorespositivos-1a342.appspot.com/o/sustentabilidad%2F2.png?alt=media&token=0b392648-0cca-4f65-ba4a-a3c0a87cd749" />
					<div className='bstexts'>
						<h4 className='btexts'>La huella de carbono mide el impacto ambiental de nuestras actividades. Reducirla es vital para combatir el cambio climático y construir un futuro más verde.</h4>
						<hr />
					</div>
					<br />
					<div className='bstexts1'>
						<p className='btexts1'>Beneficios de la Sostenibilidad:</p>
						<ul className="bsust">
							<li><i className="bi bi-circle-fill ul-icon"></i>Mejora de la reputación</li>
							<li><i className="bi bi-circle-fill ul-icon"></i>Ahorro de costos</li>
							<li><i className="bi bi-circle-fill ul-icon"></i>Cumplimiento normativo y reducción de riesgos</li>
						</ul>
					</div>
				</div>
				:
				<div className='benefitsSustainableContainer'>
					<img className='imagen' src="https://firebasestorage.googleapis.com/v0/b/constructorespositivos-1a342.appspot.com/o/sustentabilidad%2Fpage%2F2.png?alt=media&token=e7f0cf68-90de-40fe-a2a7-245840f9a04a" />
				</div>}
		</>
	);
};

export { BenefitsSustainability };
