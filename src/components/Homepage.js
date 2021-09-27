import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainBody from './MainBody';

export default function Homepage() {
    return (
        <div className="Appbody">
            <Header />
            <MainBody />
            <Footer />
        </div>
    )
}
