import { Row, Col } from "antd";
import React from "react";
import styles from "./index.module.css";
type layoutProps = {
	MainPanel: any;

	SidePanel: () => JSX.Element;
	RightPanel: () => JSX.Element;
};

export default function DashboardLayout({
	MainPanel,
	SidePanel,
	RightPanel,
}: layoutProps) {
	return (
		<Row className={styles.main}>
			<Col
				xs={24}
				sm={24}
				md={24}
				lg={24}
				xl={24}
				style={{
					backgroundImage: "linear-gradient(to bottom left, #e839f6, #61d8de)",
					height: 80,
					marginBottom: 10,
					alignItems: "center",
					justifyContent: "flex-start",
					display: "flex",
					flexDirection: "row",
					paddingLeft: 200,
				}}
			>
				<h1 className={styles.rainbowText}>POSSUM</h1>
				{/* <span
					style={{
						fontSize: 25,
						fontWeight: "bolder",
						letterSpacing: 2,
						paddingLeft: 150,
					}}
				>
					POSSUM
				</span> */}
				{/* <img
					src="/logo.png"
					style={{ width: 70, height: 50, objectFit: "contain" }}
				/> */}
			</Col>
			<Col xs={24} sm={24} md={24} lg={24} xl={24}>
				<Row
					style={{
						// alignItems: "center",
						justifyContent: "space-evenly",
						display: "flex",
					}}
				>
					<Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
					<Col
						xs={5}
						sm={5}
						md={5}
						lg={5}
						xl={5}
						style={{
							backgroundColor: "#fff",
							height: "100%",
							paddingTop: 20,
							paddingBottom: 50,
							// minHeight: "70vh",
							borderRadius: 15,
							display: "flex",
							alignItems: "flex-start",
							justifyContent: "center",
						}}
					>
						<SidePanel />
					</Col>

					<Col
						xs={11}
						sm={11}
						md={11}
						lg={11}
						xl={11}
						className={styles.mainPanel}
					>
						<MainPanel />
					</Col>
					<Col
						xs={5}
						sm={5}
						md={5}
						lg={5}
						xl={5}
						style={{
							backgroundColor: "#fff",
							padding: 10,
							borderRadius: 6,
						}}
					>
						<RightPanel />
					</Col>
				</Row>
			</Col>
		</Row>
	);
}
