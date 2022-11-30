import { Button, Typo, Possum } from "../../../Components";
import { Row, Col, Space, Input, Popover } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";
import { User } from "src/Interfaces";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import { UserOutlined, LockOutlined, UnlockOutlined } from "@ant-design/icons";
import React from "react";
import Link from "next/link";

const LoginTemplate = () => {
	return (
		<Row className={styles.main}>
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
				<LoginFunc />
			</Col>
		</Row>
	);
};
export default LoginTemplate;
function LoginFunc() {
	const [passVisible, setPassVisible] = React.useState<boolean>(false);
	const router = useRouter();
	// const {
	// 	register,
	// 	handleSubmit,
	// 	formState: { errors, },
	// } = useForm<Pick<User, "Email" | "Password">>();
	// const onSubmit: SubmitHandler<Pick<User, "Email" | "Password">> = (data) => {
	// 	console.log("data", data);
	// 	if (data.Email && data.Password) {
	// 		// router.push("/onboarding");
	// 	}
	// };
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const [emailError, setEmailError] = React.useState(false);
	const [passwordError, setPasswordError] = React.useState(false);

	const changePassVisible = () => setPassVisible(!passVisible);
	const checkValues = () => {
		setEmailError(!email);
		setPasswordError(!password);
		if (!email || !password) {
			return;
		} else {
			router.push("/onboarding");
		}
	};
	return (
		<Space
			direction="vertical"
			style={{
				width: "100%",
				paddingTop: 10,
				paddingBottom: 50,
				maxWidth: 450,
				alignItems: "center",
				justifyContent: "center",
				//border: "1px solid red",
				backgroundColor: "#fff",
				borderRadius: 6,
				boxShadow:
					"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
			}}
		>
			<Possum.PossumLogo />
			<Typo.Heading title="Login" classType="active" />
			<br />

			<form
				onSubmit={(e) => {
					e.preventDefault();
					checkValues();
				}}
				style={{ width: "100%" }}
			>
				<Space
					direction="vertical"
					style={{ width: "100%", paddingBottom: 40 }}
				>
					<Typo.Label title="Email" direction="left" />
					<Input
						placeholder={"Type your username"}
						prefix={<UserOutlined style={{ marginRight: 5 }} />}
						// {...register("Email", { required: true })}
						type="email"
						className={styles.inputClass}
						size="large"
						style={{ width: "450px" }}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					{!email && emailError && (
						<span className={styles.mandatory}>
							Email or Phone number is required
						</span>
					)}
					<div className={styles.topMargin}></div>
					<Typo.Label title="Password" direction="left" />
					<Input
						placeholder={"Type your Password"}
						type={passVisible ? "password" : "text"}
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
						// {...register("Password", { required: true })}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						className={styles.inputClass}
						size="large"
						style={{ width: "450px" }}
					/>
					{!password && passwordError && (
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
						{/* <Link
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
						</Link> */}
					</div>
				</Space>
			</form>
			<Possum.PossumText />
		</Space>
	);
}
