import React, { Component } from "react";
import "./styles/head.css";

import logo from "./sample_logo.png";

class Head extends Component {
	render() {
		return (
			<div className="epik col-12  text-left">
				<div className="logo col-2 offset-2 text-left">
					<img src={logo} width="150" alt="" />
				</div>
				<div className="text col-3 offset-2">
					<span> PERSONALIZED SELF CARE AT SCALE</span>
				</div>
			</div>
		);
	}
}
export default Head;
