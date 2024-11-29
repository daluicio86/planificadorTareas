
import {  Button,  } from '@mui/material';

const CarbonFootprintCalculator = () => {
	return (
		<>
			<div className='sustainableContainer'>
				<img
					className='imagen'
					src="https://firebasestorage.googleapis.com/v0/b/constructorespositivos-1a342.appspot.com/o/sustentabilidad%2F9.png?alt=media&token=2d4af652-0342-4359-b301-8fe67212642e"
				/>
				<div className='ctexts'>
					<img
						className='imagenBtn'
						src="https://firebasestorage.googleapis.com/v0/b/constructorespositivos-1a342.appspot.com/o/sustentabilidad%2F16.png?alt=media&token=91f892c5-ffd2-4911-8804-db100557c844"
					/>
					<Button className='cbtn-cfc'>CALCULADORA DE HUELLA DE CARBONO</Button>
				</div>

				<img
					className='imagen'
					src="https://firebasestorage.googleapis.com/v0/b/constructorespositivos-1a342.appspot.com/o/sustentabilidad%2F10.png?alt=media&token=0634bb0a-c103-4445-9de0-7bb11986884e"
				/>
				<div className='ctexts1'>
					<img
						className='imagenBtn1'
						src="https://firebasestorage.googleapis.com/v0/b/constructorespositivos-1a342.appspot.com/o/sustentabilidad%2F15.png?alt=media&token=9d46da10-6fec-4a87-9666-9756e583ac67"
					/>
					<Button className='cbtn1'>GUÍAS Y RECURSOS</Button>
				</div>
			</div>
		</>
	);
};

export { CarbonFootprintCalculator };
