import React from "react";
import Image from "next/image";
import {
	Modal,
	// Switch,
	AutoComplete,
	Row,
	Col,
	Tooltip,
	Popover,
	Switch,
	message,
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
import { RiQuestionAnswerLine, RiImageFill } from "react-icons/ri";
// import { GiReturnArrow } from "react-icons/gi";
// import { AiOutlineGift } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
// import { CgPushChevronUpO } from "react-icons/cg";
// import { MdOutlineSlowMotionVideo } from 'react-icons/md'
import { RiCoinsFill } from "react-icons/ri";
import { AiFillGift } from "react-icons/ai";
import { activeUser } from "src/Interfaces";
import moment from "moment";
import { TbArrowsSort } from "react-icons/tb";
import {
	MdOutlineViewHeadline,
	MdOutlineSlowMotionVideo,
} from "react-icons/md";
import Video from "src/Components/Video";
import ImageUpload from "src/Components/ImageUpload";
import AddGift from "src/Components/AddGift";
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

	const activeUser: any = {
		id: "7",
		userName: "@fashionIconCosta",
		firstName: "Alex",
		lastName: "Costa",
		url: "/costa.jpg",
		crowns: 765,

		domain: "Fashion Influencer",
		description:
			"Men's Fashion | Grooming | Lifestyle Founder @forteseries @apricusskincare @aetosapparel",
		subDescription: "3.7M YouTube | 1.4M TikTok",
		totalAnswered: "200",
		totalAsked: "73",
		totalCrowns: "267",
		interestedTopics: ["Lifestyle", "Grooming", "Men's Fashion"],
	};
	const [openAnswer, setOpenAnswer] = React.useState<number>(0);
	const [postsList, setPostList] = React.useState([
		{
			questionId: "adsadasd",
			id: "7",
			firstName: "Axel",
			lastName: "Blaze",
			userName: "@AxelBlaze",
			url: "/profileSmol.jpg",
			post: "Why has the crptocurrency market crashed so much after all the hype last week?",
			totalAnswered: 2,
			sameQuestion: 200,
			date: "Aug 28",
			totalVotes: ["0", "1", "2", "3", "4"],
			bounty: 30,
			answers: [
				{
					answeredBy: {
						username: "Mac Ovens",
						id: "12-345",
						url: "/robert-downey-jr.jpeg",
						domain: "Software Engineer at Google",
					},
					answerType: "text",
					answerValue: {
						text: "It is due to the the investors who sold the crypto and took their cash out which made crypto to depriciate.",
						image: [],
						video: [],
					},
					answeredDate: "3rd Oct, 2022",
					answerVotes: ["0", "1"],
					// gifts: [
					// 	{
					// 		gitedBy: "1",
					// 		giftAmount:23
					// 	},
					// ],
				},
				{
					answeredBy: {
						username: "Ronald Ethan",
						id: "12-345",
						url: "/butler.jpg",
						domain: "Software Engineer at Facebook",
					},
					answerType: "text",
					answerValue: {
						text: "Maybe due to Elon :)",
						image: [],
						video: [],
					},
					answeredDate: "4rth Oct, 2022",
					answerVotes: ["3", "1"],
				},
			],
			gifts: [
				{
					giftedBy: "7",
					giftAmount: 23,
				},
			],
			closed: false,
		},
		{
			questionId: "adsadasda",
			id: "32",
			// username: "Allen O'Daniel",
			firstName: "Allen",
			lastName: "O'Daniel",
			userName: "@Allenoure",
			url: "/profilePic.jpg",
			post: "Are we living in a simulation?",
			totalAnswered: 0,
			sameQuestion: 200,
			date: "Aug 28",
			totalVotes: ["0", "1", "4"],
			bounty: 70,
			answers: [],
			gifts: [],
			closed: false,
		},
		{
			questionId: "adsada3",
			id: "26",
			firstName: "Arthur",
			lastName: "Mark",
			userName: "@ArkMark_12",
			// username: "Arthur",
			url: "/entrepreneur.jpg",
			post: "How Do I get more clients for my business?",
			totalAnswered: 3,
			sameQuestion: 200,
			date: "Aug 28",
			totalVotes: ["3", "4"],
			bounty: 600,
			answers: [
				{
					answeredBy: {
						username: "Chris",
						id: "12-345",
						url: "/arthur.png",
						domain: "QA at Systems",
					},
					answerType: "text",
					answerValue: {
						text: "Start advertising on social media platform",
						image: [],
						video: [],
					},
					answeredDate: "3rd Oct, 2022",
					answerVotes: ["3", "2", "4"],
				},
				{
					answeredBy: {
						username: "Ruben",
						id: "12-345",
						url: "/chris.jpg",
						domain: "Entrepreneur",
					},
					answerType: "text",
					answerValue: {
						text: "Invest in Sales team and use social media to reach out to clients",
						image: [],
						video: [],
					},

					answeredDate: "4rth Oct, 2022",
					answerVotes: ["1", "2", "5"],
				},
			],
			gifts: [],
			closed: false,
		},
	]);
	// const showModal = () => {
	// 	setIsModalOpen(true);
	// };

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const upVoteQuestion = (item: any) => {
		let temp = [...postsList];
		let ind = temp.findIndex((itm) => itm.id === item.id);
		// console.log("active", activeUser.id);
		if (
			temp[ind].totalVotes.findIndex(
				(innerItem) => innerItem == activeUser.id
			) < 0
		) {
			temp[ind].totalVotes.push(activeUser.id);
		} else {
			temp[ind].totalVotes = temp[ind].totalVotes.filter(
				(votes) => votes !== activeUser.id
			);
		}
		setPostList(temp);
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
				</div>
			</div>
			<QuestionModal
				isModalOpen={isModalOpen}
				handleCancel={handleCancel}
				handleOk={handleOk}
			/>
			<div
				style={{
					backgroundColor: "#fff",
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-evenly",
				}}
			>
				{/* <span>Closed Questions</span> */}
			</div>

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
						upVoteQuestion,
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
	upVoteQuestion,
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
	upVoteQuestion: Function;
}) => {
	const [gift, setGift] = React.useState(2);
	const [open, setOpen] = React.useState(false);
	const [activeIndex, setActiveIndex] = React.useState(-1);
	// const [messageApi, contextHolder] = message.useMessage();

	const addGiftToQuestion = (call: boolean, completed: string) => {
		// setOpen(call);
		if (completed === "completed") {
			let temp = [...postsList];
			temp[activeIndex].gifts.push({
				giftedBy: activeUser.id,
				giftAmount: gift,
			});
			setPostList(temp);
		}
		setOpen(call);
		// alert("activeindex" + activeIndex.toString());

		setGift(2);
		setActiveIndex(-1);
	};
	const countAllBounty = (list: any) => {
		let bounty = 0;
		for (let i = 0; i < list.length; i++) {
			bounty += list[i].giftAmount;
		}
		return bounty;
	};
	const unsatisfy = (index: number) => {
		let temp = [...postsList];
		temp[index].bounty = 0;
		temp[index].closed = true;
	};
	const showError = () => {
		alert("Amount has been refunded!");
	};
	return (
		<div className={styles.dashboardContent}>
			<AddGift {...{ gift, setGift, open, addGiftToQuestion }} />

			{postsList.map((item, index) => {
				return (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							boxShadow:
								index == openAnswer
									? "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
									: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",

							paddingLeft: 7,
							paddingRight: 7,
							borderTopLeftRadius: index === 0 ? 12 : 0,
							borderTopRightRadius: index === 0 ? 12 : 0,
							paddingBottom: 10,
							marginTop: 10,
							paddingTop: 5,
							//border: index == openAnswer ? "1px solid #2a2a2a" : 0,
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
												<div
													style={{
														flexDirection: "row",
														display: "flex",
														alignItems: "flex-start",
													}}
												>
													<div
														style={{
															flexDirection: "column",
															display: "flex",
															alignItems: "flex-start",
														}}
													>
														<span className={styles.postedBy}>
															{item.firstName} {item.lastName}
														</span>
														<span
															style={{
																fontSize: 11,
																fontWeight: "bold",
																marginTop: -5,
															}}
															className={styles.date}
														>
															{item.userName}
														</span>
													</div>
													• <span className={styles.date}>{item.date}</span>
												</div>
											</div>
											<div
												className={
													item.totalVotes.findIndex(
														(ittm: string) => ittm === activeUser.id
													) > -1
														? styles.questionUpVoted
														: styles.questionUpVote
												}
												onMouseEnter={() => {
													if (
														item.totalVotes.findIndex(
															(ittm: string) => ittm === item.id
														) > -1
													) {
														let temp = [...postsList];
														temp[index].totalVotes += 1;
														setPostList(temp);
													}
												}}
												onMouseLeave={() => {
													if (
														item.totalVotes.findIndex(
															(ittm: string) => ittm === item.id
														) > -1
													) {
														let temp = [...postsList];
														temp[index].totalVotes -= 1;
														setPostList(temp);
													}
												}}
												onClick={() => {
													upVoteQuestion(item);
												}}
											>
												<FaCrown />
												<span style={{ fontSize: 17 }}>
													{item.totalVotes.length}
												</span>
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
														{item.bounty +
															(item.gifts.length > 0
																? countAllBounty(item.gifts)
																: 0)}
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
															boxShadow: item.closed
																? "none"
																: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
															padding: 5,
															borderRadius: 8,
															backgroundColor: "#fff",
															opacity: item.closed ? 0.5 : 1,
														}}
														onClick={() => {
															item.closed ? showError() : unsatisfy(index);
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
															{item.closed ? "Closed" : "Unsatisfied"}
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
											onClick={() => {
												setOpen(true);
												setActiveIndex(index);
											}}
										>
											{" "}
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
						{item.closed ? (
							<div
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<input
									type={"button"}
									disabled={true}
									style={{
										outline: "none",
										height: 40,
										maxWidth: 200,
										borderRadius: 18,
										width: "100%",
										border: "1px solid gray",
										textAlign: "center",
										cursor: "not-allowed",
										fontSize: 16.6,
										fontWeight: "bold",
										color: "#fff",
										backgroundColor: "gray",
										// "linear-gradient(to bottom left, #e839f6, #61d8de)",
										// opacity: 0.5,
									}}
									value="Add an answer"
								/>
							</div>
						) : (
							<div>
								{item.id !== activeUser.id && (
									<AnswerTheQuestion
										{...{ postsList, setPostList, item, activeUser, index }}
									/>
								)}
							</div>
						)}
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
															{innerItem.answeredBy.domain}
														</span>
													</div>
													<div
														// className={styles.answerUpVote}
														className={
															postsList[index].answers[
																innerIdex
															].answerVotes.findIndex(
																(itm: string) => itm === activeUser.id
															) < 0
																? styles.answerUpVote
																: styles.answerUpVoted
														}
														// onMouseEnter={() => {
														// 	let temp = [...postsList];
														// 	if (
														// 		temp[index].answers[
														// 			innerIdex
														// 		].answerVotes.findIndex(
														// 			(itm: string) => itm === activeUser.id
														// 		) < 0
														// 	) {
														// 		temp[index].answers[innerIdex].answerVotes.push(
														// 			activeUser.id
														// 		);
														// 		setPostList(temp);
														// 	}
														// }}
														// onMouseLeave={() => {
														// 	let temp = [...postsList];
														// 	if (
														// 		temp[index].answers[
														// 			innerIdex
														// 		].answerVotes.findIndex(
														// 			(itm: string) => itm === activeUser.id
														// 		) >= 0
														// 	) {
														// 		temp[index].answers[innerIdex].answerVotes =
														// 			temp[index].answers[
														// 				innerIdex
														// 			].answerVotes.filter(
														// 				(ittm: string) => ittm !== activeUser.id
														// 			);
														// 		setPostList(temp);
														// 	}
														// }}
														onClick={() => {
															let temp = [...postsList];
															if (
																temp[index].answers[
																	innerIdex
																].answerVotes.findIndex(
																	(itm: string) => itm === activeUser.id
																) < 0
															) {
																temp[index].answers[innerIdex].answerVotes.push(
																	activeUser.id
																);
																setPostList(temp);
																//alert("done");
															}
														}}
													>
														<FaCrown />
														<span style={{ fontSize: 13 }}>
															{innerItem.answerVotes.length}
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
												{innerItem.answerValue.text}
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
						{item.id !== activeUser.id && (
							<AnswerTheQuestion
								{...{ postsList, setPostList, item, activeUser, index }}
							/>
						)}
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
															{innerItem.answeredBy.domain}
														</span>{" "}
													</div>
													<div
														className={styles.answerUpVote}
														onMouseEnter={() => {
															let temp = [...postsList];
															if (
																temp[index].answers[
																	innerIdex
																].answerVotes.findIndex(
																	(itttem: any) => itttem === activeUser.id
																) < 0
															) {
																temp[index].answers[innerIdex].answerVotes =
																	temp[index].answers[
																		innerIdex
																	].answerVotes.push(activeUser.id);
																setPostList(temp);
															}
														}}
														onMouseLeave={() => {
															let temp = [...postsList];
															console.log(
																"before remove",
																temp[index].answers[innerIdex].answerVotes
															);

															console.log(
																"after remove",
																temp[index].answers[
																	innerIdex
																].answerVotes.filter(
																	(ittm: any) => ittm !== activeUser.id
																)
															);
															// if (
															// 	temp[index].answers[
															// 		innerIdex
															// 	].answerVotes.findIndex(
															// 		(itttem: any) => itttem === activeUser.id
															// 	) < 0
															// ) {
															// 	temp[index].answers[innerIdex].answerVotes =
															// 		temp[index].answers[
															// 			innerIdex
															// 		].answerVotes.filter(
															// 			(ittm: any) => ittm !== activeUser.id
															// 		);
															// 	setPostList(temp);
															// }
														}}
														// onClick={() => {
														// 	let temp = [...postsList];
														// 	if (
														// 		temp[index].answers[
														// 			innerIdex
														// 		].answerVotes.findIndex(
														// 			(itttem: any) => itttem === activeUser.id
														// 		) < 0
														// 	) {
														// 		temp[index].answers[innerIdex].answerVotes =
														// 			temp[index].answers[
														// 				innerIdex
														// 			].answerVotes.push(activeUser.id);
														// 		setPostList(temp);
														// 	}
														// }}
													>
														<FaCrown />{" "}
														<span style={{ fontSize: 13 }}>
															{innerItem.answerVotes.length}
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
												{innerItem.answerValue.text}
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

const AnswerTheQuestion = ({
	postsList,
	setPostList,
	item,
	activeUser,
	index,
}: {
	postsList: any[];
	setPostList: Function;
	item: any;
	activeUser: any;
	index: number;
}) => {
	const [answerModal, setAnswerModal] = React.useState(false);
	const [answerText, setAnswerText] = React.useState("");
	const [answerImage, setAnswerImage] = React.useState([]);
	const [answerVideo, setAnswerVideo] = React.useState([]);
	const removeImages = (index: number) => {
		let temp = [...answerImage];
		temp = temp.filter((itm, ind) => ind !== index);
		setAnswerImage(temp);
	};
	const removeVideos = (index: number) => {
		let temp = [...answerVideo];
		temp = temp.filter((itm, ind) => ind !== index);
		setAnswerVideo(temp);
	};
	const addAnswerToList = () => {
		let temporary = [...postsList];
		temporary[index].answers.push({
			answeredBy: {
				id: activeUser.id,
				username: activeUser.userName,
				url: activeUser.url,
				domain: activeUser.domain,
			},
			answerType:
				(answerText ? "Text" : "") +
				"+" +
				(answerImage.length > 0 ? "Video" : "") +
				"+" +
				(answerVideo.length > 0 ? "Video" : ""),
			answerValue: {
				text: answerText,
				video: answerVideo,
				image: answerImage,
			},

			answeredDate: moment().format("LL"),
			answerVotes: [],
		});
		setPostList(postsList);
		setAnswerModal(false);
	};
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
					justifyContent: "center",

					marginBottom: 10,
				}}
			>
				<input
					type={"button"}
					style={{
						outline: "none",
						height: 40,
						maxWidth: 200,
						borderRadius: 18,
						width: "100%",
						border: "1px solid gray",
						textAlign: "center",
						cursor: "pointer",
						fontSize: 16.6,
						fontWeight: "bold",
						color: "#fff",
						backgroundImage:
							"linear-gradient(to bottom left, #e839f6, #61d8de)",
					}}
					value="Add an answer"
					onClick={() => {
						setAnswerModal(true);
					}}
				/>
			</div>
			<Modal
				className="modalStyle"
				title="Add an Answer"
				open={answerModal}
				// onOk={handleOk}
				onCancel={() => {
					setAnswerModal(false);
				}}
				footer={null}
				destroyOnClose
				// style={{ backgroundColor: "#e5e5e5" }}
				// bodyStyle={{ backgroundColor: "#f7f7f7" }}
			>
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
						placeholder="Please type here..."
						style={{
							color: "#292221",
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
							if (answerText.length < 1200) {
								setAnswerText(e.target.value);
							}
						}}
					/>
				</div>
				<div
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "flex-end",
						display: "flex",
					}}
				>
					<span>{answerText.length}/1200</span>
				</div>
				<div
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "flex-end",
						display: "flex",
					}}
				>
					<span
						style={{
							fontSize: 9,
							letterSpacing: 1,
							fontWeight: "bold",
							color: "#9c9e9d",
						}}
					>
						Upload Media (Max size 25MB)
					</span>
					&nbsp;
					<Video fileList={answerVideo} setFileList={setAnswerVideo} /> &nbsp;
					<ImageUpload fileList={answerImage} setFileList={setAnswerImage} />
				</div>
				<Row>
					<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-end",
								justifyContent: "flex-end",
							}}
						>
							{answerVideo.length > 0
								? answerVideo.map((item: any, index) => {
										return (
											<div
												style={{
													border: "1px solid gray",
													padding: 5,
													borderRadius: 6,
												}}
											>
												<MdOutlineSlowMotionVideo />
												&nbsp;
												<span>{item.path ?? ""}</span> &nbsp;
												<DeleteOutlined
													onClick={() => {
														removeVideos(index);
													}}
													style={{ color: "red" }}
												/>
											</div>
										);
								  })
								: ""}
						</div>
					</Col>
					<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-end",
								justifyContent: "flex-end",
							}}
						>
							{answerImage.length > 0
								? answerImage.map((item: any, index) => {
										return (
											<div
												style={{
													border: "1px solid gray",
													padding: 5,
													borderRadius: 6,
												}}
											>
												<RiImageFill />
												&nbsp;
												<span>{item.path}</span> &nbsp;
												<DeleteOutlined
													onClick={() => {
														removeImages(index);
													}}
													style={{ color: "red" }}
												/>
											</div>
										);
								  })
								: ""}
						</div>
					</Col>
				</Row>
				<div
					style={{
						paddingTop: 20,
						alignItems: "center",
						justifyContent: "center",
						display: "flex",
					}}
				>
					<input
						type={"button"}
						style={{
							outline: "none",
							height: 40,
							maxWidth: 120,
							borderRadius: 18,
							width: "100%",
							border: "1px solid gray",
							textAlign: "center",
							cursor: "pointer",
							fontSize: 16.6,
							fontWeight: "bold",
							color: "#fff",
							backgroundImage:
								"linear-gradient(to bottom left, #e839f6, #61d8de)",
						}}
						value="Submit"
						onClick={() => {
							addAnswerToList();
						}}
					/>
				</div>
			</Modal>
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
	const [specificUser, setSpecificUser] = React.useState(false);
	return (
		<Modal
			className="modalStyle"
			title="Ask Question"
			open={isModalOpen}
			onOk={handleOk}
			onCancel={handleCancel}
			footer={null}
			// style={{ backgroundColor: "#e5e5e5" }}
			bodyStyle={{ backgroundColor: "#f7f7f7" }}
		>
			<div
				style={{
					// backgroundColor: "#fff",
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
					<span
						style={{
							color: "#bab6b6",
							fontSize: 12,
							fontWeight: "bold",
							alignItems: "flex-end",
							justifyContent: "flex-end",
							display: "flex",
							wordSpacing: 1,
							paddingBottom: 10,
						}}
					>
						Target people nearby?&nbsp; <Switch onChange={setIsFocused} />
					</span>
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
				<div
					style={{
						borderRadius: 15,
						padding: 20,
						// backgroundColor: "#fff",
						backgroundColor: "#fff",
						boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
						marginTop: 15,
					}}
				>
					<span
						style={{ color: "#bab6b6", fontSize: 17, fontWeight: "bolder" }}
					>
						Want to target a specific user?{" "}
						<Switch onChange={setSpecificUser} />
					</span>
				</div>

				{specificUser && (
					<div style={{ marginTop: 20, marginBottom: 3, paddingLeft: 5 }}>
						<span
							style={{
								fontSize: 17,
								fontWeight: "bold",
								color: "#000",
							}}
						>
							Select User
						</span>
					</div>
				)}

				{specificUser && (
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
				)}

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
			value: "Cristiano Ronaldo",
		},
		{
			value: "Tom Cruise",
		},
		{
			value: "Black Widow",
		},
		{
			value: "@Fiesta",
		},
		{
			value: "Jack Ryan",
		},
		{
			value: "Rein",
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
				placeholder="Search by their name or username..."
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
					{focused && <span style={{ color: "#000" }}></span>}
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
