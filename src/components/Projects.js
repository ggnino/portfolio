import React, { useState } from "react";
import c from "../imgs/c.JPG";
import landing from "../imgs/landing.JPG";
import cal from "../imgs/Calculator.JPG";
import car from "../imgs/ferr.JPG";
import excer from "../imgs/Capture.JPG";
function Projects() {
	const [proj, setProj] = useState([excer, landing, cal, car, c]);
	const [index, setIndex] = useState(0);
	const [description, setDescription] = useState([
		"An excercise app that logs the users activity. Built this full stack app using the MERN stack.",
		"A product landing page built using HTML/CSS.",
		"A javascript calculator app built using ReactJS. Design inspired by Lofree digit calculator.",
		"A Tribute page for one of my favortie cars of all time.Built this page with HTML/CSS/JS.",
		"A simple quote generator app with a game of thrones theme. Built this app using ReactJS.",
	]);

	const links = [
		"https://gg-random-quote-app.herokuapp.com/",
		"https://gg-exercise-app.herokuapp.com/",
		"https://gg-calculator.herokuapp.com/",
		"https://gg-ferraritribute.herokuapp.com/",
		"https://gg-landingpage.herokuapp.com/",
	];

	const display = () => {
		if (index === 0) return proj[0];
		if (index === 1) return proj[1];
		if (index === 2) return proj[2];
		if (index === 3) return proj[3];
		if (index === 4) return proj[4];
	};

	const output = () => {
		if (index === 0) return description[0];
		if (index === 1) return description[1];
		if (index === 2) return description[2];
		if (index === 3) return description[3];
		if (index === 4) return description[4];
	};

	const linked = () => {
		if (index === 0) return links[0];
		if (index === 1) return links[4];
		if (index === 2) return links[2];
		if (index === 3) return links[3];
		if (index === 4) return links[1];
	};

	const onClick = () => {
		if (index === 0) setIndex(1);
		if (index === 1) setIndex(2);
		if (index === 2) setIndex(3);
		if (index === 3) setIndex(4);
		if (index === 4) setIndex(0);
	};

	return (
		<section id="projects">
			<div className="dark-overlay">
				<div className="container">
					<h1>Projects</h1>
					<div className="row">
						<div className="col-8">
							<a href={linked()} target="_blank">
								<img className="img-fluid" src={display()} />
							</a>
						</div>
						<div className="col-4">
							<p id="out">{output()}</p>
						</div>
						<button className="m-4" id="boton" onClick={onClick}>
							Next Project
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
