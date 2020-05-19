import React from "react";

function Navbar() {
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="navy">
				<a class="navbar-brand" href=""></a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item">
							<a class="nav-link" href="#about">
								About
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#projects">
								Projects
							</a>
						</li>

						<li class="nav-item">
							<a class="nav-link" href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
