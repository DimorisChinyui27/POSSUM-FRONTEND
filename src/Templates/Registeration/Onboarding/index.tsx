import { Typo } from "src/Components";
import {
	//Row,
	//Carousel,
	//Col,
	//Space,
	Steps,
	DatePicker,
	Tooltip,
	//Input,
	Select,
	Popover,
} from "antd";
import moment from "moment";
import { TbYoga } from "react-icons/tb";

// import {
// 	// LoadingOutlined,
// 	SmileOutlined,
// 	SolutionOutlined,
// 	SwapLeftOutlined,
// 	//	UserOutlined,
// } from "@ant-design/icons";

import styles from "./index.module.css";
import React from "react";
//import Image from "next/image";
import PaymentOptions from "./PaymentOptions";
const { Step } = Steps;
const dateFormat = "DD/MM/YYYY";
const { Option } = Select;

export default function OnboardingTemplate() {
	const [activeStep, setActiveStep] = React.useState<number>(0);
	const [language, setLanguage] = React.useState<string>("");
	const [topicOfInterest, setTopicOfInterest] = React.useState([]);
	const handleChange = (value: string) => {
		setLanguage(value);
	};
	const pushToInterests = (value: string) => {
		if (topicOfInterest.findIndex((item: string) => item === value) < 0) {
			let temp: any = [...topicOfInterest];
			temp.push(value);
			setTopicOfInterest(topicOfInterest);
		}
	};
	const children: React.ReactNode[] = [
		"Trending",
		"Deutschland",
		"Memes",
		"Wortwitze",
		"Lustig!",
		"Interessant!",
		"Gaming",
		"Konsolen",
		"Spiele",
		"Beliebte Spiele",
		"Entertainment",
		"Filme",
		"TV",
		"Sendungen & Serien",
		"Fan Theorien",
		"Musik",
		"Podcasts",
		"Youtube",
		"Beziehungen",
	];
	const changeStep = () => {
		if (activeStep == 1) {
			alert("Finished Finally");
		}
		setActiveStep(activeStep + 1);
	};
	const onChange = (currentSlide: number) => {
		console.log(currentSlide);
	};
	return (
		<div className={styles.main}>
			<div
				style={{
					width: "100%",
					paddingTop: 50,
					paddingBottom: 50,
					// paddingLeft: 50,
					// paddingRight: 50,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					//border: "1px solid red",
					backgroundColor: "#fff",
					borderRadius: 6,
					boxShadow:
						"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
				}}
			>
				{activeStep === 0 && (
					<div
						style={{
							height: "100%",
							display: "flex",
							width: "100%",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Typo.Heading
							title="Welcome to the amazing community"
							classType="passive"
						/>
						<Typo.Desc content="Let's get you onboarded" />
						<div //className={styles.centerAligner}
							style={{ marginTop: 10 }}
						/>
						<div
							className={styles.centerAligner}
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								maxWidth: 350,
							}}
						>
							<div className={styles.colLeftAlign}>
								<Typo.Label title="Birth Date" />
								<Tooltip
									trigger={["focus"]}
									title={""}
									placement="topLeft"
									overlayClassName="numeric-input"
								>
									<DatePicker
										defaultValue={moment("01/01/2015", dateFormat)}
										format={dateFormat}
										className={styles.allInputs}
										size="large"
									/>
								</Tooltip>
							</div>
							<div className={styles.colLeftAlign}>
								<Typo.Label title="Preferred Language" />
								<Select
									//defaultValue="lucy"
									placeholder="Select the language you dream in"
									className={styles.allInputs}
									style={{ width: 350 }}
									size="large"
									onChange={handleChange}
								>
									<Option value="English">English</Option>
									<Option value="French">French</Option>
									<Option value="German">German</Option>
									<Option value="Italian">Italian</Option>
								</Select>
							</div>
							<div className={styles.colLeftAlign}>
								{" "}
								<Typo.Label title="What do you know about" />
								<Select
									mode="tags"
									className={styles.allInputs}
									placeholder="What you like the most"
									onChange={pushToInterests}
									size="large"
								>
									{children.map((item, index) => {
										return (
											<Option value={item} key={index}>
												{item}
											</Option>
										);
									})}
								</Select>
							</div>
						</div>
					</div>
				)}{" "}
				<br />
				{activeStep === 1 && (
					<div
						style={{
							width: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}
					>
						<PaymentOptions
							activeStep={activeStep}
							setActiveStep={setActiveStep}
						/>
					</div>
				)}
				<br />
				{activeStep === 0 && (
					<Popover content="Let the games begin :)">
						<div style={{ width: 350, marginTop: 20 }}>
							<button className={styles.primary} onClick={changeStep}>
								Next
								<TbYoga
									style={{
										paddingTop: 2,
										marginLeft: 10,
										color: "#ffffff",
										fontSize: 17,
										fontWeight: "bolder",
									}}
									//color="white"
								/>
							</button>
						</div>
					</Popover>
				)}
			</div>
		</div>
	);
}
// const FinancialInfo = () => {
// 	const [activeOption, setActiveOption] = React.useState(0);
// 	const [cardNumber, setCardNumber] = React.useState("");
// 	const [expiryMonth, setExpiryMonth] = React.useState("");
// 	const [expiryYear, setExpiryYear] = React.useState("");
// 	const [email, setEmail] = React.useState("");
// 	const [Cvv, setCvv] = React.useState("");

// 	const SubmitDetails = () => {};
// 	return (
// 		<div style={{ width: "100%" }}>
// 			<Row
// 				style={{
// 					display: "flex",
// 					alignItems: "center",
// 					justifyContent: "center",
// 					width: "100%",
// 					maxWidth: "100%",
// 				}}
// 			>
// 				<Col xs={24} sm={24} md={12} lg={7} xl={7}>
// 					<img
// 						src={"american.png"}
// 						style={{
// 							objectFit: "contain",
// 							width: 150,
// 							height: 65,
// 							borderRadius: 6,
// 							border: activeOption === 0 ? "1px solid #0071ff" : 0,
// 							cursor: "pointer",
// 						}}
// 						onClick={() => {
// 							setActiveOption(0);
// 						}}
// 					/>
// 				</Col>
// 				<Col xs={24} sm={24} md={12} lg={7} xl={7}>
// 					<img
// 						src={"payooneer.png"}
// 						style={{
// 							objectFit: "contain",
// 							width: 150,
// 							height: 65,
// 							borderRadius: 6,
// 							border: activeOption === 1 ? "1px solid #0071ff" : 0,
// 							cursor: "pointer",
// 						}}
// 						onClick={() => {
// 							setActiveOption(1);
// 						}}
// 					/>
// 				</Col>
// 				<Col xs={24} sm={24} md={12} lg={7} xl={7}>
// 					<img
// 						src={"paypal.png"}
// 						style={{
// 							objectFit: "contain",
// 							width: 150,
// 							height: 65,
// 							borderRadius: 6,
// 							border: activeOption === 2 ? "1px solid #0071ff" : 0,
// 							cursor: "pointer",
// 						}}
// 						onClick={() => {
// 							setActiveOption(2);
// 						}}
// 					/>
// 				</Col>
// 			</Row>
// 			{activeOption === 0 && (
// 				<div
// 					style={{
// 						width: "100%",
// 						paddingTop: 15,
// 						display: "flex",
// 						alignItems: "center",
// 						justifyContent: "center",
// 						flexDirection: "column",
// 					}}
// 				>
// 					<Typo.Label title="Card Number" />
// 					<Input
// 						placeholder="Enter your Card Number"
// 						size="large"
// 						onChange={(e) => {
// 							setCardNumber(e.target.value);
// 						}}
// 					/>
// 					<div style={{ paddingTop: 5 }}></div>

// 					<Row
// 					// 	style={{
// 					// 		display: "flex",
// 					// 		alignItems: "center",
// 					// 		justifyContent: "center",
// 					// 	}}
// 					//
// 					>
// 						<Col xs={8} sm={8} md={6} lg={2} xl={2}>
// 							<Space direction="vertical">
// 								<Typo.Label title="Month" />
// 								<Input
// 									placeholder="00"
// 									size="large"
// 									style={{ width: "100%", maxWidth: 50 }}
// 									onChange={(e) => {
// 										setExpiryMonth(e.target.value);
// 									}}
// 								/>
// 							</Space>
// 						</Col>
// 						<Col xs={8} sm={8} md={6} lg={1} xl={1}>
// 							{/* <p style={{ fontSize: 20, paddingTop: 30 }}>/</p> */}
// 						</Col>
// 						<Col xs={8} sm={8} md={6} lg={2} xl={2}>
// 							<Space direction="vertical">
// 								<Typo.Label title="Year" />
// 								<Input
// 									placeholder="00"
// 									size="large"
// 									style={{ width: 45 }}
// 									onChange={(e) => {
// 										setExpiryYear(e.target.value);
// 									}}
// 								/>
// 							</Space>
// 						</Col>
// 						<Col xs={24} sm={24} md={12} lg={9} xl={9}></Col>
// 						<Col xs={24} sm={24} md={12} lg={8} xl={8}>
// 							<Space direction="vertical">
// 								<Typo.Label title="CVV" />
// 								<Input
// 									placeholder="Enter CVV"
// 									size="large"
// 									style={{ width: "100%", maxWidth: 100 }}
// 									onChange={(e) => {
// 										setCvv(e.target.value);
// 									}}
// 								/>
// 							</Space>
// 						</Col>
// 					</Row>
// 				</div>
// 			)}
// 			{activeOption === 1 && (
// 				<Space direction="vertical" style={{ width: "100%", paddingTop: 15 }}>
// 					<Typo.Label title="Payooneer Email" />
// 					<Input
// 						placeholder="Enter payooneer's email"
// 						size="large"
// 						onChange={(e) => {
// 							setEmail(e.target.value);
// 						}}
// 					/>
// 				</Space>
// 			)}
// 			{activeOption === 2 && (
// 				<Space direction="vertical" style={{ width: "100%", paddingTop: 15 }}>
// 					<Typo.Label title="Paypal Email" />
// 					<Input
// 						placeholder="Enter paypal email"
// 						size="large"
// 						onChange={(e) => {
// 							setEmail(e.target.value);
// 						}}
// 					/>
// 				</Space>
// 			)}
// 			<br />
// 			<button type="button" onClick={SubmitDetails} className={styles.primary}>
// 				Submit
// 			</button>
// 		</div>
// 	);
// };

// const contentStyle: React.CSSProperties = {
// 	height: "160px",
// 	color: "#fff",
// 	lineHeight: "160px",
// 	textAlign: "center",
// 	background: "/american.png",
// 	borderRadius: 20,
// };
