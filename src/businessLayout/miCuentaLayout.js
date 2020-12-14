import React from 'react';

import Header from '../modules/adq/header';
import Footer from '../modules/adq/footer';

import '../statics/css/layouts/_layout-miCuenta.scss';


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