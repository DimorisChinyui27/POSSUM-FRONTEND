import React from "react";
import { Modal } from "antd";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosOptions } from "react-icons/io";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { FaCrown } from "react-icons/fa";
import Link from "next/link";
export default function SearchTemplate() {
	const [search, setSearch] = React.useState("");
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const [filterBy, setFilterBy] = React.useState("Users");

	// const showModal = () => {
	//   setIsModalOpen(true);
	// };

	// const handleOk = () => {
	//   setIsModalOpen(false);
	// };

	// const handleCancel = () => {
	//   setIsModalOpen(false);
	// };

	const listOfPeople = [
		{
			id: "0",
			firstName: "KD",
			lastName: "Roven",
			userName: "KD_Roven",
			url: "/userFour.jpg",
			domain: "Software Engineer",
			crowns: 23,
			description:
				"A Full stack software engineer with hands on expertise in Javascript",
			subDescription: "Tech Lead at Google",
			totalAnswered: "200",
			totalAsked: "73",
			totalCrowns: "267",
			interestedTopics: [
				"Software Engineer",
				"Programming",
				"Tech",
				"JavaScript",
			],
		},
		{
			id: "1",
			firstName: "Paul",
			lastName: "Logan",
			userName: "PaulLog_123",
			url: "/logan-paul.jpg",
			domain: "Influencer",
			crowns: 45,
			description:
				"A Full stack software engineer with hands on expertise in Javascript",
			subDescription: "Tech Lead at Google",
			totalAnswered: "200",
			totalAsked: "73",
			totalCrowns: "267",
			interestedTopics: [
				"Software Engineer",
				"Programming",
				"Tech",
				"JavaScript",
			],
		},
		{
			id: "2",
			firstName: "Donald",
			lastName: "Trump",
			userName: "DTrump",
			url: "/trumph.jpg",
			domain: "Politician",
			crowns: 88,
			description:
				"A Full stack software engineer with hands on expertise in Javascript",
			subDescription: "Tech Lead at Google",
			totalAnswered: "200",
			totalAsked: "73",
			totalCrowns: "267",
			interestedTopics: [
				"Software Engineer",
				"Programming",
				"Tech",
				"JavaScript",
			],
		},
		{
			id: "3",
			firstName: "Russ",
			lastName: "Rudd",
			userName: "CrispyRuss",
			url: "/rudd.jpg",
			domain: "Singer",
			crowns: 125,
			description:
				"A Full stack software engineer with hands on expertise in Javascript",
			subDescription: "Tech Lead at Google",
			totalAnswered: "200",
			totalAsked: "73",
			totalCrowns: "267",
			interestedTopics: [
				"Software Engineer",
				"Programming",
				"Tech",
				"JavaScript",
			],
		},
		{
			id: "4",
			firstName: "Lavar",
			lastName: "Ball",
			userName: "PaulLog_123",
			url: "/robert-downey-jr.jpeg",
			domain: "Influencer",
			crowns: 223,
			description:
				"A Full stack software engineer with hands on expertise in Javascript",
			subDescription: "Tech Lead at Google",
			totalAnswered: "200",
			totalAsked: "73",
			totalCrowns: "267",
			interestedTopics: [
				"Software Engineer",
				"Programming",
				"Tech",
				"JavaScript",
			],
		},
		{
			id: "5",
			firstName: "James",
			lastName: "Morgan",
			userName: "JamieeeTac",
			url: "/userTwo.jpg",
			domain: "Product Owner",
			crowns: 433,
			description:
				"A Full stack software engineer with hands on expertise in Javascript",
			subDescription: "Tech Lead at Google",
			totalAnswered: "200",
			totalAsked: "73",
			totalCrowns: "267",
			interestedTopics: [
				"Software Engineer",
				"Programming",
				"Tech",
				"JavaScript",
			],
		},
		{
			id: "6",
			firstName: "Ellen",
			lastName: "Roveen",
			userName: "Ellen_Rove",
			url: "/userOne.jpg",
			domain: "SongWritter",
			crowns: 1323,
			description:
				"A Full stack software engineer with hands on expertise in Javascript",
			subDescription: "Tech Lead at Google",
			totalAnswered: "200",
			totalAsked: "73",
			totalCrowns: "267",
			interestedTopics: [
				"Software Engineer",
				"Programming",
				"Tech",
				"JavaScript",
			],
		},

		{
			id: "7",
			userName: "@fashionIconCosta",
			firstName: "Alex",
			lastName: "Costa",
			url: "/costa.jpg",
			crowns: 765,

			domain: "Fashion Influencer",
			description:
				"Men's Fashion | Grooming | Lifestyle Founder @forteseries @apricusskincare @aetosapparel",
			subDescription: "3.7M YouTube | 1.4M TikTok",
			totalAnswered: "200",
			totalAsked: "73",
			totalCrowns: "267",
			interestedTopics: ["Lifestyle", "Grooming", "Men's Fashion"],
		},
	];
	return (
		<>
			<div
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					display: "flex",
					width: "100%",
					// height: "auto",
				}}
			>
				<div
					style={{
						width: "100%",
						backgroundColor: "#e5e5e5",
						flexDirection: "row",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						paddingLeft: 20,
						paddingRight: 10,
						paddingTop: 12,
						paddingBottom: 12,
						borderRadius: 24,
						// border: "2px solid gray",
					}}
				>
					<BiSearchAlt2 size={25} />
					<input
						type={"text"}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
						style={{
							paddingLeft: 10,
							width: "100%",
							outline: "none",
							border: 0,
							backgroundColor: "transparent",
						}}
					/>
				</div>
				<span
					style={{
						marginLeft: 5,
						height: 45,
						width: 45,
						borderRadius: 6,
						alignItems: "center",
						justifyContent: "center",
						display: "flex",
						cursor: "pointer",
						// boxShadow:
						// 	"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
					}}
					onClick={() => {
						setIsModalOpen(true);
					}}
				>
					<IoIosOptions size={30} />
				</span>
			</div>
			<OptionsModal
				{...{ isModalOpen, setIsModalOpen, filterBy, setFilterBy }}
			/>
			<div
				style={{
					alignItems: "center",
					border: "1px solid #fafafa",
					paddingTop: 10,
					paddingBottom: 10,
					display: "flex",
					flexDirection: "row",
					width: "100%",
				}}
			>
				<span style={{ width: 290, fontSize: 16, fontWeight: "bold" }}>
					User
				</span>
				<span style={{ width: 190, fontSize: 16, fontWeight: "bold" }}>
					Domain
				</span>

				<span style={{ width: 120, fontSize: 16, fontWeight: "bold" }}>
					Crowns
				</span>
			</div>
			{listOfPeople
				.filter((user) =>
					filterBy === "Users"
						? user.firstName.includes(search.trim()) ||
						  user.lastName.includes(search.trim()) ||
						  user.userName.includes(search.trim())
						: user.domain.includes(search.trim())
				)
				.map((item, index) => {
					return (
						<Link href={"/profile/" + item.id}>
							<div
								style={{
									alignItems: "center",
									display: "flex",
									flexDirection: "row",

									border: "1px solid #fafafa",
									paddingTop: 5,
									paddingBottom: 5,
									cursor: "pointer",
								}}
								key={index}
							>
								<div
									style={{
										alignItems: "center",
										// justifyContent: "space-between",
										display: "flex",
										flexDirection: "row",
										width: 290,
									}}
								>
									<img
										src={item.url}
										style={{ width: 50, height: 50, borderRadius: "50%" }}
									/>
									<span style={{ paddingLeft: 10 }}>
										{item.firstName} {item.lastName}
									</span>
								</div>
								<span style={{ width: 190 }}>{item.domain}</span>

								<span
									style={{
										width: 120,
										paddingLeft: 2,
										paddingRight: 10,
										alignItems: "flex-end",
										display: "flex",
									}}
								>
									{" "}
									{item.crowns}
									&nbsp;
									<FaCrown style={{ fontSize: 22 }} />
								</span>
							</div>
						</Link>
					);
				})}
		</>
	);
}

const OptionsModal = ({
	isModalOpen,
	setIsModalOpen,
	filterBy,
	setFilterBy,
}: {
	isModalOpen: boolean;
	setIsModalOpen: Function;
	filterBy: string;
	setFilterBy: Function;
}) => {
	return (
		<div>
			<Modal
				title="Show results by"
				open={isModalOpen}
				closable
				onCancel={() => {
					setIsModalOpen(false);
				}}
				footer={null}
				style={{ width: 200 }}
				className="filterModal"
			>
				<span
					style={{
						cursor: "pointer",
						paddingBottom: 10,
						// border: "1px solid #fafafa",
						alignItems: "center",
						flexDirection: "row",
						display: "flex",
					}}
					onClick={() => {
						setFilterBy("Users");
					}}
				>
					{filterBy === "Users" ? (
						<ImCheckboxChecked size={20} color={"#1890ff"} />
					) : (
						<ImCheckboxUnchecked size={20} color={"#2a2a2a"} />
					)}
					<span style={{ fontSize: 15, letterSpacing: 0.25, paddingLeft: 5 }}>
						Users{" "}
						<span style={{ fontSize: 11, color: "gray" }}>
							(Search would match their names and usernames)
						</span>
					</span>
				</span>
				<span
					style={{
						cursor: "pointer",
						paddingBottom: 10,
						// border: "1px solid #fafafa",
						alignItems: "center",
						flexDirection: "row",
						display: "flex",
					}}
					onClick={() => {
						setFilterBy("Domains");
					}}
				>
					{filterBy === "Domains" ? (
						<ImCheckboxChecked size={20} color={"#1890ff"} />
					) : (
						<ImCheckboxUnchecked size={20} color={"#2a2a2a"} />
					)}
					<span style={{ fontSize: 15, letterSpacing: 0.25, paddingLeft: 5 }}>
						Domains
						<span style={{ fontSize: 11, color: "gray" }}>
							{" "}
							(Search would match the domains of people)
						</span>
					</span>
				</span>
				<div
					style={{
						alignItems: "center",
						flexDirection: "row",
						display: "flex",
						// justifyContent: "center",
						paddingTop: 20,
						paddingBottom: 10,
					}}
				>
					<span
						style={{
							height: 35,
							width: 90,
							backgroundColor: "#1890ff",
							color: "#fff",
							borderRadius: 6,
							alignItems: "center",
							justifyContent: "center",
							display: "flex",
							cursor: "pointer",
						}}
						onClick={() => {
							setIsModalOpen(false);
						}}
					>
						Submit
					</span>
					<span
						style={{
							height: 35,
							width: 90,
							backgroundColor: "#fff",
							border: "1px solid #1890ff",
							borderRadius: 6,
							alignItems: "center",
							justifyContent: "center",
							display: "flex",
							marginLeft: 7,
							cursor: "pointer",
						}}
						onClick={() => {
							setIsModalOpen(false);
						}}
					>
						Cancel
					</span>
				</div>
			</Modal>
		</div>
	);
};
