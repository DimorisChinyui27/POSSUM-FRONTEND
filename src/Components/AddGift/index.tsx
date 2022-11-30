import React from "react";
import { Modal, Spin } from "antd";
import { RiCoinsFill } from "react-icons/ri";
const AddGift = ({
	gift,
	setGift,
	open,
	addGiftToQuestion,
}: {
	open: boolean;
	gift: number;
	setGift: Function;
	addGiftToQuestion: Function;
}) => {
	const [confirmLoading, setConfirmLoading] = React.useState(false);
	// const [tipVal, setTipVal] = React.useState(2);
	const [error, setError] = React.useState(false);
	const [focused, setFocused] = React.useState(false);

	const handleOk = () => {
		setConfirmLoading(true);

		setTimeout(() => {
			addGiftToQuestion(false, "completed");
			console.log(gift);
			setConfirmLoading(false);
		}, 1000);
	};

	const handleCancel = () => {
		console.log("Clicked cancel button");
		addGiftToQuestion(false, "incomplete");
	};

	return (
		<Modal
			title="Add Gift"
			open={open}
			closable
			destroyOnClose
			footer={null}
			onCancel={handleCancel}
			style={{ maxWidth: 300, borderRadius: 8 }}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					flexDirection: "row",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "flex-start",
						justifyContent: "space-between",
						flexDirection: "column",
					}}
				>
					<input
						type={"number"}
						onChange={(e) => {
							try {
								let val = parseFloat(e.target.value.toString());
								if (val < 2) {
									setError(true);
								} else {
									setGift(val);
									setError(false);
								}
							} catch (error) {
								console.log(error);
							}
						}}
						onFocus={() => {
							setFocused(true);
						}}
						onBlur={() => {
							setFocused(false);
						}}
						style={{
							color: "gray",
							fontSize: 17,
							height: 35,
							width: "100%",
							//maxWidth: 200,
							fontWeight: "normal",
							border: "1px solid #dadada",
							borderRadius: 8,
							marginBottom: 2,
							outline: "none",
						}}
					/>
					{focused && <span style={{ color: "#000" }}></span>}
					{error && <span style={{ color: "red" }}>Minimum gift is 2$</span>}
				</div>
				{confirmLoading ? (
					<Spin size="small" />
				) : (
					<button
						type="button"
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontSize: 16,
							fontWeight: "bold",
							border: "1px solid #de41f5",
							borderRadius: 8,
							color: "#66d1de",
							textAlign: "center",
							padding: "5px 10px 5px 10px",
							backgroundColor: "#fff",
							boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
							cursor: "pointer",
							width: "100%",
							maxWidth: 110,
							marginLeft: 5,
						}}
						onClick={handleOk}
					>
						<RiCoinsFill style={{ color: "golden" }} /> Add Gift
					</button>
				)}
			</div>
		</Modal>
	);
};

export default AddGift;
