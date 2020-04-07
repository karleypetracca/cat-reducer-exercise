import React from "react";
import { connect } from "react-redux";
import { nap, eat, play, murder } from "../redux/actions";

const Activity = ({ activity, nap, eat, play, murder }) => (
	<>
		<h1>What is the cat doing?</h1>
		<p>The cat is...{activity}</p>
		<button onClick={() => nap()}>Napping</button>
		<button onClick={() => eat()}>Eating</button>
		<button onClick={() => play()}>Playing</button>
		<button onClick={() => murder()}>Murdering</button>
	</>
);

const mapStateToProps = (state) => {
	const { activity } = state;
	return activity;
};

export default connect(mapStateToProps, { nap, eat, play, murder })(Activity);
