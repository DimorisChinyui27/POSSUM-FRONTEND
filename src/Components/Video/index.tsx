// import React from "react";
// // import { UploadOutlined } from "@ant-design/icons";
// import { MdOutlineOndemandVideo } from "react-icons/md";
// import type { UploadProps } from "antd";
// import { Button, Upload } from "antd";

// const props: UploadProps = {
// 	action: "//jsonplaceholder.typicode.com/posts/",
// 	listType: "picture",
// 	// previewFile(file) {
// 	// 	console.log("Your upload file:", file);
// 	// 	// Your process logic. Here we just mock to the same file
// 	// 	return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
// 	// 		method: "POST",
// 	// 		body: file,
// 	// 	})
// 	// 		.then((res) => res.json())
// 	// 		.then(({ thumbnail }) => thumbnail);
// 	// },
// };

// const Video: React.FC = () => (
// 	<Upload {...props}>
// 		<div
// 			style={{
// 				display: "flex",
// 				flexDirection: "column",
// 				alignItems: "center",
// 				cursor: "pointer",

// 				// width: 80,
// 				border: "1px solid gray",
// 				borderRadius: 4,
// 				paddingTop: 2,
// 				paddingBottom: 2,
// 				paddingLeft: 4,
// 				paddingRight: 4,
// 			}}
// 		>
// 			{/* <Button icon={}>&nbsp;</Button> */}
// 			<MdOutlineOndemandVideo size={22} />
// 			{/* <span style={{ fontSize: 9 }}>Videos</span> */}
// 		</div>
// 	</Upload>
// );
// export default Video;

import React from "react";
import Dropzone from "react-dropzone";
// import { AiOutlinePicture } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";

const Video = ({ setFileList }: { setFileList: Function }) => {
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
						<MdOutlineOndemandVideo size={22.5} />{" "}
						<input {...getInputProps()} /> &nbsp;
						{/* <span>Images</span> */}
					</div>
				</section>
			)}
		</Dropzone>
	);
};

export default Video;
