import React from "react";
import { Navbar } from './Navbar';
import { Card } from './Card';
import { ImageCards } from './ImagesCards';
import { Footer } from './Footer';

export const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='container'>
                <div className="row">
                    <div className='col-11'>
                        <Card />
                    </div>

                    <div className="col">
                        <div className='d-flex mt-4'>
                            <ImageCards />
                            <ImageCards />
                            <ImageCards />
                            <ImageCards />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}