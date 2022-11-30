import React from "react";
import { IoMdArrowBack, IoIosPeople } from "react-icons/io";
import { FaCrown } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Popover } from "antd";
import { Row, Col } from "antd";
import Image from "next/image";
import { AiFillGift, AiOutlineQuestionCircle } from "react-icons/ai";
import { RiQuestionAnswerLine } from "react-icons/ri";
import styles from "./index.module.css";
import Link from "next/link";
const listOfPeople = [
	{
		id: "0",
		firstName: "KD",
		lastName: "Roven",
		userName: "KD_Roven",
		url: "/userFour.jpg",
		domain: "Software Engineer",
		crowns: 23,
		description:
			"A Full stack software engineer with hands on expertise in Javascript",
		subDescription: "Tech Lead at Google",
		totalAnswered: "200",
		totalAsked: "73",
		totalCrowns: "267",
		interestedTopics: [
			"Software Engineer",
			"Programming",
			"Tech",
			"JavaScript",
		],
	},
	{
		id: "1",
		firstName: "Paul",
		lastName: "Logan",
		userName: "PaulLog_123",
		url: "/logan-paul.jpg",
		domain: "Influencer",
		crowns: 45,
		description:
			"A Full stack software engineer with hands on expertise in Javascript",
		subDescription: "Tech Lead at Google",
		totalAnswered: "200",
		totalAsked: "73",
		totalCrowns: "267",
		interestedTopics: [
			"Software Engineer",
			"Programming",
			"Tech",
			"JavaScript",
		],
	},
	{
		id: "2",
		firstName: "Donald",
		lastName: "Trump",
		userName: "DTrump",
		url: "/trumph.jpg",
		domain: "Politician",
		crowns: 88,
		description:
			"A Full stack software engineer with hands on expertise in Javascript",
		subDescription: "Tech Lead at Google",
		totalAnswered: "200",
		totalAsked: "73",
		totalCrowns: "267",
		interestedTopics: [
			"Software Engineer",
			"Programming",
			"Tech",
			"JavaScript",
		],
	},
	{
		id: "3",
		firstName: "Russ",
		lastName: "Rudd",
		userName: "CrispyRuss",
		url: "/rudd.jpg",
		domain: "Singer",
		crowns: 125,
		description:
			"A Full stack software engineer with hands on expertise in Javascript",
		subDescription: "Tech Lead at Google",
		totalAnswered: "200",
		totalAsked: "73",
		totalCrowns: "267",
		interestedTopics: [
			"Software Engineer",
			"Programming",
			"Tech",
			"JavaScript",
		],
	},
	{
		id: "4",
		firstName: "Lavar",
		lastName: "Ball",
		userName: "PaulLog_123",
		url: "/robert-downey-jr.jpeg",
		domain: "Influencer",
		crowns: 223,
		description:
			"A Full stack software engineer with hands on expertise in Javascript",
		subDescription: "Tech Lead at Google",
		totalAnswered: "200",
		totalAsked: "73",
		totalCrowns: "267",
		interestedTopics: [
			"Software Engineer",
			"Programming",
			"Tech",
			"JavaScript",
		],
	},
	{
		id: "5",
		firstName: "James",
		lastName: "Morgan",
		userName: "JamieeeTac",
		url: "/userTwo.jpg",
		domain: "Product Owner",
		crowns: 433,
		description:
			"A Full stack software engineer with hands on expertise in Javascript",
		subDescription: "Tech Lead at Google",
		totalAnswered: "200",
		totalAsked: "73",
		totalCrowns: "267",
		interestedTopics: [
			"Software Engineer",
			"Programming",
			"Tech",
			"JavaScript",
		],
	},
	{
		id: "6",
		firstName: "Ellen",
		lastName: "Roveen",
		userName: "Ellen_Rove",
		url: "/userOne.jpg",
		domain: "SongWritter",
		crowns: 1323,
		description:
			"A Full stack software engineer with hands on expertise in Javascript",
		subDescription: "Tech Lead at Google",
		totalAnswered: "200",
		totalAsked: "73",
		totalCrowns: "267",
		interestedTopics: [
			"Software Engineer",
			"Programming",
			"Tech",
			"JavaScript",
		],
	},

	{
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
	},
];
const ProfileTemplate = ({ id }: { id: any }) => {
	const [activeTab, setActiveTab] = React.useState(0);
	const [showDropDown, setShowDropDown] = React.useState<boolean>(false);

	const [postsList, setPostList] = React.useState([
		{
			questionId: "adsadasd",
			id: "22-345",
			url: "/costa.jpg",
			username: "@fashionIconCosta",
			firstName: "Alex",
			lastName: "Costa",
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
			url: "/costa.jpg",
			username: "@fashionIconCosta",
			firstName: "Alex",
			lastName: "Costa",
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

			url: "/costa.jpg",
			username: "@fashionIconCosta",
			firstName: "Alex",
			lastName: "Costa",
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
	const answersList = [
		{
			questionId: "adsadasd",
			id: "22-345",
			firstName: "Allen",
			lastName: "O'Daniel",
			url: "/entrepreneur.jpg",
			username: "@AlexB_12",
			post: "Why has the crptocurrency market crashed so much after all the hype last week?",
			totalAnswered: 2,
			sameQuestion: 200,
			date: "Aug 28",
			totalVotes: 120,
			bounty: 30,
			answers: [
				{
					answeredBy: {
						url: "/costa.jpg",
						username: "@fashionIconCosta",
						firstName: "Alex",
						lastName: "Costa",
						id: "12-345",
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
			username: "@Ronald_1Ethan",
			url: "/butler.jpg",
			firstName: "Ronald",
			lastName: "Ethan",
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

			url: "/chris.jpg",
			username: "@ChrisPattCrisp",
			firstName: "Chris",
			lastName: "Patt",
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
						url: "/costa.jpg",
						username: "@fashionIconCosta",
						firstName: "Alex",
						lastName: "Costa",
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
	];
	const activeUser: any = listOfPeople.find((item) => item.id === id);
	return (
		<div style={{ width: "100%", maxWidth: "100%" }}>
			<div>
				<div
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "flex-start",
						display: "flex",
						paddingTop: 12,
						paddingBottom: 12,
						paddingLeft: 40,
						backgroundColor: "#fff",
						// zIndex: 2,
						// position: "fixed",
						// paddingTop: 30,
						cursor: "pointer",
					}}
				>
					<Link href={"/dashboard"}>
						<IoMdArrowBack size={27} style={{ color: "#2a2a2a" }} />
					</Link>
					<div
						style={{
							flexDirection: "column",
							alignItems: "flex-start",
							justifyContent: "flex-start",
							display: "flex",
							paddingLeft: 25,
						}}
					>
						<span
							style={{
								color: "#000",
								fontSize: 15,
								letterSpacing: 1,
								fontWeight: "bold",
							}}
						>
							{activeUser.userName ? activeUser.userName : ""}&apos;s Profile
						</span>
						<span
							style={{
								color: "#a4a4a6",
								fontSize: 12,
								fontWeight: "bold",
								marginTop: -5,
							}}
						>
							Go Back
						</span>
					</div>
				</div>
				<img
					src={"/62558.jpg"}
					style={{
						width: "100%",
						height: "100%",
						maxHeight: 300,
						objectFit: "cover",
						zIndex: -1,
					}}
				/>
				<div
					style={{
						paddingLeft: 20,
						paddingRight: 45,

						display: "flex",
						alignItems: "flex-start",
						justifyContent: "space-between",
						flexDirection: "row",
					}}
				>
					<div style={{ display: "flex", flexDirection: "row" }}>
						<img
							src={activeUser.url}
							style={{
								border: "1.5px solid #fff",
								marginTop: -50,
								width: 180,
								height: 180,
								borderRadius: "50%",
								objectFit: "cover",
								boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
							}}
						/>
						<div
							style={{
								display: "flex",
								alignItems: "flex-start",
								flexDirection: "column",
								paddingLeft: 20,
								paddingTop: 30,
							}}
						>
							<span
								style={{
									color: "#020b30",
									fontSize: 23,
									fontWeight: "bolder",
									letterSpacing: 0.3,
								}}
							>
								{activeUser.firstName} {activeUser.lastName}
								<span
									style={{
										color: "#636360",
										fontSize: 11,
										fontWeight: "bolder",
										paddingLeft: 5,
									}}
								>
									{activeUser.userName ?? ""}
								</span>
							</span>
							<span
								style={{
									color: "#a4a4a6",
									fontSize: 13,
									letterSpacing: 0.5,
									fontWeight: "bold",
								}}
							>
								{activeUser.domain}
							</span>
							<span style={{ paddingTop: 17, wordSpacing: 1 }}>
								{activeUser.description}
							</span>
							<span style={{ paddingTop: 0, wordSpacing: 1 }}>
								{activeUser.subDescription}
							</span>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "flex-end",
							flexDirection: "row",
							paddingTop: 30,
							paddingRight: 50,
						}}
					>
						<FaCrown style={{ fontSize: 50, marginRight: 10 }} />
						<span style={{ color: "#000", fontSize: 15, fontWeight: "bolder" }}>
							145 Crowns
						</span>
					</div>
				</div>
				<div style={{ paddingLeft: 220 }}>
					<Row
						style={{
							display: "flex",
							flexDirection: "row",
							paddingTop: 20,
							paddingBottom: 15,
							// paddingLeft: 30,
						}}
					>
						{activeUser.interestedTopics.map((item: any, index: number) => {
							return (
								<Col
									xs={6}
									sm={6}
									md={6}
									lg={9}
									xl={9}
									key={index}
									style={{
										borderRadius: 14,
										// paddingRight: 17,
										// paddingLeft: 17,
										color: "#2a2a2a",
										fontWeight: "bolder",
										// "#" +
										// Math.floor(Math.random() * 16777215)
										// 	.toString(16)
										// 	.toString(),
										textAlign: "center",
										marginRight: 10,
										paddingTop: 2,
										paddingBottom: 2,
										marginBottom: 10,
										backgroundColor: "#f5f5f5",
										boxShadow:
											"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
										// color:'#fff'
										// border:
										// 	"1px solid " +
										// 	"#" +
										// 	Math.floor(Math.random() * 16777215)
										// 		.toString(16)
										// 		.toString(),
										// height: 30,
									}}
								>
									{item}
								</Col>
							);
						})}
					</Row>
				</div>
				<div style={{ paddingLeft: 220 }}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							flexDirection: "row",
							paddingTop: 20,
							// paddingLeft: 30,
							paddingRight: 50,
						}}
					>
						<div style={{ flexDirection: "row", display: "flex" }}>
							<span style={{ marginRight: 40 }}>
								<span
									style={{
										fontWeight: "bolder",
										fontSize: 14,
										letterSpacing: 1,
									}}
								>
									20
								</span>{" "}
								Questions{" "}
							</span>
							<span style={{ marginRight: 40 }}>
								{" "}
								<span
									style={{
										fontWeight: "bolder",
										fontSize: 14,
										letterSpacing: 1,
									}}
								>
									200
								</span>{" "}
								Answered
							</span>
						</div>
						<button
							style={{
								borderRadius: 4,
								border: 0,
								color: "#fff",
								paddingTop: 7,
								paddingBottom: 7,
								paddingLeft: 15,
								paddingRight: 15,
								wordSpacing: 3,
								cursor: "pointer",
								backgroundImage:
									"linear-gradient(to bottom left, #e839f6, #61d8de)",
								boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
								alignItems: "center",
								justifyContent: "center",
								display: "flex",
							}}
						>
							Ask a Question &nbsp;
							<AiOutlineQuestionCircle size={23} />
						</button>
					</div>
				</div>
				<br />
				<br />
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
						// paddingBottom: 20,
						borderBottom: "1px solid #d7dade",
					}}
				>
					<span
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							// borderBottom: "1px solid #000",
							borderRadius: 0,
							paddingTop: 5,
							paddingLeft: 15,
							paddingRight: 15,
							cursor: "pointer",
							width: "100%",
							textAlign: "center",
							fontSize: activeTab === 0 ? 19 : 17,
							fontWeight: "bold",
							// boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
						}}
						onClick={() => {
							setActiveTab(0);
						}}
					>
						Questions
						{activeTab === 0 && (
							<div
								style={{
									backgroundImage:
										"linear-gradient(to bottom left, #e839f6, #61d8de)",
									borderRadius: 8,
									height: 4,
									width: 100,
									marginTop: 5,
								}}
							/>
						)}
					</span>
					<span
						style={{
							// borderBottom: "1px solid #000",
							borderRadius: 0,
							paddingTop: 5,
							paddingLeft: 15,
							paddingRight: 15,
							width: "100%",
							textAlign: "center",
							fontSize: activeTab === 1 ? 19 : 17,
							fontWeight: "bold",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							cursor: "pointer",
						}}
						onClick={() => {
							setActiveTab(1);
						}}
					>
						Answers
						{activeTab === 1 && (
							<div
								style={{
									backgroundImage:
										"linear-gradient(to bottom left, #e839f6, #61d8de)",
									borderRadius: 8,
									height: 4,
									width: 100,
									marginTop: 5,
								}}
							/>
						)}
					</span>
					<span
						style={{
							// borderBottom: "1px solid #000",
							borderRadius: 0,
							paddingTop: 5,
							paddingBottom: 5,
							paddingLeft: 15,
							paddingRight: 15,
							width: "100%",
							textAlign: "center",
							fontSize: activeTab === 2 ? 19 : 17,
							fontWeight: "bold",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							cursor: "pointer",
						}}
						onClick={() => {
							setActiveTab(2);
						}}
					>
						Upvoted Answers
						{activeTab === 2 && (
							<div
								style={{
									backgroundImage:
										"linear-gradient(to bottom left, #e839f6, #61d8de)",
									borderRadius: 8,
									height: 4,
									width: 100,
									marginTop: 5,
								}}
							/>
						)}
					</span>
				</div>
				{/* <br /> */}
				{activeTab === 0 && (
					<div>
						{postsList
							.filter((innerItem) => innerItem.username === activeUser.userName)
							.map((item, index) => {
								return (
									<div
										key={index}
										style={{
											display: "flex",
											flexDirection: "column",
											// boxShadow:
											// 	"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
											borderBottom: "1px solid #d7dade",

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
																		flexDirection: "column",
																		display: "flex",
																		alignItems: "flex-start",
																		justifyContent: "flex-start",
																		paddingLeft: 5,
																	}}
																>
																	<span
																		className={styles.postedBy}
																		style={{
																			//																		flexDirection: "column",
																			display: "flex",
																			alignItems: "center",
																			justifyContent: "flex-start",
																		}}
																	>
																		{item.firstName} {item.lastName}
																		&nbsp;&nbsp;•{" "}
																		<span className={styles.date}>
																			{item.date}
																		</span>
																	</span>
																	<span
																		style={{
																			marginTop: -2,
																			fontSize: 11,
																			fontWeight: "bold",
																			letterSpacing: 0.5,
																		}}
																	>
																		{item.username}
																	</span>
																</div>
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
															></div>
														</div>
														<div className={styles.bottomInteractions}>
															{/* <GiBanknote className={styles.bountyLogo} />
										<span className={styles.bountyAmount}>{item.bounty}</span> */}

															<Popover
																content={
																	"You get 50$ if your answer is choosen"
																}
																title=""
															>
																<div
																	style={{
																		marginRight: 10,
																		display: "flex",
																		alignItems: "center",
																		justifyContent: "center",
																		// boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
																		border: "1px solid #d7dade",
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
															{/* 
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
																		// boxShadow:
																		// 	"rgba(0, 0, 0, 0.1) 0px 4px 12px",
																		padding: 5,
																		borderRadius: 8,
																		border: "1px solid #d7dade",
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
																	<span
																		style={{ color: "#ad71ef", fontSize: 13 }}
																	>
																		Unsatisfied
																	</span>
																</div>
															</Popover>
														)} */}
															<Popover content={"Software Engineers"} title="">
																<IoIosPeople
																	style={{
																		color: "#0248a3",
																		fontSize: 25,
																		marginRight: 10,
																		marginLeft: 5,
																		fontWeight: "bold",
																		// boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
																		borderRadius: 25 / 2,
																		border: "1px solid #d7dade",
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
																// openAnswer === index
																// 	? setOpenAnswer(-1)
																// 	: setOpenAnswer(index);
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
									</div>
								);
							})}
					</div>
				)}
				{activeTab === 1 && (
					<div>
						{answersList
							.filter(
								(item) =>
									item.answers.findIndex(
										(innerItem) =>
											innerItem.answeredBy.username === activeUser.userName
									) > -1
							)
							.map((item, index) => {
								return (
									<div
										key={index}
										style={{
											display: "flex",
											flexDirection: "column",
											// boxShadow:
											// 	"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
											borderBottom: "1px solid #d7dade",

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
																		justifyContent: "flex-start",
																	}}
																>
																	<span
																		className={styles.postedBy}
																		style={{
																			flexDirection: "column",
																			display: "flex",
																			alignItems: "flex-start",
																			justifyContent: "flex-start",
																		}}
																	>
																		{item.firstName} {item.lastName}
																		{"\n"}
																		<span
																			style={{
																				marginTop: -5,
																				fontSize: 11,
																				fontWeight: "bold",
																				letterSpacing: 0.5,
																			}}
																		>
																			{item.username}
																		</span>
																	</span>{" "}
																	•{" "}
																	<span className={styles.date}>
																		{item.date}
																	</span>
																</div>
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
															></div>
														</div>
														<div className={styles.bottomInteractions}>
															{/* <GiBanknote className={styles.bountyLogo} />
										<span className={styles.bountyAmount}>{item.bounty}</span> */}

															<Popover
																content={
																	"You get 50$ if your answer is choosen"
																}
																title=""
															>
																<div
																	style={{
																		marginRight: 10,
																		display: "flex",
																		alignItems: "center",
																		justifyContent: "center",
																		// boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
																		border: "1px solid #d7dade",
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
															{/* 
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
																		// boxShadow:
																		// 	"rgba(0, 0, 0, 0.1) 0px 4px 12px",
																		padding: 5,
																		borderRadius: 8,
																		border: "1px solid #d7dade",
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
																	<span
																		style={{ color: "#ad71ef", fontSize: 13 }}
																	>
																		Unsatisfied
																	</span>
																</div>
															</Popover>
														)} */}
															<Popover content={"Software Engineers"} title="">
																<IoIosPeople
																	style={{
																		color: "#0248a3",
																		fontSize: 25,
																		marginRight: 10,
																		marginLeft: 5,
																		fontWeight: "bold",
																		// boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
																		borderRadius: 25 / 2,
																		border: "1px solid #d7dade",
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
																// openAnswer === index
																// 	? setOpenAnswer(-1)
																// 	: setOpenAnswer(index);
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
									</div>
								);
							})}
					</div>
				)}
			</div>
		</div>
	);
};
export default ProfileTemplate;
