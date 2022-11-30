import React from "react";
import Dropzone from "react-dropzone";
import { AiOutlinePicture } from "react-icons/ai";

const ImageUpload = ({ setFileList }: { setFileList: Function }) => {
	return (
		<Dropzone
			onDrop={(acceptedFiles) => {
				setFileList(acceptedFiles);
			}}
		>
			{({ getRootProps, getInputProps }) => (
				<section>
					<div
						{...getRootProps()}
						style={{
							display: "flex",

							alignItems: "center",
							justifyContent: "center",
							cursor: "pointer",
							// border: "1px solid gray",
							// paddingTop: 3,
							// paddingBottom: 3,
							// paddingLeft: 5,
							// paddingRight: 5,

							border: "1px solid gray",
							borderRadius: 4,
							paddingTop: 2,
							paddingBottom: 2,
							paddingLeft: 4,
							paddingRight: 4,
						}}
					>
						<AiOutlinePicture size={22.5} /> <input {...getInputProps()} />{" "}
						&nbsp;
						{/* <span>Images</span> */}
					</div>
				</section>
			)}
		</Dropzone>
	);
};

export default ImageUpload;
