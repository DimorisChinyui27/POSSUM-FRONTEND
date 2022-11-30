import React from "react";
import { Modal, Row, Col } from "antd";

export default function TopicModal({
	isTopicModalOpen,
	setIsTopicModalOpen,
}: {
	isTopicModalOpen: boolean;
	setIsTopicModalOpen: Function;
}) {
	const [searchQuery, setSearchQuery] = React.useState("");
	const [topics, setTopics] = React.useState([
		{
			value: "Trending",
		},
		{
			value: "Deutschland",
		},
		{
			value: "Memes",
		},
		{
			value: "Wortwitze",
		},
		{
			value: "Lustig!",
		},
		{
			value: "Interessant!",
		},
		{
			value: "Gaming",
		},
		{
			value: "Konsolen",
		},
		{
			value: "Spiele",
		},
		{
			value: "Beliebte Spiele",
		},
		{
			value: "Entertainment",
		},
		{
			value: "Filme",
		},
		{
			value: "TV",
		},
		{
			value: "Sendungen & Serien",
		},
		{
			value: "Fan Theorien",
		},
		{
			value: "Musik",
		},
		{
			value: "Podcasts",
		},
		{
			value: "Youtube",
		},
		{
			value: "Beziehungen",
		},
	]);
	const addToList = () => {
		let temp = [...topics];
		temp.push({ value: searchQuery });
		setSearchQuery("");
		setTopics(temp);
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
					setSearchQuery(e.target.value);
				}}
			/>
			<Row>
				{topics.filter((item) =>
					item.value.toString().includes(searchQuery.trim())
				).length > 0 ? (
					topics
						.filter((item) =>
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
