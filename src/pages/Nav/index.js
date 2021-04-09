import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import chakra from "../../assets/flag-chakra.jpg";

function Nav() {
	return (
		<nav>
			<div className="logo">
				<Link to="/">
					<img className="nav-img" alt="nav bar" src={chakra}></img>
				</Link>
				<p className="logo-text">
					APNA <br /> JOURNEY
				</p>
			</div>
			<ul className="nav-links">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/blogs">Blogs</Link>
				</li>
				<li>
					<Link to="/historical">Historical Sites</Link>
				</li>
				<li>
					<Link to="/tourism">Tourism</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
