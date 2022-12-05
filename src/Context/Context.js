import React from "react";
import { questionList, activeUser, topics } from "./data";

const AppContext = React.createContext([
	{
		questionModal: false,
		questionModalState: 0,
		postsList: questionList,
		activeUser,
		topics,
	},
	Function,
]);

export default AppContext;
