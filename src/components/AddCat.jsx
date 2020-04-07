import React, { useState } from "react";

import { connect } from "react-redux";
import { addCat } from "../redux/actions";

const AddCat = () => {
	return (
		<>
			<h1>Add Cat</h1>
		</>
	);
};

export default connect(null, { addCat })(AddCat);
