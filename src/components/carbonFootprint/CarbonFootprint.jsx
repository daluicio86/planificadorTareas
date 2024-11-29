import { useEffect, useState } from "react";

const CarbonFootprint = () => {
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
                    <img className='fpimagen' src="https://firebasestorage.googleapis.com/v0/b/constructorespositivos-1a342.appspot.com/o/sustentabilidad%2F4.png?alt=media&token=00c47a89-4000-4f6f-a639-a573848dc6eb" />
                    <img className='fpimagenAlt' src="https://firebasestorage.googleapis.com/v0/b/constructorespositivos-1a342.appspot.com/o/sustentabilidad%2F3.png?alt=media&token=63d980fb-9c39-4986-b103-42c3d1a99f73" />

                    <div className='fpctexts'>
                        <p className='fptexts'>¿Qué es la huella de carbono?</p>
                        <hr />
                    </div>
                    <br />
                    <div className='fpctexts1'>
                        <p className='fptexts1'>Es un indicador ambiental que muestra la cantidad de gases de efecto invernadero (GEI), expresada en términos de CO2 equivalente, emitida directa o indirectamente como resultado de una actividad específica.</p>
                    </div>
                </div> :
                <div className='sustainableContainer'>
                    <img className='fpimagen' src="https://firebasestorage.googleapis.com/v0/b/constructorespositivos-1a342.appspot.com/o/sustentabilidad%2Fpage%2F3.png?alt=media&token=3f0565a9-fe21-46e6-acbd-e4bc413e7291" />
                </div>}
        </>
    );
};

export { CarbonFootprint };
