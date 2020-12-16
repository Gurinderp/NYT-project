import { render } from "@testing-library/react";
import React from "react";
import "./index.css";

function Blogs() {
	return (
		<div className="blog-list-container">
			<div className="blog-preview-box">
				<div className="blog-box-title">Title</div>
				<div className="blog-box-description">Description</div>
			</div>
			<div className="blog-preview-box">
				<div className="blog-box-title">Title</div>
				<div className="blog-box-description">Description</div>
			</div>
			<div className="blog-preview-box">
				<div className="blog-box-title">Title</div>
				<div className="blog-box-description">Description</div>
			</div>
		</div>
	);
}

export default Blogs;
