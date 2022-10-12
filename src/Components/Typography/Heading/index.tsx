import { FC } from "react";
import styles from "./index.module.css";

export const Heading: FC<{ title: string; classType: string }> = ({
	title,
	classType,
}) => {
	return <p className={styles.heading + " " + styles.active}>{title}</p>;
};
