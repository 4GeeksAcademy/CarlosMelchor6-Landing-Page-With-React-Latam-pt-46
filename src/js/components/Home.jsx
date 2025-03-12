import React from "react";
import { Navbar } from './Navbar'
import { Jumbotron } from './Jumbotron';
import { Footer } from './Footer';
import { Card } from "./Card";

const cards = [
    {
        img: "https://picsum.photos/id/11/300/200",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, vero! Laboriosam velit autem iure nam officia quas",
        title: "A Beutiful Landscape"
    },

    {
        img: "https://picsum.photos/id/13/300/200",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, vero! Laboriosam velit autem iure nam officia quas quod dolor minus!",
        title: "Hello World!"
    },

    {
        img: "https://picsum.photos/id/22/300/200",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum architecto expedita reprehenderit? Vitae, cupiditate incidunt",
        title: "I'm Happy today"
    },

    {
        img: "https://picsum.photos/id/27/300/200",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, vero! Laboriosam velit autem iure lore picsum ver!",
        title: "Today is incredible"
    }

]
export const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Jumbotron />
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {cards.map((item, index) =>
                        <div key={index}>
                            {<Card cards={item} />}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}