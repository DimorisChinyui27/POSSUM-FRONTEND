import { Popover } from "antd";
import { FC, MouseEventHandler } from "react";
import styles from "./index.module.css";
type buttonType = {
	type: string;
	btnType: string;
	title: string;
	onClick?: MouseEventHandler<HTMLInputElement> | undefined;
};
export const Button: FC<buttonType> = ({ type, btnType, title, onClick }) => {
	return (
		<input
			className={`${styles.primary}`}
			type={type}
			title={title}
			value={title}
		/>
	);
};
