import React from "react";
import { connect } from "react-redux";
import { setActivity } from "../redux/actions";

import Name from "./Name";

const Activity = ({ activity, name, setActivity }) => (
	<>
		<h1>What is the cat doing?</h1>
		<Name />
		<button onClick={() => setActivity("napping")}>Napping</button>
		<button onClick={() => setActivity("eating")}>Eating</button>
		<button onClick={() => setActivity("playing")}>Playing</button>
		<h2>
			{name} is {activity}!
		</h2>
	</>
);

const mapStateToProps = (state) => {
	const { activity, name } = state;
	return { activity, name };
};

export default connect(mapStateToProps, { setActivity })(Activity);
