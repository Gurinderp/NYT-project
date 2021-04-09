import React from "react";
import "./index.css";
import home1 from "../../assets/homepage1.jpg";
import home2 from "../../assets/homepage2.jpg";
import home3 from "../../assets/homepage3.jpg";
import home4 from "../../assets/homepage4.jpg";
import home5 from "../../assets/homepage5.jpg";
import placeholder from "../../assets/placeholderimage.png";
import dehli1 from "../../assets/dehli1.jpg";
import mumbai1 from "../../assets/mumbai1.jpg";
import bengaluru1 from "../../assets/bengaluru1.jpg";
import amritsar1 from "../../assets/amritsar1.jpg";
import jaipur1 from "../../assets/jaipur1.jpg";
import agra1 from "../../assets/agra1.jpg";
import amritsar2 from "../../assets/amritsar2.jpg";
import madurai2 from "../../assets/madurai2.jpg";
import jaisalmer1 from "../../assets/jaisalmer1.jpg";
import jaisalmer2 from "../../assets/jaisalmer2.jpg";

function Home() {
	return (
		<div className="home-content">
			<div className="home-text">
				<h1>Overview</h1>
				<p className="body-context">
					Welcome to Apna Journey - your guide to all the cultural and
					tourist sites located in the Republic of India with detailed
					information to help you choose the best destination for you.
					India is the second-most populous country, yet it is only
					the seventh largest country by land area. This cultural
					density offers a wide variety of options ranging from
					luxurious hotels in vast cities to humble homes in villages.
				</p>
				<br />
				<h1>Culture and History</h1>
				<p className="body-context">
					With a population of over 1.3 billion, India hosts a variety
					of ethnic and religious groups. Each addition enhances the
					variety India has to offer. The origins of Hinduism,
					Buddhism, Jainism, and Sikhism lie deeply ingrained in the
					population - creating wide spread celebrations, such as the
					Festival of Colors or the Festival of Lights, and traditions
					that allow members of all backgrounds to partake and immerse
					themselves. The culture can also be experienced through the
					architecture, food, and art available throughout every
					street.
				</p>
				<div className="cultural-imgs-home">
					<img
						src={home2}
						alt="placeholder"
						className="body-image"
					></img>
				</div>
				<br />
				<h1>Historical sites</h1>
				<p className="body-context">
					The variety of civilizations has led to widespread variety
					in archiecture and art available in India. Some important
					historial sites, such as the Golden Temple, have deep
					religious connections and are still frequently used as such.
					Others may be entire cities, such as Jaisalmer, which have
					their integrity preserved while society continues to blossom
					within them. From the rise and fall of Kingdoms to the
					adaptation of modern technology, these historical sites have
					centuries ingrained in their structure and have stood the
					test of time when society around them could not.
				</p>
				<img src={home1} alt="placeholder" className="body-image"></img>
				<br />
				<h1>Tourist Attractions</h1>
				<p className="body-context">
					India has a deep connection with nature not available in
					every country. The exotic climate is home to animals equally
					as exotic, such as Tigers, Red Pandas, or the Asian
					Elephant. Tourism sites also cater to those that prefer
					luxury and relaxation, such as the Beaches of Goa, or luxury
					hotels in Jaipur - Taj Rambagh Palace, The Raj Palace, and
					ITC Rajputana. The vast nation allows every visitor to find
					their new peace and have an amazing time doing so.
				</p>
				<img src={home4} alt="placeholder" className="body-image"></img>
			</div>
			<div className="top-5s">
				<div className="top-historical">
					<p className="t5-title">Top 5 Historical</p>
					<ul>
						<li>
							<p>1. Taj Mahal</p>
							<img
								src={home5}
								alt="placeholder"
								className="area-image"
							></img>
						</li>
						<li>
							<p>2. Golden Temple</p>
							<img
								src={amritsar2}
								alt="placeholder"
								className="area-image"
							></img>
						</li>
						<li>
							<p>3. Madurai Temples</p>
							<img
								src={madurai2}
								alt="placeholder"
								className="area-image"
							></img>
						</li>
						<li>
							<p>4. Jaisalmer</p>
							<img
								src={jaisalmer1}
								alt="placeholder"
								className="area-image"
							></img>
						</li>
						<li>
							<p>5. Jaisalmer</p>
							<img
								src={jaisalmer2}
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
							<p>1. New Dehli</p>
							<img
								src={dehli1}
								alt="placeholder"
								className="area-image"
							></img>
						</li>
						<li>
							<p>2. Bengaluru</p>
							<img
								src={bengaluru1}
								alt="placeholder"
								className="area-image"
							></img>
						</li>
						<li>
							<p>3. Mumbai</p>
							<img
								src={mumbai1}
								alt="placeholder"
								className="area-image"
							></img>
						</li>
						<li>
							<p>4. Jaipur</p>
							<img
								src={jaipur1}
								alt="placeholder"
								className="area-image"
							></img>
						</li>
						<li>
							<p>5. Amritsar</p>
							<img
								src={amritsar1}
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
