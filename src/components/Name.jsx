import React, { useState } from "react";
import { connect } from "react-redux";
import { setName } from "../redux/actions";

const Name = ({ setName }) => {
	const [textInput, setTextInput] = useState("");

	const handleChange = (event) => {
		setTextInput(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setName(textInput);
		setTextInput("");
	};

	return (
		<>
			<h1>What is the cat's name?</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange} placeholder="New name" />
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default connect(null, { setName })(Name);
