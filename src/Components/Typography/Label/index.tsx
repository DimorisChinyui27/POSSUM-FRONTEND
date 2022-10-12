import { FC } from "react";
import styles from "./index.module.css";
export const Label: FC<{ title: string; direction?: string }> = ({
	title,
	direction,
}) => {
	//const secondClass = direction === "right" ? styles.right : styles.left;
	return (
		<span className={styles.Label} style={{ fontWeight: 500 }}>
			{title}
		</span>
	);
};
