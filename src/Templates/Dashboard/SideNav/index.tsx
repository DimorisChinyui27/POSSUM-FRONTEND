// import { HomeFilled } from "@ant-design/icons";
import React from "react";
import Wallet from "../Wallet";
import Image from "next/image";
// import { Possum } from "src/Components";
import { MdOutlineTopic } from "react-icons/md";
import { BsCardList } from "react-icons/bs";
import { AiOutlineNotification } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import styles from "./index.module.css";
import TopicModal from "../TopicsModal";
const SideNav = () => {
	const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
	const [isTopicModalOpen, setIsTopicModalOpen] =
		React.useState<boolean>(false);

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<div
			style={{
				flexDirection: "column",
				display: "flex",
				width: "100%",
				paddingTop: 30,
				paddingLeft: 40,
				paddingRight: 40,
				alignItems: "center",
			}}
		>
			<div className={styles.navOptDiv + " " + styles.navTextNonActive}>
				<span className={styles.navTextActive}>Home</span>
				<Image src={"/logo.png"} width={30} height={30} objectFit="contain" />
			</div>
			{/* 
			<div 				className={styles.navOptDiv + " " + styles.navTextNonActive}>
				<span className={styles.navTextNonActive}>Explore</span>
				<MdOutlineTravelExplore size={22} className={styles.navIcon} />
			</div> */}
			<Wallet
				isModalOpen={isModalOpen}
				handleOk={handleOk}
				handleCancel={handleCancel}
			/>

			<TopicModal {...{ isTopicModalOpen, setIsTopicModalOpen }} />
			<div className={styles.navOptDiv + " " + styles.navTextNonActive}>
				<span className={styles.navTextNonActive}>Notifications</span>
				<AiOutlineNotification size={22} className={styles.navIcon} />
			</div>

			<div
				className={styles.navOptDiv + " " + styles.navTextNonActive}
				onClick={() => {
					setIsTopicModalOpen(true);
				}}
			>
				<span className={styles.navTextNonActive}>Add Topic</span>
				<MdOutlineTopic size={22} className={styles.navIcon} />
			</div>

			<div className={styles.navOptDiv + " " + styles.navTextNonActive}>
				<span className={styles.navTextNonActive}>Recent Questions</span>
				<BsCardList size={22} className={styles.navIcon} />
			</div>

			<div
				className={styles.navOptDiv + " " + styles.navTextNonActive}
				onClick={() => {
					setIsModalOpen(true);
				}}
			>
				<span className={styles.navTextNonActive}>Add Payment Option</span>
				<RiSecurePaymentFill size={22} className={styles.navIcon} />
			</div>

			<div className={styles.navOptDiv + " " + styles.navTextNonActive}>
				<span className={styles.navTextNonActive}>Edit Profile</span>
				<FaUserEdit size={22} className={styles.navIcon} />
			</div>
			<span
				style={{
					marginTop: 30,
					width: 230,
					height: 45,
					textAlign: "center",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					borderRadius: 30,
					cursor: "pointer",
					fontSize: 16.6,
					fontWeight: "bold",
					color: "#fff",
					backgroundImage: "linear-gradient(to bottom left, #e839f6, #61d8de)",
				}}
			>
				Post Question
			</span>
		</div>
	);
};
export default SideNav;
