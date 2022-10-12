import { Steps } from "antd";
import React from "react";
import { StepsProps, steps } from "../../Interfaces";
const { Step } = Steps;

export const StepsCust = ({
	activeStep,
	listOfSteps,
	changeStep,
}: StepsProps) => (
	<Steps
		direction="vertical"
		current={activeStep}
		onChange={(e) => {
			console.log(e);
			changeStep(e);
		}}
	>
		{listOfSteps.map((item: any) => {
			return (
				<Step
					key={item.title}
					title={item.title}
					description={item.description}
					style={{ paddingBottom: 40 }}
				/>
			);
		})}
	</Steps>
);
