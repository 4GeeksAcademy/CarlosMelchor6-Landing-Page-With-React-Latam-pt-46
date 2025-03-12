import React from "react";

export const Footer = () => {
    return (
        <footer>
            <div>
                <div className="bg-dark py-4 text-white "> 
                    <p className="d-flex align-items-center justify-content-center my-auto">Copyright &copy; your website {new Date().getFullYear()} </p>
                </div>
            </div>
        </footer>)
}