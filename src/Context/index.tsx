import React from "react";
import AppContext from "./Context";
import { questionList, activeUser, topics } from "./data";

export default function AppProvider(props: any) {
	const [globalState, setGlobalState] = React.useState<any>({
		questionModal: false,
		questionModalState: 0,
		postsList: questionList,
		activeUser,
		topics,
		paymentMethods: [],
	});
	React.useEffect(() => {}, []);
	return (
		<AppContext.Provider value={[globalState, setGlobalState]}>
			{props.children}
		</AppContext.Provider>
	);
}
