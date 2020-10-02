import React from "react";
import "./index.css";
import placeholder from "../../assets/placeholderimage.png";

function Home() {
	return (
		<div className="home-content">
			<div className="home-text">
				<h1>Overview</h1>
				<p className="body-context">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Orci a scelerisque purus semper. Viverra vitae
					congue eu consequat ac felis donec. Eleifend donec pretium
					vulputate sapien nec sagittis aliquam malesuada bibendum.
					Mattis ullamcorper velit sed ullamcorper morbi tincidunt
					ornare massa eget. Nisi scelerisque eu ultrices vitae.
					Faucibus nisl tincidunt eget nullam non nisi. Ac auctor
					augue mauris augue neque.{" "}
				</p>
				<br />
				<h1>Historical sites</h1>
				<p className="body-context">
					Aliquet nec ullamcorper sit amet risus nullam eget felis
					eget. Interdum consectetur libero id faucibus nisl tincidunt
					eget nullam. Tempus urna et pharetra pharetra massa massa
					ultricies mi. Mattis enim ut tellus elementum sagittis
					vitae. Nulla porttitor massa id neque aliquam. Enim sit amet
					venenatis urna cursus. A diam sollicitudin tempor id. Nulla
					pharetra diam sit amet nisl suscipit. Molestie a iaculis at
					erat pellentesque adipiscing commodo elit. Mauris augue
					neque gravida in. Nunc sed velit dignissim sodales ut eu.
					Tincidunt id aliquet risus feugiat. Fringilla est
					ullamcorper eget nulla facilisi etiam dignissim diam.{" "}
				</p>
				<img
					src={placeholder}
					alt="placeholder"
					className="body-image"
				></img>
				<br />
				<h1>Tourist Attractions</h1>
				<p className="body-context">
					Aliquam malesuada bibendum arcu vitae elementum curabitur
					vitae nunc sed. Scelerisque mauris pellentesque pulvinar
					pellentesque habitant morbi. Lorem ipsum dolor sit amet
					consectetur adipiscing elit pellentesque habitant. Eget nunc
					lobortis mattis aliquam. Habitant morbi tristique senectus
					et. Cras adipiscing enim eu turpis egestas pretium aenean
					pharetra magna. Dui faucibus in ornare quam viverra orci
					sagittis eu volutpat. Interdum varius sit amet mattis.
					Tristique senectus et netus et malesuada fames ac turpis.
					Quisque id diam vel quam elementum pulvinar etiam non. Amet
					cursus sit amet dictum. Auctor urna nunc id cursus metus
					aliquam. Donec ac odio tempor orci dapibus ultrices in.
					Neque convallis a cras semper auctor neque. Fermentum
					iaculis eu non diam phasellus vestibulum lorem sed risus. In
					nibh mauris cursus mattis molestie a iaculis at. Arcu odio
					ut sem nulla pharetra diam sit.
				</p>
				<img
					src={placeholder}
					alt="placeholder"
					className="body-image"
				></img>
				<br />
				<h1>Country History</h1>
				<p className="body-context">
					Ultrices dui sapien eget mi. Rhoncus mattis rhoncus urna
					neque viverra justo nec ultrices dui. Nisl tincidunt eget
					nullam non nisi est. Ultricies lacus sed turpis tincidunt id
					aliquet risus feugiat in. Elementum pulvinar etiam non quam
					lacus suspendisse faucibus interdum posuere. Nec nam aliquam
					sem et tortor. Tempor nec feugiat nisl pretium. Aenean
					euismod elementum nisi quis eleifend quam adipiscing. Ut sem
					nulla pharetra diam sit amet nisl suscipit adipiscing.
				</p>
				<img
					src={placeholder}
					alt="placeholder"
					className="body-image"
				></img>
			</div>
			<div className="top-5s">
				<div className="top-historical">
					<p className="t5-title">Top 5 Historical</p>
					<ul>
						<li>
							<p>1. Number 1</p>
							<img
								src={placeholder}
								alt="placeholder"
								className="area-image"
							></img>
						</li>
						<li>
							<p>2. Number 2</p>
							<img
								src={placeholder}
								alt="placeholder"
								className="area-image"
							></img>
						</li>
						<li>
							<p>3. Number 3</p>
							<img
								src={placeholder}
								alt="placeholder"
								className="area-image"
							></img>
						</li>
						<li>
							<p>4. Number 4</p>
							<img
								src={placeholder}
								alt="placeholder"
								className="area-image"
							></img>
						</li>
						<li>
							<p>5. Number 5</p>
							<img
								src={placeholder}
								alt="placeholder"
								className="area-image"
							></img>
						</li>
					</ul>
				</div>
				<div className="top-tourism">
					<p className="t5-title">Top 5 Tourist</p>
					<ul>
						<li>
							<p>1. Number 1</p>
							<img
								src={placeholder}
								alt="placeholder"
								className="area-image"
							></img>
						</li>
						<li>
							<p>2. Number 2</p>
							<img
								src={placeholder}
								alt="placeholder"
								className="area-image"
							></img>
						</li>
						<li>
							<p>3. Number 3</p>
							<img
								src={placeholder}
								alt="placeholder"
								className="area-image"
							></img>
						</li>
						<li>
							<p>4. Number 4</p>
							<img
								src={placeholder}
								alt="placeholder"
								className="area-image"
							></img>
						</li>
						<li>
							<p>5. Number 5</p>
							<img
								src={placeholder}
								alt="placeholder"
								className="area-image"
							></img>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Home;
