//import { Row, Col } from "antd";
import Image from "next/image";
import React from "react";
//import { Typo } from "src/Components";
import styles from "./index.module.css";

export default function IntroTemplate() {
	return (
		<>
			<div
				style={{
					display: "flex",
					alignItems: "flex-start",
					justifyContent: "left",
				}}
			>
				<Image
					src={"/Possum.png"}
					height={250}
					width={250}
					style={{ objectFit: "contain" }}
				/>
				{/* <span
						style={{
							color: "#fff",
							fontFamily: " 'Montserrat', sans-serif",
							fontSize: 32,
							paddingTop: 40,
							paddingBottom: 20,
						}}
					>
						POSSUM{" "}
					</span> */}
			</div>
			<span
				style={{
					color: "#fff",
					fontFamily: " 'Montserrat', sans-serif",
					fontSize: 30,
					paddingTop: 20,
					paddingBottom: 20,
					paddingLeft: 100,
				}}
			>
				A few clicks away from joining the largest community online
			</span>
		</>
	);
}
