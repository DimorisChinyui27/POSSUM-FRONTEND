import React from "react";
import Image from "next/image";
import {
	Modal,
	Input,
	// Switch,
	AutoComplete,
	Row,
	Col,
	Tooltip,
	Popover,
	// Popconfirm,
	// Space,
	// Dropdown,
	// MenuProps,
	// DropdownProps,
} from "antd";
import {
	DeleteOutlined,
	EditOutlined,
	// MailOutlined,
	PlusOutlined,
	// SmileOutlined,
} from "@ant-design/icons";
import styles from "./index.module.css";
import {
	FaGift,
	FaAngleDoubleUp,
	FaAngleDoubleDown,
	FaImages,
	FaCrown,
} from "react-icons/fa";

import { IoIosPeople } from "react-icons/io";
import { RiQuestionAnswerLine } from "react-icons/ri";
// import { GiReturnArrow } from "react-icons/gi";
// import { AiOutlineGift } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
// import { CgPushChevronUpO } from "react-icons/cg";
import { RiCoinsFill } from "react-icons/ri";
import { AiFillGift } from "react-icons/ai";
import { activeUser } from "src/Interfaces";
import { TbArrowsSort } from "react-icons/tb";
import { MdOutlineViewHeadline } from "react-icons/md";
// const { TextArea } = Input;
const sortModalOptions = [
	"Default: Votes Descending",
	"By Votes: Low to High",
	"By Gifts: High to Low",
	"By Gifts: Low to High",
];

const DashboardTemplate = () => {
	const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
	const [showDropDown, setShowDropDown] = React.useState<boolean>(false);
	const [activeTab, setActiveTab] = React.useState<number>(0);
	const [showAnswerDropDown, setShowAnswerDropDown] =
		React.useState<number>(-1);
	const [showsortModal, setShowSortModal] = React.useState(false);

	const [sortBy, setSortBy] = React.useState(0);

	const activeUser: activeUser = {
		id: "22-346",
		username: "Allen O'Daniel",
		url: "/profilePic.jpg",
	};
	const [openAnswer, setOpenAnswer] = React.useState<number>(0);
	const [postsList, setPostList] = React.useState([
		{
			questionId: "adsadasd",
			id: "22-345",

			username: "Axel Blaze",
			url: "/profileSmol.jpg",
			post: "Why has the crptocurrency market crashed so much after all the hype last week?",
			totalAnswered: 2,
			sameQuestion: 200,
			date: "Aug 28",
			totalVotes: 120,
			bounty: 30,
			answers: [
				{
					answeredBy: {
						username: "Mac Ovens",
						id: "12-345",
						url: "/robert-downey-jr.jpeg",
						profession: "Software Engineer at Google",
					},
					answerType: "text",
					answerValue:
						"It is due to the the investors who sold the crypto and took their cash out which made crypto to depriciate.",
					answeredDate: "3rd Oct, 2022",
					answerVotes: 2,
				},
				{
					answeredBy: {
						username: "Ronald Ethan",
						id: "12-345",
						url: "/butler.jpg",
						profession: "Software Engineer at Facebook",
					},
					answerType: "text",
					answerValue: "Maybe due to Elon :)",
					answeredDate: "4rth Oct, 2022",
					answerVotes: 0,
				},
			],
		},
		{
			questionId: "adsadasda",
			id: "22-346",
			username: "Allen O'Daniel",
			url: "/profilePic.jpg",
			post: "Are we living in a simulation?",
			totalAnswered: 0,
			sameQuestion: 200,
			date: "Aug 28",
			totalVotes: 0,
			bounty: 70,
			answers: [],
		},
		{
			questionId: "adsada3",
			id: "22-323",

			username: "Arthur",
			url: "/entrepreneur.jpg",
			post: "How Do I get more clients for my business?",
			totalAnswered: 3,
			sameQuestion: 200,
			date: "Aug 28",
			totalVotes: 120,
			bounty: 600,
			answers: [
				{
					answeredBy: {
						username: "Chris",
						id: "12-345",
						url: "/arthur.png",
						profession: "QA at Systems",
					},
					answerType: "text",
					answerValue: "Start advertising on social media platform",
					answeredDate: "3rd Oct, 2022",
					answerVotes: 5,
				},
				{
					answeredBy: {
						username: "Ruben",
						id: "12-345",
						url: "/chris.jpg",
						profession: "Entrepreneur",
					},
					answerType: "text",
					answerValue:
						"Invest in Sales team and use social media to reach out to clients",
					answeredDate: "4rth Oct, 2022",
					answerVotes: 0,
				},
			],
		},
	]);
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
		<div style={{ paddingTop: 5 }}>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "flex-start",
					justifyContent: "flex-start",
					padding: 15,
					paddingTop: 5,

					//border: "1px solid #bababa",
					borderBottomLeftRadius: 6,
					borderBottomRightRadius: 6,
					boxShadow:
						"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
				}}
			>
				<Image
					src={activeUser.url}
					style={{
						borderRadius: "50%",
						objectFit: "contain",
						width: "100%",
						maxWidth: 40,
						height: "100%",
						maxHeight: 40,
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
							maxWidth: 500,
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
								setActiveTab(0);
							}}
							// onClick={() => {
							// 	setIsModalOpen(true);
							// }}
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
								cursor: "pointer",
							}}
							onClick={() => {
								setActiveTab(1);
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
			{activeTab === 0 ? (
				<NewsFeed
					{...{
						postsList,
						setPostList,
						activeUser,
						showDropDown,
						setShowDropDown,
						showAnswerDropDown,
						setShowAnswerDropDown,
						openAnswer,
						setOpenAnswer,
					}}
				/>
			) : (
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div
						style={{
							backgroundColor: "#fff",
							borderRadius: 8,
							boxShadow:
								"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
							padding: 7,
							marginTop: 10,
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<div></div>
						<div>
							<Popover
								content={"Switch View"}
								title=""
								style={{
									backgroundColor: "#fff",
									borderRadius: 8,
									boxShadow:
										"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
									padding: 8,
									cursor: "pointer",
								}}
							>
								<MdOutlineViewHeadline style={{ fontSize: 20 }} />
							</Popover>
							<span style={{ marginLeft: 5 }}></span>
							<Popover
								content={"Sort Questions By"}
								title=""
								style={{
									backgroundColor: "#fff",
									borderRadius: 8,

									boxShadow:
										"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
									padding: 8,
									cursor: "pointer",
									// paddingRight: 10,
								}}
							>
								<TbArrowsSort
									style={{ fontSize: 20 }}
									onClick={() => {
										setShowSortModal(!showsortModal);
									}}
								/>
							</Popover>
							{showsortModal && (
								<div
									style={{
										height: "auto",
										marginLeft: -40,
										backgroundColor: "#fff",
										borderRadius: 8,
										boxShadow:
											"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
										padding: 8,
										display: "flex",
										flexDirection: "column",
										alignItems: "flex-start",
										justifyContent: "flex-start",
										zIndex: 2,
										position: "fixed",
									}}
								>
									{sortModalOptions.map((item, index) => {
										return (
											<span
												key={index}
												className={
													sortBy === index
														? styles.activeSortBy
														: styles.sortModalItems
												}
												onClick={() => {
													sortBy === index ? setSortBy(0) : setSortBy(index);
												}}
											>
												{item}
											</span>
										);
									})}
								</div>
							)}
							<span style={{ marginLeft: 5 }}></span>
						</div>
					</div>
					<UnAnsweredFeed
						{...{
							postsList,
							setPostList,
							activeUser,
							showDropDown,
							setShowDropDown,
							showAnswerDropDown,
							setShowAnswerDropDown,
							openAnswer,
							setOpenAnswer,
							sortBy,
						}}
					/>
				</div>
			)}
		</div>
	);
};
const NewsFeed = ({
	postsList,
	setPostList,
	activeUser,
	showDropDown,
	setShowDropDown,
	showAnswerDropDown,
	setShowAnswerDropDown,
	openAnswer,
	setOpenAnswer,
}: {
	postsList: any[];
	setPostList: Function;
	activeUser: activeUser;
	showDropDown: boolean;
	setShowDropDown: Function;
	showAnswerDropDown: Number;
	setShowAnswerDropDown: Function;
	openAnswer: Number;
	setOpenAnswer: Function;
}) => {
	return (
		<div className={styles.dashboardContent}>
			{postsList.map((item, index) => {
				return (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							boxShadow:
								"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",

							paddingLeft: 7,
							paddingRight: 7,
							borderTopLeftRadius: index === 0 ? 12 : 0,
							borderTopRightRadius: index === 0 ? 12 : 0,
							paddingBottom: 10,
							marginTop: 10,
							paddingTop: 5,
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "flex-start",
								justifyContent: "flex-start",
								//	border: "2px solid red",

								paddingBottom: 10,
								paddingTop: 5,
							}}
							key={index}
						>
							{/* <div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "space-between",
									paddingTop: 20,
									paddingRight: 5,
								}}
							>
								<div className={styles.votesDiv}>
									<FaAngleDoubleUp className={styles.upVote} />
									<span className={styles.votes}>{item.totalVotes}</span>
									<FaAngleDoubleDown className={styles.downVote} />
								</div>
							</div> */}
							<div //className={styles.post}
								style={{
									display: "flex",
									flexDirection: "column",
									//alignItems: "flex-start",
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
										alignItems: "flex-start",
										justifyContent: "space-between",
										paddingLeft: 10,
										paddingTop: 5,
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "flex-start",
											justifyContent: "space-between",
											width: "100%",
											paddingBottom: 5,
										}}
									>
										<div
											style={{
												display: "flex",
												flexDirection: "row",
												alignItems: "flex-start",
												justifyContent: "space-between",
											}}
										>
											<div className={styles.postHeader}>
												<div>
													<Image
														src={item.url}
														className={styles.postedByImage}
														height={40}
														width={40}
														style={{ borderRadius: "50%" }}
													/>
												</div>
												<span className={styles.postedBy}>{item.username}</span>{" "}
												• <span className={styles.date}>{item.date}</span>
											</div>
											<div
												className={styles.questionUpVote}
												onMouseEnter={() => {
													let temp = [...postsList];
													temp[index].totalVotes += 1;
													setPostList(temp);
												}}
												onMouseLeave={() => {
													let temp = [...postsList];
													temp[index].totalVotes -= 1;
													setPostList(temp);
												}}
											>
												<FaCrown />{" "}
												<span style={{ fontSize: 17 }}>{item.totalVotes}</span>
											</div>
										</div>
										<div className={styles.bottomInteractions}>
											{/* <GiBanknote className={styles.bountyLogo} />
										<span className={styles.bountyAmount}>{item.bounty}</span> */}

											<Popover
												content={"You get 50$ if your answer is choosen"}
												title=""
											>
												<div
													style={{
														marginRight: 10,
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
														padding: 5,
														borderRadius: 8,
													}}
												>
													<img
														src="/OIP.png"
														style={{
															//	width: 22,

															//		borderRadius: "50%",
															//border: "1px solid #66d1de",

															height: 22,
														}}
													/>
													<span
														style={{
															fontSize: 15,
															fontWeight: "bold",
															color: "#000",
															marginLeft: 5,
														}}
													>
														50$
													</span>
												</div>
											</Popover>

											{activeUser.id === item.id && (
												<Popover
													content={"Tap to get a refund"}
													title="Not satisfied with any answer?"
												>
													<div
														style={{
															marginRight: 10,
															display: "flex",
															alignItems: "center",
															justifyContent: "center",
															boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
															padding: 5,
															borderRadius: 8,
														}}
													>
														<img
															src="/gift-box.png"
															alt="return"
															style={{
																height: 22,
																objectFit: "contain",
															}}
														/>
														<span style={{ color: "#ad71ef", fontSize: 13 }}>
															Unsatisfied
														</span>
													</div>
												</Popover>
											)}
											<Popover content={"Software Engineers"} title="">
												<IoIosPeople
													style={{
														color: "#0248a3",
														fontSize: 25,
														marginRight: 10,
														marginLeft: 5,
														fontWeight: "bold",
														boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
														borderRadius: 8,
													}}
												/>
											</Popover>
											{/* <Popover
												content={"You get 50$ if your answer is choosen"}
												title=""
											>
												<div
													style={{
														width: 24,
														height: 24,
														marginRight: 10,
														borderRadius: "50%",
														border: "2px solid #66d1de",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
													}}
												>
													<span
														style={{
															fontSize: 9,
															fontWeight: "bold",
															color: "#de41f5",
														}}
													>
														50$
													</span>
												</div>
											</Popover> */}
											<div
												style={{
													display: "flex",
													flexDirection: "column",
													alignItems: "flex-end",
													cursor: "pointer",
												}}
												onClick={() => setShowDropDown(!showDropDown)}
												//	onMouseEnter={() => setShowDropDown(!showDropDown)}
												//onMouseLeave={() => setShowDropDown(false)}
											>
												<BsThreeDotsVertical
													style={{
														color: "#000",
														fontSize: 17,
														fontWeight: "bold",
													}}
												/>
												{showDropDown && (
													<div
														style={{
															display: "flex",
															flexDirection: "column",
															alignItems: "flex-end",
															justifyContent: "space-between",
															position: "fixed",
															backgroundColor: "#fff",
															borderRadius: 8,
															marginTop: -85,
															marginRight: -60,
															boxShadow:
																"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
														}}
													>
														<span className={styles.postDropDownItem}>
															Translate
														</span>
														<span className={styles.postDropDownItem}>
															Summarize
														</span>
													</div>
												)}
											</div>
										</div>
									</div>
									<div className={styles.postQuestion}>{item.post}</div>
								</div>
								<div className={styles.postFooter}>
									<Popover
										content={"It can be as low as 2$"}
										title="Contribute to get it answered quickly"
									>
										<div
											className={
												styles.bottomInteractions +
												" " +
												styles.addGiftToQuestion
											}
										>
											<AiFillGift />
											<span
												style={{
													fontSize: 11,
													paddingLeft: 5,
												}}
											>
												Add Gift
											</span>
										</div>
									</Popover>
									{/* <Popover
										content={
											"The amount of money you get after a successful answer"
										}
										title=""
									>
										{" "}
										<div className={styles.bottomInteractions}>
											<AiOutlineGift
												style={{
													marginRight: 7,
													color: "#585858",
													fontSize: 17,
													fontWeight: "bold",
												}}
											/>
											<span
												style={{
													fontSize: 12,
													fontWeight: "bold",
													color: "#585858",
												}}
											>
												{" "}
												50$
											</span>
										</div>
									</Popover> */}
									<Popover content={"Tap to view answers"} title="">
										<div
											className={
												styles.bottomInteractions +
												" " +
												styles.viewAnswerButton
											}
											onClick={() => {
												openAnswer === index
													? setOpenAnswer(-1)
													: setOpenAnswer(index);
											}}
										>
											<RiQuestionAnswerLine
												style={{
													marginRight: 7,
													color: "#585858",
													fontSize: 17,
													fontWeight: "bold",
												}}
											/>
											<span
												style={{
													fontSize: 12,
													fontWeight: "bold",
													color: "#585858",
												}}
											>
												{item.totalAnswered} Answers
											</span>
										</div>
									</Popover>
								</div>
							</div>
						</div>
						{item.id !== activeUser.id && <AnswerTheQuestion />}
						{openAnswer === index && (
							<div style={{ marginTop: 10 }}>
								{item.answers.map((innerItem: any, innerIdex: any) => {
									return (
										<div
											key={innerIdex}
											style={{
												display: "flex",
												alignItems: "flex-start",
												justifyContent: "space-between",
												flexDirection: "column",
												padding: 10,
												marginBottom: 2,
												boxShadow:
													"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
											}}
										>
											<div
												style={{
													display: "flex",
													alignItems: "center",
													justifyContent: "space-between",
													flexDirection: "row",
													paddingLeft: 5,
													width: "100%",
												}}
											>
												<div
													style={{
														display: "flex",
														flexDirection: "row",
														alignItems: "flex-start",
													}}
												>
													<Image
														src={innerItem.answeredBy.url}
														className={styles.postedByImage}
														height={40}
														width={40}
														style={{ borderRadius: "50%" }}
													/>
													<div
														style={{
															display: "flex",
															flexDirection: "column",
															alignItems: "flex-start",
														}}
													>
														<span className={styles.postedBy}>
															{innerItem.answeredBy.username}
														</span>
														<span className={styles.date}>
															{innerItem.answeredBy.profession}
														</span>{" "}
													</div>
													<div
														className={styles.answerUpVote}
														onMouseEnter={() => {
															let temp = [...postsList];
															temp[index].answers[innerIdex].answerVotes += 1;
															setPostList(temp);
														}}
														onMouseLeave={() => {
															let temp = [...postsList];
															temp[index].answers[innerIdex].answerVotes -= 1;
															setPostList(temp);
														}}
													>
														<FaCrown />{" "}
														<span style={{ fontSize: 13 }}>
															{innerItem.answerVotes}
														</span>
													</div>
												</div>
												<div
													style={{
														display: "flex",
														alignItems: "center",
														justifyContent: "right",
														flexDirection: "row",
													}}
												>
													<div>
														{" "}
														<Popover
															content={
																"Like it? Gift them so they can contribute more."
															}
															title=""
														>
															<div className={styles.addGiftToAnswer}>
																<span //className={styles.answerGiftText}
																	style={{
																		fontSize: 15,
																		paddingRight: 5,
																		paddingTop: 5,
																	}}
																>
																	Gift
																</span>
																<FaGift //className={styles.upVote}
																/>
															</div>
														</Popover>
													</div>
													<div
														style={{
															display: "flex",
															flexDirection: "column",
															alignItems: "flex-end",
															cursor: "pointer",
														}}
														onClick={() => {
															showAnswerDropDown === innerIdex
																? setShowAnswerDropDown(-1)
																: setShowAnswerDropDown(innerIdex);
															console.log("innerIdex", innerIdex);
														}}
														//	onMouseEnter={() => setShowDropDown(!showDropDown)}
														//onMouseLeave={() => setShowDropDown(false)}
													>
														<BsThreeDotsVertical
															style={{
																color: "#000",
																fontSize: 19,
																fontWeight: "bold",
															}}
														/>
														{showAnswerDropDown === innerIdex && (
															<div
																style={{
																	display: "flex",
																	flexDirection: "column",
																	alignItems: "flex-end",
																	justifyContent: "space-between",
																	position: "fixed",
																	backgroundColor: "#fff",
																	borderRadius: 8,
																	marginTop: -85,
																	marginRight: -60,
																	boxShadow:
																		"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
																}}
															>
																<span className={styles.postDropDownItem}>
																	Translate
																</span>
																<span className={styles.postDropDownItem}>
																	Summarize
																</span>
															</div>
														)}
													</div>
												</div>
											</div>
											<div style={{ paddingTop: 10, paddingLeft: 8 }}>
												{innerItem.answerValue}
											</div>
										</div>
									);
								})}
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

const UnAnsweredFeed = ({
	postsList,
	setPostList,
	activeUser,
	showDropDown,
	setShowDropDown,
	showAnswerDropDown,
	setShowAnswerDropDown,
	openAnswer,
	setOpenAnswer,
	sortBy,
}: {
	postsList: any[];
	setPostList: Function;
	activeUser: activeUser;
	showDropDown: boolean;
	setShowDropDown: Function;
	showAnswerDropDown: Number;
	setShowAnswerDropDown: Function;
	openAnswer: Number;
	setOpenAnswer: Function;
	sortBy: number;
}) => {
	const itemsForMapping =
		sortBy === 1
			? postsList.sort(
					(firstItem, secondItem) =>
						firstItem.totalVotes - secondItem.totalVotes
			  )
			: sortBy === 2
			? postsList.sort(
					(firstItem, secondItem) => secondItem.bounty - firstItem.bounty
			  )
			: sortBy === 3
			? postsList.sort(
					(firstItem, secondItem) => firstItem.bounty - secondItem.bounty
			  )
			: postsList.sort(
					(firstItem, secondItem) =>
						secondItem.totalVotes - firstItem.totalVotes
			  );
	return (
		<div className={styles.dashboardContent}>
			{itemsForMapping.map((item, index) => {
				return (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							boxShadow:
								"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",

							paddingLeft: 7,
							paddingRight: 7,
							borderTopLeftRadius: index === 0 ? 12 : 0,
							borderTopRightRadius: index === 0 ? 12 : 0,
							paddingBottom: 10,
							marginTop: 10,
							paddingTop: 5,
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "flex-start",
								justifyContent: "flex-start",
								//	border: "2px solid red",

								paddingBottom: 10,
								paddingTop: 5,
							}}
							key={index}
						>
							{/* <div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "space-between",
									paddingTop: 20,
									paddingRight: 5,
								}}
							>
								<div className={styles.votesDiv}>
									<FaAngleDoubleUp className={styles.upVote} />
									<span className={styles.votes}>{item.totalVotes}</span>
									<FaAngleDoubleDown className={styles.downVote} />
								</div>
							</div> */}
							<div //className={styles.post}
								style={{
									display: "flex",
									flexDirection: "column",
									//alignItems: "flex-start",
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
										alignItems: "flex-start",
										justifyContent: "space-between",
										paddingLeft: 10,
										paddingTop: 5,
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "flex-start",
											justifyContent: "space-between",
											width: "100%",
											paddingBottom: 5,
										}}
									>
										<div
											style={{
												display: "flex",
												flexDirection: "row",
												alignItems: "flex-start",
												justifyContent: "space-between",
											}}
										>
											<div className={styles.postHeader}>
												<div>
													<Image
														src={item.url}
														className={styles.postedByImage}
														height={40}
														width={40}
														style={{ borderRadius: "50%" }}
													/>
												</div>
												<span className={styles.postedBy}>{item.username}</span>{" "}
												• <span className={styles.date}>{item.date}</span>
											</div>
											<div
												className={styles.questionUpVote}
												onMouseEnter={() => {
													let temp = [...postsList];
													temp[index].totalVotes += 1;
													setPostList(temp);
												}}
												onMouseLeave={() => {
													let temp = [...postsList];
													temp[index].totalVotes -= 1;
													setPostList(temp);
												}}
											>
												<FaCrown />{" "}
												<span style={{ fontSize: 17 }}>{item.totalVotes}</span>
											</div>
										</div>
										<div className={styles.bottomInteractions}>
											{/* <GiBanknote className={styles.bountyLogo} />
										<span className={styles.bountyAmount}>{item.bounty}</span> */}

											<Popover
												content={"You get 50$ if your answer is choosen"}
												title=""
											>
												<div
													style={{
														marginRight: 10,
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
														padding: 5,
														borderRadius: 8,
													}}
												>
													<img
														src="/OIP.png"
														style={{
															//	width: 22,

															//		borderRadius: "50%",
															//border: "1px solid #66d1de",

															height: 22,
														}}
													/>
													<span
														style={{
															fontSize: 15,
															fontWeight: "bold",
															color: "#000",
															marginLeft: 5,
														}}
													>
														50$
													</span>
												</div>
											</Popover>

											{activeUser.id === item.id && (
												<Popover
													content={"Tap to get a refund"}
													title="Not satisfied with any answer?"
												>
													<div
														style={{
															marginRight: 10,
															display: "flex",
															alignItems: "center",
															justifyContent: "center",
															boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
															padding: 5,
															borderRadius: 8,
														}}
													>
														<img
															src="/gift-box.png"
															alt="return"
															style={{
																height: 22,
																objectFit: "contain",
															}}
														/>
														<span style={{ color: "#ad71ef", fontSize: 13 }}>
															Unsatisfied
														</span>
													</div>
												</Popover>
											)}
											<Popover content={"Software Engineers"} title="">
												<IoIosPeople
													style={{
														color: "#0248a3",
														fontSize: 25,
														marginRight: 10,
														marginLeft: 5,
														fontWeight: "bold",
														boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
														borderRadius: 8,
													}}
												/>
											</Popover>
											{/* <Popover
												content={"You get 50$ if your answer is choosen"}
												title=""
											>
												<div
													style={{
														width: 24,
														height: 24,
														marginRight: 10,
														borderRadius: "50%",
														border: "2px solid #66d1de",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
													}}
												>
													<span
														style={{
															fontSize: 9,
															fontWeight: "bold",
															color: "#de41f5",
														}}
													>
														50$
													</span>
												</div>
											</Popover> */}
											<div
												style={{
													display: "flex",
													flexDirection: "column",
													alignItems: "flex-end",
													cursor: "pointer",
												}}
												onClick={() => setShowDropDown(!showDropDown)}
												//	onMouseEnter={() => setShowDropDown(!showDropDown)}
												//onMouseLeave={() => setShowDropDown(false)}
											>
												<BsThreeDotsVertical
													style={{
														color: "#000",
														fontSize: 17,
														fontWeight: "bold",
													}}
												/>
												{showDropDown && (
													<div
														style={{
															display: "flex",
															flexDirection: "column",
															alignItems: "flex-end",
															justifyContent: "space-between",
															position: "fixed",
															backgroundColor: "#fff",
															borderRadius: 8,
															marginTop: -85,
															marginRight: -60,
															boxShadow:
																"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
														}}
													>
														<span className={styles.postDropDownItem}>
															Translate
														</span>
														<span className={styles.postDropDownItem}>
															Summarize
														</span>
													</div>
												)}
											</div>
										</div>
									</div>
									<div className={styles.postQuestion}>{item.post}</div>
								</div>
								<div className={styles.postFooter}>
									<Popover
										content={"It can be as low as 2$"}
										title="Contribute to get it answered quickly"
									>
										<div
											className={
												styles.bottomInteractions +
												" " +
												styles.addGiftToQuestion
											}
										>
											<AiFillGift />
											<span
												style={{
													fontSize: 11,
													paddingLeft: 5,
												}}
											>
												Add Gift
											</span>
										</div>
									</Popover>
									{/* <Popover
										content={
											"The amount of money you get after a successful answer"
										}
										title=""
									>
										{" "}
										<div className={styles.bottomInteractions}>
											<AiOutlineGift
												style={{
													marginRight: 7,
													color: "#585858",
													fontSize: 17,
													fontWeight: "bold",
												}}
											/>
											<span
												style={{
													fontSize: 12,
													fontWeight: "bold",
													color: "#585858",
												}}
											>
												{" "}
												50$
											</span>
										</div>
									</Popover> */}
									<Popover content={"Tap to view answers"} title="">
										<div
											className={
												styles.bottomInteractions +
												" " +
												styles.viewAnswerButton
											}
											onClick={() => {
												openAnswer === index
													? setOpenAnswer(-1)
													: setOpenAnswer(index);
											}}
										>
											<RiQuestionAnswerLine
												style={{
													marginRight: 7,
													color: "#585858",
													fontSize: 17,
													fontWeight: "bold",
												}}
											/>
											<span
												style={{
													fontSize: 12,
													fontWeight: "bold",
													color: "#585858",
												}}
											>
												{item.totalAnswered} Answers
											</span>
										</div>
									</Popover>
								</div>
							</div>
						</div>
						{item.id !== activeUser.id && <AnswerTheQuestion />}
						{openAnswer === index && (
							<div style={{ marginTop: 10 }}>
								{item.answers.map((innerItem: any, innerIdex: any) => {
									return (
										<div
											key={innerIdex}
											style={{
												display: "flex",
												alignItems: "flex-start",
												justifyContent: "space-between",
												flexDirection: "column",
												padding: 10,
												marginBottom: 2,
												boxShadow:
													"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
											}}
										>
											<div
												style={{
													display: "flex",
													alignItems: "center",
													justifyContent: "space-between",
													flexDirection: "row",
													paddingLeft: 5,
													width: "100%",
												}}
											>
												<div
													style={{
														display: "flex",
														flexDirection: "row",
														alignItems: "flex-start",
													}}
												>
													<Image
														src={innerItem.answeredBy.url}
														className={styles.postedByImage}
														height={40}
														width={40}
														style={{ borderRadius: "50%" }}
													/>
													<div
														style={{
															display: "flex",
															flexDirection: "column",
															alignItems: "flex-start",
														}}
													>
														<span className={styles.postedBy}>
															{innerItem.answeredBy.username}
														</span>
														<span className={styles.date}>
															{innerItem.answeredBy.profession}
														</span>{" "}
													</div>
													<div
														className={styles.answerUpVote}
														onMouseEnter={() => {
															let temp = [...postsList];
															temp[index].answers[innerIdex].answerVotes += 1;
															setPostList(temp);
														}}
														onMouseLeave={() => {
															let temp = [...postsList];
															temp[index].answers[innerIdex].answerVotes -= 1;
															setPostList(temp);
														}}
													>
														<FaCrown />{" "}
														<span style={{ fontSize: 13 }}>
															{innerItem.answerVotes}
														</span>
													</div>
												</div>
												<div
													style={{
														display: "flex",
														alignItems: "center",
														justifyContent: "right",
														flexDirection: "row",
													}}
												>
													<div>
														{" "}
														<Popover
															content={
																"Like it? Gift them so they can contribute more."
															}
															title=""
														>
															<div className={styles.addGiftToAnswer}>
																<span //className={styles.answerGiftText}
																	style={{
																		fontSize: 15,
																		paddingRight: 5,
																		paddingTop: 5,
																	}}
																>
																	Gift
																</span>
																<FaGift //className={styles.upVote}
																/>
															</div>
														</Popover>
													</div>
													<div
														style={{
															display: "flex",
															flexDirection: "column",
															alignItems: "flex-end",
															cursor: "pointer",
														}}
														onClick={() => {
															showAnswerDropDown === innerIdex
																? setShowAnswerDropDown(-1)
																: setShowAnswerDropDown(innerIdex);
															console.log("innerIdex", innerIdex);
														}}
														//	onMouseEnter={() => setShowDropDown(!showDropDown)}
														//onMouseLeave={() => setShowDropDown(false)}
													>
														<BsThreeDotsVertical
															style={{
																color: "#000",
																fontSize: 19,
																fontWeight: "bold",
															}}
														/>
														{showAnswerDropDown === innerIdex && (
															<div
																style={{
																	display: "flex",
																	flexDirection: "column",
																	alignItems: "flex-end",
																	justifyContent: "space-between",
																	position: "fixed",
																	backgroundColor: "#fff",
																	borderRadius: 8,
																	marginTop: -85,
																	marginRight: -60,
																	boxShadow:
																		"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
																}}
															>
																<span className={styles.postDropDownItem}>
																	Translate
																</span>
																<span className={styles.postDropDownItem}>
																	Summarize
																</span>
															</div>
														)}
													</div>
												</div>
											</div>
											<div style={{ paddingTop: 10, paddingLeft: 8 }}>
												{innerItem.answerValue}
											</div>
										</div>
									);
								})}
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

const AnswerTheQuestion = () => {
	return (
		<div
			style={{
				padding: 10,
				boxShadow:
					"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					flexDirection: "row",

					borderRadius: 18,

					marginBottom: 10,
					height: 40,
					width: "100%",
					border: "1px solid gray",
					paddingLeft: 20,
					paddingRight: 10,
				}}
			>
				<input
					type={"text"}
					style={{
						outline: "none",
						border: 0,
					}}
					placeholder="Type an answer..."
				/>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						flexDirection: "row",
					}}
				>
					<Popover
						content={"Add file"}
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							paddingTop: 5,
						}}
					>
						<IoMdAdd size={20} />
					</Popover>
					<Popover
						content={"Add Media"}
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							marginLeft: 10,
						}}
					>
						<FaImages size={20} />
					</Popover>
				</div>
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
	const [questionTitle, setQuestionTitle] = React.useState<string>("");
	const [isFocused, setIsFocused] = React.useState<boolean>(false);
	const [postingAs, setPostingAs] = React.useState<string>("");
	const [isDisabled, setDisabled] = React.useState<boolean>(false);
	const [isTagsVisible, setIsTagVisible] = React.useState<boolean>(false);
	const [open, setOpen] = React.useState(false);

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
						src={"/profilePic.jpg"}
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
						Allen O'Daniel
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
					{" "}
					<div
						style={{
							flexDirection: "column",
							display: "flex",
							paddingTop: 5,
							paddingBottom: 5,
							paddingLeft: 15,
							paddingRight: 10,
							borderRadius: 22,
							borderTop: ".5px solid #E8E8E8",

							boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
						}}
					>
						<input
							placeholder="Give a catchy title..."
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
								setQuestionTitle(e.target.value);
							}}
						/>
					</div>
					<div
						style={{
							flexDirection: "column",
							display: "flex",
							paddingTop: 15,
							paddingBottom: 15,
							paddingLeft: 15,
							paddingRight: 10,
							borderRadius: 22,
							marginTop: 10,
							boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
							borderTop: ".5px solid #E8E8E8",
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
								border: 0,
								outline: "none",
							}}
							type="text"
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
							Add Topics
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
								border: "1px solid #dadada",
								borderRadius: 8,
								color: "#dadada",
								textAlign: "center",
								padding: "5px 10px 5px 10px",
								backgroundColor: "#fff",
								boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
								cursor: "pointer",
							}}
							onClick={() => {
								setOpen(true);
							}}
						>
							Add Gift
							<AddTip open={open} setOpen={setOpen} />
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
								// backgroundColor: "#fff",
								backgroundColor: "#fff",
								boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
								// border: 0,
								// // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
								// boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
							}}
						>
							<TagsComponent />
						</div>
					</div>
				)}
				<div style={{ marginTop: 20, marginBottom: 3, paddingLeft: 5 }}>
					<span
						style={{
							fontSize: 17,
							fontWeight: "bold",
							color: "#000",
						}}
					>
						Select Audience
					</span>
				</div>
				<div
					style={{
						//	marginTop: 10,
						borderRadius: 15,
						padding: 20,
						// backgroundColor: "#fff",
						backgroundColor: "#fff",
						boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
						// border: 0,
						// // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
						// boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
					}}
				>
					<AudienceComponent />
				</div>
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
const AudienceComponent = () => {
	const [result, setResult] = React.useState("");

	const [dropdownOptions, setDropDownOptions] = React.useState([
		{
			value: "Software Engineers",
		},
		{
			value: "Team Leads",
		},
		{
			value: "Meme Experts",
		},
		{
			value: "Content Creators",
		},
		{
			value: "QA",
		},
		{
			value: "Engineers",
		},
		{
			value: "Doctors",
		},
		{
			value: "ProGamers",
		},
	]);
	return (
		<div>
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
				allowClear
				onClear={() => setResult("")}
				placeholder="Target your audience..."
				filterOption={(inputValue: any, option: any) =>
					option?.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
				}
				onSelect={(item: any) => {
					setResult(item);
				}}
			/>
			<div style={{ marginTop: 8 }}>
				{result && (
					<span style={{ color: "#bababa" }}>
						Your answer would only be visible to{" "}
						<span style={{ color: "#000", fontWeight: "500" }}>
							{result.toString()}
						</span>
					</span>
				)}
			</div>
		</div>
	);
};
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
				//boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
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

const AddTip = ({ open, setOpen }: { open: boolean; setOpen: Function }) => {
	const [confirmLoading, setConfirmLoading] = React.useState(false);
	const [tipVal, setTipVal] = React.useState(2);
	const [error, setError] = React.useState(false);
	const [focused, setFocused] = React.useState(false);

	const handleOk = () => {
		setConfirmLoading(true);

		setTimeout(() => {
			setOpen(false);
			setConfirmLoading(false);
		}, 2000);
	};

	const handleCancel = () => {
		console.log("Clicked cancel button");
		setOpen(false);
	};

	return (
		<Modal
			title="Add Gift"
			open={open}
			closable
			destroyOnClose
			footer={null}
			onCancel={handleCancel}
			style={{ maxWidth: 300, borderRadius: 8 }}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					flexDirection: "row",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "flex-start",
						justifyContent: "space-between",
						flexDirection: "column",
					}}
				>
					<input
						type={"number"}
						onChange={(e) => {
							try {
								let val = parseFloat(e.target.value.toString());
								if (val < 2) {
									setError(true);
								} else {
									setTipVal(val);
									setError(false);
								}
							} catch (error) {}
						}}
						onFocus={() => {
							setFocused(true);
						}}
						onBlur={() => {
							setFocused(false);
						}}
						style={{
							color: "gray",
							fontSize: 17,
							height: 35,
							width: "100%",
							//maxWidth: 200,
							fontWeight: "normal",
							border: "1px solid #dadada",
							borderRadius: 8,
							marginBottom: 2,
							outline: "none",
						}}
					/>
					{focused && <span style={{ color: "#000" }}>Average gift is 5$</span>}
					{error && <span style={{ color: "red" }}>Minimum gift is 2$</span>}
				</div>
				<button
					type="button"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontSize: 16,
						fontWeight: "bold",
						border: "1px solid #de41f5",
						borderRadius: 8,
						color: "#66d1de",
						textAlign: "center",
						padding: "5px 10px 5px 10px",
						backgroundColor: "#fff",
						boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
						cursor: "pointer",
						width: "100%",
						maxWidth: 110,
						marginLeft: 5,
					}}
					onClick={handleOk}
				>
					<RiCoinsFill style={{ color: "golden" }} /> Add Gift
				</button>
			</div>
		</Modal>
	);
};
