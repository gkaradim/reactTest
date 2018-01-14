import React, { Component } from "react";
import "./styles/main.css";

class Main extends Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);

		// this.state = {value: ''};
		this.state = {
			email: "",
			onoma: "",
			pass: "",
			Lonoma: "",
			cpass: "",
			num: "",
			sel: ""
		};
	}
	// handleChange(e) {
	//    this.setState({value: e.target.value});
	//  }
	handleInputChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}
	submit(e) {
		e.preventDefault();

		console.log(
			this.state.email,
			this.state.onoma,
			this.state.pass,
			this.state.Lonoma,
			this.state.cpass,
			this.state.num,
			this.state.sel
		);
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="top col-5 offset-3  text-left">
						<p>
							Our vision is to reduce demand for healthcare services, by
							educating and empowering patients to take more
							responsibility for their own healthcare, wherever they are.
						</p>
					</div>
				</div>
				<form onSubmit={this.submit} className="forma">
					<div className="row">
						<div className="back col-6 offset-3">
							<header className="row">
								<div className="ptext1 col-10 text-left">
									<span className="text1">
										{" "}Please complete your Profile
									</span>
								</div>
								<div className="ptext col-10 text-left">
									<span className="text2"> Mandatory fields*</span>
								</div>
							</header>
							<div className="row">
								<div className="col-6">
									<div className="form-group required">
										<label className="control-label">
											User name (Your email address){" "}
										</label>
										<input
											name="email"
											type="email"
											placeholder="lorum_ipsum@mail.com"
											className="form-control"
											id="usr"
											value={this.state.email}
											onChange={this.handleInputChange}
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="form-group required">
										<label className="control-label">
											First name{" "}
										</label>
										<input
											name="onoma"
											type="text"
											placeholder="Type in your first name"
											className="form-control"
											id="on"
											value={this.state.onoma}
											onChange={this.handleInputChange}
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="form-group required">
										<label className="control-label">Password </label>
										<input
											name="pass"
											type="password"
											placeholder="Type in password"
											className="form-control"
											id="pwd"
											value={this.state.pass}
											onChange={this.handleInputChange}
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="form-group required">
										<label className="control-label">
											Last name{" "}
										</label>
										<input
											name="Lonoma"
											type="text"
											placeholder="Type in your last name"
											className="form-control"
											id="name"
											value={this.state.Lonoma}
											onChange={this.handleInputChange}
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="form-group required">
										<label className="control-label">
											Confirm password{" "}
										</label>
										<input
											name="cpass"
											type="password"
											placeholder="Type in password"
											className="form-control"
											id="pass"
											value={this.state.cpass}
											onChange={this.handleInputChange}
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="form-group required">
										<label className="control-label">
											Mobile number{" "}
										</label>
										<input
											name="num"
											type=""
											placeholder="Type in your mobile number"
											className="form-control"
											id="num"
											value={this.state.num}
											onChange={this.handleInputChange}
										/>
									</div>
								</div>
								<div className="col-6 offset-6">
									<div className="form-group required">
										<label className="control-label">Role </label>
										<select
											className="form-control"
											id=""
											name="sel"
											value={this.state.sel}
											onChange={this.handleInputChange}
										>
											<option value="" disabled selected>
												Select your role
											</option>
											<option value="1">1</option>
											<option value="2">2</option>
										</select>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="Prof col-6 offset-6">
									<div className="row">
										<span className="txt_prof col-5 ">
											Profile image
										</span>
										<span className="txt_files col-7 ">
											Accepted file types: jpg, png, eps
										</span>
									</div>
									<div className="row">
										<div className="Uploadbtn col-8 offset-2 text-center">
											<button
												className="btn btn-primary"
												type="button"
											>
												Upload image
											</button>
										</div>
									</div>
								</div>
							</div>
							<footer>
								<div className="ftr col-12 ">
									<div className="row">
										<div className="ftext col-8 ">
											<span className="">
												By registering you agree to accept our
												<a className="terms" href="#">
													{" "}Terms & Conditions
												</a>
											</span>
										</div>

										<div className="buttn col-4 ">
											<button
												className="join btn btn-primary col-12"
												type="submit"
												value="Submit"
											>
												Join Now
											</button>
										</div>
									</div>
								</div>
							</footer>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Main;
