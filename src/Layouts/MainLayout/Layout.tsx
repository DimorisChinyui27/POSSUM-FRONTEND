import { Row, Col } from "antd";
import React from "react";
import styles from "./index.module.css";
type layoutProps = {
	LeftPanel: () => JSX.Element;

	//	RightPanel: () => JSX.Element;
};

export default function Layout({ LeftPanel }: layoutProps) {
	return (
		<Row className={styles.main}>
			<Col
				xs={24}
				sm={24}
				md={24}
				lg={24}
				xl={24}
				style={{
					width: "100%",
					height: "100%",
					paddingTop: 20,
					paddingBottom: 20,
					// backgroundColor: "red",
				}}
			>
				<LeftPanel />
			</Col>
		</Row>
	);
}
