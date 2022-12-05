import React from "react";
import { Modal, Row, Col } from "antd";
import AppContext from "src/Context/Context";

export default function TopicModal({
	isTopicModalOpen,
	setIsTopicModalOpen,
}: {
	isTopicModalOpen: boolean;
	setIsTopicModalOpen: Function;
}) {
	const [searchQuery, setSearchQuery] = React.useState("");
	const [globalState, setGlobalState] = React.useContext<any>(AppContext);
	const addToList = () => {
		let temp = [...globalState.topics];
		temp.push({ value: searchQuery });
		setSearchQuery("");
		setGlobalState({ ...globalState, topics: temp });
	};
	return (
		<Modal
			title="Add Topics"
			open={isTopicModalOpen}
			onCancel={() => {
				setIsTopicModalOpen(false);
			}}
			footer={null}
			closable
			destroyOnClose
		>
			<input
				type={"text"}
				style={{
					height: 40,
					width: "100%",
					borderRadius: 24,
					border: "1px solid gray",
					outline: "none",
					paddingLeft: 15,
					marginBottom: 10,
				}}
				placeholder="Search topics"
				onChange={(e) => {
					if (searchQuery.length < 100) {
						setSearchQuery(e.target.value);
					}
				}}
			/>
			<div
				style={{
					alignItems: "flex-end",
					justifyContent: "flex-end",
					display: "flex",
					flexDirection: "column",
				}}
			>
				{/* <span
					style={{
						fontSize: 12,
						letterSpacing: 1,
						color: "#bababa",
						textAlign: "center",
						paddingRight: 20,
					}}
				>
					{searchQuery.length}/100
				</span> */}
				{searchQuery.length >= 80 && (
					<span
						style={{
							fontSize: 12,
							letterSpacing: 1,
							color: "#bababa",
							textAlign: "center",
							paddingRight: 20,
						}}
					>
						Maximum character limit is 100
					</span>
				)}
			</div>
			<Row>
				{globalState.topics.filter((item: any) =>
					item.value.toString().includes(searchQuery.trim())
				).length > 0 ? (
					globalState.topics
						.filter((item: any) =>
							item.value.toString().includes(searchQuery.trim())
						)
						.map((item: any, index: number) => {
							return (
								<Col
									key={index}
									xs={10}
									sm={7}
									md={7}
									lg={7}
									xl={7}
									style={{
										paddingTop: 3,
										paddingBottom: 3,
										paddingLeft: 3,
										paddingRight: 3,
										borderRadius: 24,
										backgroundColor: "#fafafa",
										textAlign: "center",
										margin: 5,
										border: "1px solid #9c9e9d",
									}}
								>
									{item.value}
								</Col>
							);
						})
				) : (
					<Col
						xs={24}
						sm={24}
						md={24}
						lg={24}
						xl={24}
						style={{ paddingTop: 15, paddingBottom: 10 }}
					>
						<div
							style={{
								flexDirection: "row",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<span
								style={{
									color: "#9c9e9d",
									fontSize: 13,
									wordSpacing: 1,
									fontWeight: "bold",
									marginRight: 10,
								}}
							>
								Didn&apos;t find it? Let&apos;s add to the list
							</span>
							<input
								onClick={() => {
									addToList();
								}}
								type={"button"}
								style={{
									paddingTop: 5,
									paddingBottom: 5,
									paddingLeft: 22,
									paddingRight: 22,
									background: "linear-gradient(to right,#66d1de, #de41f5)",
									borderRadius: 4,
									border: 0,
								}}
								value="Add"
							/>
						</div>
					</Col>
				)}
			</Row>
		</Modal>
	);
}
