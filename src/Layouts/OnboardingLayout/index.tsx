import { Row, Col } from "antd";
import React from "react";
import styles from "./index.module.css";
type layoutProps = {
	CenterPanel: () => JSX.Element;

	//	RightPanel: () => JSX.Element;
};

export default function OnBoardingLayout({ CenterPanel }: layoutProps) {
	return (
		<Row className={styles.main}>
			<Col
				xs={24}
				sm={24}
				md={24}
				lg={24}
				xl={24}
				style={{ width: "100%", maxWidth: 650, height: "100%" }}
			>
				<CenterPanel />
			</Col>
		</Row>
	);
}
