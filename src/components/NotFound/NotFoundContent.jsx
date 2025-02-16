import React from 'react';
import Link from 'next/link';

const NotFoundContent = () => {
    return (
        <>
            <div className="error-page-area default-padding text-center bg-cover">
                <div className="shape-left"></div>
                <div className="shape-right" ></div>
                <div className="container">
                    <div className="error-box">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1>404</h1>
                                <h2>¡Lo sentimos, la página no fue encontrada!</h2>
                                <p>
                                    Estamos trabajando para solventar el inconveniente en la menor brevedad posible.
                                </p>
                                <div className="eulding-btn">
                                    <Link className="btn mt-20 btn-md btn-theme bordered" href="/">Regresar al Inicio</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundContent;