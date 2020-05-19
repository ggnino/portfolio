import React, { useEffect } from "react";
import logo1 from "../imgs/css.png";
import logo2 from "../imgs/html.png";
import sr from "../scroll";

function About() {
	return (
		<section id="about">
			<div className="dark-overlay">
				<div className="container" id="b">
					<div className="row">
						<div className="col-4">
							<h3>Spells</h3>
							<div>
								<img className="img-fluid" src={logo2} />
								<img className="img-fluid" src={logo1} />
								<img
									className="img-fluid"
									src="https://img.icons8.com/color/96/000000/mongodb.png"
								/>
							</div>
							<div className="">
								<img
									className="img-fluid"
									src="https://img.icons8.com/color/96/000000/nodejs.png"
								/>
								<img
									className="img-fluid"
									src="https://img.icons8.com/color/96/000000/javascript.png"
								/>
								<img
									className="img-fluid"
									src="https://img.icons8.com/color/96/000000/react-native.png"
								/>
							</div>
						</div>
						<div className="col-8" id="s">
							<p id="a">
								Welcome, my name is Guillermo Gonzalez. I am a software
								developer who has been into the deepest parts of "Hades" &amp;
								back, to learn the MERN stack. Throughout the journey, I learned
								how to balance between being a Husband/Dad/Mechanic and
								studying/developing actual working code. After doing couple
								online courses, a little bit of college, and learning different
								"spells"; I am ready for the next level. I am looking for a
								place, where I can learn and grow, and really blossom into a
								nice career.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
