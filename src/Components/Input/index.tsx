import { Input, Space } from "antd";
import { Path, UseFormRegister } from "react-hook-form";
import { User, prefix } from "src/Interfaces";
import { Typo } from "..";
import styles from "./index.module.css";
type InputProps = {
	label: Path<Pick<User, "Email" | "Password">>;
	register: UseFormRegister<Pick<User, "Email" | "Password">>;
	required: boolean;
	type: string;
	prefix: prefix | null;

	placeholder: string;
};

export const DInput = ({
	label,
	placeholder,
	register,
	required,
	type,
	prefix,
}: InputProps) => {
	return (
		<Space direction="vertical" style={{ width: "100%" }}>
			<Typo.Label title={label} />

			{type === "password" ? (
				<Input.Password
					placeholder={placeholder}
					prefix={prefix ? <prefix.IconName /> : null}
					{...register(label, { required })}
					className={styles.inputClass}
				/>
			) : (
				<Input
					placeholder={placeholder}
					prefix={prefix ? <prefix.IconName /> : null}
					{...register(label, { required })}
					className={styles.inputClass}
				/>
			)}
		</Space>
	);
};
