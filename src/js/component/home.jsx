import React from "react";
import TodoApp from "./TodoApp";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="App"> <TodoApp /> </div>
	);
};

export default Home;
