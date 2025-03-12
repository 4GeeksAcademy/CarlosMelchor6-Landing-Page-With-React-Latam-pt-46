import React from "react";

//create your first component
export const Navbar = () => {
	return (
		<React.Fragment>
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
				<div class="container-fluid">
					<a class="navbar-brand text-white ms-5" href="#">Start Bootstrap</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active text-white" href="#">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-white" href="#">About</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-white" href="#">Services</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-white" href="#">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
};