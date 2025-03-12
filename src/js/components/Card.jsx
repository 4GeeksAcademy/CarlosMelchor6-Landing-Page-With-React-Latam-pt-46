import React from "react"

export const Card = (props) => {
	const { img, description, title } = props.cards
	return (
		<React.Fragment>
			<div className="card mb-3 mx-2 ">
				<img src={img} className="card-img-top"/>

				<div className="card-body text-center">
					<h5 className="card-title">{title}</h5>
					<p className="card-text" style={{height: "130px"}}>{description}</p>
				</div>

				<div className="card-footer text-center">
					<a href="#" className="btn btn-primary">Find Out More</a>
				</div>

			</div>
		</React.Fragment>
	)
}