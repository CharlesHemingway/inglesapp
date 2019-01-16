import React from "react";
// import { Row, Col } from "react-materialize";
import "../stylesheets/About.css";

class About extends React.Component {
	render() {
		let path = process.env.PUBLIC_URL + "/assets/logo_transparent.png";
		return (
			<section className="background">
				<header className="container">
					<a href="/" title="<- Back">
						<div className="back-btn" />
					</a>
					<img src={path} alt="tofel-exam-prep Logo" className="about-logo" />
					<h2>About</h2>
				</header>
				<main className="container">
					<p className="about-text">
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
					</p>
					<hr />
					
				</main>
				<footer>Copyright &copy; 2018. MIT License.</footer>
			</section>
		);
	}
}

export default About;
