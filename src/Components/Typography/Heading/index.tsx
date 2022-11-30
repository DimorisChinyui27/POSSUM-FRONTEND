import { FC } from "react";
import styles from "./index.module.css";

export const Heading: FC<{ title: string; classType: string }> = ({
	title,
}) => {
	return <p className={styles.heading + " " + styles.active}>{title}</p>;
};
