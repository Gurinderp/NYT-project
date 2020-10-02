import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Historical from "./pages/Historical";
import Tourism from "./pages/Tourism";
import Footer from "./pages/Footer";

function App() {
	return (
		<div className="App">
			<Router>
				<Nav />
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/historical">
					<Historical />
				</Route>
				<Route path="/tourism">
					<Tourism />
				</Route>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
