import Image from "next/image";
import styles from "./index.module.css";
export const PossumLogo = () => {
	return (
		<div className={styles.logoDiv}>
			<Image
				src={"/logo.png"}
				className={styles.imgStyle}
				width={150}
				height={150}
			/>
		</div>
	);
};
