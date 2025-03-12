import React from "react";

export const Jumbotron = () => {
    return (
        <div className="card my-4 bg-light border-0 mx-auto" style={{width: "84.5%"}}>
            <div className="card-body">
                <h5 className="card-title" style={{fontSize :"4rem"}}>A Warm Welcome</h5>
                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita rerum laborum quod? Deleniti consequuntur temporibus quaerat sunt asperiores quod dolor deserunt sit possimus, atque esse vero expedita distinctio iure?</p>
                <a href="#" className="btn btn-primary">Call to action!</a>
            </div>
        </div>
    )
}