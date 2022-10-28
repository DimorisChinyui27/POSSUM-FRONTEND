import React from "react";
import Image from "next/image";
import { Modal, Input, Switch, AutoComplete, Row, Col, Tooltip } from "antd";
import {
	DeleteOutlined,
	EditOutlined,
	HeartFilled,
	PlusOutlined,
} from "@ant-design/icons";
import styles from "./index.module.css";
import { FaDonate, FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";
import {
	CgChevronDoubleUpO,
	CgCodeClimate,
	CgCornerLeftUp,
} from "react-icons/cg";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { GiBanknote, GiReturnArrow } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";
const { TextArea } = Input;

const DashboardTemplate = () => {
	const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
	const postsList = [
		{
			username: "Axel Blaze",
			url: "/profileSmol.jpg",
			post: "Why has the crptocurrency market crashed so much after all the hype last week?",
			totalAnswered: 10,
			sameQuestion: 200,
			date: "Aug 28",
			totalVotes: 120,
			bounty: "30$",
		},
		{
			username: "Basmus",
			url: "/profilePic.png",
			post: "What Does the Future Hold for Cryptocurrency? is stable coin?",
			totalAnswered: 10,
			sameQuestion: 20,
			date: "11th Oct, 2022",
		},
		{
			username: "Alfred",
			url: "/profilePic.png",
			post: "What is the difference between a UX designer and Ux researcher?",
			totalAnswered: 10,
			sameQuestion: 130,
			date: "1st Sept, 2022",
		},

		{
			username: "Axel",
			url: "/profilePic.png",
			post: "Why has the crptocurrency market crashed so much after all the hype last week?",
			totalAnswered: 10,
			sameQuestion: 200,
			date: "28th Aug, 2022",
		},
		{
			username: "Basmus",
			url: "/profilePic.png",
			post: "What Does the Future Hold for Cryptocurrency? is stable coin?",
			totalAnswered: 10,
			sameQuestion: 20,
			date: "11th Oct, 2022",
		},
		{
			username: "Alfred",
			url: "/profilePic.png",
			post: "What is the difference between a UX designer and Ux researcher?",
			totalAnswered: 10,
			sameQuestion: 130,
			date: "1st Sept, 2022",
		},
	];
	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "flex-start",
					justifyContent: "flex-start",
					paddingBottom: 10,
				}}
			>
				<Image
					src={"/profilePic.png"}
					style={{
						borderRadius: 75 / 2,
						objectFit: "cover",
						width: "100%",
						maxWidth: 75,
						height: "100%",
						maxHeight: 75,
						border: "3px solid #bababa",
						backgroundColor: "#fff",
						marginRight: 5,
						boxShadow:
							"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
					}}
					height={75}
					width={75}
				/>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "space-between",
						width: "100%",
						paddingLeft: 10,
						paddingTop: 10,
					}}
				>
					<input
						placeholder="What do you want to ask..."
						style={{
							outline: "none",
							borderRadius: 18,
							height: 45,
							width: "100%",
							border: "1px solid gray",
							paddingLeft: 20,
						}}
						onClick={() => {
							setIsModalOpen(true);
						}}
					/>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							width: "100%",
							maxWidth: 300,
							paddingTop: 10,
						}}
					>
						<span
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
								color: "#bababa",
								fontSize: 15.5,
								fontWeight: "normal",
								cursor: "pointer",
							}}
							onClick={() => {
								setIsModalOpen(true);
							}}
						>
							<Image src={"/thinking.png"} width={20} height={20} />{" "}
							<span
								style={{
									marginLeft: 7,
								}}
							>
								Ask{" "}
							</span>
						</span>
						|
						<span
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
								color: "#bababa",
								fontSize: 15.5,
								fontWeight: "normal",
							}}
						>
							Answer <EditOutlined style={{ marginLeft: 5, color: "#000" }} />{" "}
						</span>
					</div>
				</div>
			</div>
			<QuestionModal
				isModalOpen={isModalOpen}
				handleCancel={handleCancel}
				handleOk={handleOk}
			/>
			<div className={styles.dashboardContent}>
				{postsList.map((item, index) => {
					return (
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "flex-start",
								justifyContent: "flex-start",
								//	border: "2px solid red",
								boxShadow:
									"rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",

								paddingLeft: 7,
								paddingRight: 7,
								paddingBottom: 5,
								paddingTop: 5,
								borderBottomLeftRadius: 12,
								borderBottomRightRadius: 12,
							}}
							key={index}
						>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<div>
									<Image
										src={item.url}
										className={styles.postedByImage}
										height={53}
										width={53}
										style={{ borderRadius: 53 / 2 }}
									/>
								</div>
								<div className={styles.votesDiv}>
									<FaAngleDoubleUp className={styles.upVote} />
									<span className={styles.votes}>{item.totalVotes}</span>
									<FaAngleDoubleDown className={styles.downVote} />
								</div>
							</div>
							<div //className={styles.post}
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "space-between",
									width: "100%",
									height: "100%",
									minHeight: 150,
								}}
							>
								<div //className={styles.post}
									style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "space-between",
										paddingLeft: 10,
										paddingTop: 10,
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											justifyContent: "space-between",
											width: "100%",
										}}
									>
										<div className={styles.postHeader}>
											<span className={styles.postedBy}>{item.username}</span> •{" "}
											<span className={styles.date}>{item.date}</span>
										</div>
										<div className={styles.bottomInteractions}>
											<GiBanknote className={styles.bountyLogo} />
											<span className={styles.bountyAmount}>{item.bounty}</span>
										</div>
										<div style={{}}>
											<BsThreeDotsVertical
												style={{
													color: "#000",
													fontSize: 17,
													fontWeight: "bold",
												}}
											/>
										</div>
									</div>
									<div className={styles.postQuestion}>{item.post}</div>
								</div>
								<div className={styles.alignStart}>
									<div className={styles.bottomInteractions}>
										<FaDonate
											style={{
												marginRight: 7,
												color: "#9c9e9d",
												fontSize: 17,
												fontWeight: "bold",
											}}
										/>
										<span
											style={{
												fontSize: 14,
												fontWeight: "bold",
												color: "#9c9e9d",
											}}
										>
											2 $
										</span>
									</div>
									<div className={styles.bottomInteractions}>
										<RiQuestionAnswerLine
											style={{
												marginRight: 7,
												color: "#0248a3",
												fontSize: 17,
												fontWeight: "bold",
											}}
										/>
										<span
											style={{
												fontSize: 14,
												fontWeight: "bold",
												color: "#0248a3",
											}}
										>
											{item.totalAnswered}
										</span>
									</div>
									<div className={styles.bottomInteractions}>
										<GiReturnArrow
											style={{
												marginRight: 7,
												color: "#9c9e9d",
												fontSize: 17,
												fontWeight: "bold",
											}}
										/>
										<span
											style={{
												fontSize: 14,
												fontWeight: "bold",
												color: "#9c9e9d",
											}}
										></span>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
function QuestionModal({
	isModalOpen,
	handleOk,
	handleCancel,
}: {
	isModalOpen: boolean;
	handleOk: () => void;
	handleCancel: () => void;
}) {
	const [questionValue, setQuestionValue] = React.useState("");
	const [isFocused, setIsFocused] = React.useState<boolean>(false);
	const [postingAs, setPostingAs] = React.useState<string>("");
	const [isDisabled, setDisabled] = React.useState<boolean>(false);
	const [isTagsVisible, setIsTagVisible] = React.useState<boolean>(false);

	return (
		<Modal
			className="modalStyle"
			title="Ask Question"
			open={isModalOpen}
			onOk={handleOk}
			onCancel={handleCancel}
			footer={null}
		>
			<div
				style={{
					backgroundColor: "#fff	",
					paddingLeft: 20,
					paddingRight: 20,
				}}
			>
				<div
					style={{
						//		backgroundColor: "beige", //"#fafafa",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
						display: "flex",
						paddingTop: 50,
					}}
				>
					<Image
						src={"/profilePic.png"}
						style={{
							borderRadius: 75 / 2,
							objectFit: "cover",
							width: "100%",
							maxWidth: 75,
							height: "100%",
							maxHeight: 75,
							border: "3px solid #bababa",
							backgroundColor: "#fff",
							boxShadow:
								"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
						}}
						height={75}
						width={75}
					/>

					<span
						style={{
							fontWeight: "bolder",
							fontSize: 17,
							paddingTop: 7,
							paddingBottom: 3,
							color: "#000",
						}}
					>
						Lily Allen O'Daniel
					</span>
					<span style={{ color: "#dadada", fontWeight: "bold", fontSize: 15 }}>
						Artist
					</span>
				</div>
				<div
					style={{
						marginTop: 10,
						borderRadius: 15,
						paddingTop: 15,
						paddingBottom: 25,
						paddingLeft: 15,
						paddingRight: 15,
						backgroundColor: "#fff",
						boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
					}}
				>
					<div
						style={{
							flexDirection: "column",
							display: "flex",
							paddingTop: 15,
							paddingBottom: 15,
							paddingLeft: 10,
							paddingRight: 10,
							borderRadius: 22,

							boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
						}}
					>
						<input
							placeholder="Type your question here..."
							style={{
								color: "#dadada",
								fontSize: 17,
								height: "auto",
								width: "100%",
								//maxWidth: 200,
								fontWeight: "normal",
								//	border: ".25 solid #dadada",
								border: "none",
								outline: "none",
							}}
							onChange={(e) => {
								setQuestionValue(e.target.value);
							}}
						/>
						<div
							style={{
								alignItems: "flex-end",
								justifyContent: "flex-end",
								display: "flex",
							}}
						>
							<span
								style={{ color: "#dadada", fontSize: 15, fontWeight: "light" }}
							>
								{questionValue.length} / 500
							</span>
						</div>
					</div>
					<div
						style={{
							flexDirection: "row",
							display: "flex",
							alignItems: "flex-start",
							justifyContent: "space-between",
							paddingLeft: 12,
							paddingTop: 10,
						}}
					>
						<span
							style={{
								fontSize: 16,
								fontWeight: "bold",

								color: "#dadada",
								textAlign: "center",
								flexDirection: "row",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								cursor: "pointer",
							}}
							onClick={() => {
								setIsTagVisible(true);
							}}
						>
							Add tags
							<div
								style={{
									width: 25,
									height: 25,
									borderRadius: 25,
									backgroundColor: "#f4f4f4",
									alignItems: "center",
									justifyContent: "center",
									display: "flex",
									marginLeft: 5,
								}}
							>
								<PlusOutlined
									style={{
										fontSize: 16,
										fontWeight: "bold",
										cursor: "pointer",
									}}
								/>
							</div>
						</span>
						<div
							style={{
								flexDirection: "row",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								fontSize: 16,
								fontWeight: "bold",
								color: isFocused ? "#020e4f" : "#dadada",
								textAlign: "center",
							}}
						>
							Focused
							<Switch
								style={{ marginLeft: 4 }}
								onChange={(checked) => setIsFocused(checked)}
							/>
						</div>

						{/* <div
							style={{
								width: 25,
								height: 25,
								borderRadius: 25,
								backgroundColor: "gray",
								alignItems: "center",
								justifyContent: "center",
								display: "flex",
								marginLeft: 5,
							}}
						>
							<PlusOutlined style={{ fontSize: 16, fontWeight: "bold" }} />
						</div> */}
					</div>
				</div>
				{isTagsVisible && (
					<div>
						{" "}
						<div style={{ marginTop: 20, marginBottom: 3, paddingLeft: 5 }}>
							<span
								style={{
									fontSize: 17,
									fontWeight: "bold",
									color: "#000",
								}}
							>
								Select Topics
							</span>
						</div>
						<div
							style={{
								//	marginTop: 10,
								borderRadius: 15,
								padding: 20,
								backgroundColor: "#fff",
								border: 0,
								// boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
								boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
							}}
						>
							<TagsComponent />
						</div>
					</div>
				)}{" "}
				<div style={{ marginTop: 20, marginBottom: 3, paddingLeft: 5 }}>
					<span
						style={{
							fontSize: 17,
							fontWeight: "bold",
							color: "#000",
						}}
					>
						Choose how you want to post
					</span>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "flex-start",
						justifyContent: "left",
						//	maxWidth: 200,
						flexDirection: "row",
						paddingTop: 5,
						paddingBottom: 5,
						paddingLeft: 20,
					}}
				>
					<Tooltip title="Your identity is hidden">
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								paddingLeft: 10,
								paddingRight: 10,
								paddingTop: 4,
								paddingBottom: 4,
								border: "1px solid #dadada",
								borderRadius: 6,
								backgroundColor: "#fff",
								boxShadow:
									postingAs === "anonymous"
										? "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
										: "none",
							}}
							onClick={() => {
								setPostingAs("anonymous");
							}}
						>
							<Image
								src={"/spyware.png"}
								width={35}
								height={35}
								style={{ borderRadius: 15 }}
							/>
							<span
								style={{
									textAlign: "center",
									fontSize: 11,
									fontWeight: "bold",
									color: "#bababa",
								}}
							>
								Anonymous
							</span>
						</div>
					</Tooltip>
					<div style={{ height: 30, width: 30 }}></div>
					<Tooltip title="Your public profile is visible">
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								paddingLeft: 10,
								paddingRight: 10,
								paddingTop: 4,
								paddingBottom: 4,
								border: "1px solid #dadada",
								borderRadius: 6,

								backgroundColor: "#fff",

								boxShadow:
									postingAs === "public"
										? "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
										: "none",
							}}
							onClick={() => {
								setPostingAs("public");
							}}
						>
							<Image
								src={"/announcement.png"}
								width={35}
								height={35}
								style={{ borderRadius: 15 }}
							/>
							<span
								style={{
									textAlign: "center",
									fontSize: 11,
									fontWeight: "bold",
									color: "#bababa",
									paddingLeft: 10,
									paddingRight: 10,
								}}
							>
								{" "}
								Publicly{" "}
							</span>
						</div>
					</Tooltip>
				</div>
				<div
					style={{
						margin: 20,
						alignItems: "center",
						justifyContent: "center",
						display: "flex",
					}}
				>
					<button
						className={isDisabled ? styles.disabledPrimary : styles.primary}
					>
						Post
					</button>
				</div>
			</div>
		</Modal>
	);
}
export default DashboardTemplate;
const TagsComponent = () => {
	// const [tags, setTags] = React.useState([
	// 	{ id: "Thailand", text: "Thailand" },
	// 	{ id: "India", text: "India" },
	// 	{ id: "Vietnam", text: "Vietnam" },
	// 	{ id: "Turkey", text: "Turkey" },
	// ]);

	// const [availableOptions, setAvailableOptions] = React.useState([
	// 	{ value: "Burns Bay Road" },
	// 	{ value: "Downing Street" },
	// 	{ value: "Wall Street" },
	// ]);
	const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
	const [dropdownOptions, setDropDownOptions] = React.useState([
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
	const [result, setResult] = React.useState("");
	// const options = [
	//   { value: "Burns Bay Road" },
	//   { value: "Downing Street" },
	//   { value: "Wall Street" }
	// ];
	const filterOptions = (item: string) => {
		let ddOptions = dropdownOptions.filter((itt) => itt.value !== item);
		let seleOpt: string[] = [...selectedOptions];

		if (selectedOptions.length > 0) {
			selectedOptions.forEach((selectedOpt) => {
				ddOptions = ddOptions.filter((item) => item.value !== selectedOpt);
			});
		}
		seleOpt.push(item);
		setSelectedOptions(seleOpt);
		setDropDownOptions(ddOptions);
	};
	const deletItem = (item: String) => {
		let newArr = selectedOptions.filter((selectOpt) => selectOpt !== item);
		setSelectedOptions(newArr);
		let temp = dropdownOptions.filter((itt) => itt.value !== item);
		setDropDownOptions(temp);
	};
	return (
		<div
			style={{
				flexDirection: "column",
				display: "flex",
				alignItems: "flex-start",
				justifyContent: "center",
				boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
				paddingTop: 10,
				paddingBottom: 15,
				paddingRight: 10,
				paddingLeft: 10,
			}}
		>
			<AutoComplete
				style={{
					width: "100%",
					border: ".5px solid #bababa",
					borderRadius: 22,
					paddingTop: 2.5,
					paddingBottom: 2.5,
				}}
				bordered={false}
				options={dropdownOptions}
				value={result}
				placeholder="Start by typing "
				filterOption={(inputValue: any, option: any) =>
					option?.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
				}
				onSelect={(item: any) => {
					filterOptions(item);
				}}
			/>
			<Row style={{ marginTop: 5, width: "100%" }}>
				{selectedOptions.map((item, index) => {
					return (
						<Col
							key={index}
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center",
								display: "flex",
								paddingTop: 2,
								paddingBottom: 2,
								borderRadius: 14,
								paddingRight: 9,
								paddingLeft: 9,
								color: "gray",
								margin: 2,
								border:
									"1px solid " +
									"#" +
									Math.floor(Math.random() * 16777215)
										.toString(16)
										.toString(),
								cursor: "pointer",
								height: 30,
							}}
							onClick={() => {
								deletItem(item);
							}}
						>
							<span style={{ fontSize: 14 }}>{item}</span>
							<DeleteOutlined
								style={{
									marginLeft: 7,
									marginRight: 1,
								}}
							/>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};
