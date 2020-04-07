import React from "react";
import { connect } from "react-redux";
import { setActivity } from "../redux/actions";

import Name from "./Name";

const Activity = ({ activity, name, setActivity }) => (
	<>
		<Name />
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
	const { activity, name } = state;
	return { activity, name };
};

export default connect(mapStateToProps, { setActivity })(Activity);
