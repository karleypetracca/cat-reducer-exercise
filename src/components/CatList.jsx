import React from "react";
import { connect } from "react-redux";
import { setActivity, setName } from "../redux/actions";

const CatList = ({ cats, setActivity, setName }) => {
	const catsArray = Object.keys(cats);
	return (
		<>
			<h1> Cat Lady Cat List</h1>
			<ul>
				{catsArray.map((catId, index) => {
					return (
						<li key={index}>
							{cats[catId].name} is {cats[catId].activity}!
							<button onClick={() => setActivity(catId, "napping")}>
								Napping
							</button>
							<button onClick={() => setActivity(catId, "eating")}>
								Eating
							</button>
							<button onClick={() => setActivity(catId, "playing")}>
								Playing
							</button>
							{/* <form onSubmit={() => setName(catId, event.target.value)}>
								<input
									type="text"
									onChange={() => setName(catId, cats[catId].name)}
									value={cats[catId].name}
								/>
								<button type="submit">Submit Name Change</button>
							</form> */}
						</li>
					);
				})}
			</ul>
		</>
	);
};

const mapStateToProps = (state) => {
	const { cats } = state;
	return cats;
};

export default connect(mapStateToProps, { setActivity, setName })(CatList);
