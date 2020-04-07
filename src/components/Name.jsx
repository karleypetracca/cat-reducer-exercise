import React from "react";
import { connect } from "react-redux";
import { setName } from "../redux/actions";

const Name = ({ name, setName }) => {
	return (
		<>
			<h1>The cat's name is {name}:</h1>
			<input type="text" onChange={(name) => setName()} />
		</>
	);
};

const mapStateToProps = (state) => {
	const { name } = state;
	return name;
};

export default connect(mapStateToProps, { setName })(Name);
