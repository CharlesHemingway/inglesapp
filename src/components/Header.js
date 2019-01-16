import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
	render() {
		let path = process.env.PUBLIC_URL + "/assets/logo_transparent.png";
		return (
			<section className="header">
				<Link to="/">
					<img src={path} alt="Escuela Logo" className="logo" />
				</Link>
				<ul className="nav-bar">
					<li>
						<Link to="/about">Sobre</Link>
					</li>
					<li>
						<a
							href="https://github.com/ossielromero"
							target="_blank"
							rel="noopener noreferrer"
						>
							Contribute
						</a>
					</li>
				</ul>
			</section>
		);
	}
}

export default Header;
