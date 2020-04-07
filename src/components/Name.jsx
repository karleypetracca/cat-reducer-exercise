import React, { Component } from "react";
import { connect } from "react-redux";
import { setName } from "../redux/actions";

class Name extends Component {
	state = {
		textInput: "",
	};

	handleChange = (e) => {
		this.setState({
			textInput: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.setName(this.state.textInput);
	};

	render() {
		return (
			<>
				<h1>What is the cat's name?</h1>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						onChange={this.handleChange}
						placeholder="New name"
					/>
					<button type="submit">Submit</button>
				</form>
			</>
		);
	}
}

export default connect(null, { setName })(Name);
