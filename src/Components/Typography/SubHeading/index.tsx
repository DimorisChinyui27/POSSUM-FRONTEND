import { FC } from "react";
import styles from "./index.module.css";
export const SubHeading: FC<{ title: string }> = ({ title }) => {
	return <span className={styles.subHeading}>{title}</span>;
};
