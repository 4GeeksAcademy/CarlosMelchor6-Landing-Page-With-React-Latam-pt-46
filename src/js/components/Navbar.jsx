import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#"></a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active text-light" aria-current="page" href="#">Start Bootstrap</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">Service</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">Contac</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

	);
};