import * as Yup from "yup";

export const formSchema = Yup.object().shape({
	Password: Yup.string()
		.required("Password is required")
		.min(4, "Password length should be at least 4 characters")
		.max(12, "Password cannot exceed more than 12 characters"),
	ConfirmPassword: Yup.string()
		.required("Confirm Password is required")
		.min(4, "Password length should be at least 4 characters")
		.max(12, "Password cannot exceed more than 12 characters")
		.oneOf([Yup.ref("password")], "Passwords do not match"),
});