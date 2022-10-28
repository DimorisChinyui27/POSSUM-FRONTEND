import { Row, Col } from "antd";
import React from "react";
import styles from "./index.module.css";
type layoutProps = {
	MainPanel: () => JSX.Element;

	SidePanel: () => JSX.Element;
};

export default function DashboardLayout({ MainPanel, SidePanel }: layoutProps) {
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
				}}
			></Col>
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
					paddingTop: 30,
					paddingBottom: 300,
					minHeight: "70vh",
					borderRadius: 15,
					display: "flex",
					alignItems: "flex-start",
					justifyContent: "center",
				}}
			>
				<SidePanel />
			</Col>
			<Col
				xs={1}
				sm={1}
				md={1}
				lg={1}
				xl={1}
				style={{
					height: "100%",
					minHeight: "70vh",
				}}
			></Col>
			<Col xs={13} sm={13} md={13} lg={13} xl={13} className={styles.mainPanel}>
				<MainPanel />
			</Col>
			<Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
		</Row>
	);
}
