import { Button, Possum, Typo } from "../../../Components";
import { Row, Col, Space, Input, Popover, Tooltip } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";
import { User } from "src/Interfaces";
import { MdAlternateEmail, MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

import styles from "./index.module.css";
import { UserOutlined, LockOutlined, UnlockOutlined } from "@ant-design/icons";
import React from "react";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
//import Image from "next/image";
// import IntroTemplate from "../Intro";
// import { LoginInput } from "src/Blends/LoginInput";
const SignupTemplate = () => {
	return (
		<Row
			className={styles.main}
			// style={{
			// 	display: "flex",
			// 	alignItems: "center",
			// 	justifyContent: "center",
			// }}
		>
			<Col
				xs={22}
				sm={22}
				md={24}
				lg={24}
				xl={24}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<SignupFunc />
			</Col>
		</Row>
	);
};
export default SignupTemplate;
function SignupFunc() {
	const [passVisible, setPassVisible] = React.useState<boolean>(false);
	const [confirmPassVisible, setConfirmPassVisible] =
		React.useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Pick<User, "Email" | "Password"> & { ConfirmPassword: string }>();
	const onSubmit: SubmitHandler<
		Pick<User, "Email" | "Password"> & { ConfirmPassword: string }
	> = (data) => console.log(data);
	const changePassVisible = () => setPassVisible(!passVisible);
	const changeConfirmPass = () => setConfirmPassVisible(!confirmPassVisible);

	return (
		<Space
			direction="vertical"
			style={{
				width: "100%",
				paddingTop: 50,
				paddingBottom: 50,
				// maxWidth: "100%",
				alignItems: "center",
				justifyContent: "center",
				//border: "1px solid red",
				maxWidth: 450,

				backgroundColor: "#fff",
				borderRadius: 6,
				boxShadow:
					"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
			}}
		>
			<Possum.PossumLogo />
			<Typo.Heading title="Register" classType="active" />
			<br />

			<form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
				<Space
					direction="vertical"
					style={{ width: "100%", paddingBottom: 100 }}
				>
					<Typo.Label title="Email" direction="left" />
					<Input
						placeholder={"Type your email"}
						prefix={<UserOutlined style={{ marginRight: 5 }} />}
						{...register("Email", { required: true })}
						className={styles.inputClass}
						size="large"
						style={{ width: "450px" }}
					/>
					{errors.Email && (
						<span className={styles.mandatory}>
							Email or Phone number is required
						</span>
					)}
					<div className={styles.topMargin}></div>
					<Typo.Label title="Password" direction="left" />
					<Tooltip
						trigger={["focus"]}
						title={"Don't make it to hard to remember"}
						placement="topLeft"
						overlayClassName="numeric-input"
					>
						<Input
							placeholder={"Type your Password"}
							type={passVisible ? "password" : "email"}
							prefix={
								passVisible ? (
									<LockOutlined
										className={styles.iconStyles}
										onClick={changePassVisible}
									/>
								) : (
									<UnlockOutlined
										className={styles.iconStyles}
										onClick={changePassVisible}
									/>
								)
							}
							{...register("Password", { required: true })}
							className={styles.inputClass}
							size="large"
							style={{ width: "450px" }}
						/>
					</Tooltip>
					{errors.Password && (
						<span className={styles.mandatory}>Password is required</span>
					)}
					<div className={styles.topMargin}></div>
					<Typo.Label title="Confirm Password" direction="left" />
					<Input
						placeholder={"Re-type your Password"}
						type={confirmPassVisible ? "password" : "email"}
						prefix={
							confirmPassVisible ? (
								<LockOutlined
									className={styles.iconStyles}
									onClick={changeConfirmPass}
								/>
							) : (
								<UnlockOutlined
									className={styles.iconStyles}
									onClick={changeConfirmPass}
								/>
							)
						}
						{...register("ConfirmPassword", { required: true })}
						className={styles.inputClass}
						size="large"
						style={{ width: "450px" }}
					/>
					{errors.Password && (
						<span className={styles.mandatory}>
							Confirm Password is required
						</span>
					)}
					{/* <div className={styles.alignRight}>
						<Link
							href={"/"}
							className={styles.link}
							style={{ cursor: "pointer" }}
						>
							<Typo.Label title="Forgot Password?" direction="right" />
						</Link>
					</div> */}
					<div className={styles.topMargin}></div>
					<Button
						type="submit"
						btnType="primary"
						title="SIGNUP"
						//onClick={undefined}
					/>{" "}
					<div className={styles.topMargin}></div>
					<div className={styles.alignCenter}>
						<Typo.Label title="Already have an account?" direction="right" />
						<Link href="/login" className={styles.link}>
							<span
								style={{
									marginLeft: 10,
									letterSpacing: 1,
									//								textDecoration: "underline",
									cursor: "pointer",
									paddingBottom: 1,
									borderTop: 0,
									borderRight: 0,
									borderLeft: 0,
									borderBottom: "1px solid black",
								}}
							>
								{" "}
								Login
							</span>
						</Link>
					</div>
					<div className={styles.alignCenter}>
						<Link
							href={"/signup"}
							className={styles.link}
							style={{ cursor: "pointer" }}
						>
							<Popover content="Instagram">
								<AiFillInstagram
									style={{
										fontSize: 30,
										color: "#4aa0e9",
										cursor: "pointer",
									}}
								/>
							</Popover>
						</Link>
						<Link
							href={"/signup"}
							className={styles.link}
							style={{ cursor: "pointer" }}
						>
							<Popover content="Gmail">
								<SiGmail
									style={{
										fontSize: 25,
										marginLeft: 5,

										color: "red",
										cursor: "pointer",
									}}
								/>
							</Popover>
						</Link>
						<Link
							href={"/signup"}
							className={styles.link}
							style={{ cursor: "pointer" }}
						>
							<Popover content="Facebook">
								<MdFacebook
									style={{
										fontSize: 32,
										color: "#3c5a99",
										marginLeft: 5,
										marginRight: 5,
										//cursor: "pointer",
									}}
								/>
							</Popover>
						</Link>
					</div>
				</Space>
			</form>
			<Possum.PossumText />
		</Space>
	);
}
