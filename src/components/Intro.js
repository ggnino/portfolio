import React, { useEffect } from "react";
import sr from "../scroll";

function Intro() {
	useEffect(() => {
		sr.reveal(".jumbotron", {
			duration: 2000,
			origin: "left",
		});

		sr.reveal("#me", {
			duration: 5000,
			origin: "top",
		});
		sr.reveal("#b", {
			duration: 2000,
			origin: "left",
		});
		sr.reveal(".img-fluid", {
			duration: 4000,
			origin: "right",
		});
		sr.reveal("#out", {
			duration: 4000,
			origin: "right",
		});
	}, []);
	return (
		<div className="jumbotron">
			<div className="dark-overlay">
				<div className="container" id="me">
					<h4>
						&#123;<span className="text-primary">Guillermo Gonzalez</span>
						&#125;
					</h4>
					<h2>Where Computer Sorcery</h2>
					<h4>&amp;</h4>
					<h2> Critical Thinking Come Together</h2>
				</div>
			</div>
		</div>
	);
}

export default Intro;
