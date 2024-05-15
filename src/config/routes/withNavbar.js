import React from 'react'
import {Outlet} from 'react-router-dom'
import { Footer, Header } from '../../components/components';


export default () => {
    return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
    );
}