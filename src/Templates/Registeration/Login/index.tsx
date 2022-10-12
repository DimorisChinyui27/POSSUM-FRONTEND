import { Button, Typo } from "../../../Components";
import { Row, Col, Space, Input, Popover } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";
import { User } from "src/Interfaces";
import { MdAlternateEmail, MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";

import styles from "./index.module.css";
import { UserOutlined, LockOutlined, UnlockOutlined } from "@ant-design/icons";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import IntroTemplate from "../Intro";
// import { LoginInput } from "src/Blends/LoginInput";
const LoginTemplate = () => {
	return (
		<Row
			className={styles.main}
			// style={{
			// 	display: "flex",
			// 	alignItems: "center",
			// 	justifyContent: "center",
			// }}
		>
			<Col xs={22} sm={22} md={16} lg={12} xl={12}>
				<LoginFunc />
			</Col>
		</Row>
	);
};
export default LoginTemplate;
function LoginFunc() {
	const [passVisible, setPassVisible] = React.useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Pick<User, "Email" | "Password">>();
	const onSubmit: SubmitHandler<Pick<User, "Email" | "Password">> = (data) =>
		console.log(data);
	const changePassVisible = () => setPassVisible(!passVisible);
	return (
		<Space
			direction="vertical"
			style={{
				width: "100%",
				paddingTop: 50,
				paddingBottom: 50,
				maxWidth: "100%",
				alignItems: "center",
				justifyContent: "center",
				//border: "1px solid red",
				backgroundColor: "#fff",
				borderRadius: 6,
				boxShadow:
					"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
			}}
		>
			<Typo.Heading title="Login" classType="active" />
			<br />

			<form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
				<Space
					direction="vertical"
					style={{ width: "100%", paddingBottom: 100 }}
				>
					<Typo.Label title="Email" direction="left" />
					<Input
						placeholder={"Type your username"}
						prefix={<UserOutlined style={{ marginRight: 5 }} />}
						{...register("Email", { required: true })}
						className={styles.inputClass}
						size="large"
						style={{ width: "450px" }}
					/>
					{errors.Email && (
						<span className={styles.mandatory}>
							email or phone number is required
						</span>
					)}
					<div className={styles.topMargin}></div>
					<Typo.Label title="Password" direction="left" />
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
					{errors.Password && (
						<span className={styles.mandatory}>
							Can't let you in without a pass
						</span>
					)}
					<div className={styles.alignRight} style={{ cursor: "pointer" }}>
						<Link
							href={"/"}
							className={styles.link}
							//style={{ cursor: "pointer" }}
						>
							<Typo.Label title="Forgot Password?" direction="right" />
						</Link>
					</div>
					<div className={styles.topMargin}></div>
					<Popover content="Let the games begin :)" title="LLLLoggg">
						<Button
							type="submit"
							btnType="primary"
							title="LOGIN"
							//onClick={undefined}
						/>
					</Popover>
					<div className={styles.topMargin}></div>
					<div className={styles.alignCenter}>
						<Typo.Label title="or " direction="right" />
						<span style={{ fontWeight: "bold", marginLeft: 5, marginRight: 5 }}>
							<Popover
								title="“The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.”"
								content="― Confucius"
							>
								Signup
							</Popover>
						</span>
						<Typo.Label title=" using" />
					</div>
					<div className={styles.alignCenter}>
						<Link
							href={"/signup"}
							className={styles.link}
							style={{ cursor: "pointer" }}
						>
							<Popover content="Twitter">
								<AiFillTwitterCircle
									style={{
										fontSize: 30,
										color: "#4aa0e9",
										//cursor: "pointer",
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
						<Link
							href={"/signup"}
							className={styles.link}
							style={{ cursor: "pointer" }}
						>
							<Popover content="Email">
								<MdAlternateEmail
									style={{
										color: "#d75344",
										fontSize: 32,
										//cursor: "pointer",
									}}
								/>
							</Popover>
						</Link>
					</div>
				</Space>
			</form>
		</Space>
	);
}
