import { FC } from "react";
import styles from "./index.module.css";
export const Desc: FC<{ content: string }> = ({ content }) => {
	return <span className={styles.description}>{content}</span>;
};
