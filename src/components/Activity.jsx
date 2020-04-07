import React from "react";
import { connect } from "react-redux";
import { setActivity, setName } from "../redux/actions";

const Activity = ({ activity, name, setActivity, setName }) => (
	<>
		<h1>What is the cat doing?</h1>
		<p>
			{name} is...{activity}
		</p>
		<button onClick={() => setActivity("napping")}>Napping</button>
		<button onClick={() => setActivity("eating")}>Eating</button>
		<button onClick={() => setActivity("playing")}>Playing</button>
	</>
);

const mapStateToProps = (state) => {
	const { activity } = state;
	return activity;
};

export default connect(mapStateToProps, { setActivity, setName })(Activity);
