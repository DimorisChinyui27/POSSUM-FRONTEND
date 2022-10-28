import { SearchOutlined } from "@ant-design/icons";
import { Input, Modal } from "antd";
import Image from "next/image";
import { Typo } from "src/Components";
import styles from "./index.module.css";
const Wallet = ({
	isModalOpen,
	handleOk,
	handleCancel,
}: {
	isModalOpen: boolean;
	handleOk: () => void;
	handleCancel: () => void;
}) => (
	<Modal
		title="Add Payment Method"
		open={isModalOpen}
		onOk={handleOk}
		onCancel={handleCancel}
		footer={null}
	>
		<div
			style={{
				backgroundColor: "#fafafa",
				paddingLeft: 20,
				paddingRight: 20,
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
				}}
			>
				<div
					style={{
						height: 200,
						width: 350,
						backgroundColor: "blueviolet",
						borderRadius: 15,
						padding: 20,
						//alignItems: "flex-start",
						justifyContent: "space-between",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<div
						style={{
							alignItems: "center",
							justifyContent: "space-between",
							display: "flex",
							flexDirection: "row",
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
									color: "#bababa",
									fontSize: 13,
									fontWeight: "lighter",
								}}
							>
								Current Balance
							</span>

							<span style={{ color: "#fafafa", fontSize: 20 }}>$5,678,99</span>
						</div>
						<div>
							{" "}
							<Image
								src={"/Mastercard-logo.svg.png"}
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
								style={{ color: "#d6d4d4", fontSize: 14, fontWeight: "bold" }}
							>
								ALEX KANE
							</span>

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
								<div style={{ paddingLeft: 5, paddingRight: 5 }}></div>
								<div className={styles.circle}></div>
								<div className={styles.circle}></div>
								<div className={styles.circle}></div>
								<div className={styles.circle}></div>
								<div style={{ paddingLeft: 5, paddingRight: 5 }}></div>
								<div className={styles.circle}></div>
								<div className={styles.circle}></div>
								<div className={styles.circle}></div>
								<div className={styles.circle}></div>
								<div style={{ paddingLeft: 5, paddingRight: 5 }}></div>
								<span
									style={{ color: "#fff", fontSize: 17, letterSpacing: 1.5 }}
								>
									2345
								</span>
							</div>
						</div>

						<div
							style={{
								paddingTop: 15,
								alignItems: "flex-end",
								justifyContent: "center",
								display: "flex",
							}}
						>
							<span
								style={{
									fontWeight: "normal",
									color: "#bababa",
									textAlign: "center",
								}}
							>
								09/25
							</span>
						</div>
					</div>
				</div>
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
					<span style={{ color: "green", fontWeight: "bold" }}>+ $ 250</span>
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
					<span style={{ color: "green", fontWeight: "bold" }}>+ $ 250</span>
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
	</Modal>
);

export default Wallet;
