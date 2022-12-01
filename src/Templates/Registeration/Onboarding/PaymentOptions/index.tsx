import React, { Dispatch, SetStateAction } from "react";
import { ExclamationCircleOutlined, SwapLeftOutlined } from "@ant-design/icons";
import { Input, Modal, Space } from "antd";
import "antd/dist/antd.css";
import styles from "./index.module.css";
import { Typo } from "src/Components";

export default function PaymentOptions({
	activeStep,
	changeStep,
}: {
	activeStep: number;
	changeStep: Function;
}) {
	const [activeDiv, setActiveDiv] = React.useState(0);
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	// const handleOk = () => {
	// 	setIsModalOpen(false);
	// };
	const submitDetails = () => {
		setIsModalOpen(false);
		changeStep();
		console.log("activestp", activeStep);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<Typo.Heading title="Payment Method" classType="passive" />
			<Typo.Desc content="please select your payment method" />
			<img
				alt="wallet img"
				src="Wallet-bro.png"
				style={{ width: 140, height: 140, marginTop: 10, marginBottom: 30 }}
			/>
			<Modal
				className="modalStyle"
				title=""
				open={isModalOpen}
				// onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
				style={{ borderRadius: 12 }}
			>
				<ModalContent activeDiv={activeDiv} submitDetails={submitDetails} />
			</Modal>
			{activeDiv === 0 && (
				<div className="animate__animated animate__fadeInRight">
					<div
						style={{
							width: 300,
							height: 150,
							objectFit: "fill",
							backgroundImage: "url(/american.png)",
							borderRadius: 12,
							boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
						}}
					></div>
				</div>
			)}
			{activeDiv === 1 && (
				<div className="animate__animated animate__fadeInRight">
					<div
						style={{
							width: 300,
							height: 150,
							objectFit: "fill",
							backgroundImage: "url(/paypal.png)",
							borderRadius: 12,
							boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
						}}
					></div>
				</div>
			)}
			{activeDiv === 2 && (
				<div className="animate__animated animate__fadeInRight">
					<div
						style={{
							width: 300,
							height: 150,
							objectFit: "fill",
							backgroundImage: "url(/venmo-logo.png)",
							borderRadius: 12,
							boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
						}}
					></div>
				</div>
			)}
			<br />
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "row",
				}}
			>
				<div
					style={{
						width: 10,
						height: 10,
						backgroundColor: activeDiv === 0 ? "black" : "#7d7f82",
						borderRadius: 5,
						cursor: "pointer",
					}}
					onClick={() => {
						setActiveDiv(0);
					}}
				></div>
				<div
					style={{
						width: 10,
						height: 10,
						marginRight: 10,
						marginLeft: 10,
						backgroundColor: activeDiv === 1 ? "black" : "#7d7f82",
						borderRadius: 5,
						cursor: "pointer",
					}}
					onClick={() => {
						setActiveDiv(1);
					}}
				></div>
				<div
					style={{
						width: 10,
						height: 10,
						backgroundColor: activeDiv === 2 ? "black" : "#7d7f82",
						borderRadius: 5,
						cursor: "pointer",
						transitionTimingFunction: "ease-in",
					}}
					onClick={() => {
						setActiveDiv(2);
					}}
				></div>
			</div>
			<button type="button" onClick={showModal} className={styles.primary}>
				Select
			</button>
			<button
				style={{
					//marginTop: 15,
					width: "100%",
					maxWidth: 300,
					borderRadius: 26,
					paddingTop: 8,
					paddingBottom: 8,
					backgroundColor: "transparent",
					border: "1px solid #d84bf3",
					fontWeight: "lighter",
					letterSpacing: 1,
					fontSize: 15,
					color: "#9f8fe9",
				}}
				className={styles.btn}
				onClick={() => changeStep()}
			>
				Skip
			</button>
		</div>
	);
}

const ModalContent = ({
	activeDiv,
	submitDetails,
}: {
	activeDiv: number;
	submitDetails: Function;
}) => {
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
					activeDiv === 0 ? "credit card" : activeDiv === 1 ? "paypal" : "venmo"
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

								{/* <span
							style={{
								fontSize: 30,
								paddingBottom: 25,
								textAlign: "center",
								color: "#bfbfbf",
							}}
						>
							/
						</span> */}
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
							/>
						</div>
					</div>
				</div>
			)}
			{activeDiv === 2 && (
				<div>
					<Space direction="vertical" style={{ width: "100%", paddingTop: 15 }}>
						<Typo.Label title="Venmo Email, Username or Password" />
						<Input
							placeholder="Type your venmo email or username"
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
						/>
					</Space>
				</div>
			)}
			<button
				type="button"
				onClick={() => {
					submitDetails();
				}}
				className={styles.primary}
			>
				Submit
			</button>
		</div>
	);
};
