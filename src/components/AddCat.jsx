import React, { Component } from "react";

import { connect } from "react-redux";
import { addCat } from "../redux/actions";

class AddCat extends Component {
	state = {
		petName: "",
		activity: "",
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { petName, activity } = this.state;
		this.props.addCat({ name: petName, activity });
		this.setState({
			petName: "",
			activity: "",
		});
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		const { petName, activity } = this.state;
		return (
			<>
				<h1>Add Cat</h1>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="petName"
						onChange={this.handleChange}
						placeholder="Name of cat"
						value={petName}
					/>
					<select name="activity" value={activity} onChange={this.handleChange}>
						<option defaultValue>Choose an Activity</option>
						<option value="napping">Napping</option>
						<option value="eating">Eating</option>
						<option value="playing">Playing</option>
					</select>
					<button type="submit">Submit</button>
				</form>
			</>
		);
	}
}

export default connect(null, { addCat })(AddCat);
