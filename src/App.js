import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Intro />
			<About />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
