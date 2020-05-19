import React from "react";

function Contact() {
	return (
		<section id="contact">
			<div className="dark-overlay" id="x">
				<div className="container">
					<h1>Contact</h1>
					<p>
						If you have any questions or want to know more, contact me at my{" "}
						<a type="email" href="mailto:ggnino18@gmail.com">
							email
						</a>
						.
					</p>
					<p id="ft">Portfolio built using React &copy; 2020 By GG.</p>
				</div>
			</div>
		</section>
	);
}

export default Contact;
