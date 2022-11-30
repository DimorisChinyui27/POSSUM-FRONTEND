import { useRouter } from "next/router";
import ProfileTemplate from "src/Templates/Profile";
import SideNav from "src/Templates/Dashboard/SideNav";
import SearchTemplate from "src/Templates/Search";
import { Row, Col } from "antd";
export default function Profile() {
	const router = useRouter();
	const id = router.query.id ? router.query.id : "";

	return (
		<Row
			style={{
				minHeight: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				minWidth: "100vw",
				// backgroundImage: "linear-gradient(to bottom left, #e839f6, #61d8de)",
				backgroundColor: "#e5e5e5",
			}}
		>
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
						<SideNav />
					</Col>

					<Col
						xs={11}
						sm={11}
						md={11}
						lg={11}
						xl={11} //className={styles.mainPanel}
						style={{
							backgroundColor: "#fff",
							width: "100%",
							padding: 5,
							borderRadius: 13,
						}}
					>
						<ProfileTemplate id={id ? id : "0"} />
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
							height: "auto",
						}}
					>
						<SearchTemplate />
					</Col>
				</Row>
			</Col>
		</Row>
	);
}
