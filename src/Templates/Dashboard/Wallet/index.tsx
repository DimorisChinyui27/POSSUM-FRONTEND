import React from "react";
import { ExclamationCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Modal, Space, Select } from "antd";
import Image from "next/image";
import { Typo } from "src/Components";
import styles from "./index.module.css";
import AppContext from "src/Context/Context";
const Wallet = ({
	isModalOpen,
	handleOk,
	handleCancel,
}: {
	isModalOpen: boolean;
	handleOk: () => void;
	handleCancel: () => void;
}) => {
	const [globalState, setGlobalState] = React.useContext<any>(AppContext);

	const [activeScreen, setActiveScreen] = React.useState(0);
	const [payOp, setPayOp] = React.useState(0);
	const handleChange = (item: any) => {
		setPayOp(item);
	};
	const submitDetails = (data: any) => {
		console.log("details are", data);
		let temp: any = [...globalState.paymentMethods];
		temp.push(data);
		setGlobalState({ ...globalState, paymentMethods: temp });
		setActiveScreen(0);
	};
	return (
		<Modal
			title="Add Payment Method"
			open={isModalOpen}
			onOk={handleOk}
			onCancel={handleCancel}
			footer={null}
		>
			{activeScreen === 0 ? (
				<div
					style={{
						backgroundColor: "#fafafa",
						paddingLeft: 20,
						paddingRight: 20,
						width: "100%",

						paddingTop: 30,
					}}
				>
					<div
						style={{
							padding: 20,
							height: 300,
							alignItems: "center",
							justifyContent: "center",
							display: "flex",
							flexDirection: "row",
							width: "100%",
							backgroundColor: "#fff",
							overflowY: "scroll",
							paddingLeft: 350,
						}}
					>
						{globalState.paymentMethods.map((item: any) => {
							return (
								<div
									style={{
										height: 200,
										width: 350,
										backgroundColor: "#f5f5f5",
										borderRadius: 15,
										padding: 20,
										//alignItems: "flex-start",
										justifyContent: "space-between",
										display: "flex",
										flexDirection: "column",
										marginRight: 10,
										boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
									}}
								>
									<div
										style={{
											alignItems: "center",
											justifyContent: "space-between",
											display: "flex",
											flexDirection: "row",
											width: "100%",
										}}
									>
										<div
											style={{
												alignItems: "flex-start",
												justifyContent: "flex-start",
												display: "flex",
												flexDirection: "column",
											}}
										>
											{/* <span
										style={{
											color: "#bababa",
											fontSize: 13,
											fontWeight: "lighter",
										}}
									>
										Current Balance
									</span>
		
									<span style={{ color: "#fafafa", fontSize: 20 }}>$5,678,99</span> */}
										</div>
										<div>
											{" "}
											<Image
												src={
													item.paymentMethod === "Credit Card"
														? "/Mastercard-logo.svg.png"
														: item.paymentMethod === "Paypal"
														? "/paypal.png"
														: "/venmo-logo.png"
												}
												width={70}
												height={35}
												objectFit="contain"
											/>
										</div>
									</div>
									<div
										style={{
											alignItems: "center",
											justifyContent: "space-between",
											display: "flex",
											flexDirection: "row",
											width: "100%",
										}}
									>
										<div
											style={{
												alignItems: "flex-start",
												justifyContent: "flex-start",
												display: "flex",
												flexDirection: "column",
											}}
										>
											<span
												style={{
													color: "#999999",
													fontSize: 14,
													fontWeight: "bold",
												}}
											>
												{globalState.activeUser.firstName} &nbsp;
												{globalState.activeUser.lastName}
											</span>

											{item.paymentMethod === "Credit Card" && (
												<div
													style={{
														alignItems: "center",
														justifyContent: "flex-start",
														display: "flex",
														flexDirection: "row",
													}}
												>
													<div className={styles.circle}></div>
													<div className={styles.circle}></div>
													<div className={styles.circle}></div>
													<div className={styles.circle}></div>
													<div
														style={{ paddingLeft: 5, paddingRight: 5 }}
													></div>
													<div className={styles.circle}></div>
													<div className={styles.circle}></div>
													<div className={styles.circle}></div>
													<div className={styles.circle}></div>
													<div
														style={{ paddingLeft: 5, paddingRight: 5 }}
													></div>
													<div className={styles.circle}></div>
													<div className={styles.circle}></div>
													<div className={styles.circle}></div>
													<div className={styles.circle}></div>
													<div
														style={{ paddingLeft: 5, paddingRight: 5 }}
													></div>
													<span
														style={{
															color: "#000",
															fontSize: 17,
															letterSpacing: 1.5,
														}}
													>
														{item.paymentMethod === "Credit Card"
															? item.cardNumber.substring(8)
															: ""}
													</span>
												</div>
											)}
											{item.paymentMethod !== "Credit Card" && (
												<span
													style={{
														color: "#000",
														fontSize: 17,
														letterSpacing: 1.5,
														paddingRight: 90,
													}}
												>
													{item.email}
												</span>
											)}
										</div>

										<div
											style={{
												paddingTop: 15,
												alignItems: "flex-end",
												justifyContent: "center",
												display: "flex",
												paddingLeft: 10,
											}}
										>
											<span
												style={{
													fontWeight: "normal",
													color: "#999999",
													textAlign: "center",
												}}
											>
												{item.paymentMethod === "Credit Card"
													? item.cardMonth + "/" + item.cardYear
													: ""}
											</span>
										</div>
									</div>
								</div>
							);
						})}
						<button
							style={{
								borderRadius: 12,
								border: "2px solid #bababa",
								height: 45,
								width: 45,
								color: "#61d8de",
								//	border: "2px solid #e839f6",
								backgroundColor: "#fff",
								fontSize: 22,
								textAlign: "center",
								marginLeft: 10,
								cursor: "pointer",
							}}
							onClick={() => {
								setActiveScreen(1);
							}}
						>
							+
						</button>
					</div>
					<div
						style={{
							paddingTop: 10,
							paddingRight: 5,
							paddingLeft: 5,
							paddingBottom: 10,
							backgroundColor: "#fff",
						}}
					>
						<div style={{ paddingLeft: 10 }}>
							<Typo.SubHeading title="Transaction History" />
						</div>
						<Input
							size="large"
							placeholder="Search by question, amount..."
							allowClear
							prefix={<SearchOutlined style={{ marginRight: 7 }} />}
							style={{ borderRadius: 20, paddingLeft: 12 }}
						/>
						<br />
						<br />
						<div
							style={{
								alignItems: "center",
								justifyContent: "space-between",
								display: "flex",
								flexDirection: "row",
								paddingLeft: 5,
								paddingRight: 5,
								paddingTop: 15,
								paddingBottom: 15,
								borderRadius: 15,
								//	boxShadow: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px",
							}}
						>
							<div
								style={{
									alignItems: "center",
									display: "flex",
									flexDirection: "row",
								}}
							>
								<Image
									src={"/profilePic.png"}
									style={{
										borderRadius: 40 / 2,
										objectFit: "cover",
										border: "3px solid #bababa",
										backgroundColor: "#fff",
										boxShadow:
											"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
									}}
									height={40}
									width={40}
								/>
								<span
									style={{
										fontSize: 13,
										color: "#000",
										fontWeight: "normal",
										marginLeft: 5,
									}}
								>
									Why Crpto currency is going down?
								</span>
							</div>
							<span style={{ color: "green", fontWeight: "bold" }}>
								+ $ 250
							</span>
						</div>
						<div
							style={{
								alignItems: "center",
								justifyContent: "center",
								display: "flex",
							}}
						>
							<div
								style={{ height: 2, backgroundColor: "#eff1f7", width: "70%" }}
							/>
						</div>

						<div
							style={{
								alignItems: "center",
								justifyContent: "space-between",
								display: "flex",
								flexDirection: "row",
								paddingLeft: 5,
								paddingRight: 5,
								paddingTop: 15,
								paddingBottom: 15,
								borderRadius: 15,
								//	boxShadow: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px",
							}}
						>
							<div
								style={{
									alignItems: "center",
									display: "flex",
									flexDirection: "row",
								}}
							>
								<Image
									src={"/profilePic.png"}
									style={{
										borderRadius: 40 / 2,
										objectFit: "cover",
										border: "3px solid #bababa",
										backgroundColor: "#fff",
										boxShadow:
											"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
									}}
									height={40}
									width={40}
								/>
								<span
									style={{
										fontSize: 13,
										color: "#000",
										fontWeight: "normal",
										marginLeft: 5,
									}}
								>
									Difference between a Frontend Dev and Backend Dev?
								</span>
							</div>
							<span style={{ color: "green", fontWeight: "bold" }}>
								+ $ 250
							</span>
						</div>
						<div
							style={{
								alignItems: "center",
								justifyContent: "center",
								display: "flex",
							}}
						>
							<div
								style={{ height: 2, backgroundColor: "#eff1f7", width: "70%" }}
							/>
						</div>

						<div
							style={{
								alignItems: "center",
								justifyContent: "space-between",
								display: "flex",
								flexDirection: "row",
								paddingLeft: 5,
								paddingRight: 5,
								paddingTop: 15,
								paddingBottom: 15,
								borderRadius: 15,
								//	boxShadow: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px",
							}}
						>
							<div
								style={{
									alignItems: "center",
									display: "flex",
									flexDirection: "row",
								}}
							>
								<Image
									src={"/profilePic.png"}
									style={{
										borderRadius: 40 / 2,
										objectFit: "cover",
										border: "3px solid #bababa",
										backgroundColor: "#fff",
										boxShadow:
											"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
									}}
									height={40}
									width={40}
								/>
								<span
									style={{
										fontSize: 13,
										color: "#000",
										fontWeight: "normal",
										marginLeft: 5,
									}}
								>
									Does Full stack devs get paid alot?
								</span>
							</div>
							<span style={{ color: "red", fontWeight: "bold" }}>- $ 50</span>
						</div>
						<div
							style={{
								alignItems: "center",
								justifyContent: "center",
								display: "flex",
							}}
						>
							<div
								style={{ height: 2, backgroundColor: "#eff1f7", width: "70%" }}
							/>
						</div>

						<br />
					</div>
				</div>
			) : (
				<div
					style={{
						flexDirection: "column",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<span
						style={{
							paddingTop: 10,
							paddingBottom: 10,
							fontSize: 22,
							fontWeight: "bold",
							wordSpacing: 1,
							color: "#adacac",
						}}
					>
						Select payment method
					</span>
					<Select
						defaultValue={0}
						style={{ width: 250, marginBottom: 10 }}
						onChange={handleChange}
						options={[
							// {
							// 	value: -1,
							// 	disabled: true,
							// 	label: "Select Option",
							// },
							{
								value: 0,
								label: "Credit card",
							},
							{
								value: 1,
								label: "Paypal",
							},

							{
								value: 2,
								label: "Venmo",
							},
						]}
					/>
					<PaymentMethods submitDetails={submitDetails} activeDiv={payOp} />
				</div>
			)}
		</Modal>
	);
};
const PaymentMethods = ({
	activeDiv,
	submitDetails,
}: {
	activeDiv: number;
	submitDetails: Function;
}) => {
	const [cardNumber, setCardNumber] = React.useState("");
	const [cardMonth, setCardMonth] = React.useState("");
	const [cardYear, setCardYear] = React.useState("");
	const [cardCVV, setCardCVV] = React.useState("");
	const [email, setEmail] = React.useState("");
	const sendDetailsToParent = () => {
		if (activeDiv === 0) {
			if (!cardMonth || !cardCVV || !cardNumber || !cardYear) {
				alert("Please enter complete details!");
				return;
			} else {
				submitDetails({
					paymentMethod:
						activeDiv === 0
							? "Credit Card"
							: activeDiv === 1
							? "Paypal"
							: "Venmo",
					cardNumber,
					cardMonth,
					cardYear,
					cardCVV,
					email,
				});
			}
		} else {
			submitDetails({
				paymentMethod:
					activeDiv === 0
						? "Credit Card"
						: activeDiv === 1
						? "Paypal"
						: "Venmo",

				email,
			});
		}
	};
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				width: "100%",
			}}
		>
			<Typo.Heading title="Add Payment Method" classType="passive" />

			<Typo.Desc
				content={`Provide your ${
					activeDiv === 0 ? "Credit card" : activeDiv === 1 ? "Paypal" : "Venmo"
				}	information`}
			/>

			<img
				alt="wallet img"
				src="/pcard.png"
				style={{ width: 140, height: 140, marginTop: 10, marginBottom: 30 }}
			/>
			{activeDiv === 0 && (
				<div>
					<div>
						<p>
							Card Number{"  "} <ExclamationCircleOutlined />
						</p>
						<div
							style={{
								backgroundColor: "transparent",
								borderRadius: 16,
								border: "1px solid #bfbfbf",
								display: "flex",
								flexDirection: "row",
								alignItems: "flex-start",
								width: 300,
							}}
						>
							<div
								style={{
									backgroundColor: "#eef2f5",
									paddingLeft: 15,
									borderTopLeftRadius: 16,
									borderBottomLeftRadius: 16,
									paddingTop: 5,
									paddingBottom: 5,
									paddingRight: 15,
								}}
							>
								<img
									alt="master card"
									src="Mastercard-logo.svg.png"
									style={{ width: 20, height: 20, objectFit: "contain" }}
								/>
							</div>
							<input
								type="number"
								// minLength={16}
								// maxLength={16}
								placeholder="0000 0000 0000 0000"
								style={{
									backgroundColor: "transparent",
									outline: 0,
									border: 0,
									paddingTop: 5,
									paddingLeft: 5,
									width: "100%",
								}}
								onChange={(e) => {
									setCardNumber(e.target.value);
								}}
							/>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							flexDirection: "row",
							width: "100%",
							maxWidth: 300,
							marginTop: 10,
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "flex-start",

								flexDirection: "column",
							}}
						>
							<Typo.Label title="Expiry Date" />
							<div style={{ paddingTop: 5 }}></div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									//							justifyContent: "center",
									flexDirection: "row",
								}}
							>
								<div
									style={{
										display: "flex",
										alignItems: "flex-start",
										flexDirection: "column",
									}}
								>
									<input
										type="number"
										placeholder="00"
										style={{
											width: "100%",
											maxWidth: 80,
											borderRadius: 16,
											paddingLeft: 15,
											outline: "none",
											paddingTop: 2.5,
											paddingBottom: 2.5,
											border: "1px solid #bfbfbf",
										}}
										onChange={(e) => {
											setCardMonth(e.target.value);
										}}
									/>
									<span
										style={{
											fontSize: 11,
											paddingLeft: 5,
											textAlign: "center",
											color: "#bfbfbf",
										}}
									>
										( Month )
									</span>
								</div>
								<div
									style={{
										display: "flex",
										alignItems: "flex-start",
										//	justifyContent: "center",
										flexDirection: "column",
										marginLeft: 5,
									}}
								>
									<input
										type="number"
										placeholder="00"
										style={{
											width: "100%",
											maxWidth: 80,
											borderRadius: 16,
											paddingLeft: 15,
											outline: "none",
											paddingTop: 2.5,
											paddingBottom: 2.5,
											border: "1px solid #bfbfbf",
										}}
										onChange={(e) => {
											setCardYear(e.target.value);
										}}
									/>
									<span
										style={{
											fontSize: 11,
											paddingLeft: 5,
											textAlign: "center",
											color: "#bfbfbf",
										}}
									>
										( Year )
									</span>
								</div>
							</div>
						</div>
						<div
							style={{
								display: "flex",
								alignItems: "flex-start",
								//justifyContent: "center",
								flexDirection: "column",
								paddingBottom: 20,
							}}
						>
							<Typo.Label title="CVV" /> <div style={{ paddingTop: 5 }}></div>
							<input
								type="number"
								placeholder="000"
								style={{
									width: "100%",
									maxWidth: 80,
									borderRadius: 16,
									paddingLeft: 15,
									outline: "none",
									paddingTop: 2.5,
									paddingBottom: 2.5,
									border: "1px solid #bfbfbf",
								}}
								onChange={(e) => {
									setCardCVV(e.target.value);
								}}
							/>
						</div>
					</div>
				</div>
			)}
			{activeDiv === 2 && (
				<div>
					<Space direction="vertical" style={{ width: "100%", paddingTop: 15 }}>
						<Typo.Label title="Venmo Email or Username" />
						<Input
							placeholder="Type your venmo email or username"
							size="large"
							style={{
								borderRadius: 16,
								border: "1px solid #bfbfbf",
								width: 300,
								paddingLeft: 15,
								height: 35,
							}}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</Space>
				</div>
			)}
			{activeDiv === 1 && (
				<div>
					<Space direction="vertical" style={{ width: "100%", paddingTop: 15 }}>
						<Typo.Label title="Paypal Email" />
						<Input
							placeholder="Type your paypal email"
							size="large"
							// onChange={(e) => {
							// 	setEmail(e.target.value);
							// }}
							style={{
								borderRadius: 16,
								border: "1px solid #bfbfbf",
								width: 300,
								paddingLeft: 15,
								height: 35,
							}}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</Space>
				</div>
			)}
			<button
				type="button"
				onClick={() => {
					sendDetailsToParent();
				}}
				className={styles.primary}
			>
				Submit
			</button>
		</div>
	);
};

export default Wallet;
