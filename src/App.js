import React from "react";
import Activity from "./components/Activity";
import CatList from "./components/CatList";
import AddCat from "./components/AddCat";
import "./App.css";

function App() {
	return (
		<div className="App">
			<CatList />
			<AddCat />
		</div>
	);
}

export default App;
