import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

import '../../static/scss/layouts/_layout-miCuenta.scss';


const MiCuentaLayout = ({children}) => {
    return (
        <>
            <Header/>

            <main>
                {children}
            </main>
            
            <Footer/>
        </>
     );
}
 
export default MiCuentaLayout;